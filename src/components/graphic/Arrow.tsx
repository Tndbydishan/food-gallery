import React from 'react';

interface ArrowProps {
  direction?: 'right' | 'left' | 'up' | 'down' | 'up-right' | 'down-right';
  color?: 'yellow' | 'red' | 'black' | 'white';
  size?: number;
  className?: string;
}

export function Arrow({
  direction = 'right',
  color = 'yellow',
  size = 24,
  className = '',
}: ArrowProps) {
  const rotationMap = {
    right: 'rotate-0',
    left: 'rotate-180',
    up: '-rotate-90',
    down: 'rotate-90',
    'up-right': '-rotate-45',
    'down-right': 'rotate-45',
  };

  const fillMap = {
    yellow: '#FFD21F',
    red: '#F04424',
    black: '#111111',
    white: '#FFFFFF',
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`inline-block shrink-0 transition-transform ${rotationMap[direction]} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M3 12H19M19 12L12 5M19 12L12 19"
        stroke="#111111"
        strokeWidth="3.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
