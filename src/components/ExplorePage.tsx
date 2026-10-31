import React from 'react';
import { ArrowLeft, Music2 } from 'lucide-react';

type SampleBar = {
  number: number;
  section?: string;
  chords: string[];
  notes: string[];
  lyrics: string[];
};

const masterSample: SampleBar[] = [
  { number: 1, section: 'A', chords: ['C', '', 'G', ''], notes: ['1', '2', '3', '5'], lyrics: ['When', 'the', 'morn', 'ing'] },
  { number: 2, chords: ['G', '', 'D', ''], notes: ['5', '3', '2', '1'], lyrics: ['sun', 'light', 'fills', 'the'] },
  { number: 3, chords: ['Am', '', 'Em', ''], notes: ['6', '6', '5', '3'], lyrics: ['qui', 'et', 'morn', 'ing'] },
  { number: 4, chords: ['G', '', 'C', ''], notes: ['2', '3', '2', '1'], lyrics: ['with', 'a', 'gen', 'tle'] },
  { number: 5, section: 'B', chords: ['F', '', 'C', ''], notes: ['4', '4', '5', '6'], lyrics: ['breeze', 'that', 'calls', 'me'] },
  { number: 6, chords: ['C', '', 'G', ''], notes: ['5', '3', '2', '1'], lyrics: ['out', 'to', 'the', 'wide'] },
  { number: 7, chords: ['G', '', 'D', ''], notes: ['2', '2', '3', '5'], lyrics: ['world', 'where', 'dreams', 'can'] },
  { number: 8, chords: ['C', '', 'C', ''], notes: ['3', '2', '1', '1'], lyrics: ['come', 'a', 'live', '—'] },
];

const ScoreBar: React.FC<{ bar: SampleBar; first: boolean; last: boolean }> = ({ bar, first, last }) => (
  <div className={`relative min-w-0 border-stone-400 ${first ? 'border-l-2' : ''} ${last ? 'border-r-2' : 'border-r'}`}>
    {bar.section && <div className="absolute -top-5 left-1 text-[10px] font-semibold text-stone-500">{bar.section}</div>}
    <div className="grid grid-rows-[28px_42px_28px]">
      <div className="grid grid-cols-4 items-center text-center text-[10px] sm:text-xs font-medium text-stone-700">
        {bar.chords.map((chord, index) => <span key={index} className="min-w-0">{chord}</span>)}
      </div>
      <div className="grid grid-cols-4 items-center text-center text-lg sm:text-xl font-medium text-stone-900 border-y border-stone-200">
        {bar.notes.map((note, index) => <span key={index}>{note}</span>)}
      </div>
      <div className="grid grid-cols-4 items-center text-center text-[9px] sm:text-xs text-stone-600">
        {bar.lyrics.map((word, index) => <span key={index} className="min-w-0">{word}</span>)}
      </div>
    </div>
  </div>
);

export const ExplorePage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <main className="w-full max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
    <div className="flex items-center justify-between gap-3 mb-4">
      <button onClick={onBack} className="lyra-button-secondary inline-flex items-center gap-2 px-3 py-2 text-sm">
        <ArrowLeft className="w-4 h-4" /> Back
      </button>
      <span className="text-xs text-neutral-500 inline-flex items-center gap-1"><Music2 className="w-3.5 h-3.5" /> LYRA Master Sample</span>
    </div>

    <article className="mx-auto max-w-5xl bg-[#fffefa] text-stone-900 border border-stone-200 shadow-sm px-4 py-5 sm:px-8 sm:py-8">
      <header className="text-center border-b border-stone-300 pb-4 mb-8">
        <div className="text-[9px] uppercase tracking-[0.25em] text-stone-500 mb-2">LYRA · Numbered Musical Notation</div>
        <h1 className="font-serif text-2xl sm:text-3xl font-semibold">A Song for the Morning</h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2">Composer: LYRA Sample</p>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-[10px] sm:text-xs text-stone-600 mt-3">
          <span>1=C</span><span>4/4</span><span>♩ = 96</span>
        </div>
      </header>

      <div className="space-y-10">
        {[masterSample.slice(0, 4), masterSample.slice(4, 8)].map((system, systemIndex) => (
          <section key={systemIndex} className="pt-5">
            <div className="grid grid-cols-4 gap-0 border-y border-stone-400 py-1">
              {system.map((bar, index) => (
                <ScoreBar key={bar.number} bar={bar} first={index === 0} last={index === system.length - 1} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
    <p className="text-center text-xs text-neutral-500 mt-3">Each beat aligns vertically across chord, numbered note and lyric rows.</p>
  </main>
);
