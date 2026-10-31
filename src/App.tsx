/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { WelcomeSection } from './components/WelcomeSection';
import { CreateSongButton } from './components/CreateSongButton';
import { RecentSongsList } from './components/RecentSongsList';
import { CreateSongModal } from './components/CreateSongModal';
import { SettingsModal } from './components/SettingsModal';
import { SongViewPlaceholder } from './components/SongViewPlaceholder';
import { ExplorePage } from './components/ExplorePage';

const HomeScreen: React.FC = () => {
  const { activeSongId, createSong, updateSong } = useApp();
  const [showExplore, setShowExplore] = useState(false);

  return (
    <div className="lyra-shell min-h-screen flex flex-col transition-colors selection:bg-amber-500/20">
      <Header />
      {showExplore && !activeSongId ? (
        <ExplorePage onBack={() => setShowExplore(false)} />
      ) : (
        <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6">
          {activeSongId ? (
            <SongViewPlaceholder />
          ) : (
            <div className="w-full py-4 sm:py-6">
              <WelcomeSection />
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <CreateSongButton />
                <button type="button" onClick={() => setShowExplore(true)} className="lyra-button-secondary inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold">
                  Explore
                </button>
              </div>
              <RecentSongsList />
            </div>
          )}
        </main>
      )}
      <CreateSongModal />
      <SettingsModal />
    </div>
  );
};

export default function App() {
  return <AppProvider><HomeScreen /></AppProvider>;
}
