import React from 'react';
import { cn } from '@/src/utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'baby-blue' | 'blue' | 'cream' | 'mint' | 'peach' | 'white';
}

export function Badge({ 
  className, 
  variant = 'white', 
  children, 
  ...props 
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider",
        {
          'bg-brand-baby-blue text-brand-text': variant === 'baby-blue',
          'bg-brand-blue text-brand-text': variant === 'blue',
          'bg-brand-cream text-brand-text': variant === 'cream',
          'bg-brand-soft-mint text-brand-text': variant === 'mint',
          'bg-brand-accent-peach text-brand-text': variant === 'peach',
          'bg-white text-brand-text': variant === 'white',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
