import React from 'react';

interface JapaneseSealProps {
  kanji?: string;
  subtext?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'red' | 'black' | 'yellow';
  rotate?: string;
  className?: string;
}

export function JapaneseSeal({
  kanji = '食育',
  subtext = 'SPSC',
  size = 'md',
  variant = 'red',
  rotate = '-6deg',
  className = '',
}: JapaneseSealProps) {
  const sizeMap = {
    sm: 'w-12 h-12 text-xs',
    md: 'w-16 h-16 text-sm',
    lg: 'w-20 h-20 text-base',
  };

  const colorMap = {
    red: 'border-red-japanese text-red-japanese bg-red/10',
    black: 'border-blue text-blue bg-blue/10',
    yellow: 'border-yellow text-yellow bg-yellow/20',
  };

  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center rounded-full border-3 font-display select-none transition-transform ${sizeMap[size]} ${colorMap[variant]} ${className}`}
      style={{
        transform: `rotate(${rotate})`,
        boxShadow: variant === 'red' ? '2px 2px 0px #D92B20' : '2px 2px 0px #111111',
      }}
      title={`${kanji} ${subtext}`}
      aria-label={`${kanji} ${subtext}`}
    >
      {/* Inner fine ring */}
      <div className="absolute inset-1 rounded-full border border-current opacity-70 pointer-events-none" />
      <span className="font-extrabold tracking-widest text-[1.1em] leading-none mb-0.5">
        {kanji}
      </span>
      {subtext && (
        <span className="text-[0.55em] font-mono font-bold uppercase tracking-tighter opacity-90 leading-none">
          {subtext}
        </span>
      )}
    </div>
  );
}
