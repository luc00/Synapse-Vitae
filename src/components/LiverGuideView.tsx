import React from 'react';
import { LIVER_SAFETY_RULES, LIVER_PHYSIOLOGY_GUIDE } from '../data/liverGuide';
import { Supplement } from '../types/supplement';
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  Activity, 
  Calendar, 
  CheckCircle2, 
  Droplet,
  Layers,
  Sparkles,
  Plus
} from 'lucide-react';

interface LiverGuideViewProps {
  onLoadLiverStack: () => void;
  onOpenDetailByName: (name: string) => void;
}

export const LiverGuideView: React.FC<LiverGuideViewProps> = ({
  onLoadLiverStack,
  onOpenDetailByName
}) => {
  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
          <ShieldAlert className="w-4 h-4" />
          <span>Farmacocinetica & Epatotossicità da Integratori</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
          La Guida alle Pause per Proteggere il Fegato
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Il fegato è il laboratorio centrale del corpo: quasi ogni integratore, estratto vegetale o vitamina
          liposolubile deve essere processato dagli epatociti. Comprendere i cicli di scarico (ON / OFF)
          è indispensabile per prevenire infiammazione, steatoepatite e alterazione delle transaminasi.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={onLoadLiverStack}
            className="px-4 py-2 text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Attiva Protocollo Scudo Epatico nel Promemoria</span>
          </button>
        </div>
      </div>

      {/* The 3 Phases of Liver Metabolism */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-teal-600" />
          <span>Come il Fegato Smaltisce gli Integratori: Fasi I, II e III</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {LIVER_PHYSIOLOGY_GUIDE.phases.map((phase, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 uppercase">
                  {phase.phaseName}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {phase.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700 dark:text-slate-200">Nutrienti essenziali: </span>
                {phase.nutrientsRequired}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supplement Risk Rules Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-amber-600" />
            <span>Matrice dei Cicli ON / OFF per Ciascun Integratore</span>
          </h3>
          <span className="text-xs text-slate-500 font-mono">Protocolli di Sicurezza Epatica</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-400 uppercase tracking-wider font-mono">
                <th className="py-3 px-3">Integratore</th>
                <th className="py-3 px-3">Livello Rischio</th>
                <th className="py-3 px-3">Perché Affatica il Fegato</th>
                <th className="py-3 px-3 whitespace-nowrap">Durata Assunzione (ON)</th>
                <th className="py-3 px-3 whitespace-nowrap">Pausa Obbligatoria (OFF)</th>
                <th className="py-3 px-3">Regola d'Oro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {LIVER_SAFETY_RULES.map((rule, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="py-3.5 px-3 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                    {rule.supplementName}
                  </td>
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                      rule.riskCategory === 'Epatoprotettivo Primario'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : rule.riskCategory === 'Alto Rischio / Cicli Obbligatori'
                        ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                    }`}>
                      {rule.riskCategory}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-slate-600 dark:text-slate-300 max-w-xs">
                    {rule.whyItStressesLiver}
                  </td>
                  <td className="py-3.5 px-3 font-mono font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">
                    {rule.onPeriod}
                  </td>
                  <td className="py-3.5 px-3 font-mono font-semibold text-teal-700 dark:text-teal-400 whitespace-nowrap">
                    {rule.offPeriod}
                  </td>
                  <td className="py-3.5 px-3 text-slate-700 dark:text-slate-200 font-medium">
                    {rule.goldenRule}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Warning Signs & The Reset Window */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Warning Signs */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-base mb-3">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <h3>Sintomi & Segnali di Fegato Sotto Stress</h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 mb-4">
            Se si manifestano questi segnali durante periodi di integrazione intensa, interrompere
            immediatamente gli estratti vegetali ed eseguire un pannello epatico ematico:
          </p>
          <ul className="space-y-2 text-xs">
            {LIVER_PHYSIOLOGY_GUIDE.warningSigns.map((sign, i) => (
              <li key={i} className="p-2.5 rounded-lg bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 text-slate-800 dark:text-slate-200 flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* The 21-30 Day Reset Protocol */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-bold text-base mb-1">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <h3>Il Protocollo di Scarico & Rigenerazione</h3>
            </div>
            <div className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 mb-3">
              {LIVER_PHYSIOLOGY_GUIDE.detoxResetProtocol.duration}
            </div>

            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {LIVER_PHYSIOLOGY_GUIDE.detoxResetProtocol.steps.map((step, i) => (
                <li key={i} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={onLoadLiverStack}
              className="w-full py-2.5 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Imposta Routine Disintossicante nel Promemoria</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
