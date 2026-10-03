import React from 'react';

interface StarBurstProps {
  text?: string;
  points?: 12 | 16 | 20;
  color?: 'yellow' | 'red' | 'blue' | 'black' | 'green';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rotate?: string;
  className?: string;
  children?: React.ReactNode;
}

export function StarBurst({
  text,
  points = 16,
  color = 'yellow',
  size = 'md',
  rotate = '-3deg',
  className = '',
  children,
}: StarBurstProps) {
  const sizeMap = {
    sm: 'w-16 h-16 text-[10px]',
    md: 'w-24 h-24 text-xs',
    lg: 'w-32 h-32 text-sm',
    xl: 'w-40 h-40 text-base',
  };

  const bgMap = {
    yellow: 'fill-yellow text-black',
    red: 'fill-red text-white',
    blue: 'fill-blue text-white',
    black: 'fill-black text-yellow',
    green: 'fill-green text-white',
  };

  // Generate starburst polygon points (alternating outer and inner radius)
  const step = Math.PI / points;
  const polyPoints = Array.from({ length: points * 2 }, (_, i) => {
    const r = i % 2 === 0 ? 48 : 36;
    const x = 50 + r * Math.sin(i * step);
    const y = 50 - r * Math.cos(i * step);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none font-display font-black uppercase text-center shrink-0 drop-shadow-[4px_4px_0px_#111111] ${sizeMap[size]} ${className}`}
      style={{ transform: `rotate(${rotate})` }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        className={`absolute inset-0 w-full h-full ${bgMap[color]}`}
      >
        <polygon
          points={polyPoints}
          stroke="#111111"
          strokeWidth="3.5"
          strokeLinejoin="miter"
        />
      </svg>
      <div className="relative z-10 p-2 leading-none font-extrabold flex flex-col items-center justify-center">
        {text ? <span>{text}</span> : children}
      </div>
    </div>
  );
}
