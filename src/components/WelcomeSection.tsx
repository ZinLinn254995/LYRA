import React from 'react';
import { useApp } from '../context/AppContext';

export const WelcomeSection: React.FC = () => {
  const { t } = useApp();

  return (
    <section className="pt-8 pb-4 text-left">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 text-balance">
        {t('welcomeTitle')}
      </h1>
      <p className="mt-1.5 text-base sm:text-lg text-neutral-500 dark:text-neutral-400 font-normal">
        {t('welcomeSubtitle')}
      </p>
    </section>
  );
};
