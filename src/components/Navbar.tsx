'use client';

import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useSound } from '@/context/SoundContext';
import { Sun, Moon, Volume2, VolumeX, Menu, X, Sparkles, BookOpen, HeartHandshake, Share2 } from 'lucide-react';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { soundEnabled, toggleSound } = useSound();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'التسبيح', href: '#tasbih', icon: Sparkles },
    { label: 'القرآن الكريم', href: '#quran', icon: BookOpen },
    { label: 'الأحاديث النبوية', href: '#hadith', icon: HeartHandshake },
    { label: 'الأدعية المأثورة', href: '#duas', icon: HeartHandshake },
    { label: 'مشاركة الأجر', href: '#share', icon: Share2 },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#f7f4ec]/90 dark:bg-[#071510]/90 border-b border-amber-500/15 dark:border-emerald-800/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-800 to-emerald-600 dark:from-emerald-700 dark:to-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-900/10 group-hover:scale-105 transition-transform p-2">
            <svg
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-white fill-white"
            >
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -7719.000000)" fill="currentColor">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M173.99029,7576.998 C171.388688,7576.998 169.058358,7575.74775 167.591892,7573.8028 C174.222522,7575.15916 180.17047,7569.27528 178.803103,7562.59159 C180.748048,7564.05806 181.998298,7566.38839 181.998298,7568.98999 C181.998298,7573.40541 178.405705,7576.998 173.99029,7576.998 M174.610911,7559 C176.076376,7560.36937 176.993293,7562.32032 176.993293,7564.48549 C176.993293,7571.32432 168.608909,7574.54254 164.0003,7569.60961 C164.32062,7574.84985 168.66997,7579 173.99029,7579 C179.518819,7579 184.0003,7574.51852 184.0003,7568.98999 C184.0003,7563.66967 179.85015,7559.32032 174.610911,7559"
                      id="moon-[#ffffff]"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sadaqa.png"
                alt="صدقة جارية"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
            <span className="text-[11px] sm:text-xs text-amber-700 dark:text-amber-400 font-semibold truncate max-w-[200px] sm:max-w-none mt-0.5">
              عن روحي الحاج عوض شعلة والحاج محمد سويلم
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 rounded-xl text-sm font-medium text-emerald-900/80 dark:text-emerald-100/80 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-500/5 dark:hover:bg-emerald-900/20 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls: Sound & Theme & Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            aria-label={soundEnabled ? 'كتم صوت التسبيح' : 'تشغيل صوت التسبيح'}
            title={soundEnabled ? 'صوت التسبيح مفعّل' : 'صوت التسبيح مكتوم'}
            className="p-2.5 rounded-xl border border-emerald-900/10 dark:border-emerald-700/30 text-emerald-800 dark:text-emerald-200 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 dark:text-amber-400" />
            ) : (
              <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 opacity-60" />
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'}
            title={theme === 'dark' ? 'الوضع الداكن' : 'الوضع الفاتح'}
            className="p-2.5 rounded-xl border border-emerald-900/10 dark:border-emerald-700/30 text-emerald-800 dark:text-emerald-200 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-800" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="القائمة الرئيسية"
            className="md:hidden p-2.5 rounded-xl border border-emerald-900/10 dark:border-emerald-700/30 text-emerald-800 dark:text-emerald-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-amber-500/15 dark:border-emerald-800/30 bg-[#f7f4ec]/95 dark:bg-[#071510]/95 backdrop-blur-lg px-4 py-4 space-y-1 animate-fade-in shadow-xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-emerald-950 dark:text-emerald-50 hover:bg-amber-500/10 hover:text-amber-600 transition-colors"
              >
                <Icon className="w-4 h-4 text-amber-500" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
