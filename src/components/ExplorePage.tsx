import React from 'react';
import { ArrowLeft, Music2 } from 'lucide-react';

type Cell = { text?: string; span?: number; className?: string };
type Track = { label: string; cells: Cell[] };
type SampleBar = {
  number: number;
  section?: string;
  tracks: [Track, Track, Track];
  marks?: string[];
};

const masterSample: SampleBar[] = [
  {
    number: 1, section: 'A · Theme',
    tracks: [
      { label: 'Chord', cells: [{ text: 'Cmaj7', span: 2 }, {}, { text: 'G/B', span: 2 }, {}, { text: 'Am7', span: 2 }, {}, { text: 'G7', span: 2 }] },
      { label: 'Jianpu', cells: [{ text: '1', className: 'note' }, { text: '2̇', className: 'note' }, { text: '3', className: 'note' }, { text: '♯4', className: 'note' }, { text: '5', className: 'note' }, { text: '6̣', className: 'note' }, { text: '5', className: 'note' }, { text: '3', className: 'note' }] },
      { label: 'Lyric', cells: [{ text: 'When' }, { text: 'the' }, { text: 'morn' }, { text: 'ing' }, { text: 'light' }, { text: 'is' }, { text: 'shin' }, { text: 'ing' }] },
    ],
    marks: ['p', '⌒', 'breath']
  },
  {
    number: 2,
    tracks: [
      { label: 'Chord', cells: [{ text: 'Fmaj7', span: 2 }, {}, { text: 'C/E', span: 2 }, {}, { text: 'Dm7', span: 2 }, {}, { text: 'G7sus4', span: 2 }, {}] },
      { label: 'Jianpu', cells: [{ text: '4', className: 'note' }, { text: '5', className: 'note' }, { text: '6', className: 'note' }, { text: '5', className: 'note' }, { text: '4', className: 'note' }, { text: '3', className: 'note' }, { text: '2', className: 'note' }, { text: '1̇', className: 'note' }] },
      { label: 'Lyric', cells: [{ text: 'gen' }, { text: 'tle' }, { text: 'breez' }, { text: 'es' }, { text: 'car' }, { text: 'ry' }, { text: 'me' }, { text: 'home' }] },
    ],
    marks: ['crescendo', 'tie']
  },
  {
    number: 3,
    tracks: [
      { label: 'Chord', cells: [{ text: 'Am', span: 2 }, {}, { text: 'Am/G', span: 2 }, {}, { text: 'D/F♯', span: 2 }, {}, { text: 'Fmaj7', span: 2 }, {}] },
      { label: 'Jianpu', cells: [{ text: '6', className: 'note' }, { text: '6', className: 'note' }, { text: '5', className: 'note' }, { text: '—', className: 'duration' }, { text: '4·', className: 'note' }, { text: '3', className: 'note' }, { text: '2', className: 'note' }, { text: '0', className: 'note' }] },
      { label: 'Lyric', cells: [{ text: 'Through' }, { text: 'the' }, { text: 'qui' }, { text: 'et' }, { text: 'af' }, { text: 'ter' }, { text: 'noon' }, { text: '—' }] },
    ],
    marks: ['mp', 'staccato']
  },
  {
    number: 4,
    tracks: [
      { label: 'Chord', cells: [{ text: 'G7', span: 2 }, {}, { text: 'C', span: 2 }, {}, { text: 'C/E', span: 2 }, {}, { text: 'G7', span: 2 }, {}] },
      { label: 'Jianpu', cells: [{ text: '5', className: 'note' }, { text: '4', className: 'note' }, { text: '3', className: 'note' }, { text: '2', className: 'note' }, { text: '1', className: 'note' }, { text: '—', className: 'duration' }, { text: '1', className: 'note' }, { text: '—', className: 'duration' }] },
      { label: 'Lyric', cells: [{ text: 'ev' }, { text: 'ery' }, { text: 'thing' }, { text: 'feels' }, { text: 'like' }, { text: 'home' }, { text: 'to' }, { text: 'me' }] },
    ],
    marks: ['rit.', '𝄐']
  },
  {
    number: 5, section: 'B · Contrast',
    tracks: [
      { label: 'Chord', cells: [{ text: 'F', span: 2 }, {}, { text: 'G/F', span: 2 }, {}, { text: 'Em7', span: 2 }, {}, { text: 'A7', span: 2 }, {}] },
      { label: 'Jianpu', cells: [{ text: '4', className: 'note' }, { text: '♭7', className: 'note' }, { text: '1̇', className: 'note' }, { text: '2̇', className: 'note' }, { text: '3̇', className: 'note' }, { text: '—', className: 'duration' }, { text: '♯4', className: 'note' }, { text: '5', className: 'note' }] },
      { label: 'Lyric', cells: [{ text: 'Now' }, { text: 'the' }, { text: 'riv' }, { text: 'er' }, { text: 'turns' }, { text: 'and' }, { text: 'the' }, { text: 'sky' }] },
    ],
    marks: ['f', 'accent']
  },
  {
    number: 6,
    tracks: [
      { label: 'Chord', cells: [{ text: 'Dm7', span: 2 }, {}, { text: 'G7', span: 2 }, {}, { text: 'Cmaj7', span: 4 }, {}, {}, {}] },
      { label: 'Jianpu', cells: [{ text: '6', className: 'note' }, { text: '5', className: 'note' }, { text: '4', className: 'note' }, { text: '3', className: 'note' }, { text: '2', className: 'note' }, { text: '1', className: 'note' }, { text: '—', className: 'duration' }, { text: '—', className: 'duration' }] },
      { label: 'Lyric', cells: [{ text: 'opens' }, { text: 'wide' }, { text: 'be' }, { text: 'fore' }, { text: 'my' }, { text: 'eyes' }, { text: '—' }, { text: '—' }] },
    ],
    marks: ['dim.', 'tie']
  },
  {
    number: 7,
    tracks: [
      { label: 'Chord', cells: [{ text: 'C', span: 2 }, {}, { text: 'Am/C', span: 2 }, {}, { text: 'Dm7', span: 2 }, {}, { text: 'G7', span: 2 }, {}] },
      { label: 'Jianpu', cells: [{ text: '1', className: 'note' }, { text: '3', className: 'note' }, { text: '5', className: 'note' }, { text: '1̇', className: 'note' }, { text: '7', className: 'note' }, { text: '6', className: 'note' }, { text: '5', className: 'note' }, { text: '4', className: 'note' }] },
      { label: 'Lyric', cells: [{ text: 'Sing' }, { text: 'a' }, { text: 'lit' }, { text: 'tle' }, { text: 'song' }, { text: 'and' }, { text: 'let' }, { text: 'go' }] },
    ],
    marks: ['mf', 'slur']
  },
  {
    number: 8,
    tracks: [
      { label: 'Chord', cells: [{ text: 'C', span: 4 }, {}, {}, {}, { text: 'C', span: 4 }, {}, {}, {}] },
      { label: 'Jianpu', cells: [{ text: '1', className: 'note' }, { text: '—', className: 'duration' }, { text: '—', className: 'duration' }, { text: '—', className: 'duration' }, { text: '1', className: 'note' }, { text: '—', className: 'duration' }, { text: '𝄐', span: 2, className: 'annotation' }, {}] },
      { label: 'Lyric', cells: [{ text: 'home', span: 4 }, {}, {}, {}, { text: '—', span: 4 }, {}, {}, {}] },
    ],
    marks: ['D.C. al Fine', 'Fine', 'double bar']
  },
];

