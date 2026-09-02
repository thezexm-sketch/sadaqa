import { SurahSummary, SurahDetail, HadithItem, DuaItem, Verse, Reciter } from './types';
import { ALL_SURAHS_LIST, FALLBACK_SURAHS, HADITHS_DATA, DUAS_DATA } from './fallbackData';

const BASE_URL = 'https://ummahapi.com/api';

// Verified Complete Studio Master Reciters sorted ALPHABETICALLY (أ - ي)
export const RECITERS_LIST: Reciter[] = [
  {
    id: 'shatri',
    name: 'Abu Bakr Al Shatri',
    name_arabic: 'الشيخ أبو بكر الشاطري',
    everyAyahFolder: 'Abu_Bakr_Ash-Shaatree_128kbps',
    mp3QuranServer: 'https://server11.mp3quran.net/shatri/',
    style: 'مرتل',
  },
  {
    id: 'shur',
    name: 'Saud Al-Shuraim',
    name_arabic: 'الشيخ سعود الشريم',
    everyAyahFolder: 'Saood_ash-Shuraym_128kbps',
    mp3QuranServer: 'https://server7.mp3quran.net/shur/',
    style: 'مرتل',
  },
  {
    id: 'gmd',
    name: 'Saad Al-Ghamdi',
    name_arabic: 'الشيخ سعد الغامدي',
    everyAyahFolder: 'Ghamadi_40kbps',
    mp3QuranServer: 'https://server7.mp3quran.net/s_gmd/',
    style: 'مرتل',
  },
  {
    id: 'basit_m',
    name: 'Abdul Basit Abdul Samad (Murattal)',
    name_arabic: 'الشيخ عبد الباسط عبد الصمد (مرتل)',
    everyAyahFolder: 'Abdul_Basit_Murattal_192kbps',
    mp3QuranServer: 'https://server7.mp3quran.net/basit/',
    style: 'مرتل',
  },
  {
    id: 'basit_j',
    name: 'Abdul Basit Abdul Samad (Mujawwad)',
    name_arabic: 'الشيخ عبد الباسط عبد الصمد (مجود)',
    everyAyahFolder: 'Abdul_Basit_Mujawwad_128kbps',
    mp3QuranServer: 'https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/',
    style: 'مجود',
  },
  {
    id: 'sds',
    name: 'Abdul Rahman Al-Sudais',
    name_arabic: 'الشيخ عبد الرحمن السديس',
    everyAyahFolder: 'Abdurrahmaan_As-Sudais_192kbps',
    mp3QuranServer: 'https://server11.mp3quran.net/sds/',
    style: 'مرتل',
  },
  {
    id: 'frs',
    name: 'Fares Abbad',
    name_arabic: 'الشيخ فارس عباد',
    everyAyahFolder: 'Fares_Abbad_64kbps',
    mp3QuranServer: 'https://server8.mp3quran.net/frs_a/',
    style: 'مرتل',
  },
  {
    id: 'maher',
    name: 'Maher Al Muaiqly',
    name_arabic: 'الشيخ ماهر المعيقلي',
    everyAyahFolder: 'MaherAlMuaiqly128kbps',
    mp3QuranServer: 'https://server12.mp3quran.net/maher/',
    style: 'مرتل',
  },
  {
    id: 'minsh_m',
    name: 'Mohamed Siddiq Al-Minshawi (Murattal)',
    name_arabic: 'الشيخ محمد صديق المنشاوي (مرتل)',
    everyAyahFolder: 'Minshawy_Murattal_128kbps',
    mp3QuranServer: 'https://server10.mp3quran.net/minsh/',
    style: 'مرتل',
  },
  {
    id: 'minsh_j',
    name: 'Mohamed Siddiq Al-Minshawi (Mujawwad)',
    name_arabic: 'الشيخ محمد صديق المنشاوي (مجود)',
    everyAyahFolder: 'Minshawy_Mujawwad_192kbps',
    mp3QuranServer: 'https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/',
    style: 'مجود',
  },
  {
    id: 'husr',
    name: 'Mahmoud Khalil Al-Husary',
    name_arabic: 'الشيخ محمود خليل الحصري',
    everyAyahFolder: 'Husary_128kbps',
    mp3QuranServer: 'https://server13.mp3quran.net/husr/',
    style: 'مرتل',
  },
  {
    id: 'afs',
    name: 'Mishary Rashid Al-Afasy',
    name_arabic: 'الشيخ مشاري راشد العفاسي',
    everyAyahFolder: 'Alafasy_128kbps',
    mp3QuranServer: 'https://server8.mp3quran.net/afs/',
    style: 'مرتل',
  },
  {
    id: 'qtm',
    name: 'Nasser Al-Qatami',
    name_arabic: 'الشيخ ناصر القطامي',
    everyAyahFolder: 'Nasser_Alqatami_128kbps',
    mp3QuranServer: 'https://server6.mp3quran.net/qtm/',
    style: 'مرتل',
  },
  {
    id: 'hani',
    name: 'Hani Ar-Rifai',
    name_arabic: 'الشيخ هاني الرفاعي',
    everyAyahFolder: 'Hani_Rifai_192kbps',
    mp3QuranServer: 'https://server8.mp3quran.net/hani/',
    style: 'مرتل',
  },
  {
    id: 'yasser',
    name: 'Yasser Al-Dosari',
    name_arabic: 'الشيخ ياسر الدوسري',
    everyAyahFolder: 'Yasser_Ad-Dussary_128kbps',
    mp3QuranServer: 'https://server11.mp3quran.net/yasser/',
    style: 'مرتل',
  },
];

