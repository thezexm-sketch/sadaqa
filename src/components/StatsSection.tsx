'use client';

import React from 'react';
import { Award, BookOpen, Heart, Sparkles, TrendingUp } from 'lucide-react';

interface StatsSectionProps {
  totalTasbihCount: number;
  totalQuranReadCount: number;
  totalAmeensCount: number;
}

export function StatsSection({
  totalTasbihCount,
  totalQuranReadCount,
  totalAmeensCount,
}: StatsSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-[#071711] text-white border border-amber-500/30 shadow-2xl relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            <span>حصاد الأجر والبركة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-400 mb-3">
            مساهمات زوار الموقع المهداة لروحهما
          </h2>
          <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed">
            كل تسبيحة وسورة ودعوة ترفع في ميزان حسنات المرحومين «الحاج عوض إبراهيم رمضان شعلة» و«الحاج محمد سويلم»، ولك بمثلها أجراً مضاعفاً بإذن الله.
          </p>
        </div>

        {/* 3 Column Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-300 tabular-nums mb-1">
              {totalTasbihCount.toLocaleString('ar-EG')}
            </div>
            <span className="text-xs sm:text-sm text-emerald-200/90 font-medium">
              تسبيحة وذكر مُهدى
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-300 tabular-nums mb-1">
              {totalQuranReadCount.toLocaleString('ar-EG')}
            </div>
            <span className="text-xs sm:text-sm text-emerald-200/90 font-medium">
              ختمة وسورة مقروءة
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-3">
              <Heart className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-300 tabular-nums mb-1">
              {totalAmeensCount.toLocaleString('ar-EG')}
            </div>
            <span className="text-xs sm:text-sm text-emerald-200/90 font-medium">
              تأمين ودعوة مرفوعة
            </span>
          </div>
        </div>

        {/* Encouraging Hadith Reminder Banner */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="font-quran text-sm sm:text-base text-amber-200/90">
            «مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا» • «وَالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا»
          </p>
        </div>
      </div>
    </section>
  );
}
