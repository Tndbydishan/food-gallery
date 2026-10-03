import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import { Utensils, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsDone(true);
      onLoadingComplete();
      return;
    }

    // Lock scroll during entrance
    document.body.style.overflow = 'hidden';

    const tl = anime.timeline({
      easing: 'easeOutExpo',
    });

    tl.add({
      targets: '.loading-icon',
      translateY: [-15, 0],
      scale: [0.85, 1],
      opacity: [0, 1],
      duration: 600,
    })
    .add({
      targets: '.loading-text-wrapper',
      opacity: [0, 1],
      translateY: [8, 0],
      duration: 500,
    }, '-=300')
    .add({
      targets: '.loading-container',
      opacity: 0,
      duration: 450,
      delay: 350,
      complete: () => {
        setIsDone(true);
        document.body.style.overflow = '';
        onLoadingComplete();
      }
    });

    return () => {
      document.body.style.overflow = '';
    };
  }, [onLoadingComplete]);

  if (isDone) return null;

  return (
    <div className="loading-container fixed inset-0 z-[9999] bg-brand-cream flex flex-col items-center justify-center p-6 text-center">
      <div className="loading-icon bg-white p-5 md:p-6 rounded-full shadow-[0_8px_30px_rgba(137,207,240,0.25)] border-2 border-brand-baby-blue/30 mb-5 flex-shrink-0">
        <Utensils className="w-9 h-9 md:w-11 md:h-11 text-brand-baby-blue" />
      </div>
      <div className="loading-text-wrapper opacity-0 flex flex-col items-center gap-1">
        <span className="text-[11px] font-bold uppercase tracking-widest text-brand-text/60">
          Southpoint School and College
        </span>
        <h2 className="font-display text-brand-text text-2xl md:text-3xl tracking-wide">
          Class 7 Tulip
        </h2>
        <p className="text-xs md:text-sm text-brand-text/75 font-semibold mt-1">
          Home Science Food Festival Showcase
        </p>
      </div>
    </div>
  );
}
