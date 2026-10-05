import React from 'react';

interface ComicBurstProps {
  text: string;
  sub?: string;
  variant?: 'yellow' | 'red' | 'black';
  rotate?: string;
  className?: string;
}

export function ComicBurst({
  text,
  sub,
  variant = 'red',
  rotate = '4deg',
  className = '',
}: ComicBurstProps) {
  const styles = {
    yellow: 'bg-primary text-black border-black shadow-[4px_4px_0px_#111111]',
    red: 'bg-red text-white border-black shadow-[4px_4px_0px_#111111]',
    black: 'bg-blue text-white border-black shadow-[4px_4px_0px_#111111]',
  };

  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center p-3 border-3 rounded-2xl font-display uppercase text-center select-none ${styles[variant]} ${className}`}
      style={{ transform: `rotate(${rotate})` }}
      aria-hidden="true"
    >
      <div className="font-black text-xs sm:text-sm tracking-tighter leading-tight">
        {text}
      </div>
      {sub && (
        <div className="text-[9px] font-mono font-bold tracking-widest opacity-90 mt-0.5">
          {sub}
        </div>
      )}
    </div>
  );
}
