'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { TasbihSection } from '@/components/TasbihSection';
import { QuranSection } from '@/components/QuranSection';
import { HadithSection } from '@/components/HadithSection';
import { DuaSection } from '@/components/DuaSection';
import { StatsSection } from '@/components/StatsSection';
import { ShareSection } from '@/components/ShareSection';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { INITIAL_TASBIH_ITEMS } from '@/lib/fallbackData';
import { TasbihItem } from '@/lib/types';

export default function Home() {
  const [tasbihItems, setTasbihItems] = useState<TasbihItem[]>(INITIAL_TASBIH_ITEMS);
  const [totalQuranReads, setTotalQuranReads] = useState<number>(0);
  const [totalAmeens, setTotalAmeens] = useState<number>(12); // Base community count

  // Toast notification state
  const [toast, setToast] = useState<{ isOpen: boolean; message: string; type?: 'success' | 'info' }>({
    isOpen: false,
    message: '',
    type: 'success',
  });

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ isOpen: true, message, type });
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isOpen: false }));
  };

  // Load saved state from localStorage on mount
  useEffect(() => {
    try {
      // 1. Tasbih counts
      const savedTasbih = localStorage.getItem('sadaqa_tasbih_counts');
      if (savedTasbih) {
        const parsed = JSON.parse(savedTasbih) as Record<string, { count: number; completedRounds: number }>;
        setTasbihItems((prev) =>
          prev.map((item) => {
            if (parsed[item.id]) {
              return {
                ...item,
                count: parsed[item.id].count ?? 0,
                completedRounds: parsed[item.id].completedRounds ?? 0,
              };
            }
            return item;
          })
        );
      }

      // 2. Quran reads
      const savedReads = localStorage.getItem('sadaqa_quran_reads');
      if (savedReads) {
        const parsed = JSON.parse(savedReads) as Record<string, number>;
        const total = Object.values(parsed).reduce((a, b) => a + b, 0);
        setTotalQuranReads(total);
      }

      // 3. Ameens count
      const savedAmeens = localStorage.getItem('sadaqa_ameen_counts');
      if (savedAmeens) {
        const parsed = JSON.parse(savedAmeens) as Record<string, number>;
        const total = Object.values(parsed).reduce((a, b) => a + b, 0);
        setTotalAmeens(12 + total);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Save tasbih items to localStorage whenever they change
  const saveTasbihToStorage = (updatedItems: TasbihItem[]) => {
    try {
      const map: Record<string, { count: number; completedRounds: number }> = {};
      updatedItems.forEach((item) => {
        map[item.id] = { count: item.count, completedRounds: item.completedRounds };
      });
      localStorage.setItem('sadaqa_tasbih_counts', JSON.stringify(map));
    } catch {
      // Ignore
    }
  };

  // Increment a tasbih item
  const handleIncrementTasbih = (id: string, step: number = 1) => {
    setTasbihItems((prev) => {
      const updated = prev.map((item) => {
        if (item.id === id) {
          const newCount = item.count + step;
          if (newCount >= item.target) {
            return {
              ...item,
              count: newCount % item.target,
              completedRounds: item.completedRounds + Math.floor(newCount / item.target),
            };
          }
          return {
            ...item,
            count: newCount,
          };
        }
        return item;
      });
      saveTasbihToStorage(updated);
      return updated;
    });
  };

  // Reset a single tasbih item
  const handleResetItem = (id: string) => {
    setTasbihItems((prev) => {
      const updated = prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: 0, completedRounds: 0 };
        }
        return item;
      });
      saveTasbihToStorage(updated);
      return updated;
    });
    showToast('تمت إعادة ضبط العداد بنجاح', 'info');
  };

  // Reset all tasbih items
  const handleResetAll = () => {
    setTasbihItems((prev) => {
      const updated = prev.map((item) => ({ ...item, count: 0, completedRounds: 0 }));
      saveTasbihToStorage(updated);
      return updated;
    });
    showToast('تمت إعادة ضبط جميع عدادات التسبيح بنجاح', 'info');
  };

  // Handle Surah dedication
  const handleSurahRead = (surahNumber: number, surahName: string) => {
    setTotalQuranReads((prev) => prev + 1);
    showToast(`تقبل الله منك! تم إهداء ثواب قراءة سورة ${surahName} لروحي المرحومين الحاج عوض شعلة والحاج محمد سويلم 🌿`);
  };

  // Handle Ameen trigger
  const handleAmeen = () => {
    setTotalAmeens((prev) => prev + 1);
  };

  const totalTasbihCount = tasbihItems.reduce(
    (sum, item) => sum + item.count + item.completedRounds * item.target,
    0
  );

  return (
    <div className="min-h-screen flex flex-col bg-islamic-pattern">
      {/* Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          totalTasbihCount={totalTasbihCount}
          totalQuranReadCount={totalQuranReads}
          totalAmeensCount={totalAmeens}
        />

        {/* Interactive Tasbih Counter */}
        <TasbihSection
          items={tasbihItems}
          onIncrement={handleIncrementTasbih}
          onResetItem={handleResetItem}
          onResetAll={handleResetAll}
        />

        {/* Quran Reader & Audio Player */}
        <QuranSection onSurahRead={handleSurahRead} />

        {/* Authentic Hadiths */}
        <HadithSection onCopySuccess={(msg) => showToast(msg)} />

        {/* Duas for the Deceased */}
        <DuaSection
          onCopySuccess={(msg) => showToast(msg)}
          onAmeen={handleAmeen}
        />

        {/* Statistics & Community Deeds */}
        <StatsSection
          totalTasbihCount={totalTasbihCount}
          totalQuranReadCount={totalQuranReads}
          totalAmeensCount={totalAmeens}
        />

        {/* Spread the Good / Social Share */}
        <ShareSection onCopySuccess={(msg) => showToast(msg)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Notification Toast */}
      <Toast
        isOpen={toast.isOpen}
        message={toast.message}
        type={toast.type}
        onClose={closeToast}
      />
    </div>
  );
}
