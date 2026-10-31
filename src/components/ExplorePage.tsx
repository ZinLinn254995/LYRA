import React from 'react';
import { ArrowLeft, Music2 } from 'lucide-react';

type Beat = {
  chord?: string;
  notes: string[];
  lyrics: string[];
};
type SampleBar = {
  number: number;
  section?: string;
  beats: [Beat, Beat, Beat, Beat];
};

// Each beat demonstrates 1, 2, 3 (triplet), or 4 notes.
// One note = quarter; two = eighths; three = triplet eighths; four = sixteenths.
const masterSample: SampleBar[] = [
  {
    number: 1, section: 'A',
    beats: [
      { chord: 'C', notes: ['1'], lyrics: ['When'] },
      { notes: ['2', '3'], lyrics: ['the', 'morn'] },
      { chord: 'G', notes: ['5', '6', '5'], lyrics: ['ing', 'sun', 'light'] },
      { notes: ['3', '2', '1', '2'], lyrics: ['shines', 'on', 'the', 'hills'] },
    ],
  },
  {
    number: 2,
    beats: [
      { chord: 'Am', notes: ['6', '5'], lyrics: ['gen', 'tle'] },
      { notes: ['3'], lyrics: ['breez'] },
      { chord: 'G', notes: ['2', '3', '4'], lyrics: ['es', 'car', 'ry'] },
      { notes: ['5', '4', '3', '2'], lyrics: ['my', 'dreams', 'a', 'way'] },
    ],
  },
  {
    number: 3,
    beats: [
      { chord: 'F', notes: ['4'], lyrics: ['Through'] },
      { notes: ['5', '6'], lyrics: ['the', 'qui'] },
      { chord: 'C', notes: ['5', '4', '3'], lyrics: ['et', 'morn', 'ing'] },
      { notes: ['2', '3', '4', '5'], lyrics: ['I', 'find', 'my', 'song'] },
    ],
  },
  {
    number: 4,
    beats: [
      { chord: 'G', notes: ['5', '3'], lyrics: ['and', 'let'] },
      { notes: ['2'], lyrics: ['it'] },
      { chord: 'C', notes: ['1', '2', '3'], lyrics: ['rise', 'a', 'bove'] },
      { notes: ['5', '4', '3', '1'], lyrics: ['the', 'world', 'to', 'day'] },
    ],
  },
  {
    number: 5, section: 'B',
    beats: [
      { chord: 'F', notes: ['4'], lyrics: ['Now'] },
      { notes: ['4', '5'], lyrics: ['the', 'riv'] },
      { chord: 'C', notes: ['6', '5', '4'], lyrics: ['er', 'turns', 'and'] },
      { notes: ['3', '4', '5', '6'], lyrics: ['the', 'sky', 'opens', 'wide'] },
    ],
  },
  {
    number: 6,
    beats: [
      { chord: 'Am', notes: ['6', '5'], lyrics: ['I', 'can'] },
      { notes: ['4'], lyrics: ['see'] },
      { chord: 'G', notes: ['3', '2', '1'], lyrics: ['a', 'new', 'day'] },
      { notes: ['2', '3', '4', '5'], lyrics: ['wait', 'ing', 'there', 'for'] },
    ],
  },
  {
    number: 7,
    beats: [
      { chord: 'F', notes: ['6'], lyrics: ['me'] },
      { notes: ['5', '4'], lyrics: ['with', 'hope'] },
      { chord: 'G', notes: ['3', '4', '5'], lyrics: ['and', 'har', 'mo'] },
      { notes: ['6', '5', '4', '2'], lyrics: ['ny', 'in', 'ev', 'ery'] },
    ],
  },
  {
    number: 8,
    beats: [
      { chord: 'C', notes: ['1'], lyrics: ['song'] },
      { notes: ['1', '2'], lyrics: ['we', 'sing'] },
      { chord: 'C', notes: ['3', '2', '1'], lyrics: ['to', 'geth', 'er'] },
      { notes: ['1', '—'], lyrics: ['—', '—'] },
    ],
  },
];

const BeatCell: React.FC<{ beat: Beat }> = ({ beat }) => {
  const count = beat.notes.length;
  return (
    <div className="grid min-w-0 grid-rows-[24px_42px_25px] border-r border-stone-200 last:border-r-0">
      <div className="flex items-center justify-center text-[10px] sm:text-xs font-medium text-stone-700 whitespace-nowrap">
        {beat.chord || ''}
      </div>
      <div className="relative flex items-center justify-around border-y border-stone-200 px-0.5">
        {count === 3 && <span className="absolute top-0 text-[7px] leading-none text-stone-500">3</span>}
        {beat.notes.map((note, index) => (
          <span key={index} className="relative flex-1 text-center text-base sm:text-xl font-medium text-stone-900">
            <span className={count === 2 ? 'border-b border-stone-800 pb-0.5' : count === 4 ? 'border-b-2 border-double border-stone-800 pb-0.5' : ''}>{note}</span>
          </span>
        ))}
      </div>
      <div className="flex items-center justify-around px-0.5 text-[8px] sm:text-[10px] text-stone-600">
        {beat.lyrics.map((word, index) => <span key={index} className="flex-1 min-w-0 text-center">{word}</span>)}
      </div>
    </div>
  );
};

const ScoreBar: React.FC<{ bar: SampleBar; first: boolean; last: boolean }> = ({ bar, first, last }) => (
  <div className={`relative min-w-0 border-stone-500 ${first ? 'border-l-2' : ''} ${last ? 'border-r-2' : 'border-r'}`}>
    {bar.section && <div className="absolute -top-5 left-1 text-[10px] font-semibold text-stone-500">{bar.section}</div>}
    <div className="grid grid-cols-4">
      {bar.beats.map((beat, index) => <BeatCell key={index} beat={beat} />)}
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
              {system.map((bar, index) => <ScoreBar key={bar.number} bar={bar} first={index === 0} last={index === system.length - 1} />)}
            </div>
          </section>
        ))}
      </div>
    </article>
    <p className="text-center text-xs text-neutral-500 mt-3">Each beat shows one to four notes, with lyrics aligned to each note.</p>
  </main>
);
