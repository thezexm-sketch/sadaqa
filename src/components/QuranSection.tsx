'use client';

import React, { useState, useEffect, useRef } from 'react';
import { SurahSummary, SurahDetail, Reciter } from '@/lib/types';
import { getSurahsList, getSurahDetail, RECITERS_LIST, getFullSurahAudioUrl } from '@/lib/api';
import {
  BookOpen,
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  CheckCircle,
  Sparkles,
  ZoomIn,
  ZoomOut,
  UserCheck,
  ChevronDown,
  ChevronUp,
  AlignJustify,
  Layers,
} from 'lucide-react';
import { useSound } from '@/context/SoundContext';

interface QuranSectionProps {
  onSurahRead: (surahNumber: number, surahName: string) => void;
}

const FEATURED_SURAHS = [
  { number: 1, title: 'الفاتحة', desc: 'أم الكتاب والسبع المثاني' },
  { number: 36, title: 'يس', desc: 'قلب القرآن ومأثورة للميت' },
  { number: 67, title: 'الملك', desc: 'المانعة الشافعة من عذاب القبر' },
  { number: 55, title: 'الرحمن', desc: 'عروس القرآن' },
  { number: 56, title: 'الواقعة', desc: 'آيات البعث والنعيم' },
  { number: 18, title: 'الكهف', desc: 'نور ما بين الجمعتين' },
];

