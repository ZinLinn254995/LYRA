export type Language = 'en' | 'my';

export type Theme = 'light' | 'dark';

export interface Bar {
  id: string;
  timeSignature: string;
  notes: string[];
}

export interface Song {
  id: string;
  title: string;
  composer?: string;
  artist?: string;
  jianpuReference: string;
  songKey?: string;
  key?: string; // Legacy alias kept for existing songs.
  timeSignature: string;
  tempo: number;
  bars: Bar[];
  updatedAt: string; // ISO string
  createdAt: string; // ISO string
  notesCount?: number;
}
