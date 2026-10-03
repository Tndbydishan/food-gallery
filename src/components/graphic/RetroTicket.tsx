import React from 'react';

interface RetroTicketProps {
  code?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  variant?: 'yellow' | 'red' | 'white';
  className?: string;
}

export function RetroTicket({
  code = 'TULIP-2026',
  title,
  subtitle,
  badge = 'ADMISSION PASS',
  variant = 'yellow',
  className = '',
}: RetroTicketProps) {
  const bgStyles = {
    yellow: 'bg-primary text-black border-black',
    red: 'bg-red text-white border-black',
    white: 'bg-white text-black border-black',
  };

  return (
    <div
      className={`relative inline-flex items-center border-3 rounded-2xl p-4 shadow-[5px_5px_0px_#111111] overflow-hidden select-none font-display ${bgStyles[variant]} ${className}`}
    >
      {/* Left perforated cutout */}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-offwhite border-3 border-black pointer-events-none" />

      {/* Right perforated cutout */}
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-offwhite border-3 border-black pointer-events-none" />

      {/* Content */}
      <div className="px-3 flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[9px] font-mono font-black tracking-widest uppercase bg-black text-white px-1.5 py-0.2 rounded">
            {badge}
          </span>
          <span className="text-[10px] font-mono font-bold opacity-75">
            {code}
          </span>
        </div>
        <div className="font-extrabold text-sm sm:text-base tracking-tight leading-tight">
          {title}
        </div>
        {subtitle && (
          <div className="text-xs font-mono opacity-80 mt-0.5 font-medium">
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
}
