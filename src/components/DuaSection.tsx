'use client';

import React, { useState, useEffect } from 'react';
import { DuaItem } from '@/lib/types';
import { DUAS_DATA } from '@/lib/fallbackData';
import { Heart, Copy, Check, Sparkles } from 'lucide-react';
import { useSound } from '@/context/SoundContext';

interface DuaSectionProps {
  onCopySuccess: (message: string) => void;
  onAmeen: () => void;
}

export function DuaSection({ onCopySuccess, onAmeen }: DuaSectionProps) {
  const { playClick } = useSound();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [ameenCounts, setAmeenCounts] = useState<Record<string, number>>({});
  const [hasAmeened, setHasAmeened] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const savedCounts = localStorage.getItem('sadaqa_ameen_counts');
      if (savedCounts) setAmeenCounts(JSON.parse(savedCounts));

      const savedUserAmeens = localStorage.getItem('sadaqa_user_ameens');
      if (savedUserAmeens) setHasAmeened(JSON.parse(savedUserAmeens));
    } catch {
      // Ignore
    }
  }, []);

  const handleCopy = (dua: DuaItem) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`«${dua.text}»\n(دعاء لروحي المرحومين الحاج عوض شعلة والحاج محمد سويلم)`);
      setCopiedId(dua.id);
      setTimeout(() => setCopiedId(null), 2500);
      onCopySuccess('تم نسخ الدعاء إلى الحافظة بنجاح، تقبل الله دعاءك');
    }
  };

  const handleAmeen = (duaId: string) => {
    playClick();
    const newCount = (ameenCounts[duaId] || 0) + 1;
    const updatedCounts = { ...ameenCounts, [duaId]: newCount };
    const updatedUser = { ...hasAmeened, [duaId]: true };

    setAmeenCounts(updatedCounts);
    setHasAmeened(updatedUser);

    try {
      localStorage.setItem('sadaqa_ameen_counts', JSON.stringify(updatedCounts));
      localStorage.setItem('sadaqa_user_ameens', JSON.stringify(updatedUser));
    } catch {
      // Ignore
    }

    onAmeen();
    onCopySuccess('آمين يا رب العالمين! كُتب تأمينك ودعاؤك في الميزان بإذن الله');
  };

  const featuredDua = DUAS_DATA.find((d) => d.category === 'featured') || DUAS_DATA[0];
  const otherDuas = DUAS_DATA.filter((d) => d.id !== featuredDua.id);

  return (
    <section id="duas" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-3">
          <Heart className="w-3.5 h-3.5 text-amber-500" />
          <span>الدعاء مخ العبادة</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-950 dark:text-emerald-50 tracking-tight mb-4">
          أدعية مأثورة للمرحومين
        </h2>
        <p className="text-base sm:text-lg text-emerald-900/80 dark:text-emerald-200/80 leading-relaxed">
          ارفع أكف الضراعة بالدعاء للمغفور لهما بإذن الله «الحاج عوض شعلة» و«الحاج محمد سويلم»، وأمّن على الأدعية ليضاعف الله أجرك.
        </p>
      </div>

      {/* Grand Featured Dua for Both Deceased */}
      <div className="mb-12 relative p-6 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-[#071b14] text-white border-2 border-amber-500/50 shadow-2xl overflow-hidden">
        {/* Decorative corner embellishments */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>الدعاء الجامع لـ «الحاج عوض شعلة» و«الحاج محمد سويلم»</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-6">
            اللَّهُمَّ ارْحَمْهُمَا وَاغْفِرْ لَهُمَا وَأَسْكِنْهُمَا الْفِرْدَوْسَ الأَعْلَى
          </h3>

          <div className="max-w-4xl font-quran text-xl sm:text-2xl md:text-3xl text-emerald-50 leading-[2.2] sm:leading-[2.4] tracking-wide mb-8">
            «{featuredDua.text}»
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Ameen Button */}
            <button
              type="button"
              onClick={() => handleAmeen(featuredDua.id)}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-emerald-950 font-extrabold text-sm sm:text-base shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
            >
              <Heart className="w-5 h-5 fill-current text-emerald-950" />
              <span>قل آمين ({ameenCounts[featuredDua.id] || 12})</span>
            </button>

            {/* Copy Button */}
            <button
              type="button"
              onClick={() => handleCopy(featuredDua)}
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm sm:text-base transition-all"
            >
              {copiedId === featuredDua.id ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>تم نسخ الدعاء بنجاح</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>نسخ الدعاء كاملاً</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Other Categorized Duas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {otherDuas.map((dua) => {
          const isCopied = copiedId === dua.id;
          const count = ameenCounts[dua.id] || 0;
          return (
            <div
              key={dua.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#fdfbf7] dark:bg-[#0d231b] border border-amber-500/25 hover:border-amber-500/40 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    {dua.title}
                  </span>
                  {dua.source && (
                    <span className="text-[11px] text-emerald-800/60 dark:text-emerald-300/60">
                      {dua.source}
                    </span>
                  )}
                </div>

                <p className="font-quran text-lg sm:text-xl text-emerald-950 dark:text-emerald-50 leading-loose mb-6">
                  «{dua.text}»
                </p>
              </div>

              <div className="pt-4 border-t border-amber-500/15 dark:border-emerald-800/30 flex items-center justify-between gap-3 text-xs">
                {/* Ameen Button */}
                <button
                  type="button"
                  onClick={() => handleAmeen(dua.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-emerald-900/15 dark:border-emerald-700/30 text-emerald-900 dark:text-emerald-100 hover:bg-emerald-500/10 font-semibold transition-colors active:scale-95"
                >
                  <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                  <span>آمين ({count})</span>
                </button>

                {/* Copy Button */}
                <button
                  type="button"
                  onClick={() => handleCopy(dua)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all ${
                    isCopied
                      ? 'border-emerald-500 bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold'
                      : 'border-amber-500/30 hover:bg-amber-500/10 text-amber-800 dark:text-amber-300 font-medium'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>تم النسخ</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ الدعاء</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