export function QuranSection({ onSurahRead }: QuranSectionProps) {
  const { playCelebration } = useSound();
  const [surahsList, setSurahsList] = useState<SurahSummary[]>([]);
  const [selectedSurahNumber, setSelectedSurahNumber] = useState<number>(36); // Default Yasin
  const [surahDetail, setSurahDetail] = useState<SurahDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Reciters sorted alphabetically from أ to ي
  const [selectedReciter, setSelectedReciter] = useState<Reciter>(
    RECITERS_LIST.find((r) => r.id === 'yasser') || RECITERS_LIST[0]
  );

  // Text visibility toggle state (true = text visible, false = text hidden)
  const [isTextVisible, setIsTextVisible] = useState<boolean>(true);

  // View Mode: 'mushaf' (full continuous text) vs 'cards' (each ayah in its own separate box/card)
  const [viewMode, setViewMode] = useState<'mushaf' | 'cards'>('mushaf');

  // Full continuous studio audio state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Font size level (0 to 3)
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(1);

  // Read counts
  const [readCounts, setReadCounts] = useState<Record<number, number>>({});

  useEffect(() => {
    getSurahsList().then((list) => setSurahsList(list));
    try {
      const saved = localStorage.getItem('sadaqa_quran_reads');
      if (saved) setReadCounts(JSON.parse(saved));
    } catch {
      // Ignore
    }
  }, []);

  // Fetch Surah text
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    getSurahDetail(selectedSurahNumber).then((detail) => {
      if (!isCancelled) {
        setSurahDetail(detail);
        setLoading(false);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [selectedSurahNumber]);

  // Load full continuous studio master audio when surah or reciter changes
  useEffect(() => {
    const audioUrl = getFullSurahAudioUrl(selectedSurahNumber, selectedReciter);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      audioRef.current.src = audioUrl;
      audioRef.current.load();
    }
  }, [selectedSurahNumber, selectedReciter]);

  const togglePlayAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const seekRelative = (seconds: number) => {
    if (audioRef.current) {
      const newTime = Math.min(Math.max(0, audioRef.current.currentTime + seconds), duration);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isAudioMuted;
      setIsAudioMuted(!isAudioMuted);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds <= 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // Spacious font sizing with massive line height to prevent diacritics collision
  const fontSizes = [
    'text-xl sm:text-2xl',
    'text-2xl sm:text-3xl',
    'text-3xl sm:text-4xl',
    'text-4xl sm:text-5xl',
  ];

  const handleDedicateReading = () => {
    if (!surahDetail) return;
    playCelebration();

    const currentCount = (readCounts[surahDetail.number] || 0) + 1;
    const updated = { ...readCounts, [surahDetail.number]: currentCount };
    setReadCounts(updated);
    try {
      localStorage.setItem('sadaqa_quran_reads', JSON.stringify(updated));
    } catch {
      // Ignore
    }

    onSurahRead(surahDetail.number, surahDetail.name_arabic);
  };

  return (
    <section id="quran" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Full Continuous Audio Player Element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => {
          setIsPlaying(false);
          playCelebration();
        }}
        preload="metadata"
      />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-300 text-xs font-semibold mb-3">
          <BookOpen className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          <span>تلاوة كاملة متصلة وتدبر</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-950 dark:text-emerald-50 tracking-tight mb-4">
          القرآن الكريم والتلاوة المباركة
        </h2>
        <p className="text-base sm:text-lg text-emerald-900/80 dark:text-emerald-200/80 leading-relaxed">
          تلاوة كاملة غير مجزأة من الاستوديو لكبار القراء، وقراءة السورة الكريمة كاملة بإهدائها لروحي المرحومين «الحاج عوض شعلة» و«الحاج محمد سويلم».
        </p>
      </div>

      {/* Recommended Surahs Chips */}
      <div className="mb-8">
        <div className="flex items-center justify-between gap-4 mb-3">
          <span className="text-xs sm:text-sm font-bold text-amber-800 dark:text-amber-400">
            سور مأثورة وموصى بها للميت:
          </span>
          <span className="text-xs text-emerald-800/80 dark:text-emerald-300/80">
            اضغط لاختيار السورة
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
          {FEATURED_SURAHS.map((item) => {
            const isSelected = selectedSurahNumber === item.number;
            return (
              <button
                key={item.number}
                onClick={() => setSelectedSurahNumber(item.number)}
                className={`flex flex-col p-3 rounded-2xl border text-right transition-all duration-200 ${
                  isSelected
                    ? 'border-amber-500 bg-amber-500/15 dark:bg-emerald-800/40 text-emerald-950 dark:text-white shadow-md'
                    : 'border-emerald-900/15 dark:border-emerald-800/40 bg-[#fdfbf7] dark:bg-[#0d231b] hover:border-amber-500/40 text-emerald-950 dark:text-emerald-200'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="text-xs opacity-60">#{item.number}</span>
                  {isSelected && <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />}
                </div>
                <span className="font-bold text-base sm:text-lg">{item.title}</span>
                <span className="text-[10px] opacity-75 line-clamp-1">{item.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Controls Bar: Surah Dropdown, View Mode Toggle & Font Size */}
      <div className="mb-6 p-4 sm:p-5 rounded-3xl bg-[#fdfbf7] dark:bg-[#0d231b] border border-amber-500/25 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Dropdown Surahs */}
        <div className="w-full md:w-80 relative">
          <label htmlFor="surah-select" className="sr-only">
            اختر السورة من سور القرآن الـ 114
          </label>
          <select
            id="surah-select"
            value={selectedSurahNumber}
            onChange={(e) => setSelectedSurahNumber(Number(e.target.value))}
            className="w-full appearance-none px-4 py-3 rounded-2xl bg-amber-500/5 dark:bg-emerald-900/30 border border-amber-500/30 text-emerald-950 dark:text-emerald-100 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            {surahsList.map((s) => (
              <option key={s.number} value={s.number} className="bg-[#fdfbf7] dark:bg-[#071510] text-emerald-950 dark:text-emerald-100">
                {s.number}. سورة {s.name_arabic} ({s.verses_count} آية - {s.name_english})
              </option>
            ))}
          </select>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-800 dark:text-emerald-300">
            ▼
          </div>
        </div>

        {/* View Mode Switcher: Full Mushaf vs Ayah by Ayah Cards */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs font-bold">
          <button
            type="button"
            onClick={() => setViewMode('mushaf')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all ${
              viewMode === 'mushaf'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-emerald-900 dark:text-emerald-200 hover:text-amber-700'
            }`}
          >
            <AlignJustify className="w-3.5 h-3.5" />
            <span>عرض السورة كاملة</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('cards')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all ${
              viewMode === 'cards'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-emerald-900 dark:text-emerald-200 hover:text-amber-700'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>عرض آية بآية (في مربع)</span>
          </button>
        </div>

        {/* Font Size Accessibility Controls */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-emerald-900/80 dark:text-emerald-300/80 ml-1">
            حجم الخط:
          </span>
          <button
            onClick={() => setFontSizeLevel((prev) => Math.max(0, prev - 1))}
            disabled={fontSizeLevel === 0}
            aria-label="تصغير حجم الخط"
            title="تصغير الخط"
            className="p-2 rounded-xl border border-emerald-900/15 dark:border-emerald-700/30 text-emerald-950 dark:text-emerald-100 hover:bg-amber-500/10 disabled:opacity-30 transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs font-bold text-amber-700 dark:text-amber-400 px-1">
            {fontSizeLevel + 1}/4
          </span>
          <button
            onClick={() => setFontSizeLevel((prev) => Math.min(fontSizes.length - 1, prev + 1))}
            disabled={fontSizeLevel === fontSizes.length - 1}
            aria-label="تكبير حجم الخط"
            title="تكبير الخط"
            className="p-2 rounded-xl border border-emerald-900/15 dark:border-emerald-700/30 text-emerald-950 dark:text-emerald-100 hover:bg-amber-500/10 disabled:opacity-30 transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setFontSizeLevel(1)}
            aria-label="إعادة ضبط حجم الخط"
            title="الخط الافتراضي"
            className="px-2.5 py-1.5 rounded-xl border border-emerald-900/15 dark:border-emerald-700/30 text-xs text-emerald-800/80 dark:text-emerald-300/80 hover:bg-amber-500/10 transition-colors"
          >
            افتراضي
          </button>
        </div>
      </div>

      {/* Main Quran Reader Box */}
      <div className="rounded-3xl bg-[#fdfbf7] dark:bg-[#0d231b] border-2 border-amber-500/30 shadow-xl overflow-hidden">
        {/* Surah Header & Continuous Master Audio Player Bar */}
        <div className="p-6 sm:p-8 bg-gradient-to-b from-emerald-900 to-emerald-950 text-white relative">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="text-center sm:text-right">
              <span className="text-xs text-amber-300 font-semibold tracking-wider block mb-1">
                {surahDetail?.revelation_place === 'makkah' ? 'مكية' : 'مدنية'} • {surahDetail?.verses_count || 0} آية
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-quran">
                سُورَةُ {surahDetail?.name_arabic}
              </h3>
            </div>

            {/* Right side: Read Count Badge + Side Arrow to Collapse/Expand Text */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-amber-400/30 text-xs sm:text-sm text-amber-200">
                قُرئت لروحهما: <strong className="text-white text-base font-bold mr-1">{readCounts[selectedSurahNumber] || 0}</strong> مرة
              </div>

              {/* Side Arrow button to Hide / Show Text */}
              <button
                type="button"
                onClick={() => setIsTextVisible(!isTextVisible)}
                aria-label={isTextVisible ? 'إخفاء كلام السورة' : 'إظهار كلام السورة'}
                title={isTextVisible ? 'إخفاء كلام السورة' : 'إظهار كلام السورة'}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                {isTextVisible ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    <span>إخفاء النص</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    <span>إظهار النص</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Continuous Audio Player Controls */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black/35 border border-white/10 backdrop-blur-md space-y-4">
            {/* Reciter Selector (Sorted Alphabetically from أ to ي) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <UserCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-emerald-200 font-medium shrink-0">القارئ (مرتب أبجدياً):</span>
                <select
                  value={selectedReciter.id}
                  onChange={(e) => {
                    const r = RECITERS_LIST.find((rec) => rec.id === e.target.value);
                    if (r) setSelectedReciter(r);
                  }}
                  aria-label="اختيار الشيخ القارئ"
                  className="bg-emerald-950/90 border border-amber-400/40 text-amber-300 px-3 py-2 rounded-xl font-bold text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 w-full sm:w-auto"
                >
                  {RECITERS_LIST.map((rec) => (
                    <option key={rec.id} value={rec.id} className="bg-emerald-950 text-white">
                      {rec.name_arabic}
                    </option>
                  ))}
                </select>
              </div>

              <span className="text-amber-300/90 font-sans text-xs">
                تلاوة متصلة كاملة بدون أي تقطيع
              </span>
            </div>

            {/* Audio Controls (Rewind 10s, Play/Pause, Forward 10s, Timeline Scrub, Mute) */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => seekRelative(-10)}
                aria-label="رجوع 10 ثوانٍ"
                title="رجوع 10 ثوانٍ"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={togglePlayAudio}
                aria-label={isPlaying ? 'إيقاف التلاوة' : 'تشغيل التلاوة'}
                className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-amber-400 text-emerald-950 flex items-center justify-center hover:scale-105 active:scale-95 shadow-md shrink-0 transition-transform"
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current mr-0.5" />}
              </button>

              <button
                type="button"
                onClick={() => seekRelative(10)}
                aria-label="تقديم 10 ثوانٍ"
                title="تقديم 10 ثوانٍ"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <RotateCw className="w-4 h-4" />
              </button>

              <div className="flex-1 flex flex-col gap-1">
                <div className="flex items-center justify-between text-[11px] text-emerald-200/90 font-mono">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  aria-label="شريط تقدم التلاوة"
                  className="w-full accent-amber-400 cursor-pointer h-2 rounded-lg bg-white/20"
                />
              </div>

              <button
                onClick={toggleMute}
                aria-label={isAudioMuted ? 'إلغاء كتم الصوت' : 'كتم الصوت'}
                className="p-2 rounded-xl hover:bg-white/10 text-emerald-200 hover:text-white transition-colors"
              >
                {isAudioMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Complete Quranic Text Container (Collapsible via Side Arrow) */}
        {isTextVisible ? (
          <div className="p-6 sm:p-12 md:p-16 min-h-[350px] transition-all duration-300">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-3 text-emerald-800 dark:text-emerald-300">
                <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-sm font-medium">جاري تحميل آيات السورة الكريمة...</p>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Bismillah Header (Except Surah At-Tawbah #9 and Surah Al-Fatihah #1 where it's ayah 1) */}
                {selectedSurahNumber !== 1 && selectedSurahNumber !== 9 && (
                  <div className="text-center my-8 py-4">
                    <span className="font-quran text-2xl sm:text-3xl md:text-4xl text-emerald-950 dark:text-amber-300 font-bold tracking-wider">
                      بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                    </span>
                  </div>
                )}

                {/* Mode 1: Full Continuous Mushaf View with Ample 4.5rem Line-Height */}
                {viewMode === 'mushaf' && (
                  <div
                    className={`text-right font-quran tracking-wider [word-spacing:0.45rem] sm:[word-spacing:0.55rem] text-emerald-950 dark:text-emerald-50 ${fontSizes[fontSizeLevel]}`}
                    style={{ lineHeight: '4.5rem' }}
                  >
                    {surahDetail?.verses.map((v) => (
                      <span key={v.ayah} className="inline">
                        {v.arabic}
                        <span className="mx-2.5 inline-flex items-center justify-center font-sans font-bold text-xs sm:text-sm px-2.5 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400 select-none">
                          ﴿{v.ayah}﴾
                        </span>{' '}
                      </span>
                    ))}
                  </div>
                )}

                {/* Mode 2: Ayah by Ayah in Separate Spacious Boxes/Cards */}
                {viewMode === 'cards' && (
                  <div className="space-y-6">
                    {surahDetail?.verses.map((v) => (
                      <div
                        key={v.ayah}
                        className="p-6 sm:p-8 rounded-3xl bg-[#fdfbf7] dark:bg-[#071510] border border-amber-500/25 hover:border-amber-500/40 shadow-sm transition-all text-right"
                      >
                        <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-amber-500/15">
                          <span className="text-xs font-bold text-amber-700 dark:text-amber-400 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25">
                            الآية رقم ({v.ayah})
                          </span>
                          <span className="text-xs text-emerald-800/60 dark:text-emerald-300/60 font-semibold">
                            سورة {surahDetail?.name_arabic}
                          </span>
                        </div>
                        <p
                          className={`font-quran leading-[3.6] sm:leading-[4.2] text-emerald-950 dark:text-emerald-50 ${fontSizes[fontSizeLevel]}`}
                        >
                          {v.arabic}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          /* When Text is Collapsed/Hidden */
          <div className="p-10 text-center bg-amber-500/5 transition-all duration-300">
            <button
              type="button"
              onClick={() => setIsTextVisible(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-800 dark:text-amber-300 font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <ChevronDown className="w-4 h-4" />
              <span>تم إخفاء النص للاستماع الهادئ • اضغط هنا لإعادة إظهار السورة</span>
            </button>
          </div>
        )}

        {/* Action Bar: Dedicate Reading to both Deceased */}
        <div className="p-6 bg-gradient-to-r from-amber-500/10 via-emerald-900/10 to-amber-500/10 dark:from-emerald-950 dark:to-emerald-900/40 border-t border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div>
            <h4 className="font-bold text-emerald-950 dark:text-emerald-50 text-base">
              أتممت القراءة؟ أهدِ ثوابها الآن
            </h4>
            <p className="text-xs text-emerald-900/80 dark:text-emerald-300/80 mt-0.5">
              كل حرف تتلوه بحسنة، والحسنة بعشر أمثالها، والثواب واصل لروحهما بإذن الله.
            </p>
          </div>

          <button
            type="button"
            onClick={handleDedicateReading}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-900/20 hover:scale-[1.02] active:scale-95 transition-all shrink-0"
          >
            <CheckCircle className="w-5 h-5 text-amber-300" />
            <span>قرأتها ونويت الثواب للحاج عوض شعلة والحاج محمد سويلم</span>
          </button>
        </div>
      </div>
    </section>
  );
}
