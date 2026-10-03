import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'yellow' | 'red' | 'white' | 'black' | 'blue' | 'green' | 'pink' | 'orange';
  rotate?: '-1' | '1' | '-2' | '2' | '-3' | '3' | 'none';
}

export function Badge({ 
  className, 
  variant = 'yellow', 
  rotate = 'none',
  children, 
  ...props 
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-display font-black uppercase tracking-wider border-2.5 border-black rounded-lg shadow-[3px_3px_0px_#111111] select-none",
        {
          /* Saturated Inks */
          'bg-primary text-black': variant === 'yellow',
          'bg-red text-white': variant === 'red',
          'bg-white text-black': variant === 'white',
          'bg-black text-yellow': variant === 'black',
          'bg-blue text-white': variant === 'blue',
          'bg-green text-white': variant === 'green',
          'bg-pink text-white': variant === 'pink',
          'bg-orange text-white': variant === 'orange',

          /* Rotations */
          '-rotate-1': rotate === '-1',
          'rotate-1': rotate === '1',
          '-rotate-2': rotate === '-2',
          'rotate-2': rotate === '2',
          '-rotate-3': rotate === '-3',
          'rotate-3': rotate === '3',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