const notationLegend = [
  ['1–7', 'Scale degrees: Do–Ti'],
  ['0', 'Rest'],
  ['♯ ♭ ♮', 'Sharp · Flat · Natural'],
  ['1̇ / 1̣', 'Higher / lower octave'],
  ['—', 'Extend the previous note'],
  ['·', 'Dotted duration'],
  ['Underlines', 'Shorter note values / subdivisions'],
  ['⌒', 'Slur / tie'],
  ['𝄐', 'Fermata'],
  ['𝄆 𝄇', 'Repeat signs'],
  ['p · mp · mf · f', 'Dynamics'],
  ['rit. · accel.', 'Gradually slower / faster'],
];

const ScoreBar: React.FC<{ bar: SampleBar; first: boolean; last: boolean }> = ({ bar, first, last }) => (
  <div className={`relative min-w-0 ${first ? 'border-l-2 border-stone-700' : ''} ${last ? 'border-r-2 border-stone-700' : 'border-r border-stone-400'}`}>
    {bar.section && <div className="absolute -top-5 left-1 text-[10px] font-semibold tracking-wide text-stone-600 whitespace-nowrap">{bar.section}</div>}
    <div className="absolute -top-4 left-1 text-[9px] text-stone-400">{bar.number}</div>
    <div className="grid grid-rows-[25px_38px_25px]">
      {bar.tracks.map((track, rowIndex) => (
        <div key={track.label} className={`grid grid-cols-8 min-w-0 items-center ${rowIndex === 0 ? '' : 'border-t border-stone-100'}`}>
          {track.cells.map((cell, index) => {
            const covered = track.cells.slice(0, index).some((previous, previousIndex) =>
              Boolean(previous.span && index < previousIndex + previous.span)
            );
            if (covered) return null;
            return (
              <div
                key={index}
                className={`min-w-0 flex items-center justify-center text-center ${rowIndex === 0 ? 'text-[9px] sm:text-[10px] font-medium text-stone-700 self-start pt-1' : rowIndex === 1 ? 'text-[14px] sm:text-base font-semibold text-stone-900' : 'text-[9px] sm:text-[10px] text-stone-600'} ${cell.className === 'duration' ? 'text-stone-500' : ''}`}
                style={cell.span ? { gridColumn: `${index + 1} / span ${cell.span}` } : { gridColumn: String(index + 1) }}
              >
                {cell.text || ''}
              </div>
            );
          })}
        </div>
      ))}
    </div>
    {bar.marks?.length ? <div className="absolute -bottom-4 left-1 flex gap-2 text-[8px] italic text-stone-500 whitespace-nowrap">{bar.marks.join(' · ')}</div> : null}
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
      <header className="text-center border-b-2 border-stone-800 pb-4 mb-7">
        <div className="text-[9px] uppercase tracking-[0.28em] text-stone-500 mb-2">LYRA · Jianpu score</div>
        <h1 className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide">A Song for the Morning</h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">Jianpu melody with chord symbols and lyrics</p>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-[10px] sm:text-xs text-stone-600 mt-3">
          <span>Composer: LYRA Sample</span><span>1=C</span><span>Key: C Major</span><span>4/4</span><span>♩ = 96</span>
        </div>
      </header>

      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-300 pb-2 mb-7 text-[10px] sm:text-xs text-stone-600">
        <span>Moderato · Sing gently</span><span>Concert pitch · Numbered notation</span>
      </div>

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

      <div className="mt-9 pt-4 border-t-2 border-stone-800">
        <h2 className="font-serif text-base font-semibold mb-3">Notation guide</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
          {notationLegend.map(([symbol, meaning]) => (
            <div key={symbol} className="flex gap-2 items-start text-[10px] sm:text-[11px]">
              <span className="font-semibold min-w-16 text-stone-800">{symbol}</span>
              <span className="text-stone-600">{meaning}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-[10px] text-stone-600">
          <p><strong>Chord vocabulary:</strong> major, minor, maj7, m7, 7, sus4, slash chords / inversions, diminished and augmented symbols.</p>
          <p><strong>Score marks:</strong> section labels, repeat signs, first/second endings, D.C., D.S., coda, Fine, breath marks, articulation, accents, ties and slurs.</p>
        </div>
      </div>
    </article>
    <p className="text-center text-xs text-neutral-500 mt-3">Master sample preview · Continuous printed-score layout</p>
  </main>
);
