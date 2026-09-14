import React from 'react';
import { cn } from '@/src/utils/cn';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ 
  badge, 
  title, 
  description, 
  className,
  align = 'center'
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "flex flex-col gap-3 md:gap-4",
      align === 'center' ? "items-center text-center" : "items-start text-left",
      className
    )}>
      {badge && <Badge variant="peach">{badge}</Badge>}
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-brand-text font-display leading-[1.1]">{title}</h2>
      {description && (
        <p className="max-w-2xl text-base md:text-lg text-brand-text/80 px-4 md:px-0 mt-1 md:mt-2 font-medium">
          {description}
        </p>
      )}
    </div>
  );
}
