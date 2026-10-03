import React from 'react';

interface HalftoneProps {
  color?: 'black' | 'yellow' | 'red';
  opacity?: number;
  className?: string;
}

export function Halftone({
  color = 'black',
  opacity = 0.06,
  className = '',
}: HalftoneProps) {
  const dotColor = color === 'yellow' ? '#FFD21F' : color === 'red' ? '#F04424' : '#111111';

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        opacity,
        backgroundImage: `radial-gradient(${dotColor} 2px, transparent 2px)`,
        backgroundSize: '14px 14px',
      }}
      aria-hidden="true"
    />
  );
}
