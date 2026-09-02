'use client';

import React, { useState } from 'react';
import { TasbihItem } from '@/lib/types';
import { TasbihCard } from './TasbihCard';
import { ConfirmModal } from './ConfirmModal';
import { Sparkles, RotateCcw, Filter, Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/context/SoundContext';

interface TasbihSectionProps {
  items: TasbihItem[];
  onIncrement: (id: string, step?: number) => void;
  onResetItem: (id: string) => void;
  onResetAll: () => void;
}

export function TasbihSection({
  items,
  onIncrement,
  onResetItem,
  onResetAll,
}: TasbihSectionProps) {
  const { soundEnabled, toggleSound } = useSound();
  const [filter, setFilter] = useState<'all' | 'deceased' | 'tasbih' | 'forgiveness'>('all');
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const totalTasbihs = items.reduce((sum, item) => sum + item.count + (item.completedRounds * item.target), 0);

  const filteredItems = items.filter((item) => {
    if (filter === 'deceased') return item.id.startsWith('dua-');
    if (filter === 'tasbih') return ['subhanallah', 'alhamdulillah', 'allahu-akbar'].includes(item.id);
    if (filter === 'forgiveness') return ['astaghfirullah', 'la-ilaha-illallah', 'subhanallah-wa-bihamdihi', 'subhanallah-al-azeem', 'la-hawla-wa-la-quwwata'].includes(item.id);
    return true;
  });

  return (
    <section id="tasbih" className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>مسبحة الصدقة الجارية التفاعلية</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-950 dark:text-emerald-50 tracking-tight mb-4">
          المسبحة الإلكترونية المباركة
        </h2>
        <p className="text-base sm:text-lg text-emerald-900/80 dark:text-emerald-200/80 leading-relaxed">
          سبّح واذكر الله وأهدِ أجر كل تسبيحة لروحي المرحومين «الحاج عوض شعلة» و«الحاج محمد سويلم»، تُحفظ تسبيحاتك تلقائياً في جهازك.
        </p>
      </div>

      {/* Control & Summary Card */}
      <div className="mb-10 p-5 sm:p-7 rounded-3xl bg-[#fdfbf7] dark:bg-[#0d231b] border border-amber-500/30 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Total Tasbihs counter */}
        <div className="flex items-center gap-4 text-center md:text-right">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/15 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <span className="text-2xl">📿</span>
          </div>
          <div>
            <span className="text-xs text-emerald-800/70 dark:text-emerald-300/70 font-semibold block">
              إجمالي التسبيحات المنجزة لروحهما
            </span>
            <div className="text-3xl sm:text-4xl font-black text-emerald-950 dark:text-emerald-50 tabular-nums">
              {totalTasbihs.toLocaleString('ar-EG')}
              <span className="text-sm font-normal text-amber-600 dark:text-amber-400 mr-2">تسبيحة</span>
            </div>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'all'
                ? 'bg-emerald-800 text-white dark:bg-emerald-600 shadow-sm'
                : 'bg-emerald-950/5 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-200 hover:bg-emerald-950/10'
            }`}
          >
            الكل ({items.length})
          </button>
          <button
            onClick={() => setFilter('deceased')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'deceased'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-emerald-950/5 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-200 hover:bg-emerald-950/10'
            }`}
          >
            أدعية للمرحوم (3)
          </button>
          <button
            onClick={() => setFilter('tasbih')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'tasbih'
                ? 'bg-emerald-800 text-white dark:bg-emerald-600 shadow-sm'
                : 'bg-emerald-950/5 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-200 hover:bg-emerald-950/10'
            }`}
          >
            التسبيح والحمد (3)
          </button>
          <button
            onClick={() => setFilter('forgiveness')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'forgiveness'
                ? 'bg-emerald-800 text-white dark:bg-emerald-600 shadow-sm'
                : 'bg-emerald-950/5 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-200 hover:bg-emerald-950/10'
            }`}
          >
            الاستغفار والتهليل (5)
          </button>
        </div>

        {/* Global Action: Sound & Reset All */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSound}
            aria-label={soundEnabled ? 'كتم صوت التسبيح' : 'تفعيل صوت التسبيح'}
            className="flex items-center gap-2 px-3 py-2 rounded-xl border border-emerald-900/15 dark:border-emerald-700/30 text-xs text-emerald-900 dark:text-emerald-100 font-medium hover:bg-amber-500/10 transition-colors"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-amber-500" />
                <span>الصوت: مفعّل</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-muted" />
                <span>الصوت: صامت</span>
              </>
            )}
          </button>

          <button
            onClick={() => setIsResetModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-red-500/30 text-xs text-red-600 dark:text-red-400 font-medium hover:bg-red-500/10 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>تصفير الكل</span>
          </button>
        </div>
      </div>

      {/* Tasbih Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <TasbihCard
            key={item.id}
            item={item}
            onIncrement={onIncrement}
            onReset={onResetItem}
          />
        ))}
      </div>

      {/* Confirmation Modal for Resetting All */}
      <ConfirmModal
        isOpen={isResetModalOpen}
        title="تأكيد تصفير جميع العدادات"
        message="هل أنت متأكد من رغبتك في تصفير جميع عدادات التسبيح؟ لن تفقد الأجر بإذن الله، ولكن سيعود الرقم إلى الصفر في متصفحك."
        confirmText="نعم، صَفِّر الكل"
        cancelText="تراجع"
        onConfirm={() => {
          onResetAll();
          setIsResetModalOpen(false);
        }}
        onCancel={() => setIsResetModalOpen(false)}
      />
    </section>
  );
}
