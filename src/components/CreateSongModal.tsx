import React, { useState, useEffect, useRef } from 'react';
import { X, Music } from 'lucide-react';
import { useApp } from '../context/AppContext';

const COMMON_KEYS = ['1 = C', '1 = D', '1 = E', '1 = F', '1 = G', '1 = A', '1 = B'];

export const CreateSongModal: React.FC = () => {
  const { isCreateModalOpen, setIsCreateModalOpen, createSong, setActiveSongId, t } = useApp();
  const [title, setTitle] = useState('');
  const [selectedKey, setSelectedKey] = useState<string>('1 = C');
  const [includeKey, setIncludeKey] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isCreateModalOpen) {
      setTitle('');
      setSelectedKey('1 = C');
      setIncludeKey(true);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isCreateModalOpen]);

  if (!isCreateModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalKey = includeKey ? selectedKey : undefined;
    const newSong = createSong(title, finalKey);
    setIsCreateModalOpen(false);
    setActiveSongId(newSong.id);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="create-song-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
      onClick={() => setIsCreateModalOpen(false)}
    >
      <div
        className="lyra-panel w-full max-w-md max-h-[calc(100dvh-2rem)] overflow-y-auto p-5 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800/80">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Music className="w-4 h-4" />
            </div>
            <h2 id="create-song-modal-title" className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {t('newSongModalTitle')}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCreateModalOpen(false)}
            aria-label={t('close')}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {/* Song Title Input */}
          <div>
            <label htmlFor="song-title-input" className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
              {t('songTitlePlaceholder')}
            </label>
            <input
              id="song-title-input"
              ref={inputRef}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t('defaultTitle')}
              className="lyra-input text-sm transition-all"
            />
          </div>

          {/* Key Selection */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {t('selectKeyLabel')}
              </span>
              <button
                type="button"
                onClick={() => setIncludeKey(!includeKey)}
                className="text-xs text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
              >
                {includeKey ? t('noKey') : t('selectKeyLabel')}
              </button>
            </div>

            {includeKey ? (
              <div className="grid grid-cols-4 gap-1.5">
                {COMMON_KEYS.map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setSelectedKey(k)}
                    className={`py-2 px-2 text-xs font-mono font-medium rounded-lg border transition-all cursor-pointer ${
                      selectedKey === k
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 border-neutral-900 dark:border-white shadow-xs'
                        : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-neutral-800/50'
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-2.5 rounded-lg border border-dashed border-neutral-200 dark:border-neutral-800 text-center text-xs text-neutral-400">
                {t('noKey')}
              </div>
            )}
          </div>

          {/* Modal Actions */}
          <div className="pt-2 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={() => setIsCreateModalOpen(false)}
              className="px-4 py-2.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-colors cursor-pointer"
            >
              {t('cancel')}
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white dark:text-neutral-900 rounded-xl shadow-xs transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              {t('create')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
