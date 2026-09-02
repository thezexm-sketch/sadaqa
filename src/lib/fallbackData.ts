import { SurahSummary, SurahDetail, HadithItem, DuaItem, TasbihItem } from './types';

// Surahs list (all 114 surahs)
export const ALL_SURAHS_LIST: SurahSummary[] = [
  { number: 1, name_arabic: "الفاتحة", name_english: "Al-Fatihah", verses_count: 7, revelation_place: "makkah" },
  { number: 2, name_arabic: "البقرة", name_english: "Al-Baqarah", verses_count: 286, revelation_place: "madinah" },
  { number: 3, name_arabic: "آل عمران", name_english: "Ali 'Imran", verses_count: 200, revelation_place: "madinah" },
  { number: 4, name_arabic: "النساء", name_english: "An-Nisa", verses_count: 176, revelation_place: "madinah" },
  { number: 5, name_arabic: "المائدة", name_english: "Al-Ma'idah", verses_count: 120, revelation_place: "madinah" },
  { number: 6, name_arabic: "الأنعام", name_english: "Al-An'am", verses_count: 165, revelation_place: "makkah" },
  { number: 7, name_arabic: "الأعراف", name_english: "Al-A'raf", verses_count: 206, revelation_place: "makkah" },
  { number: 8, name_arabic: "الأنفال", name_english: "Al-Anfal", verses_count: 75, revelation_place: "madinah" },
  { number: 9, name_arabic: "التوبة", name_english: "At-Tawbah", verses_count: 129, revelation_place: "madinah" },
  { number: 10, name_arabic: "يونس", name_english: "Yunus", verses_count: 109, revelation_place: "makkah" },
  { number: 11, name_arabic: "هود", name_english: "Hud", verses_count: 123, revelation_place: "makkah" },
  { number: 12, name_arabic: "يوسف", name_english: "Yusuf", verses_count: 111, revelation_place: "makkah" },
  { number: 13, name_arabic: "الرعد", name_english: "Ar-Ra'd", verses_count: 43, revelation_place: "madinah" },
  { number: 14, name_arabic: "إبراهيم", name_english: "Ibrahim", verses_count: 52, revelation_place: "makkah" },
  { number: 15, name_arabic: "الحجر", name_english: "Al-Hijr", verses_count: 99, revelation_place: "makkah" },
  { number: 16, name_arabic: "النحل", name_english: "An-Nahl", verses_count: 128, revelation_place: "makkah" },
  { number: 17, name_arabic: "الإسراء", name_english: "Al-Isra", verses_count: 111, revelation_place: "makkah" },
  { number: 18, name_arabic: "الكهف", name_english: "Al-Kahf", verses_count: 110, revelation_place: "makkah" },
  { number: 19, name_arabic: "مريم", name_english: "Maryam", verses_count: 98, revelation_place: "makkah" },
  { number: 20, name_arabic: "طه", name_english: "Taha", verses_count: 135, revelation_place: "makkah" },
  { number: 21, name_arabic: "الأنبياء", name_english: "Al-Anbiya", verses_count: 112, revelation_place: "makkah" },
  { number: 22, name_arabic: "الحج", name_english: "Al-Hajj", verses_count: 78, revelation_place: "madinah" },
  { number: 23, name_arabic: "المؤمنون", name_english: "Al-Mu'minun", verses_count: 118, revelation_place: "makkah" },
  { number: 24, name_arabic: "النور", name_english: "An-Nur", verses_count: 64, revelation_place: "madinah" },
  { number: 25, name_arabic: "الفرقان", name_english: "Al-Furqan", verses_count: 77, revelation_place: "makkah" },
  { number: 26, name_arabic: "الشعراء", name_english: "Ash-Shu'ara", verses_count: 227, revelation_place: "makkah" },
  { number: 27, name_arabic: "النمل", name_english: "An-Naml", verses_count: 93, revelation_place: "makkah" },
  { number: 28, name_arabic: "القصص", name_english: "Al-Qasas", verses_count: 88, revelation_place: "makkah" },
  { number: 29, name_arabic: "العنكبوت", name_english: "Al-'Ankabut", verses_count: 69, revelation_place: "makkah" },
  { number: 30, name_arabic: "الروم", name_english: "Ar-Rum", verses_count: 60, revelation_place: "makkah" },
  { number: 31, name_arabic: "لقمان", name_english: "Luqman", verses_count: 34, revelation_place: "makkah" },
  { number: 32, name_arabic: "السجدة", name_english: "As-Sajdah", verses_count: 30, revelation_place: "makkah" },
  { number: 33, name_arabic: "الأحزاب", name_english: "Al-Ahzab", verses_count: 73, revelation_place: "madinah" },
  { number: 34, name_arabic: "سبأ", name_english: "Saba", verses_count: 54, revelation_place: "makkah" },
  { number: 35, name_arabic: "فاطر", name_english: "Fatir", verses_count: 45, revelation_place: "makkah" },
  { number: 36, name_arabic: "يس", name_english: "Ya-Sin", verses_count: 83, revelation_place: "makkah" },
  { number: 37, name_arabic: "الصافات", name_english: "As-Saffat", verses_count: 182, revelation_place: "makkah" },
  { number: 38, name_arabic: "ص", name_english: "Sad", verses_count: 88, revelation_place: "makkah" },
  { number: 39, name_arabic: "الزمر", name_english: "Az-Zumar", verses_count: 75, revelation_place: "makkah" },
  { number: 40, name_arabic: "غافر", name_english: "Ghafir", verses_count: 85, revelation_place: "makkah" },
  { number: 41, name_arabic: "فصلت", name_english: "Fussilat", verses_count: 54, revelation_place: "makkah" },
  { number: 42, name_arabic: "الشورى", name_english: "Ash-Shura", verses_count: 53, revelation_place: "makkah" },
  { number: 43, name_arabic: "الزخرف", name_english: "Az-Zukhruf", verses_count: 89, revelation_place: "makkah" },
  { number: 44, name_arabic: "الدخان", name_english: "Ad-Dukhan", verses_count: 59, revelation_place: "makkah" },
  { number: 45, name_arabic: "الجاثية", name_english: "Al-Jathiyah", verses_count: 37, revelation_place: "makkah" },
  { number: 46, name_arabic: "الأحقاف", name_english: "Al-Ahqaf", verses_count: 35, revelation_place: "makkah" },
  { number: 47, name_arabic: "محمد", name_english: "Muhammad", verses_count: 38, revelation_place: "madinah" },
  { number: 48, name_arabic: "الفتح", name_english: "Al-Fath", verses_count: 29, revelation_place: "madinah" },
  { number: 49, name_arabic: "الحجرات", name_english: "Al-Hujurat", verses_count: 18, revelation_place: "madinah" },
  { number: 50, name_arabic: "ق", name_english: "Qaf", verses_count: 45, revelation_place: "makkah" },
  { number: 51, name_arabic: "الذاريات", name_english: "Adh-Dhariyat", verses_count: 60, revelation_place: "makkah" },
  { number: 52, name_arabic: "الطور", name_english: "At-Tur", verses_count: 49, revelation_place: "makkah" },
  { number: 53, name_arabic: "النجم", name_english: "An-Najm", verses_count: 62, revelation_place: "makkah" },
  { number: 54, name_arabic: "القمر", name_english: "Al-Qamar", verses_count: 55, revelation_place: "makkah" },
  { number: 55, name_arabic: "الرحمن", name_english: "Ar-Rahman", verses_count: 78, revelation_place: "madinah" },
  { number: 56, name_arabic: "الواقعة", name_english: "Al-Waqi'ah", verses_count: 96, revelation_place: "makkah" },
  { number: 57, name_arabic: "الحديد", name_english: "Al-Hadid", verses_count: 29, revelation_place: "madinah" },
  { number: 58, name_arabic: "المجادلة", name_english: "Al-Mujadila", verses_count: 22, revelation_place: "madinah" },
  { number: 59, name_arabic: "الحشر", name_english: "Al-Hashr", verses_count: 24, revelation_place: "madinah" },
  { number: 60, name_arabic: "الممتحنة", name_english: "Al-Mumtahanah", verses_count: 13, revelation_place: "madinah" },
  { number: 61, name_arabic: "الصف", name_english: "As-Saff", verses_count: 14, revelation_place: "madinah" },
  { number: 62, name_arabic: "الجمعة", name_english: "Al-Jumu'ah", verses_count: 11, revelation_place: "madinah" },
  { number: 63, name_arabic: "المنافقون", name_english: "Al-Munafiqun", verses_count: 11, revelation_place: "madinah" },
  { number: 64, name_arabic: "التغابن", name_english: "At-Taghabun", verses_count: 18, revelation_place: "madinah" },
  { number: 65, name_arabic: "الطلاق", name_english: "At-Talaq", verses_count: 12, revelation_place: "madinah" },
  { number: 66, name_arabic: "التحريم", name_english: "At-Tahrim", verses_count: 12, revelation_place: "madinah" },
  { number: 67, name_arabic: "الملك", name_english: "Al-Mulk", verses_count: 30, revelation_place: "makkah" },
  { number: 68, name_arabic: "القلم", name_english: "Al-Qalam", verses_count: 52, revelation_place: "makkah" },
  { number: 69, name_arabic: "الحاقة", name_english: "Al-Haqqah", verses_count: 52, revelation_place: "makkah" },
  { number: 70, name_arabic: "المعارج", name_english: "Al-Ma'arij", verses_count: 44, revelation_place: "makkah" },
  { number: 71, name_arabic: "نوح", name_english: "Nuh", verses_count: 28, revelation_place: "makkah" },
  { number: 72, name_arabic: "الجن", name_english: "Al-Jinn", verses_count: 28, revelation_place: "makkah" },
  { number: 73, name_arabic: "المزمل", name_english: "Al-Muzzammil", verses_count: 20, revelation_place: "makkah" },
  { number: 74, name_arabic: "المدثر", name_english: "Al-Muddaththir", verses_count: 56, revelation_place: "makkah" },
  { number: 75, name_arabic: "القيامة", name_english: "Al-Qiyamah", verses_count: 40, revelation_place: "makkah" },
  { number: 76, name_arabic: "الإنسان", name_english: "Al-Insan", verses_count: 31, revelation_place: "madinah" },
  { number: 77, name_arabic: "المرسلات", name_english: "Al-Mursalat", verses_count: 50, revelation_place: "makkah" },
  { number: 78, name_arabic: "النبأ", name_english: "An-Naba", verses_count: 40, revelation_place: "makkah" },
  { number: 79, name_arabic: "النازعات", name_english: "An-Nazi'at", verses_count: 46, revelation_place: "makkah" },
  { number: 80, name_arabic: "عبس", name_english: "'Abasa", verses_count: 42, revelation_place: "makkah" },
  { number: 81, name_arabic: "التكوير", name_english: "At-Takwir", verses_count: 29, revelation_place: "makkah" },
  { number: 82, name_arabic: "الانفطار", name_english: "Al-Infitar", verses_count: 19, revelation_place: "makkah" },
  { number: 83, name_arabic: "المطففين", name_english: "Al-Mutaffifin", verses_count: 36, revelation_place: "makkah" },
  { number: 84, name_arabic: "الانشقاق", name_english: "Al-Inshiqaq", verses_count: 25, revelation_place: "makkah" },
  { number: 85, name_arabic: "البروج", name_english: "Al-Buruj", verses_count: 22, revelation_place: "makkah" },
  { number: 86, name_arabic: "الطارق", name_english: "At-Tariq", verses_count: 17, revelation_place: "makkah" },
  { number: 87, name_arabic: "الأعلى", name_english: "Al-A'la", verses_count: 19, revelation_place: "makkah" },
  { number: 88, name_arabic: "الغاشية", name_english: "Al-Ghashiyah", verses_count: 26, revelation_place: "makkah" },
  { number: 89, name_arabic: "الفجر", name_english: "Al-Fajr", verses_count: 30, revelation_place: "makkah" },
  { number: 90, name_arabic: "البلد", name_english: "Al-Balad", verses_count: 20, revelation_place: "makkah" },
  { number: 91, name_arabic: "الشمس", name_english: "Ash-Shams", verses_count: 15, revelation_place: "makkah" },
  { number: 92, name_arabic: "الليل", name_english: "Al-Layl", verses_count: 21, revelation_place: "makkah" },
  { number: 93, name_arabic: "الضحى", name_english: "Ad-Duha", verses_count: 11, revelation_place: "makkah" },
  { number: 94, name_arabic: "الشرح", name_english: "Ash-Sharh", verses_count: 8, revelation_place: "makkah" },
  { number: 95, name_arabic: "التين", name_english: "At-Tin", verses_count: 8, revelation_place: "makkah" },
  { number: 96, name_arabic: "العلق", name_english: "Al-'Alaq", verses_count: 19, revelation_place: "makkah" },
  { number: 97, name_arabic: "القدر", name_english: "Al-Qadr", verses_count: 5, revelation_place: "makkah" },
  { number: 98, name_arabic: "البينة", name_english: "Al-Bayyinah", verses_count: 8, revelation_place: "madinah" },
  { number: 99, name_arabic: "الزلزلة", name_english: "Az-Zalzalah", verses_count: 8, revelation_place: "madinah" },
  { number: 100, name_arabic: "العاديات", name_english: "Al-'Adiyat", verses_count: 11, revelation_place: "makkah" },
  { number: 101, name_arabic: "القارعة", name_english: "Al-Qari'ah", verses_count: 11, revelation_place: "makkah" },
  { number: 102, name_arabic: "التكاثر", name_english: "At-Takathur", verses_count: 8, revelation_place: "makkah" },
  { number: 103, name_arabic: "العصر", name_english: "Al-'Asr", verses_count: 3, revelation_place: "makkah" },
  { number: 104, name_arabic: "الهمزة", name_english: "Al-Humazah", verses_count: 9, revelation_place: "makkah" },
  { number: 105, name_arabic: "الفيل", name_english: "Al-Fil", verses_count: 5, revelation_place: "makkah" },
  { number: 106, name_arabic: "قريش", name_english: "Quraysh", verses_count: 4, revelation_place: "makkah" },
  { number: 107, name_arabic: "الماعون", name_english: "Al-Ma'un", verses_count: 7, revelation_place: "makkah" },
  { number: 108, name_arabic: "الكوثر", name_english: "Al-Kawthar", verses_count: 3, revelation_place: "makkah" },
  { number: 109, name_arabic: "الكافرون", name_english: "Al-Kafirun", verses_count: 6, revelation_place: "makkah" },
  { number: 110, name_arabic: "النصر", name_english: "An-Nasr", verses_count: 3, revelation_place: "madinah" },
  { number: 111, name_arabic: "المسد", name_english: "Al-Masad", verses_count: 5, revelation_place: "makkah" },
  { number: 112, name_arabic: "الإخلاص", name_english: "Al-Ikhlas", verses_count: 4, revelation_place: "makkah" },
  { number: 113, name_arabic: "الفلق", name_english: "Al-Falaq", verses_count: 5, revelation_place: "makkah" },
  { number: 114, name_arabic: "الناس", name_english: "An-Nas", verses_count: 6, revelation_place: "makkah" }
];

