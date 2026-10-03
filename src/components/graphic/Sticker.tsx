import React from 'react';

interface StickerProps {
  children: React.ReactNode;
  color?: 'yellow' | 'red' | 'blue' | 'black' | 'green' | 'white';
  rotate?: string;
  className?: string;
}

export function Sticker({
  children,
  color = 'yellow',
  rotate = '-2deg',
  className = '',
}: StickerProps) {
  const colorMap = {
    yellow: 'bg-primary text-black border-black',
    red: 'bg-red text-white border-black',
    blue: 'bg-blue text-white border-black',
    black: 'bg-black text-yellow border-black',
    green: 'bg-green text-white border-black',
    white: 'bg-white text-black border-black',
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 border-3 rounded-xl font-display font-extrabold text-xs sm:text-sm uppercase tracking-tight select-none shadow-[4px_4px_0px_#111111] hover:scale-105 transition-transform ${colorMap[color]} ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      {children}
    </div>
  );
}
