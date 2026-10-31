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
        className="lyra-button-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-3 font-semibold text-base shadow-sm active:scale-[0.99] transition-all cursor-pointer"
      >
        <div className="w-5 h-5 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center">
          <Plus className="w-4 h-4 stroke-[2.5]" />
        </div>
        <span>{t('createSong')}</span>
      </button>
    </div>
  );
};
