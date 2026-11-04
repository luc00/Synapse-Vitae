import React, { useState, useEffect } from 'react';
import { SUPPLEMENTS_DATABASE } from './data/supplements';
import { Supplement } from './types/supplement';
import { ReminderState, ReminderItem } from './types/reminder';
import { loadReminderState, saveReminderState } from './utils/reminderStorage';
import { playReminderChime } from './utils/audioReminder';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CatalogView } from './components/CatalogView';
import { StackChecker } from './components/StackChecker';
import { CuratedStacksView } from './components/CuratedStacksView';
import { LiverGuideView } from './components/LiverGuideView';
import { ReminderView } from './components/ReminderView';
import { SupplementDetailModal } from './components/SupplementDetailModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<'catalogo' | 'verificatore' | 'stacks' | 'fegato' | 'promemoria'>('catalogo');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [selectedStackIds, setSelectedStackIds] = useState<string[]>(['vitamina-d3', 'vitamina-k2', 'magnesio-bisglicinato']);
  const [activeDetailSupplement, setActiveDetailSupplement] = useState<Supplement | null>(null);
  const [reminderState, setReminderState] = useState<ReminderState>(loadReminderState);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync dark mode class on documentElement
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Persist reminder state
  useEffect(() => {
    saveReminderState(reminderState);
  }, [reminderState]);

  // Background reminder scheduler checker (checks every 30s)
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentHours = String(now.getHours()).padStart(2, '0');
      const currentMinutes = String(now.getMinutes()).padStart(2, '0');
      const currentTime = `${currentHours}:${currentMinutes}`;

      reminderState.slots.forEach(slot => {
        if (slot.enabled && slot.timeString === currentTime && slot.items.some(i => !i.takenToday)) {
          // Trigger reminder
          if (reminderState.soundEnabled) {
            playReminderChime();
          }
          if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
            new Notification(`Promemoria: ${slot.label}`, {
              body: `È il momento di assumere i tuoi integratori: ${slot.items.map(i => i.supplementName).join(', ')}`,
              icon: '/favicon.ico'
            });
          }
        }
      });
    }, 30000);

    return () => clearInterval(interval);
  }, [reminderState]);

  // Helper to show brief toast
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Toggle stack id
  const handleToggleStack = (id: string) => {
    setSelectedStackIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Add a supplement to reminder schedule
  const handleAddToReminder = (supplement: Supplement) => {
    const rawSlot = String(supplement.timing.idealTimes[0] || 'colazione_pasti');
    const targetSlotId = rawSlot === 'sera' ? 'cena' : rawSlot === 'notte' ? 'prima_dormire' : rawSlot;
    const todayStr = new Date().toISOString().split('T')[0];

    const newItem: ReminderItem = {
      id: `rem-${supplement.id}-${Date.now()}`,
      supplementId: supplement.id,
      supplementName: supplement.name,
      dosage: supplement.recommendedDosage,
      instructions: supplement.timing.instructions,
      takenToday: false,
      cycleStartDate: todayStr,
      requiresCycle: supplement.liverSafety.cycleProtocol.required,
      cycleWeeks: supplement.liverSafety.cycleProtocol.recommendedCycleWeeks,
      breakWeeks: supplement.liverSafety.cycleProtocol.recommendedBreakWeeks
    };

    setReminderState(prev => {
      let slotFound = false;
      const nextSlots = prev.slots.map(s => {
        if (s.slotId === targetSlotId) {
          slotFound = true;
          // Avoid duplicate supplement in same slot
          if (s.items.some(item => item.supplementId === supplement.id)) {
            return s;
          }
          return { ...s, items: [...s.items, newItem] };
        }
        return s;
      });

      // If slot not present, add to colazione
      if (!slotFound && nextSlots.length > 0) {
        nextSlots[0].items.push(newItem);
      }

      return { ...prev, slots: nextSlots };
    });

    showToast(`"${supplement.name}" aggiunto al tuo Promemoria!`);
  };

  // Bulk add supplements to reminder
  const handleApplySupplementsToReminder = (supplements: Supplement[]) => {
    supplements.forEach(sup => handleAddToReminder(sup));
    showToast(`${supplements.length} integratori programmati nel tuo Promemoria!`);
    setActiveTab('promemoria');
  };

  // Load preset in checker
  const handleLoadStackInChecker = (ids: string[]) => {
    setSelectedStackIds(ids);
    setActiveTab('verificatore');
  };

  // Open detail by supplement name
  const handleOpenDetailByName = (name: string) => {
    const found = SUPPLEMENTS_DATABASE.find(s => s.name.toLowerCase().includes(name.toLowerCase()));
    if (found) {
      setActiveDetailSupplement(found);
    }
  };

  const totalReminderItems = reminderState.slots.flatMap(s => s.items).length;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* Global Toast */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 p-4 rounded-xl bg-teal-800 text-white shadow-xl flex items-center gap-2.5 text-xs font-semibold animate-fade-in border border-teal-600">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar Contract (3 Zones) */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        reminderCount={totalReminderItems}
      />

      {/* Hero Section displayed on catalog tab */}
      {activeTab === 'catalogo' && (
        <HeroSection
          onOpenChecker={() => setActiveTab('verificatore')}
          onOpenLiverGuide={() => setActiveTab('fegato')}
          onOpenReminder={() => setActiveTab('promemoria')}
          totalSupplements={SUPPLEMENTS_DATABASE.length}
        />
      )}

      {/* Main Workspace Stage */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {activeTab === 'catalogo' && (
          <CatalogView
            supplements={SUPPLEMENTS_DATABASE}
            selectedStackIds={selectedStackIds}
            onToggleStack={handleToggleStack}
            onOpenDetail={setActiveDetailSupplement}
            onAddToReminder={handleAddToReminder}
          />
        )}

        {activeTab === 'verificatore' && (
          <StackChecker
            selectedIds={selectedStackIds}
            setSelectedIds={setSelectedStackIds}
            onOpenDetail={setActiveDetailSupplement}
            onApplyToReminder={handleApplySupplementsToReminder}
          />
        )}

        {activeTab === 'stacks' && (
          <CuratedStacksView
            onLoadStackInChecker={handleLoadStackInChecker}
            onApplyStackToReminder={handleApplySupplementsToReminder}
            onOpenDetail={setActiveDetailSupplement}
          />
        )}

        {activeTab === 'fegato' && (
          <LiverGuideView
            onLoadLiverStack={() => {
              const liverSups = SUPPLEMENTS_DATABASE.filter(s => 
                ['cardo-mariano-silimarina', 'nac-n-acetilcisteina', 'acido-alfa-lipoico', 'taurina'].includes(s.id)
              );
              handleApplySupplementsToReminder(liverSups);
            }}
            onOpenDetailByName={handleOpenDetailByName}
          />
        )}

        {activeTab === 'promemoria' && (
          <ReminderView
            state={reminderState}
            setState={setReminderState}
            onOpenCatalog={() => setActiveTab('catalogo')}
          />
        )}

      </main>

      {/* Full Clinical Detail Modal */}
      <SupplementDetailModal
        supplement={activeDetailSupplement}
        onClose={() => setActiveDetailSupplement(null)}
        onAddToStack={(id) => handleToggleStack(id)}
        isInStack={activeDetailSupplement ? selectedStackIds.includes(activeDetailSupplement.id) : false}
        onAddToReminder={(sup) => {
          handleAddToReminder(sup);
          setActiveDetailSupplement(null);
        }}
      />

      {/* Clinical Disclaimer Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 text-xs text-slate-500 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-semibold text-slate-700 dark:text-slate-300">
              SYNAPSE & VITAE © 2026 — Piattaforma Scientifica di Nutraceutica & Cronobiologia
            </p>
            <p className="text-[11px] text-slate-400 max-w-2xl">
              Avvertenza: Le informazioni fornite hanno esclusivo scopo educativo e divulgativo. Non costituiscono diagnosi,
              prescrizione medica né sostituiscono il parere professionale del medico curante o nutrizionista.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <button onClick={() => setActiveTab('catalogo')} className="hover:text-slate-900 dark:hover:text-white">Enciclopedia</button>
            <button onClick={() => setActiveTab('verificatore')} className="hover:text-slate-900 dark:hover:text-white">Verificatore</button>
            <button onClick={() => setActiveTab('fegato')} className="hover:text-slate-900 dark:hover:text-white">Guida Fegato</button>
            <button onClick={() => setActiveTab('promemoria')} className="hover:text-slate-900 dark:hover:text-white">Promemoria</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
