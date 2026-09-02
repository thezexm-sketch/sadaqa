'use client';

import React, { useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText = 'تأكيد التصفير',
  cancelText = 'إلغاء',
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onCancel();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onCancel}
    >
      <div
        className="relative w-full max-w-md p-6 rounded-3xl bg-white dark:bg-emerald-950 border border-amber-500/30 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={onCancel}
          aria-label="إغلاق"
          className="absolute top-4 left-4 p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 opacity-60 hover:opacity-100" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h3 id="modal-title" className="text-xl font-bold text-emerald-950 dark:text-emerald-50">
            {title}
          </h3>
        </div>

        <p className="text-sm text-emerald-800/80 dark:text-emerald-200/80 mb-6 leading-relaxed">
          {message}
        </p>

        <div className="flex items-center gap-3 justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2.5 rounded-xl border border-emerald-900/15 dark:border-emerald-700/30 text-emerald-900 dark:text-emerald-100 font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-sm"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-semibold hover:opacity-90 shadow-md text-sm transition-opacity"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
