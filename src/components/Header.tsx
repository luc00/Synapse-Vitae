import React from 'react';
import { Pill, Moon, Sun, Bell, ShieldAlert, Sparkles, Clock } from 'lucide-react';

interface HeaderProps {
  activeTab: 'catalogo' | 'verificatore' | 'stacks' | 'fegato' | 'promemoria';
  setActiveTab: (tab: 'catalogo' | 'verificatore' | 'stacks' | 'fegato' | 'promemoria') => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  reminderCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  darkMode,
  setDarkMode,
  reminderCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => setActiveTab('catalogo')}
          className="text-left group cursor-pointer focus:outline-none"
          aria-label="Home Synapse & Vitae"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
              <Pill className="w-4 h-4" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
                SYNAPSE & VITAE
              </span>
            </div>
          </div>
        </button>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => setActiveTab('catalogo')}
            className={`whitespace-nowrap transition-colors pb-1 border-b-2 ${
              activeTab === 'catalogo'
                ? 'border-teal-600 text-teal-700 dark:text-teal-400 dark:border-teal-400 font-semibold'
                : 'border-transparent text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Enciclopedia Integratori
          </button>

          <button
            onClick={() => setActiveTab('verificatore')}
            className={`whitespace-nowrap transition-colors pb-1 border-b-2 flex items-center gap-1.5 ${
              activeTab === 'verificatore'
                ? 'border-teal-600 text-teal-700 dark:text-teal-400 dark:border-teal-400 font-semibold'
                : 'border-transparent text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            Verificatore Stack
          </button>

          <button
            onClick={() => setActiveTab('stacks')}
            className={`whitespace-nowrap transition-colors pb-1 border-b-2 ${
              activeTab === 'stacks'
                ? 'border-teal-600 text-teal-700 dark:text-teal-400 dark:border-teal-400 font-semibold'
                : 'border-transparent text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Combinazioni Top
          </button>

          <button
            onClick={() => setActiveTab('fegato')}
            className={`whitespace-nowrap transition-colors pb-1 border-b-2 flex items-center gap-1.5 ${
              activeTab === 'fegato'
                ? 'border-amber-600 text-amber-700 dark:text-amber-400 dark:border-amber-400 font-semibold'
                : 'border-transparent text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            Guida Fegato & Pause
          </button>

          <button
            onClick={() => setActiveTab('promemoria')}
            className={`whitespace-nowrap transition-colors pb-1 border-b-2 flex items-center gap-1.5 ${
              activeTab === 'promemoria'
                ? 'border-teal-600 text-teal-700 dark:text-teal-400 dark:border-teal-400 font-semibold'
                : 'border-transparent text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            Il Mio Promemoria
            {reminderCount > 0 && (
              <span className="text-xs bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 px-1.5 py-0.2 rounded font-mono">
                {reminderCount}
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: 1 primary action + Theme toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={darkMode ? 'Attiva modalità chiara' : 'Attiva modalità scura'}
            aria-label="Toggle tema scuro"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          <button
            onClick={() => setActiveTab('promemoria')}
            className="px-3.5 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 shadow-sm"
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Promemoria Attivo</span>
          </button>
        </div>
      </div>

      {/* Mobile nav drawer tabs */}
      <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 px-4 py-2 flex items-center justify-between gap-1 overflow-x-auto text-xs">
        <button
          onClick={() => setActiveTab('catalogo')}
          className={`px-2.5 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'catalogo'
              ? 'bg-teal-100 text-teal-900 dark:bg-teal-950 dark:text-teal-200'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          Enciclopedia
        </button>
        <button
          onClick={() => setActiveTab('verificatore')}
          className={`px-2.5 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'verificatore'
              ? 'bg-teal-100 text-teal-900 dark:bg-teal-950 dark:text-teal-200'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          Verificatore
        </button>
        <button
          onClick={() => setActiveTab('stacks')}
          className={`px-2.5 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'stacks'
              ? 'bg-teal-100 text-teal-900 dark:bg-teal-950 dark:text-teal-200'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          Stack Top
        </button>
        <button
          onClick={() => setActiveTab('fegato')}
          className={`px-2.5 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'fegato'
              ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          Fegato & Cicli
        </button>
        <button
          onClick={() => setActiveTab('promemoria')}
          className={`px-2.5 py-1.5 rounded-md whitespace-nowrap font-medium ${
            activeTab === 'promemoria'
              ? 'bg-teal-100 text-teal-900 dark:bg-teal-950 dark:text-teal-200'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          Promemoria ({reminderCount})
        </button>
      </div>
    </header>
  );
};
