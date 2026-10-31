import React, { useState } from 'react';
import { ChevronRight, Trash2, Music } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { EmptyState } from './EmptyState';
import { formatRelativeDate } from '../utils/date';
import { Song } from '../types';

export const RecentSongsList: React.FC = () => {
  const { songs, language, setActiveSongId, deleteSong, t } = useApp();
  const [songToDelete, setSongToDelete] = useState<Song | null>(null);

  if (songs.length === 0) {
    return (
      <section className="pt-2 pb-12">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            {t('recentSongs')}
          </h2>
        </div>
        <EmptyState />
      </section>
    );
  }

  return (
    <section className="pt-2 pb-12">
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          {t('recentSongs')}
        </h2>
        <span className="text-xs text-neutral-600 dark:text-neutral-400 font-mono tabular-nums">
          {songs.length}
        </span>
      </div>

      <div className="divide-y divide-neutral-200/80 dark:divide-neutral-800/80 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-900/60 overflow-hidden shadow-xs">
        {songs.map((song) => {
          const relativeDate = formatRelativeDate(song.updatedAt, language);

          return (
            <div
              key={song.id}
              className="group flex items-center justify-between gap-3 p-3.5 sm:p-4 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/50 transition-colors"
            >
              {/* Left clickable trigger area */}
              <button
                type="button"
                onClick={() => setActiveSongId(song.id)}
                className="flex items-center gap-3.5 flex-1 min-w-0 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 -m-1"
                title={`${t('openSong')}: ${song.title}`}
              >
                {/* Minimal Music Icon Indicator */}
                <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800/90 border border-neutral-200/60 dark:border-neutral-700/60 flex items-center justify-center shrink-0 text-neutral-500 dark:text-neutral-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 group-hover:border-amber-500/30 transition-colors">
                  <Music className="w-4 h-4" />
                </div>

                {/* Song Title and Clean Metadata */}
                <div className="min-w-0 flex-1">
                  <div className="text-base font-medium text-neutral-900 dark:text-neutral-100 truncate group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {song.title}
                  </div>

                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center flex-wrap gap-x-2 gap-y-0.5 text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {song.key && (
                      <>
                        <span className="font-mono text-neutral-700 dark:text-neutral-300 font-medium">
                          {song.key}
                        </span>
                        <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
                      </>
                    )}
                    <span>
                      {t('lastEdited')} {relativeDate}
                    </span>
                  </div>
                </div>
              </button>

              {/* Right action controls */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSongToDelete(song);
                  }}
                  aria-label={`${t('deleteSongAria')} ${song.title}`}
                  className="w-9 h-9 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-lg text-neutral-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  title={t('deleteSong')}
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveSongId(song.id)}
                  aria-label={`${t('openSong')}: ${song.title}`}
                  className="w-9 h-9 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-lg text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Delete Confirmation Dialog */}
      {songToDelete && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
          onClick={() => setSongToDelete(null)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-5 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
              {t('confirmDelete')}
            </h3>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              "{songToDelete.title}" — {t('deleteWarning')}
            </p>

            <div className="mt-5 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setSongToDelete(null)}
                className="px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
              >
                {t('cancel')}
              </button>
              <button
                type="button"
                onClick={() => {
                  deleteSong(songToDelete.id);
                  setSongToDelete(null);
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors cursor-pointer"
              >
                {t('deleteSong')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
