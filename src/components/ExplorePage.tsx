import React from 'react';
import { ArrowLeft, Music2 } from 'lucide-react';

type NoteEvent = { value: string; subdivision: 1 | 2 | 3 | 4; lyric: string };
type SampleBar = {
  number: number;
  section?: string;
  chordEvents: { beat: number; chord: string }[];
  beats: [NoteEvent[], NoteEvent[], NoteEvent[], NoteEvent[]];
};

const n = (values: string[], subdivision: 1 | 2 | 3 | 4, lyrics: string[]): NoteEvent[] =>
  values.map((value, index) => ({ value, subdivision, lyric: lyrics[index] ?? '' }));

// Jianpu note values: plain numeral = quarter; one underline = eighth;
// two underlines = sixteenth. Triplets are marked with a small 3 and bracket.
const masterSample: SampleBar[] = [
  { number: 1, section: 'A', chordEvents: [{ beat: 1, chord: 'C' }, { beat: 3, chord: 'G' }], beats: [
    n(['1'], 1, ['When']), n(['2', '3'], 2, ['the', 'morn']),
    n(['5', '6', '5'], 3, ['ing', 'sun', 'light']), n(['3', '2', '1', '2'], 4, ['shines', 'on', 'the', 'hills']),
  ]},
  { number: 2, chordEvents: [{ beat: 1, chord: 'Am' }, { beat: 3, chord: 'G' }], beats: [
    n(['6', '5'], 2, ['gen', 'tle']), n(['3'], 1, ['breeze']),
    n(['2', '3', '4'], 3, ['is', 'car', 'ry']), n(['5', '4', '3', '2'], 4, ['my', 'dreams', 'a', 'way']),
  ]},
  { number: 3, chordEvents: [{ beat: 1, chord: 'F' }, { beat: 3, chord: 'C' }], beats: [
    n(['4'], 1, ['Through']), n(['5', '6'], 2, ['the', 'qui']),
    n(['5', '4', '3'], 3, ['et', 'morn', 'ing']), n(['2', '3', '4', '5'], 4, ['I', 'find', 'my', 'song']),
  ]},
  { number: 4, chordEvents: [{ beat: 1, chord: 'G' }, { beat: 3, chord: 'C' }], beats: [
    n(['5', '3'], 2, ['and', 'let']), n(['2'], 1, ['it']),
    n(['1', '2', '3'], 3, ['rise', 'a', 'bove']), n(['5', '4', '3', '1'], 4, ['the', 'world', 'to', 'day']),
  ]},
  { number: 5, section: 'B', chordEvents: [{ beat: 1, chord: 'F' }, { beat: 3, chord: 'C' }], beats: [
    n(['4'], 1, ['Now']), n(['4', '5'], 2, ['the', 'riv']),
    n(['6', '5', '4'], 3, ['er', 'turns', 'and']), n(['3', '4', '5', '6'], 4, ['the', 'sky', 'opens', 'wide']),
  ]},
  { number: 6, chordEvents: [{ beat: 1, chord: 'Am' }, { beat: 3, chord: 'G' }], beats: [
    n(['6', '5'], 2, ['I', 'can']), n(['4'], 1, ['see']),
    n(['3', '2', '1'], 3, ['a', 'new', 'day']), n(['2', '3', '4', '5'], 4, ['wait', 'ing', 'there', 'for']),
  ]},
  { number: 7, chordEvents: [{ beat: 1, chord: 'F' }, { beat: 3, chord: 'G' }], beats: [
    n(['6'], 1, ['me']), n(['5', '4'], 2, ['with', 'hope']),
    n(['3', '4', '5'], 3, ['and', 'har', 'mo']), n(['6', '5', '4', '2'], 4, ['ny', 'in', 'ev', 'ery']),
  ]},
  { number: 8, chordEvents: [{ beat: 1, chord: 'C' }], beats: [
    n(['1'], 1, ['song']), n(['1', '2'], 2, ['we', 'sing']),
    n(['3', '2', '1'], 3, ['to', 'geth', 'er']), n(['1'], 1, ['—']),
  ]},
];

const NoteToken: React.FC<{ note: NoteEvent }> = ({ note }) => (
  <span className="relative inline-flex min-w-[0.7em] flex-col items-center justify-end px-[0.12em]">
    {note.subdivision === 3 && <span className="absolute -top-[0.65em] text-[6px] leading-none">3</span>}
    <span className="relative text-[12px] sm:text-[14px] leading-[1.1] font-normal text-stone-900">
      {note.value}
      {note.subdivision === 2 && <span className="absolute left-0 right-0 -bottom-[2px] border-b border-stone-900" />}
      {note.subdivision === 4 && <span className="absolute left-0 right-0 -bottom-[2px] border-b border-stone-900 after:content-[''] after:absolute after:left-0 after:right-0 after:top-[2px] after:border-b after:border-stone-900" />}
    </span>
    <span className="mt-[5px] text-[7px] sm:text-[8px] leading-none text-stone-600 whitespace-nowrap">{note.lyric}</span>
  </span>
);

const ScoreBar: React.FC<{ bar: SampleBar; first: boolean; last: boolean }> = ({ bar, first, last }) => {
  const events = bar.beats.flat();
  return (
    <div className={`relative min-w-0 px-1 ${first ? 'border-l border-stone-700' : ''} ${last ? 'border-r-2 border-stone-700' : 'border-r border-stone-400'}`}>
      {bar.section && <span className="absolute -top-4 left-1 text-[8px] text-stone-500">{bar.section}</span>}
      <div className="relative flex h-[17px] items-end">
        {bar.chordEvents.map((event) => {
          const preceding = bar.beats.slice(0, event.beat - 1).flat().length;
          const total = events.length;
          return <span key={event.beat} className="absolute bottom-0 text-[8px] sm:text-[9px] text-stone-700" style={{ left: `${(preceding / Math.max(total, 1)) * 100}%` }}>{event.chord}</span>;
        })}
      </div>
      <div className="flex min-h-[34px] items-end justify-around whitespace-nowrap">
        {events.map((note, index) => <NoteToken key={index} note={note} />)}
      </div>
    </div>
  );
};

export const ExplorePage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <main className="w-full max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
    <div className="flex items-center justify-between gap-3 mb-4">
      <button onClick={onBack} className="lyra-button-secondary inline-flex items-center gap-2 px-3 py-2 text-sm">
        <ArrowLeft className="w-4 h-4" /> Back
      </button>
      <span className="text-xs text-neutral-500 inline-flex items-center gap-1"><Music2 className="w-3.5 h-3.5" /> LYRA Master Sample</span>
    </div>
    <article className="mx-auto max-w-5xl bg-[#fffefa] text-stone-900 border border-stone-200 shadow-sm px-3 py-5 sm:px-8 sm:py-8">
      <header className="text-center pb-3 mb-5">
        <div className="text-[8px] tracking-wide text-stone-500 mb-1">LYRA</div>
        <h1 className="font-serif text-lg sm:text-xl font-medium">A Song for the Morning</h1>
        <p className="text-[9px] text-stone-600 mt-1">1=C　　4/4　　♩=96</p>
      </header>
      <div className="space-y-7">
        {[masterSample.slice(0, 4), masterSample.slice(4, 8)].map((system, systemIndex) => (
          <section key={systemIndex} className="pt-3">
            <div className="grid grid-cols-4 border-y border-stone-400 py-1">
              {system.map((bar, index) => <ScoreBar key={bar.number} bar={bar} first={index === 0} last={index === system.length - 1} />)}
            </div>
          </section>
        ))}
      </div>
    </article>
  </main>
);
