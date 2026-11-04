import React from 'react';
import { Sparkles, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenChecker: () => void;
  onOpenLiverGuide: () => void;
  onOpenReminder: () => void;
  totalSupplements: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenChecker,
  onOpenLiverGuide,
  onOpenReminder,
  totalSupplements
}) => {
  const heroImgSrc = '/src/assets/images/supplement_science_hero_1793827067846.jpg';

  return (
    <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        
        {/* 2-column split with image and clinical typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Meta text kicker without pill boxes */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-3">
              <span>Biochimica Nutrizionale & Cronobiologia</span>
              <span aria-hidden="true">·</span>
              <span>Edizione 2026</span>
              <span aria-hidden="true">·</span>
              <span>Evidence-Based</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] text-balance">
              Tutti gli Integratori, Sinergie Cliniche e Salvaguardia del Fegato
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Scopri quali molecole potenziano reciprocamente i loro effetti, quali combinazioni bloccano
              l’assorbimento intestinale, il momento esatto della giornata per assumerle (a digiuno, con grassi o pre-nanna),
              le pause cicliche per non affaticare il fegato e il promemoria orario integrato.
            </p>

            {/* Quick interactive call to actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenChecker}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4" />
                <span>Verifica la Tua Combinazione</span>
              </button>

              <button
                onClick={onOpenLiverGuide}
                className="px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Protocollo Sicurezza Fegato</span>
              </button>

              <button
                onClick={onOpenReminder}
                className="px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Configura Promemoria</span>
              </button>
            </div>

            {/* 3 clinical bullet proofs */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Oltre 50 sinergie bio-molecolari mappate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Prevenzione conflitti recettoriali (es. Ferro vs Calcio)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Protocolli di scarico Citocromo P450</span>
              </div>
            </div>

          </div>

          {/* Right image card with fallback */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full h-full min-h-[260px] sm:min-h-[340px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 relative group shadow-sm">
              <img
                src={heroImgSrc}
                alt="Laboratorio scientifico di nutraceutica e integratori molecolari con boccette ambrate e modelli chimici"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                onError={(e) => {
                  // Fallback container if image fails
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
              {/* Subtle contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-5">
                <div className="text-white text-xs font-mono tracking-wider uppercase text-teal-300">
                  Precision Supplementation Protocol
                </div>
                <div className="text-white text-sm font-semibold mt-1">
                  Guida Integrata alla Biodisponibilità & Cronobiologia
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-column KPI strip below the hero */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
            <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400">Database Integratori</span>
            <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white mt-1 tabular-nums">
              {totalSupplements} <span className="text-xs font-normal text-slate-500">molecole</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Vitamine, minerali, nootropi, erbe & peptidi
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
            <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400">Verificatore Interattivo</span>
            <div className="text-2xl font-bold font-mono text-teal-600 dark:text-teal-400 mt-1 tabular-nums">
              Real-Time <span className="text-xs font-normal text-slate-500">engine</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Calcolo sinergie e incompatibilità per coppie
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
            <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400">Salute del Fegato</span>
            <div className="text-2xl font-bold font-mono text-amber-600 dark:text-amber-400 mt-1 tabular-nums">
              Fase I & II <span className="text-xs font-normal text-slate-500">CYP450</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Regole di stacco (ON/OFF) e detossificazione
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
            <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400">Promemoria Giornaliero</span>
            <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white mt-1 tabular-nums">
              Audio Chime <span className="text-xs font-normal text-slate-500">& Alert</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Tracciamento assunzioni e giorni di ciclo
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
