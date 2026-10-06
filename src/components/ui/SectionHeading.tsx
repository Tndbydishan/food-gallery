import React from 'react';
import { cn } from '../../utils/cn';
import { Badge } from './Badge';

export interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'yellow' | 'red' | 'white' | 'black' | 'blue' | 'green';
  kanjiBadge?: string;
  number?: string | number;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
}

export function SectionHeading({ 
  badge, 
  badgeVariant = 'yellow',
  kanjiBadge,
  number,
  title, 
  description, 
  className,
  align = 'center',
  theme = 'light',
}: SectionHeadingProps) {
  const isDark = theme === 'dark';

  return (
    <div className={cn(
      "flex flex-col gap-3",
      align === 'center' ? "items-center text-center mx-auto" : "items-start text-left",
      className
    )}>
      {/* Top Graphic Cluster */}
      {(badge || kanjiBadge || number) && (
        <div className="flex items-center gap-2 mb-1">
          {number && (
            <span className={cn(
              "font-mono text-xs font-black uppercase px-2 py-0.5 rounded border-2 border-black",
              isDark ? "bg-primary text-black" : "bg-blue text-white shadow-[2px_2px_0px_#111111]"
            )}>
              No. {number}
            </span>
          )}
          {kanjiBadge && (
            <span className="font-display font-black text-xs px-2 py-0.5 rounded border-2 border-red text-red bg-red/10">
              {kanjiBadge}
            </span>
          )}
          {badge && (
            <Badge variant={badgeVariant} rotate="-1">
              {badge}
            </Badge>
          )}
        </div>
      )}

      {/* Main Headline */}
      <h2 className={cn(
        "text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-black leading-[1.12] sm:leading-[1.05] tracking-[0.035em] [text-wrap:balance]",
        isDark ? "text-white" : "text-black"
      )}>
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className={cn(
          "max-w-2xl text-sm sm:text-base md:text-lg font-medium leading-relaxed [text-wrap:pretty]",
          isDark ? "text-white/80" : "text-black/80"
        )}>
          {description}
        </p>
      )}

      {/* Graphic Underline Accent */}
      <div className={cn(
        "h-1 w-16 mt-1 border-b-3 border-black",
        isDark ? "border-yellow" : "border-black"
      )} />
    </div>
  );
}
