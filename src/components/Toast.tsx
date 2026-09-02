'use client';

import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  type?: 'success' | 'info';
}

export function Toast({ message, isOpen, onClose, type = 'success' }: ToastProps) {
  if (!isOpen) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-md w-[90%] sm:w-auto flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl backdrop-blur-md transition-all duration-300 animate-soft-float border border-amber-500/40 bg-white/95 dark:bg-emerald-950/95 text-emerald-950 dark:text-emerald-50"
    >
      {type === 'success' ? (
        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
      ) : (
        <Info className="w-5 h-5 text-emerald-500 shrink-0" />
      )}
      <p className="text-sm font-medium leading-relaxed">{message}</p>
      <button
        onClick={onClose}
        aria-label="إغلاق التنبيه"
        className="mr-auto p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
      >
        <X className="w-4 h-4 opacity-60 hover:opacity-100" />
      </button>
    </div>
  );
}
