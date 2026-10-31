import React, { useState } from 'react';
import { ArrowLeft, Copy, Music2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

type SampleBar = { chord?: string; notes: string[]; lyric?: string };
type SampleSong = {
  id: string; title: string; composer: string; key: string; time: string; tempo: number;
  bars: SampleBar[]; sections?: Record<number, string>;
};

const samples: SampleSong[] = [
  {
    id: 'simple-melody', title: 'Simple Melody', composer: 'LYRA Sample', key: 'C Major', time: '4/4', tempo: 96,
    bars: [
      { notes: ['1','2','3','-'] }, { notes: ['3','2','1','-'] }, { notes: ['5','5','6','5'] }, { notes: ['3','-','-','-'] },
      { notes: ['4','4','3','2'] }, { notes: ['3','3','2','1'] }, { notes: ['2','3','2','1'] }, { notes: ['1','-','-','-'] },
    ],
  },
  {
    id: 'happy-tune', title: 'Happy Tune', composer: 'LYRA Sample', key: 'G Major', time: '4/4', tempo: 112,
    bars: [
      { chord: 'G', notes: ['5','5','6','5'], lyric: 'Sun shine bright now' },
      { chord: 'D', notes: ['3','2','1','-'], lyric: 'comes to my day' },
      { chord: 'Em', notes: ['6','6','5','3'], lyric: 'Sing a happy tune' },
      { chord: 'C', notes: ['2','3','2','-'], lyric: 'all the day long' },
      { chord: 'G', notes: ['5','5','6','5'], lyric: 'Step into the light' },
      { chord: 'D', notes: ['3','2','1','-'], lyric: 'everything feels right' },
      { chord: 'C', notes: ['2','3','2','1'], lyric: 'keep the music near' },
      { chord: 'G', notes: ['1','-','-','-'], lyric: 'all year long' },
    ],
  },
  {
    id: 'waltz-practice', title: 'Waltz Practice', composer: 'LYRA Sample', key: 'F Major', time: '3/4', tempo: 84,
    sections: { 0: 'A · Opening', 4: 'B · Theme', 8: 'A · Return' },
    bars: [
      { chord: 'F', notes: ['1','3','5'], lyric: 'Gen - tle -' },
      { chord: 'C', notes: ['5','4','3'], lyric: 'winds - are -' },
      { chord: 'Dm', notes: ['6','1','2'], lyric: 'turn - ing -' },
      { chord: 'Am', notes: ['3','-','2'], lyric: 'round - me' },
      { chord: 'Bb', notes: ['4','6','5'], lyric: 'Dance - with -' },
      { chord: 'F', notes: ['3','2','1'], lyric: 'me - to -' },
      { chord: 'Gm', notes: ['2','4','6'], lyric: 'mel - o -' },
      { chord: 'C', notes: ['5','-','-'], lyric: 'dy - -' },
      { chord: 'F', notes: ['1','3','5'], lyric: 'Gen - tle -' },
      { chord: 'C', notes: ['5','4','3'], lyric: 'winds - are -' },
      { chord: 'F', notes: ['2','3','2'], lyric: 'home - at -' },
      { chord: 'F', notes: ['1','-','-'], lyric: 'last - -' },
    ],
  },
];

export const ExplorePage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { language, createSong, updateSong } = useApp();
  const [selected, setSelected] = useState<SampleSong | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const my = language === 'my';

  const copySample = (sample: SampleSong) => {
    const song = createSong({
      title: sample.title,
      composer: sample.composer,
      jianpuReference: '1=C',
      songKey: sample.key,
      timeSignature: sample.time,
      tempo: sample.tempo,
    });
    updateSong(song.id, {
      bars: sample.bars.map((bar, index) => ({
        id: `${song.id}_bar_${index + 1}`,
        timeSignature: sample.time,
        notes: [
          ...(bar.chord ? [`chord:${bar.chord}`] : []),
          ...bar.notes,
          ...(bar.lyric ? [`lyric:${bar.lyric}`] : []),
        ],
      })),
    });
    setCopiedId(sample.id);
  };

  if (selected) {
    return (
      <main className="w-full max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between gap-3 mb-3">
          <button onClick={() => setSelected(null)} className="lyra-button-secondary inline-flex items-center gap-2 px-3 py-2 text-sm">
            <ArrowLeft className="w-4 h-4" /> {my ? 'နမူနာများသို့ ပြန်သွားမည်' : 'Back to samples'}
          </button>
          <button onClick={() => copySample(selected)} className="lyra-button-primary inline-flex items-center gap-2 px-3 py-2 text-sm">
            <Copy className="w-4 h-4" /> {my ? 'My Songs ထဲသို့ ကူးယူမည်' : 'Copy to My Songs'}
          </button>
        </div>
        <section className="lyra-panel p-3 sm:p-5">
          <div className="text-center border-b pb-3 mb-3">
            <h1 className="text-xl sm:text-2xl font-semibold">{selected.title}</h1>
            <p className="text-xs text-neutral-500 mt-1">{selected.composer} · {selected.key} · {selected.time} · {selected.tempo} BPM</p>
          </div>
          <div className="sheet-score">
            {selected.bars.map((bar, index) => (
              <div className="sheet-bar" key={index}>
                <div className="sheet-bar-number">{index + 1}</div>
                {selected.sections?.[index] && <div className="sheet-section">{selected.sections[index]}</div>}
                {bar.chord && <div className="sheet-chord">{bar.chord}</div>}
                <div className="sheet-notes">{bar.notes.map((note, i) => <span key={i}>{note}</span>)}</div>
                {bar.lyric && <div className="sheet-lyric">{bar.lyric.split(' ').map((word, i) => <span key={i}>{word}</span>)}</div>}
              </div>
            ))}
          </div>
          {copiedId === selected.id && <p className="text-sm text-emerald-600 mt-3 text-center">{my ? 'My Songs ထဲသို့ ကူးယူပြီးပါပြီ။' : 'Copied to My Songs.'}</p>}
        </section>
      </main>
    );
  }

  return (
    <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-5 sm:py-7">
      <div className="flex items-center gap-3 mb-5">
        <button onClick={onBack} className="lyra-icon-button" aria-label="Back"><ArrowLeft className="w-4 h-4" /></button>
        <div>
          <h1 className="text-2xl font-bold">{my ? 'လေ့လာရန်' : 'Explore'}</h1>
          <p className="text-sm text-neutral-500">{my ? 'နမူနာသီချင်းများ' : 'Sample songs to explore'}</p>
        </div>
      </div>
      <div className="divide-y border-y">
        {samples.map((sample) => (
          <article key={sample.id} className="py-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0"><Music2 className="w-5 h-5 text-amber-600" /></div>
            <div className="min-w-0 flex-1">
              <h2 className="font-semibold truncate">{sample.title}</h2>
              <p className="text-xs text-neutral-500 truncate">{sample.composer} · {sample.key} · {sample.time} · {sample.tempo} BPM</p>
            </div>
            <button onClick={() => { setSelected(sample); setCopiedId(null); }} className="lyra-button-secondary px-3 py-2 text-xs shrink-0">{my ? 'ကြည့်မည်' : 'View sheet'}</button>
          </article>
        ))}
      </div>
    </main>
  );
};
