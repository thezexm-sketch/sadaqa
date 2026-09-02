export interface Verse {
  ayah: number;
  arabic: string;
  transliteration?: string;
  audio_url?: string;
}

export interface SurahSummary {
  number: number;
  name_arabic: string;
  name_english: string;
  name_translation?: string;
  verses_count: number;
  revelation_place: 'makkah' | 'madinah' | string;
  audio_url?: string;
}

export interface SurahDetail extends SurahSummary {
  verses: Verse[];
  bismillah_pre?: boolean;
}

export interface AyahTimestamp {
  verse_key: string;
  ayah: number;
  timestamp_from: number;
  timestamp_to: number;
}

export interface ChapterAudioData {
  audio_url: string;
  timestamps: AyahTimestamp[];
}

export interface Reciter {
  id: string;
  name: string;
  name_arabic: string;
  everyAyahFolder: string;
  mp3QuranServer?: string;
  style?: string;
}

export interface TasbihItem {
  id: string;
  text: string;
  transliteration?: string;
  virtue?: string;
  target: number;
  count: number;
  completedRounds: number;
}

export interface HadithItem {
  id: string;
  title: string;
  text: string;
  narrator: string;
  source: string;
  grade?: string;
  category: 'sadaqah' | 'parents' | 'quran' | 'mercy';
}

export interface DuaItem {
  id: string;
  title: string;
  text: string;
  source?: string;
  category: 'featured' | 'forgiveness' | 'grave' | 'jannah' | 'friday';
  ameens?: number;
}
