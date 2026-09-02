'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useSound } from '@/context/SoundContext';
import { RotateCcw, Award } from 'lucide-react';
import { TasbihItem } from '@/lib/types';

interface TasbihCardProps {
  item: TasbihItem;
  onIncrement: (id: string, step?: number) => void;
  onReset: (id: string) => void;
}

export function TasbihCard({ item, onIncrement, onReset }: TasbihCardProps) {
  const { playClick, playCelebration } = useSound();
  const [isPressed, setIsPressed] = useState(false);

  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const progressRatio = Math.min(item.count / item.target, 1);
  const strokeDashoffset = circumference - progressRatio * circumference;

  const handleClick = (step: number = 1) => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 120);

    const nextCount = item.count + step;
    playClick();

    // Check if reached target
    if (nextCount >= item.target) {
      playCelebration();
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#f59e0b', '#10b981', '#fbbf24', '#047857'],
        });
      } catch {
        // Confetti optional
      }
    }

    onIncrement(item.id, step);
  };

  return (
    <div className="relative group flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-[#fdfbf7] dark:bg-[#0d231b] border border-amber-500/25 dark:border-emerald-800/40 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Header: Title & Reset */}
      <div className="flex items-start justify-between gap-2 mb-4">
        <div className="flex-1">
          <h3 className="font-quran text-xl sm:text-2xl font-bold text-emerald-950 dark:text-emerald-50 leading-relaxed">
            {item.text}
          </h3>
          {item.virtue && (
            <p className="text-xs text-emerald-900/80 dark:text-emerald-300/80 mt-1 line-clamp-2">
              {item.virtue}
            </p>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onReset(item.id);
          }}
          aria-label={`إعادة ضبط عداد ${item.text}`}
          title="إعادة ضبط العداد"
          className="p-2 rounded-xl text-emerald-900/50 dark:text-emerald-400/50 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Center: Circular Progress Ring Interactive Button */}
      <div className="my-2 flex flex-col items-center justify-center">
        <button
          type="button"
          onClick={() => handleClick(1)}
          aria-label={`تسبيح: ${item.text}، العدد الحالي ${item.count} من ${item.target}`}
          className={`relative w-36 h-36 sm:w-40 sm:h-40 rounded-full flex items-center justify-center cursor-pointer select-none transition-transform duration-100 ${
            isPressed ? 'scale-90 shadow-inner' : 'hover:scale-[1.03] active:scale-95'
          }`}
        >
          {/* SVG Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 110 110">
            {/* Background Track */}
            <circle
              cx="55"
              cy="55"
              r={radius}
              className="text-emerald-950/10 dark:text-emerald-900/30"
              strokeWidth="7"
              stroke="currentColor"
              fill="transparent"
            />
            {/* Animated Progress Indicator */}
            <circle
              cx="55"
              cy="55"
              r={radius}
              stroke="url(#progressGradient)"
              strokeWidth="7"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-300 ease-out"
            />
            {/* Gradient definition */}
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner Circular Surface */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-amber-500/5 to-[#fdfbf7] dark:from-[#091b15] dark:to-[#112d22] border border-amber-500/25 shadow-sm flex flex-col items-center justify-center p-2 text-center group-hover:border-amber-500/40 transition-colors">
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-950 dark:text-emerald-50 tabular-nums">
              {item.count}
            </span>
            <span className="text-xs text-amber-700 dark:text-amber-400 font-medium mt-0.5">
              من {item.target}
            </span>
          </div>
        </button>

        <span className="text-xs text-emerald-800/60 dark:text-emerald-400/60 mt-2 font-medium">
          اضغط للتسبيح (+1)
        </span>
      </div>

      {/* Footer: Completed Rounds & Quick Actions */}
      <div className="pt-4 border-t border-amber-500/10 dark:border-emerald-800/30 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-medium">
          <Award className="w-4 h-4 text-amber-500" />
          <span>الدورات: {item.completedRounds}</span>
        </div>

        <button
          type="button"
          onClick={() => handleClick(10)}
          className="px-2.5 py-1 rounded-lg border border-amber-500/30 bg-amber-500/5 hover:bg-amber-500/15 text-amber-800 dark:text-amber-300 font-semibold transition-colors active:scale-95"
        >
          +10 سريعة
        </button>
      </div>
    </div>
  );
}
