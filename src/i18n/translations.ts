import { Language } from '../types';

export const translations = {
  en: {
    brandName: 'LYRA',
    tagline: 'Write Music. Shape Ideas.',
    productType: 'Music Notation & Composition Studio',
    
    // Welcome Section
    welcomeTitle: 'Your Music',
    welcomeSubtitle: 'Your ideas, your music.',
    
    // Actions
    createSong: 'Create New Song',
    exploreLabel: 'Explore',
    createFirstSong: 'Create First Song',
    openSong: 'Open',
    deleteSong: 'Delete',
    cancel: 'Cancel',
    create: 'Create',
    save: 'Save',
    back: 'Back',
    backToHome: 'Back to Your Music',
    close: 'Close',
    rename: 'Rename',
    
    // Recent Songs Section
    recentSongs: 'Recent Songs',
    noSongsTitle: 'No songs yet',
    noSongsSubtitle: 'Start writing your first musical piece with numbered notation.',
    
    // Song metadata
    keyLabel: 'Key',
    noKey: 'None',
    lastEdited: 'Last edited',
    justNow: 'Just now',
    today: 'Today',
    yesterday: 'Yesterday',
    daysAgo: 'days ago',
    
    // Create Modal
    newSongModalTitle: 'New Song',
    setupSongDescription: 'Set up the details before you start writing.',
    songTitleLabel: 'Song title',
    songTitleRequired: 'Enter a song title to continue.',
    composerLabel: 'Composer',
    artistLabel: 'Artist / Singer',
    composerPlaceholder: 'Who composed this song?',
    artistPlaceholder: 'Who performs this song?',
    musicalSettings: 'Musical settings',
    jianpuReference: 'Jianpu reference',
    jianpuReferenceHelp: 'Choose which pitch maps to 1 in your notation.',
    unknownKey: 'Unknown',
    keyMode: 'Key mode',
    songKeyLabel: 'Song key',
    timeSignatureLabel: 'Time signature',
    tempoLabel: 'Tempo',
    tempoInvalid: 'Tempo must be a whole number between 20 and 300 BPM.',
    songTitlePlaceholder: 'Enter song title...',
    selectKeyLabel: 'Musical Key (Optional)',
    optional: 'Optional',
    defaultTitle: 'Untitled Song',
    
    // Settings
    settingsTitle: 'Settings',
    appearance: 'Appearance',
    themeLight: 'Light',
    themeDark: 'Dark',
    language: 'Language',
    languageEn: 'English',
    languageMy: 'မြန်မာ (Burmese)',
    notationSystem: 'Notation System',
    notationJianpuDesc: 'Jianpu (Numbered Musical Notation: 1 2 3 4 5 6 7)',
    aboutLyra: 'About LYRA',
    version: 'Version',
    taglineShort: 'Write Music. Shape Ideas.',
    
    // Editor Placeholder Screen
    editorPlaceholderTitle: 'Music Editor',
    editorPlaceholderSubtitle: 'Jianpu notation studio workspace',
    editorComingSoon: 'The interactive Jianpu notation editor will be available in the next release.',
    editorSaveNote: 'This song record is saved in your local studio collection.',
    keyInfo: 'Key Signature',
    createdOn: 'Created',
    confirmDelete: 'Are you sure you want to delete this song?',
    deleteWarning: 'This action cannot be undone.',
    
    // Accessibility / Tooltips
    toggleThemeAria: 'Toggle color theme',
    toggleLanguageAria: 'Switch language',
    openSettingsAria: 'Open settings',
    deleteSongAria: 'Delete song'
  },
  my: {
    brandName: 'LYRA',
    tagline: 'တေးဂီတကို ရေးစပ်ပါ။ အတွေးအမြင်များကို ပုံဖော်ပါ။',
    productType: 'ဂီတသင်္ကေတနှင့် တေးရေးစပ်မှု စတူဒီယို',
    
    // Welcome Section
    welcomeTitle: 'သင်၏ တေးဂီတ',
    welcomeSubtitle: 'သင့်အတွေးအမြင်များ၊ သင့်တေးဂီတ။',
    
    // Actions
    createSong: 'သီချင်းအသစ် ဖန်တီးမည်',
    exploreLabel: 'နမူနာသီချင်းများ',
    createFirstSong: 'ပထမဆုံး သီချင်း ဖန်တီးမည်',
    openSong: 'ဖွင့်မည်',
    deleteSong: 'ဖျက်မည်',
    cancel: 'မလုပ်တော့ပါ',
    create: 'ဖန်တီးမည်',
    save: 'သိမ်းမည်',
    back: 'ပြန်သွားမည်',
    backToHome: 'ပင်မသို့ ပြန်သွားမည်',
    close: 'ပိတ်မည်',
    rename: 'အမည်ပြောင်းမည်',
    
    // Recent Songs Section
    recentSongs: 'လတ်တလော သီချင်းများ',
    noSongsTitle: 'သီချင်း မရှိသေးပါ',
    noSongsSubtitle: 'ဂဏန်းသင်္ကေတ တေးမှတ်စုဖြင့် သင်၏ ပထမဆုံး တေးဂီတကို စတင်ရေးစပ်ပါ။',
    
    // Song metadata
    keyLabel: 'ကီး',
    noKey: 'မသတ်မှတ်ထားပါ',
    lastEdited: 'နောက်ဆုံး တည်းဖြတ်ချိန်',
    justNow: 'ယခုလေးတင်',
    today: 'ယနေ့',
    yesterday: 'မနေ့က',
    daysAgo: 'ရက်က',
    
    // Create Modal
    newSongModalTitle: 'သီချင်းအသစ်',
    setupSongDescription: 'ရေးစပ်ခြင်းမစမီ အချက်အလက်များကို သတ်မှတ်ပါ။',
    songTitleLabel: 'သီချင်းအမည်',
    songTitleRequired: 'ဆက်လက်ရန် သီချင်းအမည် ထည့်ပါ။',
    composerLabel: 'တေးရေးဆရာ',
    artistLabel: 'အဆိုတော် / ဖျော်ဖြေသူ',
    composerPlaceholder: 'ဤသီချင်းကို မည်သူရေးစပ်သနည်း။',
    artistPlaceholder: 'ဤသီချင်းကို မည်သူဆိုသနည်း။',
    musicalSettings: 'တေးဂီတ ဆက်တင်များ',
    jianpuReference: 'ကျန့်ဖူ ရည်ညွှန်းချက်',
    jianpuReferenceHelp: 'ဂဏန်း ၁ နှင့် ကိုက်ညီမည့် အသံကို ရွေးချယ်ပါ။',
    unknownKey: 'မသေချာပါ',
    keyMode: 'ကီးပုံစံ',
    songKeyLabel: 'သီချင်းကီး',
    timeSignatureLabel: 'တေးချက် အချိုး',
    tempoLabel: 'အမြန်နှုန်း',
    tempoInvalid: 'အမြန်နှုန်းသည် BPM ၂၀ မှ ၃၀၀ အတွင်း ကိန်းပြည့်ဖြစ်ရမည်။',
    songTitlePlaceholder: 'သီချင်း အမည် ထည့်ပါ...',
    selectKeyLabel: 'တေးသွား ကီး (ရွေးချယ်နိုင်သည်)',
    optional: 'ရွေးချယ်နိုင်သည်',
    defaultTitle: 'အမည်မရှိသေးသော သီချင်း',
    
    // Settings
    settingsTitle: 'ဆက်တင်များ',
    appearance: 'မျက်နှာပြင် ပုံစံ',
    themeLight: 'အလင်း',
    themeDark: 'အမှောင်',
    language: 'ဘာသာစကား',
    languageEn: 'English',
    languageMy: 'မြန်မာ (Burmese)',
    notationSystem: 'တေးမှတ်စု စနစ်',
    notationJianpuDesc: 'ကျန့်ဖူ (ဂဏန်းသင်္ကေတ တေးမှတ်စု: ၁ ၂ ၃ ၄ ၅ ၆ ၇)',
    aboutLyra: 'LYRA အကြောင်း',
    version: 'ဗားရှင်း',
    taglineShort: 'တေးဂီတကို ရေးစပ်ပါ။ အတွေးအမြင်များကို ပုံဖော်ပါ။',
    
    // Editor Placeholder Screen
    editorPlaceholderTitle: 'တေးဂီတ တည်းဖြတ်စနစ်',
    editorPlaceholderSubtitle: 'ကျန့်ဖူ တေးမှတ်စု စတူဒီယို လုပ်ငန်းခွင်',
    editorComingSoon: 'ကျန့်ဖူ ဂဏန်းသင်္ကေတ တည်းဖြတ်စနစ်ကို နောက်ထပ် ဗားရှင်းတွင် အပြည့်အစုံ ထည့်သွင်းပေးပါမည်။',
    editorSaveNote: 'ဤသီချင်း အချက်အလက်ကို သင့်စတူဒီယိုတွင် သိမ်းဆည်းထားပြီး ဖြစ်ပါသည်။',
    keyInfo: 'တေးသွား ကီး (Key)',
    createdOn: 'ဖန်တီးခဲ့သည့် အချိန်',
    confirmDelete: 'ဤသီချင်းကို ဖျက်ရန် သေချာပါသလား။',
    deleteWarning: 'ဖျက်ပြီးပါက ပြန်လည်ရယူ၍ မရနိုင်ပါ။',
    
    // Accessibility / Tooltips
    toggleThemeAria: 'အရောင်ပုံစံ ပြောင်းလဲမည်',
    toggleLanguageAria: 'ဘာသာစကား ပြောင်းလဲမည်',
    openSettingsAria: 'ဆက်တင်များ ဖွင့်မည်',
    deleteSongAria: 'သီချင်း ဖျက်မည်'
  }
} as const;

export type TranslationKey = keyof typeof translations['en'];

export function getTranslation(lang: Language, key: TranslationKey): string {
  return translations[lang][key] || translations.en[key] || '';
}
