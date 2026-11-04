import React, { useState } from 'react';
import { Supplement, CategoryType } from '../types/supplement';
import { 
  Search, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ShieldAlert, 
  Plus, 
  Check, 
  ExternalLink,
  Filter,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface CatalogViewProps {
  supplements: Supplement[];
  selectedStackIds: string[];
  onToggleStack: (id: string) => void;
  onOpenDetail: (supplement: Supplement) => void;
  onAddToReminder: (supplement: Supplement) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  supplements,
  selectedStackIds,
  onToggleStack,
  onOpenDetail,
  onAddToReminder
}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('tutti');
  const [selectedGoal, setSelectedGoal] = useState<string>('tutti');
  const [selectedLiverFilter, setSelectedLiverFilter] = useState<string>('tutti');

  const categories = [
    { id: 'tutti', label: 'Tutti' },
    { id: 'vitamine', label: 'Vitamine' },
    { id: 'minerali', label: 'Minerali' },
    { id: 'acidi_grassi', label: 'Lipidi & Omega-3' },
    { id: 'nootropi', label: 'Nootropi & Cervello' },
    { id: 'aminoacidi', label: 'Aminoacidi' },
    { id: 'erbe_adattogeni', label: 'Erbe & Adattogeni' },
    { id: 'digestione', label: 'Microbiota & Intestino' },
    { id: 'longevita', label: 'Longevità & Anti-Aging' },
    { id: 'articolazioni', label: 'Articolazioni & Collagene' }
  ];

  const goals = [
    { id: 'tutti', label: 'Tutti gli Obiettivi' },
    { id: 'sonno', label: 'Sonno & Riposo' },
    { id: 'energia', label: 'Energia & Vitalità' },
    { id: 'fegato_detox', label: 'Salute Fegato & Detox' },
    { id: 'focus_memoria', label: 'Focus & Memoria' },
    { id: 'massa_recupero', label: 'Sport & Muscoli' },
    { id: 'immunita', label: 'Sistema Immunitario' },
    { id: 'articolazioni', label: 'Articolazioni & Pelle' },
    { id: 'longevita', label: 'Longevità' }
  ];

  const filtered = supplements.filter(sup => {
    // Search query
    if (search.trim()) {
      const q = search.toLowerCase();
      const match = sup.name.toLowerCase().includes(q) ||
                    sup.scientificName.toLowerCase().includes(q) ||
                    sup.shortTagline.toLowerCase().includes(q) ||
                    sup.description.toLowerCase().includes(q) ||
                    sup.primaryBenefits.some(b => b.toLowerCase().includes(q));
      if (!match) return false;
    }

    // Category
    if (selectedCategory !== 'tutti' && sup.category !== selectedCategory) {
      return false;
    }

    // Goal
    if (selectedGoal !== 'tutti' && !sup.targetGoals.includes(selectedGoal)) {
      return false;
    }

    // Liver filter
    if (selectedLiverFilter === 'protettivo' && !sup.liverSafety.hepatoprotective) {
      return false;
    }
    if (selectedLiverFilter === 'cicli' && sup.liverSafety.riskLevel !== 'alto_richiede_cicli') {
      return false;
    }

    return true;
  });

  const [visibleCount, setVisibleCount] = useState(24);

  // Reset pagination on filter or search change
  const handleSearchChange = (val: string) => {
    setSearch(val);
    setVisibleCount(24);
  };

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setVisibleCount(24);
  };

  const handleGoalChange = (goalId: string) => {
    setSelectedGoal(goalId);
    setVisibleCount(24);
  };

  const handleLiverChange = (liverId: string) => {
    setSelectedLiverFilter(liverId);
    setVisibleCount(24);
  };

  const visibleSupplements = search.trim() ? filtered : filtered.slice(0, visibleCount);

  return (
    <div className="space-y-6">
      
      {/* Search and Filters Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Cerca per nome, principio attivo, obiettivo o beneficio (es. Magnesio, D3, Sonno, Fegato, Testosterone, Creatina, Berberina)..."
            className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
          />
          {search && (
            <button
              onClick={() => handleSearchChange('')}
              className="absolute right-3.5 top-3.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Azzera
            </button>
          )}
        </div>

        {/* Category Filter Pills (Functional Buttons) */}
        <div>
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
            Categoria Farmaco-Nutrizionale ({supplements.length} Integratori Totali)
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-teal-700 text-white font-semibold shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Secondary Filter Dropdowns: Goals & Liver Safety */}
        <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium">Obiettivo Primario:</span>
            <select
              value={selectedGoal}
              onChange={(e) => handleGoalChange(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-teal-500"
            >
              {goals.map(g => (
                <option key={g.id} value={g.id}>{g.label}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium">Filtro Profilo Fegato:</span>
            <select
              value={selectedLiverFilter}
              onChange={(e) => handleLiverChange(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-teal-500"
            >
              <option value="tutti">Tutti i profili</option>
              <option value="protettivo">Solo Epatoprotettivi (Fegato Sano)</option>
              <option value="cicli">Solo con Cicli Obbligatori (Attenzione)</option>
            </select>
          </div>

          <div className="ml-auto text-slate-400 font-mono">
            Mostrati {visibleSupplements.length} di {filtered.length} {filtered.length === 1 ? 'integratore' : 'integratori'}
          </div>
        </div>

      </div>

      {/* Supplement Cards Grid */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Nessun integratore corrisponde ai filtri selezionati. Prova a modificare la ricerca o i criteri.
          </p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedCategory('tutti');
              setSelectedGoal('tutti');
              setSelectedLiverFilter('tutti');
              setVisibleCount(24);
            }}
            className="mt-3 px-4 py-2 text-xs font-semibold rounded-lg bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300"
          >
            Ripristina Tutti i Filtri
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleSupplements.map(supplement => {
              const isSelectedInStack = selectedStackIds.includes(supplement.id);

              return (
                <div
                  key={supplement.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
                >
                  <div>
                    
                    {/* Clean unboxed metadata kicker with typographic separator (§1.A) */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <div className="flex items-center gap-1.5 font-medium">
                        <span className="text-teal-700 dark:text-teal-400 font-semibold">{supplement.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-slate-400 truncate max-w-[140px]">{supplement.scientificName}</span>
                      </div>

                      {/* Hepatic badge */}
                      {supplement.liverSafety.hepatoprotective ? (
                        <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-1" title="Sostanza epatoprotettiva">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Protettivo</span>
                        </span>
                      ) : supplement.liverSafety.riskLevel === 'alto_richiede_cicli' ? (
                        <span className="text-[11px] text-rose-700 dark:text-rose-400 font-medium flex items-center gap-1" title="Richiede cicli di pausa">
                          <ShieldAlert className="w-3.5 h-3.5" />
                          <span>Ciclo ON/OFF</span>
                        </span>
                      ) : null}
                    </div>

                    {/* Title & Tagline */}
                    <h3 
                      onClick={() => onOpenDetail(supplement)}
                      className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors cursor-pointer"
                    >
                      {supplement.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {supplement.shortTagline}
                    </p>

                    {/* Key Benefits (quiet list) */}
                    <div className="mt-4 space-y-1.5">
                      {supplement.primaryBenefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Quick Timing & Liver Rules */}
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                        <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="font-medium text-slate-500">Orario:</span>
                        <span className="truncate">{supplement.timing.instructions}</span>
                      </div>

                      {/* Sinergie top */}
                      {supplement.positiveSynergies.length > 0 && (
                        <div className="flex items-center gap-1.5 text-xs text-emerald-800 dark:text-emerald-400">
                          <Sparkles className="w-3.5 h-3.5 shrink-0" />
                          <span className="font-medium">Ottimo con:</span>
                          <span className="truncate">{supplement.positiveSynergies.map(s => s.targetSupplementName).join(', ')}</span>
                        </div>
                      )}

                      {/* Incompatibilità da evitare */}
                      {supplement.incompatibilities.length > 0 && (
                        <div className="flex items-center gap-1.5 text-xs text-rose-800 dark:text-rose-400">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                          <span className="font-medium">Non combinare:</span>
                          <span className="truncate">{supplement.incompatibilities.map(i => i.targetSupplementName).join(', ')}</span>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Card Actions Footer */}
                  <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenDetail(supplement)}
                      className="text-xs font-semibold text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1"
                    >
                      <span>Scheda Clinica</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => onAddToReminder(supplement)}
                        className="px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-md transition-colors"
                        title="Aggiungi al Promemoria"
                      >
                        Promemoria
                      </button>

                      <button
                        onClick={() => onToggleStack(supplement.id)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1 ${
                          isSelectedInStack
                            ? 'bg-teal-700 text-white'
                            : 'bg-teal-50 dark:bg-teal-950 text-teal-800 dark:text-teal-300 hover:bg-teal-100'
                        }`}
                      >
                        {isSelectedInStack ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        <span>{isSelectedInStack ? 'Nello Stack' : 'Verifica'}</span>
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          {!search.trim() && visibleCount < filtered.length && (
            <div className="flex items-center justify-center gap-3 pt-4">
              <button
                onClick={() => setVisibleCount(prev => prev + 24)}
                className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-xs"
              >
                Carica altri 24 integratori ({filtered.length - visibleCount} rimanenti)
              </button>
              <button
                onClick={() => setVisibleCount(filtered.length)}
                className="px-4 py-2.5 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-sm font-semibold hover:bg-teal-100 transition-colors"
              >
                Mostra tutti ({filtered.length})
              </button>
            </div>
          )}
        </>
      )}

    </div>
  );
};
