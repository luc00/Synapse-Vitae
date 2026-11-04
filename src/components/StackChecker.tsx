import React, { useState } from 'react';
import { SUPPLEMENTS_DATABASE } from '../data/supplements';
import { analyzeSupplementStack } from '../utils/checker';
import { Supplement } from '../types/supplement';
import { 
  Sparkles, 
  AlertTriangle, 
  ShieldCheck, 
  ShieldAlert, 
  Clock, 
  Plus, 
  X, 
  CheckCircle2, 
  Info,
  Calendar,
  Layers,
  Search
} from 'lucide-react';

interface StackCheckerProps {
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  onOpenDetail: (supplement: Supplement) => void;
  onApplyToReminder: (supplements: Supplement[]) => void;
}

export const StackChecker: React.FC<StackCheckerProps> = ({
  selectedIds,
  setSelectedIds,
  onOpenDetail,
  onApplyToReminder
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSupplement = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const loadPreset = (ids: string[]) => {
    setSelectedIds(ids);
  };

  const analysis = analyzeSupplementStack(selectedIds);

  const filteredCatalog = SUPPLEMENTS_DATABASE.filter(s => {
    if (!searchQuery) return true;
    return s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           s.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="space-y-8">
      {/* Top Banner & Control Deck */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              <Sparkles className="w-4 h-4" />
              <span>Verificatore Interattivo Molecolare</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Analisi Sinergie, Incompatibilità & Carico Epatico
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Seleziona 2 o più integratori per simulare l’assunzione congiunta: calcolo delle sinergie
              biologiche, prevenzione dei blocchi recettoriali, indice fegato e orari ideali.
            </p>
          </div>

          {/* Quick preset buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Test Rapidi:</span>
            <button
              onClick={() => loadPreset(['vitamina-d3', 'vitamina-k2', 'magnesio-bisglicinato'])}
              className="px-2.5 py-1 text-xs rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
            >
              D3 + K2 + Mg
            </button>
            <button
              onClick={() => loadPreset(['ferro-bisglicinato', 'calcio-citrato'])}
              className="px-2.5 py-1 text-xs rounded bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-900 transition-colors"
            >
              Ferro + Calcio (Conflitto)
            </button>
            <button
              onClick={() => loadPreset(['berberina-hcl', 'egcg-te-verde'])}
              className="px-2.5 py-1 text-xs rounded bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900 transition-colors"
            >
              Berberina + EGCG (Allarme Fegato)
            </button>
            <button
              onClick={() => loadPreset(['cardo-mariano-silimarina', 'nac-n-acetilcisteina', 'taurina'])}
              className="px-2.5 py-1 text-xs rounded bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900 transition-colors"
            >
              Scudo Epatico
            </button>
            {selectedIds.length > 0 && (
              <button
                onClick={() => setSelectedIds([])}
                className="px-2.5 py-1 text-xs rounded text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 underline"
              >
                Azzera
              </button>
            )}
          </div>
        </div>

        {/* Selected Items Tray */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-3">
            <span>INTEGRATORI SELEZIONATI NEL TUO STACK ({selectedIds.length})</span>
            {selectedIds.length > 0 && (
              <button
                onClick={() => onApplyToReminder(analysis.supplements)}
                className="text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Importa Stack nel Promemoria</span>
              </button>
            )}
          </div>

          {selectedIds.length === 0 ? (
            <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-center text-xs text-slate-500">
              Nessun integratore selezionato. Clicca sui pulsanti di prova rapida in alto o seleziona dal catalogo qui sotto per iniziare l’analisi biochimica.
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {analysis.supplements.map(sup => (
                <div
                  key={sup.id}
                  className="flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-900 text-xs font-medium text-teal-900 dark:text-teal-200"
                >
                  <span onClick={() => onOpenDetail(sup)} className="cursor-pointer hover:underline">
                    {sup.name}
                  </span>
                  <button
                    onClick={() => toggleSupplement(sup.id)}
                    className="p-0.5 rounded hover:bg-teal-200/50 dark:hover:bg-teal-900 text-teal-700 dark:text-teal-400"
                    title={`Rimuovi ${sup.name}`}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Selector Search & Dropdown Pills */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
          <div className="relative mb-3">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cerca integratore da aggiungere allo stack (es. Vitamina C, Ashwagandha, Zinco)..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          <div className="max-h-36 overflow-y-auto flex flex-wrap gap-1.5 p-1">
            {filteredCatalog.map(sup => {
              const isSelected = selectedIds.includes(sup.id);
              return (
                <button
                  key={sup.id}
                  onClick={() => toggleSupplement(sup.id)}
                  className={`px-2.5 py-1 text-xs rounded-md border transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-teal-700 text-white border-teal-700 font-semibold shadow-xs'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-teal-500'
                  }`}
                >
                  {isSelected ? '✓ ' : '+ '}
                  {sup.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ANALYSIS RESULTS STAGE */}
      {selectedIds.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Synergies & Incompatibilities (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* 1. Positive Synergies Found */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Sinergie Positive Rilevate ({analysis.synergiesFound.length})
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  {analysis.synergiesFound.length > 0 ? 'Potenziamento Attivo' : 'Nessuna sinergia diretta'}
                </span>
              </div>

              {analysis.synergiesFound.length === 0 ? (
                <p className="text-xs text-slate-500 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  Nessuna interazione sinergica nota tra gli elementi selezionati. Non si ostacolano, ma non presentano percorsi di potenziamento congiunto specifici.
                </p>
              ) : (
                <div className="space-y-3">
                  {analysis.synergiesFound.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/40"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-xs font-bold text-emerald-900 dark:text-emerald-300">
                          {item.supA.name} + {item.supB.name}
                        </div>
                        <span className="text-[11px] font-mono uppercase bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 px-2 py-0.5 rounded">
                          {item.synergy.synergyType}
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 mt-2 font-medium">
                        {item.synergy.description}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 italic">
                        Meccanismo biochimico: {item.synergy.mechanism}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Incompatibilities & Conflicts Found */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-400 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Conflitti & Interazioni Negative ({analysis.conflictsFound.length})
                  </h3>
                </div>
                <span className={`text-xs font-mono font-medium ${
                  analysis.conflictsFound.length > 0 ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'
                }`}>
                  {analysis.conflictsFound.length > 0 ? 'Attenzione Richiesta' : '0 Conflitti'}
                </span>
              </div>

              {analysis.conflictsFound.length === 0 ? (
                <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-xs text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Nessun conflitto biologico o competizione di assorbimento rilevata tra questi composti!</span>
                </div>
              ) : (
                <div className="space-y-3">
                  {analysis.conflictsFound.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/60"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-xs font-bold text-rose-900 dark:text-rose-300">
                          ⚠️ {item.supA.name} vs {item.supB.name}
                        </div>
                        <span className={`text-[11px] font-mono uppercase px-2 py-0.5 rounded font-bold ${
                          item.conflict.severity === 'critico'
                            ? 'bg-rose-200 text-rose-900 dark:bg-rose-900 dark:text-rose-100'
                            : 'bg-amber-100 text-amber-900 dark:bg-amber-900 dark:text-amber-100'
                        }`}>
                          Rischio: {item.conflict.severity}
                        </span>
                      </div>
                      <p className="text-xs text-slate-800 dark:text-slate-200 mt-2">
                        {item.conflict.reason}
                      </p>
                      <div className="mt-2 text-xs font-semibold text-rose-800 dark:text-rose-300 bg-white/60 dark:bg-slate-900/60 p-2 rounded-lg border border-rose-200 dark:border-rose-900">
                        Raccomandazione Clinica: {item.conflict.recommendation}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Chrono-Schedule Generated */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Crono-Programma Giornaliero Consigliato
                    </h3>
                    <p className="text-xs text-slate-500">
                      Distribuzione automatica per evitare competizioni e massimizzare la biodisponibilità
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {analysis.chronoSchedule.map((slot, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                      <span className="text-xs font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wide">
                        {slot.slotLabel}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {slot.description}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {slot.items.map(sup => (
                        <div
                          key={sup.id}
                          onClick={() => onOpenDetail(sup)}
                          className="cursor-pointer px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-white hover:border-teal-500 transition-colors shadow-xs"
                        >
                          <span className="font-semibold">{sup.name}</span>
                          <span className="text-[11px] text-slate-500 ml-1.5 font-mono">
                            ({sup.recommendedDosage})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Liver Assessment Console (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-3">
                <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Valutazione Carico Epatico
                </h3>
              </div>

              {/* Hepatic Load Score Meter */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 text-center">
                <span className="text-xs font-mono uppercase text-slate-500">
                  Indice di Impegno Metabolico
                </span>
                <div className="text-4xl font-extrabold font-mono text-slate-900 dark:text-white mt-1 tabular-nums">
                  {analysis.liverAssessment.hepaticLoadScore} <span className="text-sm font-normal text-slate-500">/ 10</span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden mt-3">
                  <div 
                    className={`h-full transition-all duration-500 ${
                      analysis.liverAssessment.hepaticLoadScore <= 3
                        ? 'bg-emerald-500 w-[30%]'
                        : analysis.liverAssessment.hepaticLoadScore <= 6
                        ? 'bg-amber-500 w-[60%]'
                        : 'bg-rose-500 w-[95%]'
                    }`}
                  />
                </div>

                <div className="mt-2 text-xs font-semibold">
                  {analysis.liverAssessment.hepaticLoadScore <= 3 ? (
                    <span className="text-emerald-700 dark:text-emerald-400">Livello Basso (Alta Tollerabilità)</span>
                  ) : analysis.liverAssessment.hepaticLoadScore <= 6 ? (
                    <span className="text-amber-700 dark:text-amber-400">Livello Medio (Monitorare e Ciclicizzare)</span>
                  ) : (
                    <span className="text-rose-700 dark:text-rose-400">Livello Alto (Pause Obbligatorie!)</span>
                  )}
                </div>
              </div>

              {/* Specific Liver Warnings */}
              {analysis.liverAssessment.warnings.length > 0 && (
                <div className="mt-4 space-y-2">
                  {analysis.liverAssessment.warnings.map((warn, i) => (
                    <div key={i} className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs text-amber-900 dark:text-amber-200 font-medium">
                      {warn}
                    </div>
                  ))}
                </div>
              )}

              {/* Cycle Advice */}
              <div className="mt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Protocollo Cicli & Pause (Fegato)
                </h4>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {analysis.liverAssessment.cycleAdvice.map((adv, i) => (
                    <li key={i} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-start gap-2">
                      <Calendar className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply to reminder button */}
              <button
                onClick={() => onApplyToReminder(analysis.supplements)}
                className="w-full mt-6 py-2.5 px-4 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Salva Crono-Programma nel Promemoria</span>
              </button>

            </div>

          </div>

        </div>
      )}
    </div>
  );
};
