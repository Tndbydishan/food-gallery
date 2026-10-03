import React from 'react';

interface SunburstProps {
  rays?: number;
  color?: 'yellow' | 'red' | 'white';
  className?: string;
}

export function Sunburst({
  rays = 16,
  color = 'yellow',
  className = '',
}: SunburstProps) {
  const fillColor = color === 'yellow' ? '#FFD21F' : color === 'red' ? '#F04424' : '#FFFFFF';

  // Generate alternating triangular rays around center (100, 100)
  const angleStep = 360 / rays;
  const rayPaths = Array.from({ length: rays }, (_, i) => {
    if (i % 2 !== 0) return null;
    const a1 = (i * angleStep * Math.PI) / 180;
    const a2 = ((i + 1) * angleStep * Math.PI) / 180;
    const r = 150;
    const x1 = 100 + r * Math.cos(a1);
    const y1 = 100 + r * Math.sin(a1);
    const x2 = 100 + r * Math.cos(a2);
    const y2 = 100 + r * Math.sin(a2);
    return `M 100 100 L ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)} Z`;
  }).filter(Boolean);

  return (
    <svg
      viewBox="0 0 200 200"
      className={`absolute pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {rayPaths.map((d, index) => (
        <path key={index} d={d as string} fill={fillColor} opacity={0.15} />
      ))}
    </svg>
  );
}
