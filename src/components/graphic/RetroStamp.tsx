import React from 'react';

interface RetroStampProps {
  label: string;
  sub?: string;
  variant?: 'red' | 'black' | 'yellow' | 'blue';
  rotate?: string;
  className?: string;
}

export function RetroStamp({
  label,
  sub = 'CLASS 7 TULIP · 2026',
  variant = 'red',
  rotate = '3deg',
  className = '',
}: RetroStampProps) {
  const styles = {
    red: 'border-red-japanese text-red-japanese bg-red/5 shadow-[3px_3px_0px_#D92B20]',
    black: 'border-black text-black bg-black/5 shadow-[3px_3px_0px_#111111]',
    yellow: 'border-yellow text-yellow-bright bg-yellow/10 shadow-[3px_3px_0px_#FFD21F]',
    blue: 'border-blue text-blue bg-blue/5 shadow-[3px_3px_0px_#1769C2]',
  };

  return (
    <div
      className={`inline-flex flex-col items-center justify-center border-3 border-dashed px-3 py-1.5 select-none font-display text-center uppercase tracking-wider rounded-lg ${styles[variant]} ${className}`}
      style={{ transform: `rotate(${rotate})` }}
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5">
        <span className="text-[10px]">★</span>
        <span className="font-extrabold text-xs sm:text-sm tracking-tight leading-none">
          {label}
        </span>
        <span className="text-[10px]">★</span>
      </div>
      {sub && (
        <span className="text-[9px] font-mono font-bold tracking-widest opacity-80 mt-0.5 leading-none">
          {sub}
        </span>
      )}
    </div>
  );
}
