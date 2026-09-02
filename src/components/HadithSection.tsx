'use client';

import React, { useState } from 'react';
import { HadithItem } from '@/lib/types';
import { HADITHS_DATA } from '@/lib/fallbackData';
import { BookMarked, Copy, Check, Sparkles, Share2 } from 'lucide-react';

interface HadithSectionProps {
  onCopySuccess: (text: string) => void;
}

export function HadithSection({ onCopySuccess }: HadithSectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'sadaqah' | 'parents' | 'quran'>('all');

  const filteredHadiths = HADITHS_DATA.filter((h) => {
    if (filter === 'all') return true;
    return h.category === filter;
  });

  const handleCopy = (hadith: HadithItem) => {
    const textToCopy = `«${hadith.text}»\n[${hadith.narrator} - ${hadith.source}]`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopiedId(hadith.id);
      setTimeout(() => setCopiedId(null), 2500);
      onCopySuccess('تم نسخ الحديث الشريف إلى الحافظة بنجاح');
    }
  };

  return (
    <section id="hadith" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-3">
          <BookMarked className="w-3.5 h-3.5 text-amber-500" />
          <span>من هدي المصطفى ﷺ</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-950 dark:text-emerald-50 tracking-tight mb-4">
          أحاديث نبوية في فضل الصدقة وبر الأموات
        </h2>
        <p className="text-base sm:text-lg text-emerald-900/80 dark:text-emerald-200/80 leading-relaxed">
          أحاديث نبوية شريفة صحيحة تبين عظيم أثر الصدقة الجارية، واستغفار الذرية، وشفاعة القرآن للميت.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            filter === 'all'
              ? 'bg-emerald-800 text-white dark:bg-emerald-600 shadow-sm'
              : 'bg-white dark:bg-[#0d231b] border border-amber-500/20 text-emerald-900 dark:text-emerald-200 hover:border-amber-500/40'
          }`}
        >
          جميع الأحاديث ({HADITHS_DATA.length})
        </button>
        <button
          onClick={() => setFilter('sadaqah')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            filter === 'sadaqah'
              ? 'bg-emerald-800 text-white dark:bg-emerald-600 shadow-sm'
              : 'bg-[#fdfbf7] dark:bg-[#0d231b] border border-amber-500/20 text-emerald-900 dark:text-emerald-200 hover:border-amber-500/40'
          }`}
        >
          الصدقة الجارية
        </button>
        <button
          onClick={() => setFilter('parents')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            filter === 'parents'
              ? 'bg-emerald-800 text-white dark:bg-emerald-600 shadow-sm'
              : 'bg-[#fdfbf7] dark:bg-[#0d231b] border border-amber-500/20 text-emerald-900 dark:text-emerald-200 hover:border-amber-500/40'
          }`}
        >
          بر الوالدين والأجداد
        </button>
        <button
          onClick={() => setFilter('quran')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            filter === 'quran'
              ? 'bg-emerald-800 text-white dark:bg-emerald-600 shadow-sm'
              : 'bg-[#fdfbf7] dark:bg-[#0d231b] border border-amber-500/20 text-emerald-900 dark:text-emerald-200 hover:border-amber-500/40'
          }`}
        >
          فضل القرآن والذكر
        </button>
      </div>

      {/* Hadith Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredHadiths.map((hadith) => {
          const isCopied = copiedId === hadith.id;
          return (
            <div
              key={hadith.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#fdfbf7] dark:bg-[#0d231b] border border-amber-500/25 hover:border-amber-500/40 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    {hadith.title}
                  </span>
                  {hadith.grade && (
                    <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                      {hadith.grade}
                    </span>
                  )}
                </div>

                <blockquote className="font-quran text-lg sm:text-xl text-emerald-950 dark:text-emerald-50 leading-relaxed mb-6">
                  «{hadith.text}»
                </blockquote>
              </div>

              <div className="pt-4 border-t border-amber-500/15 dark:border-emerald-800/30 flex items-center justify-between text-xs text-emerald-800/80 dark:text-emerald-300/80">
                <div>
                  <span className="font-semibold block">{hadith.narrator}</span>
                  <span className="opacity-70 text-[11px]">{hadith.source}</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(hadith)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all ${
                    isCopied
                      ? 'border-emerald-500 bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold'
                      : 'border-amber-500/30 hover:bg-amber-500/10 text-amber-800 dark:text-amber-300 font-medium'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ الحديث</span>
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
