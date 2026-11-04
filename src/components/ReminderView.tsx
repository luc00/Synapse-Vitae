import React, { useState, useEffect } from 'react';
import { ReminderState, ReminderSlotConfig, ReminderItem } from '../types/reminder';
import { playReminderChime } from '../utils/audioReminder';
import { 
  Bell, 
  Volume2, 
  VolumeX, 
  Check, 
  Plus, 
  Trash2, 
  Clock, 
  Sparkles, 
  ShieldAlert, 
  Calendar,
  Flame,
  Award,
  AlertCircle
} from 'lucide-react';

interface ReminderViewProps {
  state: ReminderState;
  setState: React.Dispatch<React.SetStateAction<ReminderState>>;
  onOpenCatalog: () => void;
}

export const ReminderView: React.FC<ReminderViewProps> = ({
  state,
  setState,
  onOpenCatalog
}) => {
  const [testAlertToast, setTestAlertToast] = useState<string | null>(null);
  const [newItemModalOpen, setNewItemModalOpen] = useState(false);
  const [selectedSlotForNew, setSelectedSlotForNew] = useState<string>('colazione_pasti');
  const [newCustomName, setNewCustomName] = useState('');
  const [newCustomDosage, setNewCustomDosage] = useState('');
  const [newCustomInstructions, setNewCustomInstructions] = useState('');
  const [newCustomCycle, setNewCustomCycle] = useState(false);
  const [newCustomCycleWeeks, setNewCustomCycleWeeks] = useState(8);
  const [newCustomBreakWeeks, setNewCustomBreakWeeks] = useState(2);

  // Compute total and completed items
  const allItems = state.slots.flatMap(s => s.items);
  const totalCount = allItems.length;
  const completedCount = allItems.filter(i => i.takenToday).length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Toggle item taken
  const toggleTaken = (slotId: string, itemId: string) => {
    setState(prev => {
      const nextSlots = prev.slots.map(slot => {
        if (slot.slotId !== slotId) return slot;
        return {
          ...slot,
          items: slot.items.map(item => {
            if (item.id !== itemId) return item;
            return { ...item, takenToday: !item.takenToday };
          })
        };
      });

      const nextAll = nextSlots.flatMap(s => s.items);
      const allDone = nextAll.length > 0 && nextAll.every(i => i.takenToday);
      const todayStr = new Date().toISOString().split('T')[0];

      return {
        ...prev,
        slots: nextSlots,
        streakDays: allDone && prev.lastCompletedDate !== todayStr ? prev.streakDays + 1 : prev.streakDays,
        lastCompletedDate: allDone ? todayStr : prev.lastCompletedDate
      };
    });
  };

  // Remove item
  const removeItem = (slotId: string, itemId: string) => {
    setState(prev => ({
      ...prev,
      slots: prev.slots.map(slot => {
        if (slot.slotId !== slotId) return slot;
        return {
          ...slot,
          items: slot.items.filter(i => i.id !== itemId)
        };
      })
    }));
  };

  // Update slot time
  const updateSlotTime = (slotId: string, newTime: string) => {
    setState(prev => ({
      ...prev,
      slots: prev.slots.map(s => s.slotId === slotId ? { ...s, timeString: newTime } : s)
    }));
  };

  // Toggle slot enabled
  const toggleSlotEnabled = (slotId: string) => {
    setState(prev => ({
      ...prev,
      slots: prev.slots.map(s => s.slotId === slotId ? { ...s, enabled: !s.enabled } : s)
    }));
  };

  // Test Chime and Notification immediately
  const handleTestChime = () => {
    // Play Web Audio chime
    if (state.soundEnabled) {
      playReminderChime();
    }

    // Try browser notification if permitted
    if (typeof window !== 'undefined' && 'Notification' in window && state.notificationsEnabled) {
      if (Notification.permission === 'granted') {
        new Notification('Promemoria Integratori: Synapse & Vitae', {
          body: 'È ora di assumere i tuoi integratori programmati per questo slot orario!',
          icon: '/favicon.ico'
        });
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            new Notification('Promemoria Integratori: Synapse & Vitae', {
              body: 'Notifiche abilitate con successo!',
              icon: '/favicon.ico'
            });
          }
        });
      }
    }

    setTestAlertToast('🔔 Chime acustico suonato! Allarme promemoria verificato con successo.');
    setTimeout(() => {
      setTestAlertToast(null);
    }, 4500);
  };

  // Add custom item
  const handleAddCustomItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCustomName.trim()) return;

    const newItem: ReminderItem = {
      id: `custom-${Date.now()}`,
      supplementId: 'custom',
      supplementName: newCustomName.trim(),
      dosage: newCustomDosage.trim() || 'Dosaggio standard',
      instructions: newCustomInstructions.trim() || 'Assumere con acqua',
      takenToday: false,
      cycleStartDate: new Date().toISOString().split('T')[0],
      requiresCycle: newCustomCycle,
      cycleWeeks: newCustomCycle ? newCustomCycleWeeks : undefined,
      breakWeeks: newCustomCycle ? newCustomBreakWeeks : undefined
    };

    setState(prev => ({
      ...prev,
      slots: prev.slots.map(s => {
        if (s.slotId !== selectedSlotForNew) return s;
        return {
          ...s,
          items: [...s.items, newItem]
        };
      })
    }));

    setNewCustomName('');
    setNewCustomDosage('');
    setNewCustomInstructions('');
    setNewCustomCycle(false);
    setNewItemModalOpen(false);
  };

  // Helper to compute cycle status for an item
  const getCycleStats = (item: ReminderItem) => {
    if (!item.requiresCycle || !item.cycleWeeks) return null;
    const start = new Date(item.cycleStartDate).getTime();
    const now = Date.now();
    const diffDays = Math.max(0, Math.floor((now - start) / (1000 * 60 * 60 * 24)));
    const totalCycleDays = item.cycleWeeks * 7;
    const daysLeft = Math.max(0, totalCycleDays - diffDays);
    const isOverdue = daysLeft === 0;

    return {
      currentDay: diffDays + 1,
      totalDays: totalCycleDays,
      daysLeft,
      breakWeeks: item.breakWeeks || 2,
      isOverdue
    };
  };

  return (
    <div className="space-y-8">
      {/* Test Chime Toast Alert */}
      {testAlertToast && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-teal-800 text-white shadow-2xl flex items-center gap-3 animate-fade-in border border-teal-600">
          <Bell className="w-5 h-5 text-teal-300 animate-bounce" />
          <span className="text-xs font-semibold">{testAlertToast}</span>
        </div>
      )}

      {/* Header and Controls */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              <Clock className="w-4 h-4" />
              <span>Cronobiologia & Aderenza Terapeutica</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Il Mio Promemoria Giornaliero & Contatore Cicli
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Spunta gli integratori assunti oggi, ricevi il chime all’orario esatto e monitora i giorni
              rimanenti prima della pausa obbligatoria per preservare il fegato.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleTestChime}
              className="px-4 py-2 text-xs font-bold rounded-lg bg-teal-700 hover:bg-teal-800 text-white flex items-center gap-2 transition-colors shadow-sm"
              title="Ascolta il chime di prova e attiva notifica"
            >
              <Bell className="w-4 h-4" />
              <span>Testa Notifica & Suono ORA</span>
            </button>

            <button
              onClick={() => setState(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }))}
              className={`p-2 rounded-lg border text-xs font-medium transition-colors ${
                state.soundEnabled 
                  ? 'border-teal-300 dark:border-teal-700 bg-teal-50 dark:bg-teal-950 text-teal-800 dark:text-teal-300' 
                  : 'border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500'
              }`}
              title={state.soundEnabled ? 'Suono attivo' : 'Suono disattivato'}
            >
              {state.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setNewItemModalOpen(true)}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Aggiungi Integratore</span>
            </button>
          </div>
        </div>

        {/* Daily Streak & Progress Dashboard */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center font-bold">
              <Flame className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-slate-500">Aderenza (Streak)</span>
              <div className="text-xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
                {state.streakDays} <span className="text-xs font-normal text-slate-500">giorni consecutivi</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center font-bold">
              <Check className="w-5 h-5 text-teal-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs font-mono uppercase text-slate-500">
                <span>Completamento Oggi</span>
                <span className="font-bold text-slate-900 dark:text-white">{progressPercent}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden mt-1.5">
                <div 
                  className="bg-teal-600 h-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                {completedCount} su {totalCount} assunti
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-slate-500">Stato Notifiche Browser</span>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                {typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted'
                  ? 'Abilitate nel browser'
                  : 'Richiedi autorizzazione'}
              </div>
              <div className="text-[11px] text-slate-400">Audio sintetizzato attivo</div>
            </div>
            <button
              onClick={handleTestChime}
              className="text-xs text-teal-700 dark:text-teal-400 font-semibold hover:underline"
            >
              Testa
            </button>
          </div>
        </div>
      </div>

      {/* Chrono Slot Timetable */}
      <div className="space-y-6">
        {state.slots.map(slot => (
          <div
            key={slot.slotId}
            className={`bg-white dark:bg-slate-900 border rounded-2xl p-6 shadow-sm transition-all ${
              slot.enabled 
                ? 'border-slate-200 dark:border-slate-800' 
                : 'border-slate-200/50 dark:border-slate-800/50 opacity-60'
            }`}
          >
            {/* Slot Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center font-bold text-xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {slot.label}
                  </h3>
                  <span className="text-xs text-slate-500">
                    {slot.items.length} integratore/i programmato/i
                  </span>
                </div>
              </div>

              {/* Slot Time Picker & Enable Switch */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                  <span className="text-xs text-slate-500 font-mono">Orario:</span>
                  <input
                    type="time"
                    value={slot.timeString}
                    onChange={(e) => updateSlotTime(slot.slotId, e.target.value)}
                    className="bg-transparent text-xs font-mono font-bold text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>

                <button
                  onClick={() => toggleSlotEnabled(slot.slotId)}
                  className={`text-xs px-2.5 py-1.5 rounded-lg border font-medium ${
                    slot.enabled
                      ? 'border-teal-200 bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300 dark:border-teal-900'
                      : 'border-slate-200 bg-slate-100 text-slate-500 dark:bg-slate-800 dark:border-slate-700'
                  }`}
                >
                  {slot.enabled ? 'Attivo' : 'Sospeso'}
                </button>
              </div>
            </div>

            {/* Items inside this slot */}
            <div className="mt-4 space-y-3">
              {slot.items.length === 0 ? (
                <div className="p-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400">
                  Nessun integratore in questa fascia. Aggiungi integratori dal catalogo o clicca su "Aggiungi".
                </div>
              ) : (
                slot.items.map(item => {
                  const cycleStats = getCycleStats(item);

                  return (
                    <div
                      key={item.id}
                      className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        item.takenToday
                          ? 'bg-teal-50/40 dark:bg-teal-950/20 border-teal-200 dark:border-teal-900'
                          : 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800'
                      }`}
                    >
                      {/* Checkbox & Details */}
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => toggleTaken(slot.slotId, item.id)}
                          className={`mt-0.5 w-6 h-6 rounded-md flex items-center justify-center transition-colors shrink-0 ${
                            item.takenToday
                              ? 'bg-teal-700 text-white shadow-xs'
                              : 'border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:border-teal-500'
                          }`}
                          aria-label={`Segna ${item.supplementName} come assunto`}
                        >
                          {item.takenToday && <Check className="w-4 h-4 stroke-[3]" />}
                        </button>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-bold ${
                              item.takenToday 
                                ? 'line-through text-slate-400 dark:text-slate-500' 
                                : 'text-slate-900 dark:text-white'
                            }`}>
                              {item.supplementName}
                            </span>
                            <span className="text-xs font-mono font-medium text-teal-700 dark:text-teal-400">
                              {item.dosage}
                            </span>
                          </div>

                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                            {item.instructions}
                          </p>

                          {/* Cycle Tracker Display if requiresCycle */}
                          {cycleStats && (
                            <div className="mt-2 text-xs">
                              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-medium">
                                <ShieldAlert className="w-3.5 h-3.5" />
                                <span>
                                  Ciclo Fegato: Giorno {cycleStats.currentDay} di {cycleStats.totalDays}
                                </span>
                                <span aria-hidden="true">·</span>
                                <span>
                                  {cycleStats.isOverdue 
                                    ? '⚠️ TEMPO SCADUTO: Inizia ora la pausa di 2-3 settimane!' 
                                    : `Mancano ${cycleStats.daysLeft} giorni allo scarico`}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Remove Button */}
                      <div className="flex items-center justify-end">
                        <button
                          onClick={() => removeItem(slot.slotId, item.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950 transition-colors"
                          title="Rimuovi dal promemoria"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Add Custom Item */}
      {newItemModalOpen && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setNewItemModalOpen(false)}
        >
          <div 
            className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Aggiungi Integratore al Promemoria
            </h3>

            <form onSubmit={handleAddCustomItem} className="space-y-4 text-xs">
              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Nome Integratore
                </label>
                <input
                  type="text"
                  required
                  placeholder="Es. Ashwagandha, CoQ10, Creatina..."
                  value={newCustomName}
                  onChange={(e) => setNewCustomName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Fascia Oraria Giornaliera
                </label>
                <select
                  value={selectedSlotForNew}
                  onChange={(e) => setSelectedSlotForNew(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                >
                  {state.slots.map(s => (
                    <option key={s.slotId} value={s.slotId}>{s.label} ({s.timeString})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Dosaggio
                </label>
                <input
                  type="text"
                  placeholder="Es. 300 mg, 1 capsula, 5g in polvere..."
                  value={newCustomDosage}
                  onChange={(e) => setNewCustomDosage(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Istruzioni di Assunzione
                </label>
                <input
                  type="text"
                  placeholder="Es. Con il pasto ricco di grassi, 30 min prima di dormire..."
                  value={newCustomInstructions}
                  onChange={(e) => setNewCustomInstructions(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              {/* Cycle Tracker Checkbox */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newCustomCycle}
                    onChange={(e) => setNewCustomCycle(e.target.checked)}
                    className="rounded text-teal-600 focus:ring-teal-500"
                  />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Richiede cicli di pausa per il fegato?
                  </span>
                </label>

                {newCustomCycle && (
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div>
                      <span className="text-slate-500 block mb-1">Settimane ON:</span>
                      <input
                        type="number"
                        min="2"
                        max="24"
                        value={newCustomCycleWeeks}
                        onChange={(e) => setNewCustomCycleWeeks(Number(e.target.value))}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <span className="text-slate-500 block mb-1">Settimane Pausa (OFF):</span>
                      <input
                        type="number"
                        min="1"
                        max="12"
                        value={newCustomBreakWeeks}
                        onChange={(e) => setNewCustomBreakWeeks(Number(e.target.value))}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setNewItemModalOpen(false)}
                  className="px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-800"
                >
                  Annulla
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-teal-700 text-white font-semibold hover:bg-teal-800"
                >
                  Salva nel Promemoria
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
