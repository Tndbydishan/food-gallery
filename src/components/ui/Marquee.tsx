import React from 'react';
import { cn } from '../../utils/cn';

export interface MarqueeProps {
  items: string[];
  separator?: string;
  speed?: 'normal' | 'slow' | 'fast';
  reverse?: boolean;
  variant?: 'yellow' | 'black' | 'red' | 'blue' | 'ticker';
  className?: string;
}

export function Marquee({
  items,
  separator = '✦',
  speed = 'normal',
  reverse = false,
  variant = 'yellow',
  className
}: MarqueeProps) {
  // Duplicate array to ensure seamless infinite looping
  const repeatedItems = [...items, ...items, ...items, ...items];

  const trackSpeedClass = speed === 'slow' ? 'marquee-track-slow' : 'marquee-track';
  const trackDirectionClass = reverse ? 'marquee-track-reverse' : trackSpeedClass;

  return (
    <div 
      className={cn(
        "marquee-container w-full border-y-3 border-black overflow-hidden py-3 select-none",
        {
          'bg-primary text-black': variant === 'yellow',
          'bg-black text-yellow': variant === 'black',
          'bg-red text-white': variant === 'red',
          'bg-blue text-white': variant === 'blue',
          'bg-yellow-bright text-black py-2 text-xs font-mono': variant === 'ticker',
        },
        className
      )}
      aria-hidden="true"
    >
      <div className={trackDirectionClass}>
        {repeatedItems.map((item, index) => (
          <span key={index} className="inline-flex items-center mx-4 gap-4 whitespace-nowrap font-display font-black uppercase tracking-wider text-sm sm:text-base md:text-lg">
            <span>{item}</span>
            <span className="opacity-75 text-xs sm:text-sm font-normal">{separator}</span>
          </span>
        ))}
      </div>
      <div className={trackDirectionClass}>
        {repeatedItems.map((item, index) => (
          <span key={`dup-${index}`} className="inline-flex items-center mx-4 gap-4 whitespace-nowrap font-display font-black uppercase tracking-wider text-sm sm:text-base md:text-lg">
            <span>{item}</span>
            <span className="opacity-75 text-xs sm:text-sm font-normal">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
