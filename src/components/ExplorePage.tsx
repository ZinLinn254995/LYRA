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
      { label: 'Note', cells: [{ text: '1', className: 'note' }, { text: '2̇', className: 'note' }, { text: '3', className: 'note' }, { text: '♯4', className: 'note' }, { text: '5', className: 'note' }, { text: '6̣', className: 'note' }, { text: '5', className: 'note' }, { text: '3', className: 'note' }] },
      { label: 'Lyric', cells: [{ text: 'When' }, { text: 'the' }, { text: 'morn' }, { text: 'ing' }, { text: 'light' }, { text: 'is' }, { text: 'shin' }, { text: 'ing' }] },
    ],
    marks: ['p', 'slur', 'breath']
  },
  {
    number: 2,
    tracks: [
      { label: 'Chord', cells: [{ text: 'Fmaj7', span: 2 }, {}, { text: 'C/E', span: 2 }, {}, { text: 'Dm7', span: 2 }, {}, { text: 'G7sus4', span: 2 }, {}] },
      { label: 'Note', cells: [{ text: '4', className: 'note' }, { text: '5', className: 'note' }, { text: '6', className: 'note' }, { text: '5', className: 'note' }, { text: '4', className: 'note' }, { text: '3', className: 'note' }, { text: '2', className: 'note' }, { text: '1̇', className: 'note' }] },
      { label: 'Lyric', cells: [{ text: 'gen' }, { text: 'tle' }, { text: 'breez' }, { text: 'es' }, { text: 'car' }, { text: 'ry' }, { text: 'me' }, { text: 'home' }] },
    ],
    marks: ['crescendo', 'tie']
  },
  {
    number: 3,
    tracks: [
      { label: 'Chord', cells: [{ text: 'Am', span: 2 }, {}, { text: 'Am/G', span: 2 }, {}, { text: 'D/F♯', span: 2 }, {}, { text: 'Fmaj7', span: 2 }, {}] },
      { label: 'Note', cells: [{ text: '6', className: 'note' }, { text: '6', className: 'note' }, { text: '5', className: 'note' }, { text: '—', className: 'duration' }, { text: '4·', className: 'note' }, { text: '3', className: 'note' }, { text: '2', className: 'note' }, { text: '0', className: 'note' }] },
      { label: 'Lyric', cells: [{ text: 'Through' }, { text: 'the' }, { text: 'qui' }, { text: 'et' }, { text: 'af' }, { text: 'ter' }, { text: 'noon' }, { text: '—' }] },
    ],
    marks: ['mp', 'staccato']
  },
  {
    number: 4,
    tracks: [
      { label: 'Chord', cells: [{ text: 'G7', span: 2 }, {}, { text: 'C', span: 2 }, {}, { text: 'C/E', span: 2 }, {}, { text: 'G7', span: 2 }, {}] },
      { label: 'Note', cells: [{ text: '5', className: 'note' }, { text: '4', className: 'note' }, { text: '3', className: 'note' }, { text: '2', className: 'note' }, { text: '1', className: 'note' }, { text: '—', className: 'duration' }, { text: '1', className: 'note' }, { text: '—', className: 'duration' }] },
      { label: 'Lyric', cells: [{ text: 'ev' }, { text: 'ery' }, { text: 'thing' }, { text: 'feels' }, { text: 'like' }, { text: 'home' }, { text: 'to' }, { text: 'me' }] },
    ],
    marks: ['rit.', 'fermata']
  },
  {
    number: 5, section: 'B · Contrast',
    tracks: [
      { label: 'Chord', cells: [{ text: 'F', span: 2 }, {}, { text: 'G/F', span: 2 }, {}, { text: 'Em7', span: 2 }, {}, { text: 'A7', span: 2 }, {}] },
      { label: 'Note', cells: [{ text: '4', className: 'note' }, { text: '♭7', className: 'note' }, { text: '1̇', className: 'note' }, { text: '2̇', className: 'note' }, { text: '3̇', className: 'note' }, { text: '—', className: 'duration' }, { text: '♯4', className: 'note' }, { text: '5', className: 'note' }] },
      { label: 'Lyric', cells: [{ text: 'Now' }, { text: 'the' }, { text: 'riv' }, { text: 'er' }, { text: 'turns' }, { text: 'and' }, { text: 'the' }, { text: 'sky' }] },
    ],
    marks: ['f', 'accent']
  },
  {
    number: 6,
    tracks: [
      { label: 'Chord', cells: [{ text: 'Dm7', span: 2 }, {}, { text: 'G7', span: 2 }, {}, { text: 'Cmaj7', span: 4 }, {}, {}, {}] },
      { label: 'Note', cells: [{ text: '6', className: 'note' }, { text: '5', className: 'note' }, { text: '4', className: 'note' }, { text: '3', className: 'note' }, { text: '2', className: 'note' }, { text: '1', className: 'note' }, { text: '—', className: 'duration' }, { text: '—', className: 'duration' }] },
      { label: 'Lyric', cells: [{ text: 'opens' }, { text: 'wide' }, { text: 'be' }, { text: 'fore' }, { text: 'my' }, { text: 'eyes' }, { text: '—' }, { text: '—' }] },
    ],
    marks: ['dim.', 'tie']
  },
  {
    number: 7,
    tracks: [
      { label: 'Chord', cells: [{ text: 'C', span: 2 }, {}, { text: 'Am/C', span: 2 }, {}, { text: 'Dm7', span: 2 }, {}, { text: 'G7', span: 2 }, {}] },
      { label: 'Note', cells: [{ text: '1', className: 'note' }, { text: '3', className: 'note' }, { text: '5', className: 'note' }, { text: '1̇', className: 'note' }, { text: '7', className: 'note' }, { text: '6', className: 'note' }, { text: '5', className: 'note' }, { text: '4', className: 'note' }] },
      { label: 'Lyric', cells: [{ text: 'Sing' }, { text: 'a' }, { text: 'lit' }, { text: 'tle' }, { text: 'song' }, { text: 'and' }, { text: 'let' }, { text: 'go' }] },
    ],
    marks: ['mf', 'slur']
  },
  {
    number: 8,
    tracks: [
      { label: 'Chord', cells: [{ text: 'C', span: 4 }, {}, {}, {}, { text: 'C', span: 4 }, {}, {}, {}] },
      { label: 'Note', cells: [{ text: '1', className: 'note' }, { text: '—', className: 'duration' }, { text: '—', className: 'duration' }, { text: '—', className: 'duration' }, { text: '1', className: 'note' }, { text: '—', className: 'duration' }, { text: 'fermata', span: 2, className: 'annotation' }, {}] },
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
  ['underline', 'Subdivision / shorter note values'],
  ['⌒', 'Slur / tie between notes'],
  ['𝄐', 'Fermata: hold the note'],
  ['𝄆 𝄇', 'Repeat start / repeat end'],
  ['p · mp · mf · f', 'Dynamics: soft to loud'],
  ['rit. · accel.', 'Gradually slower / faster'],
];

const CellRow: React.FC<{ track: Track }> = ({ track }) => (
  <div className="grid grid-cols-[42px_minmax(0,1fr)] items-stretch border-b border-stone-200 last:border-b-0">
    <div className="flex items-center text-[9px] font-medium uppercase tracking-wide text-stone-400">{track.label}</div>
    <div className="grid grid-cols-8 min-w-0">
      {track.cells.map((cell, index) => {
        const covered = track.cells.slice(0, index).some((previous, previousIndex) =>
          Boolean(previous.span && index < previousIndex + previous.span)
        );
        if (covered) return null;
        return (
          <div
            key={index}
            className={`min-w-0 min-h-7 flex items-center justify-center text-center border-l border-stone-100 text-[12px] sm:text-sm ${cell.className === 'note' ? 'font-semibold text-stone-900' : cell.className === 'duration' ? 'text-stone-500' : cell.className === 'annotation' ? 'text-[9px] text-stone-500' : 'text-stone-600'}`}
            style={cell.span ? { gridColumn: `${index + 1} / span ${cell.span}` } : { gridColumn: String(index + 1) }}
          >
            {cell.text || ''}
          </div>
        );
      })}
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
      <header className="text-center border-b-2 border-stone-800 pb-4 mb-4">
        <div className="text-[9px] uppercase tracking-[0.28em] text-stone-500 mb-2">LYRA · Jianpu study score</div>
        <h1 className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide">A Song for the Morning</h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">A complete notation reference sample</p>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-[10px] sm:text-xs text-stone-600 mt-3">
          <span>Composer: LYRA Sample</span><span>1=C</span><span>Key: C Major</span><span>4/4</span><span>♩ = 96 BPM</span>
        </div>
      </header>

      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-300 pb-2 mb-3 text-[10px] sm:text-xs text-stone-600">
        <span>Moderato · Sing gently</span><span>Concert pitch · Jianpu (Numbered Notation)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
        {masterSample.map((bar) => (
          <section key={bar.number} className="relative border-b border-stone-300 pb-2">
            {bar.section && <div className="text-[10px] font-semibold tracking-wide text-stone-600 mb-1">{bar.section}</div>}
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] text-stone-400">BAR {bar.number}</span>
              {bar.number === 1 && <span className="text-[10px] text-stone-500">♩ = 96</span>}
              {bar.number === 5 && <span className="text-[10px] text-stone-500">f · più mosso</span>}
            </div>
            <div className="border-y border-stone-300">
              {bar.tracks.map((track) => <CellRow key={track.label} track={track} />)}
            </div>
            {bar.marks && <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-[9px] italic text-stone-500">{bar.marks.map((mark) => <span key={mark}>{mark}</span>)}</div>}
            <div className="absolute right-0 top-0 bottom-0 border-r border-stone-400" />
          </section>
        ))}
      </div>

      <div className="mt-5 pt-3 border-t-2 border-stone-800">
        <h2 className="font-serif text-base font-semibold mb-2">Notation & performance guide</h2>
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
    <p className="text-center text-xs text-neutral-500 mt-3">Master sample preview · Editor conversion will be added after this sheet is approved.</p>
  </main>
);
