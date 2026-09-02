'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { playBeadClick, playCompletionChime, triggerHaptic } from '@/lib/sound';

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playClick: () => void;
  playCelebration: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  useEffect(() => {
    const saved = localStorage.getItem('sadaqa_sound_enabled');
    if (saved !== null) {
      setSoundEnabled(saved === 'true');
    }
  }, []);

  const toggleSound = () => {
    setSoundEnabled(prev => {
      const next = !prev;
      localStorage.setItem('sadaqa_sound_enabled', String(next));
      if (next) {
        playBeadClick(true);
      }
      return next;
    });
  };

  const playClick = () => {
    playBeadClick(soundEnabled);
    triggerHaptic(25);
  };

  const playCelebration = () => {
    playCompletionChime(soundEnabled);
    triggerHaptic([40, 60, 50, 80]);
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playClick, playCelebration }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
}
