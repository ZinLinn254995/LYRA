import React, { useState } from 'react';
import { ArrowLeft, Trash2, Edit2, Check, Music } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { formatRelativeDate } from '../utils/date';

export const SongViewPlaceholder: React.FC = () => {
  const { activeSong, setActiveSongId, updateSong, deleteSong, language, t } = useApp();
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');

  if (!activeSong) return null;

  const handleStartRename = () => {
    setEditedTitle(activeSong.title);
    setIsEditingTitle(true);
  };

  const handleSaveRename = () => {
    if (editedTitle.trim()) {
      updateSong(activeSong.id, { title: editedTitle.trim() });
    }
    setIsEditingTitle(false);
  };

  const handleDelete = () => {
    if (window.confirm(`${t('confirmDelete')}\n${t('deleteWarning')}`)) {
      deleteSong(activeSong.id);
    }
  };

  const relativeDate = formatRelativeDate(activeSong.updatedAt, language);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-6 animate-fadeIn">
      {/* Navigation back bar */}
      <div className="flex items-center justify-between pb-6 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <button
          type="button"
          onClick={() => setActiveSongId(null)}
          className="inline-flex items-center gap-2 px-3 py-2 -ml-3 rounded-lg text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('backToHome')}</span>
        </button>

        <button
          type="button"
          onClick={handleDelete}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
          title={t('deleteSong')}
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>{t('deleteSong')}</span>
        </button>
      </div>

      {/* Song Header Details */}
      <div className="pt-6 pb-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {isEditingTitle ? (
              <div className="flex items-center gap-2 max-w-md">
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSaveRename();
                    if (e.key === 'Escape') setIsEditingTitle(false);
                  }}
                  className="w-full px-3 py-1.5 rounded-lg border border-amber-500 bg-white dark:bg-neutral-900 text-lg font-bold text-neutral-900 dark:text-neutral-100 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleSaveRename}
                  className="p-2 rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                >
                  <Check className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                  {activeSong.title}
                </h1>
                <button
                  type="button"
                  onClick={handleStartRename}
                  className="p-1.5 rounded-md text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  title={t('rename')}
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Song Clean Metadata */}
            <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-2">
              {activeSong.key && (
                <>
                  <span className="font-mono font-medium text-amber-600 dark:text-amber-400">
                    {t('keyLabel')}: {activeSong.key}
                  </span>
                  <span aria-hidden="true">·</span>
                </>
              )}
              <span>
                {t('lastEdited')} {relativeDate}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Next-Step Placeholder Studio Workspace */}
      <div className="p-8 sm:p-12 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 text-center shadow-xs">
        <div className="w-12 h-12 mx-auto rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
          <Music className="w-6 h-6" />
        </div>

        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          {t('editorPlaceholderTitle')}
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-6 leading-relaxed">
          {t('editorComingSoon')}
        </p>

        {/* Preview of future Jianpu format */}
        <div className="max-w-xs mx-auto p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 font-mono text-xs text-neutral-600 dark:text-neutral-300 mb-6 select-none">
          <div className="flex justify-between text-neutral-400 dark:text-neutral-500 text-[11px] mb-1">
            <span>{activeSong.key || '1 = C'}</span>
            <span>4/4</span>
          </div>
          <div className="tracking-widest font-semibold py-1">
            | 1 2 3 - | 5 3 2 1 | 6 - - - |
          </div>
        </div>

        <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-6">
          {t('editorSaveNote')}
        </p>

        <button
          type="button"
          onClick={() => setActiveSongId(null)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:hover:bg-white dark:text-neutral-900 font-semibold text-sm transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('backToHome')}</span>
        </button>
      </div>
    </div>
  );
};