// Fallback Surahs
export const FALLBACK_SURAHS: Record<number, SurahDetail> = {
  1: {
    number: 1,
    name_arabic: "الفاتحة",
    name_english: "Al-Fatihah",
    verses_count: 7,
    revelation_place: "makkah",
    audio_url: "https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3",
    verses: [
      { ayah: 1, arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" },
      { ayah: 2, arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ" },
      { ayah: 3, arabic: "الرَّحْمَٰنِ الرَّحِيمِ" },
      { ayah: 4, arabic: "مَالِكِ يَوْمِ الدِّينِ" },
      { ayah: 5, arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ" },
      { ayah: 6, arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ" },
      { ayah: 7, arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ" }
    ]
  }
};

// Initial Tasbih items dedicated to both deceased
export const INITIAL_TASBIH_ITEMS: TasbihItem[] = [
  {
    id: "dua-raise-ranks",
    text: "اللَّهُمَّ ارْفَعْ دَرَجَاتِهِمَا",
    virtue: "دعاء للمرحومين بالرفعة في درجات الجنة ومنازل الصديقين",
    target: 100,
    count: 0,
    completedRounds: 0
  },
  {
    id: "dua-forgive",
    text: "اللَّهُمَّ اغْفِرْ لَهُمَا",
    virtue: "طلب العفو والمغفرة ومحو الخطايا والذنوب",
    target: 100,
    count: 0,
    completedRounds: 0
  },
  {
    id: "dua-mercy",
    text: "اللَّهُمَّ ارْحَمْهُمَا",
    virtue: "سؤال الرحمة الواسعة التي وسعت كل شيء",
    target: 100,
    count: 0,
    completedRounds: 0
  },
  {
    id: "subhanallah",
    text: "سُبْحَانَ اللَّهِ",
    virtue: "تنزيه الله تعالى عن كل نقص، وغرس نخلة في الجنة",
    target: 33,
    count: 0,
    completedRounds: 0
  },
  {
    id: "alhamdulillah",
    text: "الْحَمْدُ لِلَّهِ",
    virtue: "تملأ الميزان بالخير والبركة، وأفضل الدعاء",
    target: 33,
    count: 0,
    completedRounds: 0
  },
  {
    id: "allahu-akbar",
    text: "اللَّهُ أَكْبَرُ",
    virtue: "تعظيم الله عز وجل، وتكفير الخطايا والسيئات",
    target: 33,
    count: 0,
    completedRounds: 0
  },
  {
    id: "la-ilaha-illallah",
    text: "لَا إِلَٰهَ إِلَّا اللَّهُ",
    virtue: "أفضل ما قاله النبيون، ومفتاح الجنة وحصن المؤمن",
    target: 100,
    count: 0,
    completedRounds: 0
  },
  {
    id: "astaghfirullah",
    text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
    virtue: "تفريج الهموم ومحو الأوزار وسعة الرزق والرحمات",
    target: 100,
    count: 0,
    completedRounds: 0
  },
  {
    id: "subhanallah-wa-bihamdihi",
    text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    virtue: "حُطت خطاياه وإن كانت مثل زبد البحر",
    target: 100,
    count: 0,
    completedRounds: 0
  },
  {
    id: "subhanallah-al-azeem",
    text: "سُبْحَانَ اللَّهِ الْعَظِيمِ",
    virtue: "كلمتان خفيفتان على اللسان ثقيلتان في الميزان",
    target: 100,
    count: 0,
    completedRounds: 0
  },
  {
    id: "la-hawla-wa-la-quwwata",
    text: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    virtue: "كنز عظيم من كنوز الجنة ودواء لتسعة وتسعين داء",
    target: 100,
    count: 0,
    completedRounds: 0
  }
];

// Curated authentic Hadiths
export const HADITHS_DATA: HadithItem[] = [
  {
    id: "hadith-1",
    title: "الصدقة الجارية وأثرها بعد الموت",
    text: "إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَمَلُهُ إِلاَّ مِنْ ثَلاَثَةٍ: إِلاَّ مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ.",
    narrator: "عن أبي هريرة رضي الله عنه",
    source: "صحيح مسلم (1631)",
    grade: "صحيح",
    category: "sadaqah"
  },
  {
    id: "hadith-2",
    title: "رفع الدرجات في الجنة باستغفار الأبناء والأحفاد",
    text: "إِنَّ الرَّجُلَ لَتُرْفَعُ دَرَجَتُهُ فِي الْجَنَّةِ فَيَقُولُ: أَنَّى لِي هَذَا؟ فَيُقَالُ: بِاسْتِغْفَارِ وَلَدِكَ لَكَ.",
    narrator: "عن أبي هريرة رضي الله عنه",
    source: "سنن ابن ماجه (3660) ومسند أحمد",
    grade: "حسن",
    category: "parents"
  },
  {
    id: "hadith-3",
    title: "فضل سورة تبارك (الملك) في الشفاعة والنجاة من عذاب القبر",
    text: "إِنَّ سُورَةً مِنَ الْقُرْآنِ ثَلاَثُونَ آيَةً شَفَعَتْ لِرَجُلٍ حَتَّى غُفِرَ لَهُ، وَهِيَ: تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ.",
    narrator: "عن أبي هريرة رضي الله عنه",
    source: "سنن أبي داود والترمذي",
    grade: "حسن",
    category: "quran"
  },
  {
    id: "hadith-4",
    title: "سقيا الماء أفضل الصدقات الجارية",
    text: "قَالَ سَعْدُ بْنُ عُبَادَةَ: يَا رَسُولَ اللَّهِ، إِنَّ أُمِّي مَاتَتْ، أَفَأَتَصَدَّقُ عَنْهَا؟ قَالَ: «نَعَمْ»، قُلْتُ: فَأَيُّ الصَّدَقَةِ أَفْضَلُ؟ قَالَ: «سَقْيُ الْمَاءِ».",
    narrator: "عن سعد بن عبادة رضي الله عنه",
    source: "سنن النسائي (3664)",
    grade: "حسن",
    category: "sadaqah"
  },
  {
    id: "hadith-5",
    title: "عظيم أجر قراءة القرآن الكريم",
    text: "مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ، وَالحَسَنَةُ بِعَشْرِ أَمْثَالِهَا، لاَ أَقُولُ الم حَرْفٌ، وَلَكِنْ أَلِفٌ حَرْفٌ وَلاَمٌ حَرْفٌ وَمِيمٌ حَرْفٌ.",
    narrator: "عن عبد الله بن مسعود رضي الله عنه",
    source: "سنن الترمذي (2910)",
    grade: "صحيح",
    category: "quran"
  },
  {
    id: "hadith-6",
    title: "الدال على الخير كفاعله",
    text: "مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ.",
    narrator: "عن أبي مسعود الأنصاري رضي الله عنه",
    source: "صحيح مسلم (1893)",
    grade: "صحيح",
    category: "mercy"
  }
];

// Curated Duas for both: الحاج عوض إبراهيم رمضان شعلة and الحاج محمد سويلم
export const DUAS_DATA: DuaItem[] = [
  {
    id: "dua-grand-ammar",
    title: "دعاء جامع للمرحومين الحاج عوض شعلة والحاج محمد سويلم",
    text: "اللَّهُمَّ اغْفِرْ لِلْحَاجِّ عَوَض إِبْرَاهِيم رَمَضَان شُعْلَة، وَالْحَاجِّ مُحَمَّد سُوَيْلِم، وَارْحَمْهُمَا رَحْمَةً وَاسِعَةً مِلْءَ السَّمَاوَاتِ وَالأَرْضِ، اللَّهُمَّ عَافِهِمَا وَاعْفُ عَنْهُمَا، وَأَكْرِمْ نُزُلَهُمَا، وَوَسِّعْ مُدْخَلَهُمَا، وَاغْسِلْهُمَا بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ، وَنَقِّهِمَا مِنَ الذُّنُوبِ وَالْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الأَبْيَضُ مِنَ الدَّنَسِ. اللَّهُمَّ جَازِهِمَا بِالإِحْسَانِ إِحْسَانًا، وَبِالسَّيِّئَاتِ عَفْوًا وَغُفْرَانًا، وَاجْعَلْ قَبْرَيْهِمَا رَوْضَةً مِنْ رِيَاضِ الْجَنَّةِ وَلَا تَجْعَلْهُمَا حُفْرَةً مِنْ حُفَرِ النَّارِ، وَافْسَحْ لَهُمَا فِي قَبْرَيْهِمَا مَدَّ بَصَرِهِمَا، وَافْرُشْ قَبْرَيْهِمَا مِنْ فِرَاشِ الْجَنَّةِ، وَأَدْخِلْهُمَا الْفِرْدَوْسَ الأَعْلَى بِغَيْرِ حِسَابٍ وَلَا سَابِقَةِ عَذَابٍ، وَاجْمَعْنَا بِهِمَا فِي مُسْتَقَرِّ رَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ.",
    source: "صياغة شرعية جامعة لأدعية السنة النبوية الشريفة",
    category: "featured"
  },
  {
    id: "dua-general-forgiveness",
    title: "دعاء المغفرة والرحمة العامة للأموات",
    text: "اللَّهُمَّ إِنَّهُمَا فِي ذِمَّتِكَ وَحَبْلِ جِوَارِكَ، فَقِهِمَا مِنْ فِتْنَةِ الْقَبْرِ وَعَذَابِ النَّارِ، وَأَنْتَ أَهْلُ الْوَفَاءِ وَالْحَقِّ، فَاغْفِرْ لَهُمَا وَارْحَمْهُمَا إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ.",
    source: "سنن أبي داود وابن ماجه",
    category: "forgiveness"
  },
  {
    id: "dua-grave-light",
    title: "دعاء تنوير القبر والأنس في الوحشة",
    text: "اللَّهُمَّ أَنْزِلْ عَلَى قَبْرَيْهِمَا الضِّيَاءَ وَالنُّورَ، وَالْفُسْحَةَ وَالسُّرُورَ، اللَّهُمَّ آنِسْ وَحْشَتَهُمَا، وَارْحَمْ غُرْبَتَهُمَا، وَأَمِّنْهُمَا يَوْمَ الْفَزَعِ الأَكْبَرِ، وَاجْعَلْ عَنْ يَمِينِهِمَا نُورًا وَعَنْ شِمَالِهِمَا نُورًا وَمِنْ بَيْنِ يَدَيْهِمَا نُورًا حَتَّى تَبْعَثَهُمَا آمِنَيْنِ مُطْمَئِنَّيْنِ.",
    source: "مأثور من أدعية الصالحين",
    category: "grave"
  },
  {
    id: "dua-jannah-elevation",
    title: "دعاء الفوز بأعلى درجات الجنة",
    text: "اللَّهُمَّ ابْنِ لَهُمَا بُيُوتًا فِي الْجَنَّةِ، وَاجْعَلْ مَسَاكِنَهُمَا فِي أَعْلَى عِلِّيِّينَ مَعَ النَّبِيِّينَ وَالصِّدِّيقِينَ وَالشُّهَدَاءِ وَالصَّالِحِينَ وَحَسُنَ أُولَئِكَ رَفِيقًا، وَاسْقِهِمَا مِنْ حَوْضِ نَبِيِّكَ شَرْبَةً هَنِيئَةً لَا يَظْمَآنِ بَعْدَهَا أَبَدًا.",
    source: "مأثور من جوامع الكلم",
    category: "jannah"
  },
  {
    id: "dua-friday",
    title: "دعاء يوم الجمعة المباركة للمرحومين",
    text: "اللَّهُمَّ فِي هَذَا الْيَوْمِ الْمُبَارَكِ، يَوْمِ الْجُمُعَةِ، نَسْأَلُكَ أَنْ تَمُنَّ عَلَيْهِمَا بِعَفْوِكَ وَرِضْوَانِكَ، وَأَنْ تُبَدِّلَ سَيِّئَاتِهِمَا حَسَنَاتٍ، وَأَنْ تَمْلأَ قَبْرَيْهِمَا بِالنُّورِ وَالرَّيْحَانِ، وَتَجْعَلَهُمَا مِمَّنْ قِيلَ لَهُمْ: ﴿ادْخُلُوهَا بِسَلَامٍ آمِنِينَ﴾.",
    source: "أدعية بر الوالدين والأجداد يوم الجمعة",
    category: "friday"
  }
];
