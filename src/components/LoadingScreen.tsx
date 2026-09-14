import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import { Utensils } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';

    const tl = anime.timeline({
      easing: 'easeOutExpo',
    });

    tl.add({
      targets: '.loading-icon',
      translateY: [-20, 0],
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 800,
    })
    .add({
      targets: '.loading-icon',
      rotate: '1turn',
      duration: 1000,
      easing: 'easeInOutSine',
    }, '+=200')
    .add({
      targets: '.loading-text-wrapper',
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 600,
    }, '-=800')
    .add({
      targets: '.loading-container',
      opacity: 0,
      translateY: '-5%',
      duration: 600,
      delay: 500,
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
    <div className="loading-container fixed inset-0 z-[9999] bg-brand-baby-blue flex flex-col items-center justify-center p-6 text-center">
      <div className="loading-icon bg-white p-5 md:p-6 rounded-full shadow-lg mb-6 flex-shrink-0">
        <Utensils className="w-10 h-10 md:w-12 md:h-12 text-brand-baby-blue" />
      </div>
      <div className="loading-text-wrapper opacity-0">
        <h2 className="font-display text-white text-3xl md:text-4xl tracking-wider mb-2">
          Almost Ready
        </h2>
        <p className="text-white/90 font-medium text-sm md:text-base">
          Cooking up something special...
        </p>
      </div>
    </div>
  );
}