export function getFullSurahAudioUrl(surah: number, reciter: Reciter): string {
  const s = String(surah).padStart(3, '0');
  return `${reciter.mp3QuranServer || 'https://server11.mp3quran.net/yasser/'}${s}.mp3`;
}

// In-memory cache for surah details
const surahCache = new Map<number, SurahDetail>();

/**
 * Fetches all 114 Surahs from Ummah API with fallback to static list
 */
export async function getSurahsList(): Promise<SurahSummary[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(`${BASE_URL}/quran/surahs`, {
      signal: controller.signal,
      next: { revalidate: 86400 },
    });
    clearTimeout(timeoutId);

    if (!res.ok) throw new Error(`HTTP error ${res.status}`);

    const json = await res.json();
    if (json && json.data && Array.isArray(json.data)) {
      return json.data.map((item: Record<string, unknown>) => ({
        number: Number(item.number),
        name_arabic: String(item.name_arabic || ''),
        name_english: String(item.name_english || ''),
        name_translation: String(item.name_translation || ''),
        verses_count: Number(item.verses_count || 0),
        revelation_place: String(item.revelation_place || 'makkah'),
        audio_url: `https://server11.mp3quran.net/yasser/${String(item.number).padStart(3, '0')}.mp3`,
      }));
    }
  } catch (err) {
    console.warn('Using fallback surahs list due to:', err);
  }

  return ALL_SURAHS_LIST;
}

/**
 * Fetches full verses for a specific Surah with robust fallback
 */
export async function getSurahDetail(surahNumber: number): Promise<SurahDetail> {
  if (surahCache.has(surahNumber)) {
    return surahCache.get(surahNumber)!;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(`${BASE_URL}/quran/surah/${surahNumber}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!res.ok) throw new Error(`HTTP error ${res.status}`);

    const json = await res.json();
    if (json && json.data) {
      const s = json.data.surah || {};
      const rawVerses: Record<string, unknown>[] = json.data.verses || s.verses || [];

      if (rawVerses.length > 0) {
        const verses: Verse[] = rawVerses.map((v: Record<string, unknown>) => ({
          ayah: Number(v.ayah || 0),
          arabic: String(v.arabic || '').trim(),
          transliteration: String(v.transliteration || ''),
        }));

        const detail: SurahDetail = {
          number: Number(s.number || surahNumber),
          name_arabic: String(s.name_arabic || ''),
          name_english: String(s.name_english || ''),
          verses_count: Number(s.verses_count || json.data.total_verses || verses.length),
          revelation_place: String(s.revelation_place || 'makkah'),
          audio_url: `https://server11.mp3quran.net/yasser/${String(surahNumber).padStart(3, '0')}.mp3`,
          verses,
        };

        surahCache.set(surahNumber, detail);
        return detail;
      }
    }
  } catch (err) {
    console.warn(`Falling back to local data for Surah ${surahNumber}:`, err);
  }

  if (FALLBACK_SURAHS[surahNumber]) {
    return FALLBACK_SURAHS[surahNumber];
  }

  const summary = ALL_SURAHS_LIST.find((s) => s.number === surahNumber) || {
    number: surahNumber,
    name_arabic: `سورة رقم ${surahNumber}`,
    name_english: `Surah ${surahNumber}`,
    verses_count: 0,
    revelation_place: 'makkah',
  };

  return {
    ...summary,
    audio_url: `https://server11.mp3quran.net/yasser/${String(surahNumber).padStart(3, '0')}.mp3`,
    verses: [
      {
        ayah: 1,
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      },
    ],
  };
}

export async function getHadiths(): Promise<HadithItem[]> {
  return HADITHS_DATA;
}

export async function getDuas(): Promise<DuaItem[]> {
  return DUAS_DATA;
}
