import React from 'react';
import { Plus } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CreateSongButton: React.FC = () => {
  const { setIsCreateModalOpen, t } = useApp();

  return (
    <div className="pt-2 pb-6">
      <button
        type="button"
        onClick={() => setIsCreateModalOpen(true)}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:hover:bg-white dark:text-neutral-900 font-semibold text-base shadow-sm hover:shadow active:scale-[0.99] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
      >
        <div className="w-5 h-5 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center">
          <Plus className="w-4 h-4 stroke-[2.5]" />
        </div>
        <span>{t('createSong')}</span>
      </button>
    </div>
  );
};
