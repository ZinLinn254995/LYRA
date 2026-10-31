import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, Theme, Song } from '../types';
import { translations, TranslationKey } from '../i18n/translations';

interface AppContextType {
  theme: Theme;
  language: Language;
  songs: Song[];
  activeSong: Song | null;
  activeSongId: string | null;
  isCreateModalOpen: boolean;
  isSettingsOpen: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  setIsCreateModalOpen: (open: boolean) => void;
  setIsSettingsOpen: (open: boolean) => void;
  setActiveSongId: (id: string | null) => void;
  createSong: (title: string, musicalKey?: string) => Song;
  deleteSong: (id: string) => void;
  updateSong: (id: string, updates: Partial<Song>) => void;
  t: (key: TranslationKey) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY_THEME = 'lyra_theme';
const STORAGE_KEY_LANG = 'lyra_lang';
const STORAGE_KEY_SONGS = 'lyra_songs';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_THEME);
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  // Language state
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_LANG);
      if (saved === 'en' || saved === 'my') return saved;
    }
    return 'en';
  });

  // Songs state (clean empty default)
  const [songs, setSongs] = useState<Song[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY_SONGS);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) return parsed;
        }
      } catch {
        // Fallback to empty on parse error
      }
    }
    return [];
  });

  // Navigation / Modal state
  const [activeSongId, setActiveSongId] = useState<string | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Sync theme changes to DOM and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(STORAGE_KEY_THEME, theme);
  }, [theme]);

  // Sync language changes to DOM and localStorage
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem(STORAGE_KEY_LANG, language);
  }, [language]);

  // Sync songs changes to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_SONGS, JSON.stringify(songs));
  }, [songs]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'my' : 'en'));
  };

  const createSong = (title: string, musicalKey?: string): Song => {
    const trimmedTitle = title.trim();
    const finalTitle = trimmedTitle || translations[language].defaultTitle;
    const now = new Date().toISOString();
    
    const newSong: Song = {
      id: 'song_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      title: finalTitle,
      updatedAt: now,
      createdAt: now,
      key: musicalKey?.trim() ? musicalKey.trim() : undefined,
    };

    setSongs((prev) => [newSong, ...prev]);
    return newSong;
  };

  const deleteSong = (id: string) => {
    setSongs((prev) => prev.filter((song) => song.id !== id));
    if (activeSongId === id) {
      setActiveSongId(null);
    }
  };

  const updateSong = (id: string, updates: Partial<Song>) => {
    setSongs((prev) =>
      prev.map((song) =>
        song.id === id
          ? { ...song, ...updates, updatedAt: new Date().toISOString() }
          : song
      )
    );
  };

  const activeSong = songs.find((s) => s.id === activeSongId) || null;

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || '';
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        language,
        songs,
        activeSong,
        activeSongId,
        isCreateModalOpen,
        isSettingsOpen,
        setTheme,
        toggleTheme,
        setLanguage,
        toggleLanguage,
        setIsCreateModalOpen,
        setIsSettingsOpen,
        setActiveSongId,
        createSong,
        deleteSong,
        updateSong,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
