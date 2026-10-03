import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import { Utensils } from 'lucide-react';
import { JapaneseSeal } from './graphic';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsDone(true);
      onLoadingComplete();
      return;
    }

    document.body.style.overflow = 'hidden';

    const tl = anime.timeline({
      easing: 'easeOutExpo',
    });

    tl.add({
      targets: '.loading-box',
      scale: [0.88, 1],
      opacity: [0, 1],
      duration: 500,
    })
    .add({
      targets: '.loading-text-wrapper',
      opacity: [0, 1],
      translateY: [6, 0],
      duration: 400,
    }, '-=200')
    .add({
      targets: '.loading-container',
      opacity: 0,
      duration: 400,
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
    <div className="loading-container fixed inset-0 z-[9999] bg-deep-black flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="loading-box bg-primary border-4 border-black p-7 rounded-3xl shadow-[8px_8px_0px_#FFFFFF] mb-6 flex flex-col items-center -rotate-1 relative overflow-hidden">
        
        {/* Japanese Top Seal */}
        <div className="mb-3">
          <JapaneseSeal kanji="食育" subtext="SPSC" size="sm" variant="red" rotate="-4deg" />
        </div>

        <div className="loading-text-wrapper opacity-0 flex flex-col items-center">
          <span className="text-[11px] font-mono font-black uppercase tracking-widest text-black/80">
            南尖学園 · Class 7 Tulip 第7学年
          </span>
          <h2 className="font-display font-black text-black text-3xl tracking-tight mt-1">
            Food Festival
          </h2>
          <span className="bg-black text-yellow px-3 py-1 rounded-md text-[11px] font-mono font-black uppercase tracking-wider mt-2 border border-white">
            Pure Home Science · 家庭科展示
          </span>
        </div>
      </div>
    </div>
  );
}
