import React from 'react';
import { X, Sun, Moon, Globe, Music, Info } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SettingsModal: React.FC = () => {
  const {
    isSettingsOpen,
    setIsSettingsOpen,
    theme,
    setTheme,
    language,
    setLanguage,
    t,
  } = useApp();

  if (!isSettingsOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-xs"
      onClick={() => setIsSettingsOpen(false)}
    >
      <div
        className="lyra-panel w-full max-w-md max-h-[calc(100dvh-2rem)] overflow-y-auto p-5 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-neutral-100 dark:border-neutral-800/80">
          <h2 id="settings-modal-title" className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {t('settingsTitle')}
          </h2>
          <button
            type="button"
            onClick={() => setIsSettingsOpen(false)}
            aria-label={t('close')}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-4 space-y-5">
          {/* Theme Option */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              <Sun className="w-3.5 h-3.5" />
              <span>{t('appearance')}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                  theme === 'light'
                    ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900 shadow-xs'
                    : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300'
                }`}
              >
                <Sun className="w-4 h-4" />
                <span>{t('themeLight')}</span>
              </button>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                  theme === 'dark'
                    ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900 shadow-xs'
                    : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300'
                }`}
              >
                <Moon className="w-4 h-4" />
                <span>{t('themeDark')}</span>
              </button>
            </div>
          </div>

          {/* Language Option */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              <Globe className="w-3.5 h-3.5" />
              <span>{t('language')}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`py-2.5 px-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                  language === 'en'
                    ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900 shadow-xs'
                    : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('my')}
                className={`py-2.5 px-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                  language === 'my'
                    ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900 shadow-xs'
                    : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300'
                }`}
              >
                မြန်မာ (Burmese)
              </button>
            </div>
          </div>

          {/* Notation System Info */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              <Music className="w-3.5 h-3.5" />
              <span>{t('notationSystem')}</span>
            </div>
            <div className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/40 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <p className="font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                Jianpu (Numbered Musical Notation)
              </p>
              <p className="text-neutral-500 dark:text-neutral-400">
                {t('notationJianpuDesc')}
              </p>
            </div>
          </div>

          {/* About Section */}
          <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              <Info className="w-3.5 h-3.5" />
              <span>{t('aboutLyra')}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
              <span>LYRA — {t('taglineShort')}</span>
              <span className="font-mono tabular-nums">v1.0.0</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex justify-end">
          <button
            type="button"
            onClick={() => setIsSettingsOpen(false)}
            className="px-4 py-2 text-sm font-semibold rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
          >
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  );
};
