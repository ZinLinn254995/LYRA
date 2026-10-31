import React from 'react';
import { Sun, Moon, Settings } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LyraLogo } from './LyraLogo';

export const Header: React.FC = () => {
  const {
    theme,
    toggleTheme,
    language,
    setLanguage,
    setIsSettingsOpen,
    activeSongId,
    setActiveSongId,
    t,
  } = useApp();

  return (
    <header className="lyra-header sticky top-0 z-30 w-full border-b backdrop-blur-md transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 min-h-16 py-2 flex items-center justify-between gap-3">
        {/* Brand Zone */}
        <button
          type="button"
          onClick={() => {
            if (activeSongId) {
              setActiveSongId(null);
            }
          }}
          className="flex items-center gap-2.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 -ml-1 text-left"
          title={t('brandName')}
        >
          <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:border-amber-500/40 transition-colors">
            <LyraLogo size={20} className="text-amber-600 dark:text-amber-400" />
          </div>
          <span className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors whitespace-nowrap">
            {t('brandName')}
          </span>
        </button>

        {/* Controls Zone */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Language Switcher */}
          <div
            role="group"
            aria-label={t('toggleLanguageAria')}
            className="flex items-center p-0.5 rounded-lg bg-neutral-200/60 dark:bg-neutral-800/80 border border-neutral-300/50 dark:border-neutral-700/60 text-xs font-medium"
          >
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`h-8 px-2.5 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                language === 'en'
                  ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-xs font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
              title="English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('my')}
              className={`h-8 px-2.5 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                language === 'my'
                  ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow-xs font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
              title="မြန်မာ (Burmese)"
            >
              မြန်မာ
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t('toggleThemeAria')}
            className="w-10 h-10 min-w-[40px] min-h-[40px] sm:w-9 sm:h-9 flex items-center justify-center rounded-lg border border-neutral-200/80 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            title={theme === 'dark' ? t('themeLight') : t('themeDark')}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700" />
            )}
          </button>

          {/* Settings Entry */}
          <button
            type="button"
            onClick={() => setIsSettingsOpen(true)}
            aria-label={t('openSettingsAria')}
            className="w-10 h-10 min-w-[40px] min-h-[40px] sm:w-9 sm:h-9 flex items-center justify-center rounded-lg border border-neutral-200/80 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            title={t('settingsTitle')}
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
