import React, { useEffect, useRef, useState } from 'react';
import { X, Music, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

const JIANPU_REFERENCES = ['C', 'C♯ / D♭', 'D', 'D♯ / E♭', 'E', 'F', 'F♯ / G♭', 'G', 'G♯ / A♭', 'A', 'A♯ / B♭', 'B'];
const TONICS = ['C', 'C♯ / D♭', 'D', 'D♯ / E♭', 'E', 'F', 'F♯ / G♭', 'G', 'G♯ / A♭', 'A', 'A♯ / B♭', 'B'];
const MODES = ['Major', 'Minor'];
const TIME_SIGNATURES = ['4/4', '3/4', '2/4', '6/8'];

const optionClass = (selected: boolean) => `lyra-option ${selected ? 'lyra-option-selected' : ''}`;

export const CreateSongModal: React.FC = () => {
  const { isCreateModalOpen, setIsCreateModalOpen, createSong, setActiveSongId, t } = useApp();
  const [title, setTitle] = useState('');
  const [composer, setComposer] = useState('');
  const [artist, setArtist] = useState('');
  const [jianpuReference, setJianpuReference] = useState('C');
  const [tonic, setTonic] = useState('');
  const [mode, setMode] = useState('Major');
  const [timeSignature, setTimeSignature] = useState('4/4');
  const [tempo, setTempo] = useState('100');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isCreateModalOpen) {
      setTitle(''); setComposer(''); setArtist(''); setJianpuReference('C'); setTonic(''); setMode('Major'); setTimeSignature('4/4'); setTempo('100'); setError('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isCreateModalOpen]);

  if (!isCreateModalOpen) return null;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedTitle = title.trim();
    const bpm = Number(tempo);
    if (!trimmedTitle) { setError(t('songTitleRequired')); return; }
    if (!Number.isInteger(bpm) || bpm < 20 || bpm > 300) { setError(t('tempoInvalid')); return; }
    const songKey = tonic ? `${tonic} ${mode}` : undefined;
    const newSong = createSong({ title: trimmedTitle, composer, artist, jianpuReference: `1 = ${jianpuReference}`, songKey, timeSignature, tempo: bpm });
    setIsCreateModalOpen(false);
    setActiveSongId(newSong.id);
  };

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="create-song-modal-title" className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 backdrop-blur-xs sm:p-4" onClick={() => setIsCreateModalOpen(false)}>
      <div className="lyra-panel max-h-[calc(100dvh-1.5rem)] w-full max-w-2xl overflow-y-auto p-5 sm:p-6" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-3"><div className="flex size-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400"><Music className="size-4" /></div><div><h2 id="create-song-modal-title" className="text-lg font-semibold">{t('newSongModalTitle')}</h2><p className="text-xs text-neutral-500 dark:text-neutral-400">{t('setupSongDescription')}</p></div></div>
          <button type="button" onClick={() => setIsCreateModalOpen(false)} aria-label={t('close')} className="lyra-icon-button border-0"><X className="size-4" /></button>
        </div>
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 sm:col-span-2"><span className="lyra-label">{t('songTitleLabel')} <span className="text-amber-600">*</span></span><input ref={inputRef} value={title} onChange={(e) => { setTitle(e.target.value); setError(''); }} placeholder={t('songTitlePlaceholder')} className="lyra-input" aria-invalid={!!error} /></label>
            <label className="flex flex-col gap-1.5"><span className="lyra-label">{t('composerLabel')} <span className="lyra-optional">{t('optional')}</span></span><input value={composer} onChange={(e) => setComposer(e.target.value)} placeholder={t('composerPlaceholder')} className="lyra-input" /></label>
            <label className="flex flex-col gap-1.5"><span className="lyra-label">{t('artistLabel')} <span className="lyra-optional">{t('optional')}</span></span><input value={artist} onChange={(e) => setArtist(e.target.value)} placeholder={t('artistPlaceholder')} className="lyra-input" /></label>
          </div>
          <div className="border-t pt-4"><p className="lyra-section-label">{t('musicalSettings')}</p><div className="mt-3 flex flex-col gap-5">
            <fieldset><legend className="lyra-label">{t('jianpuReference')}</legend><div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4"><p className="sr-only">{t('jianpuReferenceHelp')}</p>{JIANPU_REFERENCES.map((reference) => <button type="button" key={reference} aria-pressed={jianpuReference === reference} onClick={() => setJianpuReference(reference)} className={optionClass(jianpuReference === reference)}>{jianpuReference === reference && <Check className="size-3.5" />}{`1 = ${reference}`}</button>)}</div></fieldset>
            <fieldset><legend className="lyra-label">{t('songKeyLabel')} <span className="lyra-optional">{t('optional')}</span></legend><div className="mt-2 flex flex-col gap-2"><div className="grid grid-cols-3 gap-2 sm:grid-cols-6"><button type="button" aria-pressed={!tonic} onClick={() => setTonic('')} className={optionClass(!tonic)}>{t('unknownKey')}</button>{TONICS.map((item) => <button type="button" key={item} aria-pressed={tonic === item} onClick={() => setTonic(item)} className={optionClass(tonic === item)}>{item}</button>)}</div><div className="grid max-w-xs grid-cols-2 gap-2"><span className="sr-only">{t('keyMode')}</span>{MODES.map((item) => <button type="button" key={item} aria-pressed={mode === item} disabled={!tonic} onClick={() => setMode(item)} className={optionClass(mode === item && !!tonic)}>{item}</button>)}</div></div></fieldset>
            <fieldset><legend className="lyra-label">{t('timeSignatureLabel')}</legend><div className="mt-2 grid grid-cols-4 gap-2">{TIME_SIGNATURES.map((signature) => <button type="button" key={signature} aria-pressed={timeSignature === signature} onClick={() => setTimeSignature(signature)} className={optionClass(timeSignature === signature)}>{signature}</button>)}</div></fieldset>
            <label className="flex max-w-xs flex-col gap-1.5"><span className="lyra-label">{t('tempoLabel')}</span><div className="relative"><input type="number" min="20" max="300" step="1" value={tempo} onChange={(e) => setTempo(e.target.value)} className="lyra-input pr-16" /><span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-neutral-500">BPM</span></div></label>
          </div></div>
          {error && <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-700 dark:text-red-300" role="alert">{error}</p>}
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"><button type="button" onClick={() => setIsCreateModalOpen(false)} className="lyra-button-secondary px-4 py-2.5 text-sm font-medium">{t('cancel')}</button><button type="submit" className="lyra-button-primary px-5 py-2.5 text-sm font-semibold">{t('create')}</button></div>
        </form>
      </div>
    </div>
  );
};
