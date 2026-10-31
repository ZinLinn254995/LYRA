import { Language } from '../types';
import { translations } from '../i18n/translations';

export function formatRelativeDate(isoDateString: string, lang: Language): string {
  try {
    const date = new Date(isoDateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    const t = translations[lang];

    if (diffMins < 5) {
      return t.justNow;
    }

    if (diffHours < 24 && date.getDate() === now.getDate()) {
      return t.today;
    }

    if (diffDays === 1 || (diffHours < 48 && date.getDate() === now.getDate() - 1)) {
      return t.yesterday;
    }

    if (diffDays < 7) {
      return `${diffDays} ${t.daysAgo}`;
    }

    // Standard short date format
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
    };
    
    return date.toLocaleDateString(lang === 'my' ? 'my-MM' : 'en-US', options);
  } catch {
    return isoDateString;
  }
}
