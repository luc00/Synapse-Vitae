import React from 'react';
import { Supplement } from '../types/supplement';
import { 
  X, 
  Clock, 
  ShieldCheck, 
  ShieldAlert, 
  Sparkles, 
  AlertTriangle, 
  Plus, 
  Check, 
  HelpCircle,
  Flame,
  Award
} from 'lucide-react';

interface SupplementDetailModalProps {
  supplement: Supplement | null;
  onClose: () => void;
  onAddToStack: (id: string) => void;
  isInStack: boolean;
  onAddToReminder: (supplement: Supplement) => void;
}

export const SupplementDetailModal: React.FC<SupplementDetailModalProps> = ({
  supplement,
  onClose,
  onAddToStack,
  isInStack,
  onAddToReminder
}) => {
  if (!supplement) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider">
              <span>{supplement.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-slate-500">{supplement.scientificName}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              {supplement.name}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              {supplement.shortTagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
            aria-label="Chiudi finestra"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Overview Description */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Panoramica & Meccanismo d’Azione
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {supplement.description}
            </p>
          </div>

          {/* Key Benefits */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Benefici Fisiologici Dimostrati
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {supplement.primaryBenefits.map((b, idx) => (
                <li key={idx} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-200 flex items-start gap-2">
                  <Award className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timing & Food Matrix */}
          <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/30 border border-teal-200/60 dark:border-teal-900/40">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Quando e Come Assumerlo (Orario & Pasti)</span>
            </div>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-2">
              {supplement.timing.instructions}
            </p>
            {supplement.timing.avoidTimes && (
              <p className="text-xs text-rose-700 dark:text-rose-400 mt-2 flex items-center gap-1.5 font-medium">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                <span>Orario sconsigliato: {supplement.timing.avoidTimes}</span>
              </p>
            )}
          </div>

          {/* Liver Safety & Cycling */}
          <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
                {supplement.liverSafety.hepatoprotective ? (
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                )}
                <span>Salute del Fegato & Protocollo di Pausa</span>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                supplement.liverSafety.hepatoprotective
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                  : supplement.liverSafety.riskLevel === 'alto_richiede_cicli'
                  ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                  : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
              }`}>
                {supplement.liverSafety.hepatoprotective ? 'Epatoprotettivo' : supplement.liverSafety.riskLevel === 'alto_richiede_cicli' ? 'Ciclo Obbligatorio' : 'Sicurezza Standard'}
              </span>
            </div>

            <p className="text-xs text-slate-700 dark:text-slate-300 mt-2 leading-relaxed">
              {supplement.liverSafety.impactDescription}
            </p>

            <div className="mt-3 pt-2 border-t border-amber-200/50 dark:border-amber-900/30 text-xs font-medium text-amber-900 dark:text-amber-200">
              <span className="font-bold">Regola di Stacco: </span>
              <span>{supplement.liverSafety.cycleProtocol.description}</span>
            </div>
          </div>

          {/* Best Forms & Dosage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Dosaggio Raccomandato</span>
              <div className="text-sm font-bold font-mono text-slate-900 dark:text-white mt-1">
                {supplement.recommendedDosage}
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Migliori Forme Biodisponibili</span>
              <div className="text-xs text-slate-800 dark:text-slate-200 mt-1 font-medium space-y-0.5">
                {supplement.bestForms.map((f, i) => (
                  <div key={i}>✓ {f}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Synergies (Cosa combinare) */}
          {supplement.positiveSynergies.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sinergie Ottimali (Da Assumere Insieme)</span>
              </div>
              <div className="space-y-2">
                {supplement.positiveSynergies.map((syn, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 text-xs">
                    <div className="font-semibold text-emerald-900 dark:text-emerald-300">
                      + Con {syn.targetSupplementName} ({syn.synergyType})
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mt-1">{syn.description}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-1 italic">Biochimica: {syn.mechanism}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Incompatibilities (Cosa NON combinare) */}
          {supplement.incompatibilities.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800 dark:text-rose-400 uppercase tracking-wider mb-2">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Incompatibilità & Conflitti (Cosa NON Combinare)</span>
              </div>
              <div className="space-y-2">
                {supplement.incompatibilities.map((inc, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 text-xs">
                    <div className="font-semibold text-rose-900 dark:text-rose-300">
                      ⚠️ Conflitto con {inc.targetSupplementName} (Rischio: {inc.severity})
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mt-1">{inc.reason}</p>
                    <p className="text-rose-800 dark:text-rose-300 font-medium mt-1">Consiglio: {inc.recommendation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => onAddToStack(supplement.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              isInStack
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                : 'bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            {isInStack ? <Check className="w-4 h-4" /> : <Sparkles className="w-4 h-4 text-teal-600" />}
            <span>{isInStack ? 'Presente nel Verificatore' : 'Aggiungi al Verificatore'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onAddToReminder(supplement)}
              className="px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Aggiungi al Promemoria</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Chiudi
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
