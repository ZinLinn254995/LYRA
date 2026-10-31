import React from 'react';
import { Plus } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const EmptyState: React.FC = () => {
  const { setIsCreateModalOpen, t } = useApp();

  return (
    <div className="py-14 sm:py-20 px-4 text-center rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/40">
      {/* Musical Notation Glyphs Motif: 1 2 3 5 6 */}
      <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400 select-none">
        <span className="tracking-widest">1 · 2 · 3 · 5 · 6</span>
      </div>

      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1.5">
        {t('noSongsTitle')}
      </h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto mb-6 text-balance">
        {t('noSongsSubtitle')}
      </p>

      <button
        type="button"
        onClick={() => setIsCreateModalOpen(true)}
        className="lyra-button-secondary inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer"
      >
        <Plus className="w-4 h-4 text-amber-600 dark:text-amber-400" />
        <span>{t('createFirstSong')}</span>
      </button>
    </div>
  );
};
