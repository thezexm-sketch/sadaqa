'use client';

import React from 'react';
import { Sparkles, BookOpen, Heart, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  totalTasbihCount: number;
  totalQuranReadCount: number;
  totalAmeensCount: number;
}

export function HeroSection({
  totalTasbihCount,
  totalQuranReadCount,
  totalAmeensCount,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-amber-500/15 dark:border-emerald-900/40">
      {/* Decorative Islamic Geometric Star background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-amber-400 to-emerald-600 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-emerald-600 to-amber-500 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Top Blessed Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 animate-pulse" />
          <span>صدقة جارية مستمرة بإذن الله تعالى</span>
        </div>

        {/* Verse Banner */}
        <div className="mb-6 font-quran text-xl sm:text-2xl md:text-3xl text-emerald-900 dark:text-emerald-200 tracking-wide font-bold">
          ﴿ إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ ﴾
        </div>

        {/* Main Dedication Title with Both Names */}
        <div className="relative inline-block mb-4 max-w-4xl">
          <h2 className="text-sm sm:text-lg text-emerald-800 dark:text-emerald-300 font-semibold mb-3">
            إهداء خالص الثواب والأجر عن روحي المغفور لهما بإذن الله تعالى
          </h2>

          <div className="flex flex-col items-center justify-center gap-2 my-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-emerald-950 dark:text-amber-300 drop-shadow-sm leading-tight">
              الحاج عوض إبراهيم رمضان شعلة
            </h1>
            <span className="text-2xl sm:text-3xl text-amber-700 dark:text-amber-400 font-black my-1">
              و
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-emerald-950 dark:text-amber-300 drop-shadow-sm leading-tight">
              الحاج محمد سويلم
            </h1>
          </div>

          <p className="text-sm sm:text-base text-amber-800 dark:text-amber-400 font-semibold mt-3">
            (رحمهما الله رحمة واسعة وأسكنهما الفردوس الأعلى من الجنة)
          </p>
        </div>

        {/* Spiritual Invocation Box */}
        <div className="max-w-3xl mx-auto mt-6 mb-8 p-6 sm:p-7 rounded-3xl bg-[#fdfbf7] dark:bg-emerald-900/30 border-2 border-amber-500/30 shadow-md backdrop-blur-sm">
          <p className="font-quran text-lg sm:text-2xl text-emerald-950 dark:text-emerald-50 leading-loose font-bold">
            «اللَّهُمَّ اجْعَلْ كُلَّ تَسْبِيحَةٍ، وَآيَةٍ تُتْلَى، وَدَعْوَةٍ تُرْفَعُ فِي هَٰذَا الْمَوْقِعِ نُورًا يَمْلأُ قَبْرَيْهِمَا، وَرِفْعَةً فِي دَرَجَاتِهِمَا، وَرِضًا وَمَغْفِرَةً مِنْ عِنْدِكَ يَا أَرْحَمَ الرَّاحِمِينَ»
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <a
            href="#tasbih"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-emerald-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span>ابدأ بالتسبيح الآن</span>
          </a>

          <a
            href="#quran"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#fdfbf7] dark:bg-emerald-950/80 border border-amber-500/40 text-emerald-950 dark:text-emerald-100 hover:bg-amber-500/10 font-semibold text-sm sm:text-base shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <BookOpen className="w-5 h-5 text-amber-500" />
            <span>تلاوة القرآن الكريم</span>
          </a>

          <a
            href="#duas"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-amber-900 dark:text-amber-200 hover:bg-amber-500/25 font-semibold text-sm sm:text-base shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Heart className="w-5 h-5 text-amber-700 dark:text-amber-400" />
            <span>أدعية للمرحومين</span>
          </a>
        </div>

        {/* Live Counters Indicator Bar */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto p-4 sm:p-6 rounded-3xl bg-[#fdfbf7] dark:bg-emerald-950/60 border border-amber-500/30 shadow-lg backdrop-blur-md">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-4xl font-extrabold text-amber-700 dark:text-amber-400">
              {totalTasbihCount.toLocaleString('ar-EG')}
            </span>
            <span className="text-xs sm:text-sm text-emerald-950/90 dark:text-emerald-200/90 mt-1 font-semibold">
              تسبيحة مهداة لروحهما
            </span>
          </div>

          <div className="flex flex-col items-center border-r border-l border-amber-500/20">
            <span className="text-2xl sm:text-4xl font-extrabold text-emerald-800 dark:text-emerald-300">
              {totalQuranReadCount.toLocaleString('ar-EG')}
            </span>
            <span className="text-xs sm:text-sm text-emerald-950/90 dark:text-emerald-200/90 mt-1 font-semibold">
              سورة مقروءة
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-4xl font-extrabold text-amber-700 dark:text-amber-400">
              {totalAmeensCount.toLocaleString('ar-EG')}
            </span>
            <span className="text-xs sm:text-sm text-emerald-950/90 dark:text-emerald-200/90 mt-1 font-semibold">
              تأمين ودعاء
            </span>
          </div>
        </div>

        {/* Subtle Scroll Down Prompt */}
        <div className="mt-8 flex justify-center">
          <a
            href="#tasbih"
            aria-label="الانتقال إلى المسبحة الإلكترونية"
            className="p-2 rounded-full text-emerald-800/60 dark:text-emerald-400/60 hover:text-amber-600 transition-colors animate-bounce"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
