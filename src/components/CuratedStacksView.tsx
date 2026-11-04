import React from 'react';
import { CURATED_STACKS, CuratedStack } from '../data/curatedStacks';
import { getSupplementById } from '../utils/checker';
import { Supplement } from '../types/supplement';
import { 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Calendar,
  Layers,
  Plus
} from 'lucide-react';

interface CuratedStacksViewProps {
  onLoadStackInChecker: (ids: string[]) => void;
  onApplyStackToReminder: (supplements: Supplement[]) => void;
  onOpenDetail: (supplement: Supplement) => void;
}

export const CuratedStacksView: React.FC<CuratedStacksViewProps> = ({
  onLoadStackInChecker,
  onApplyStackToReminder,
  onOpenDetail
}) => {
  return (
    <div className="space-y-8">
      {/* View Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
          <Sparkles className="w-4 h-4" />
          <span>Combinazioni ad Alto Rendimento Biologico</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
          Stack & Sinergie Cliniche Pre-Configurate
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Questi protocolli combinano molecole che presentano interazioni biochimiche sinergiche
          comprovate: una sostanza migliora l’assorbimento dell’altra, attiva i suoi enzimi o ne potenzia
          l’effetto a livello recettoriale, con crono-programma integrato e protezione epatica.
        </p>
      </div>

      {/* Grid of Curated Stacks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {CURATED_STACKS.map(stack => {
          const fullSupplements = stack.supplementIds
            .map(id => getSupplementById(id))
            .filter((s): s is Supplement => s !== undefined);

          return (
            <div
              key={stack.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Clean unboxed category header */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider">
                    {stack.category}
                  </span>
                  <span className="font-mono text-slate-400">{stack.supplementIds.length} integratori</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {stack.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">
                  {stack.tagline}
                </p>

                {/* Target Benefit callout */}
                <div className="mt-3 p-3 rounded-xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200/50 dark:border-teal-900/40 text-xs text-teal-950 dark:text-teal-200 font-medium">
                  <span className="font-bold">Obiettivo Principale: </span>
                  {stack.targetBenefit}
                </div>

                {/* Supplement Components Pill/Tags */}
                <div className="mt-4">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Composti Inclusi nello Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {fullSupplements.map(sup => (
                      <button
                        key={sup.id}
                        onClick={() => onOpenDetail(sup)}
                        className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium transition-colors"
                      >
                        {sup.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scientific Rationale */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Razionale Biochimico della Sinergia
                  </h4>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {stack.scientificRationale}
                  </p>
                </div>

                {/* Chrono Timeline */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Orari Ottimali di Assunzione</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    {stack.scheduleTimeline.map((item, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center justify-between font-semibold text-slate-900 dark:text-white">
                          <span>{item.timeOfDay}</span>
                          <span className="text-[11px] font-mono text-teal-700 dark:text-teal-400">
                            {item.items.join(', ')}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {item.action}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Liver & Cycle Info */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-400 font-semibold mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Salute Fegato & Pause:</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                    {stack.liverImpactSummary} — <span className="font-semibold text-slate-800 dark:text-slate-200">{stack.cycleAdvice}</span>
                  </p>
                </div>

              </div>

              {/* Action buttons footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => onLoadStackInChecker(stack.supplementIds)}
                  className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                  <span>Carica nel Verificatore</span>
                </button>

                <button
                  onClick={() => onApplyStackToReminder(fullSupplements)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-teal-700 hover:bg-teal-800 text-white transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Applica al Promemoria</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};
