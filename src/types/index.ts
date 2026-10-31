export type Language = 'en' | 'my';

export type Theme = 'light' | 'dark';

export interface Song {
  id: string;
  title: string;
  updatedAt: string; // ISO string
  createdAt: string; // ISO string
  key?: string; // e.g. "1 = C", "1 = D", "1 = G"
  timeSignature?: string; // e.g. "4/4", "3/4", "2/4"
  notesCount?: number;
}
