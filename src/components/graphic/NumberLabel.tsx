import React from 'react';

interface NumberLabelProps {
  number: string | number;
  label?: string;
  variant?: 'yellow' | 'red' | 'black' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function NumberLabel({
  number,
  label,
  variant = 'yellow',
  size = 'md',
  className = '',
}: NumberLabelProps) {
  const styles = {
    yellow: 'bg-primary text-black border-black shadow-[3px_3px_0px_#111111]',
    red: 'bg-red text-white border-black shadow-[3px_3px_0px_#111111]',
    black: 'bg-black text-yellow border-black shadow-[3px_3px_0px_#FFD21F]',
    blue: 'bg-blue text-white border-black shadow-[3px_3px_0px_#111111]',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3.5 py-1.5 text-base',
  };

  const formattedNumber = typeof number === 'number' && number < 10 ? `0${number}` : number;

  return (
    <div
      className={`inline-flex items-center gap-1.5 border-2.5 rounded-lg font-display font-black tracking-tight select-none uppercase ${styles[variant]} ${sizeClasses[size]} ${className}`}
    >
      <span className="font-mono text-[0.85em] opacity-75">No.</span>
      <span className="leading-none">{formattedNumber}</span>
      {label && (
        <span className="text-[0.75em] font-mono border-l-2 border-current pl-1.5 ml-0.5 opacity-90">
          {label}
        </span>
      )}
    </div>
  );
}
