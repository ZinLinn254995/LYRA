/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { WelcomeSection } from './components/WelcomeSection';
import { CreateSongButton } from './components/CreateSongButton';
import { RecentSongsList } from './components/RecentSongsList';
import { CreateSongModal } from './components/CreateSongModal';
import { SettingsModal } from './components/SettingsModal';
import { SongViewPlaceholder } from './components/SongViewPlaceholder';

const HomeScreen: React.FC = () => {
  const { activeSongId } = useApp();

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col transition-colors selection:bg-amber-500/20 selection:text-amber-800 dark:selection:text-amber-200">
      {/* Top Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6">
        {activeSongId ? (
          <SongViewPlaceholder />
        ) : (
          <div className="w-full py-4 sm:py-6">
            {/* Welcome Section */}
            <WelcomeSection />

            {/* Primary Action */}
            <CreateSongButton />

            {/* Recent Songs */}
            <RecentSongsList />
          </div>
        )}
      </main>

      {/* Modals */}
      <CreateSongModal />
      <SettingsModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <HomeScreen />
    </AppProvider>
  );
}
