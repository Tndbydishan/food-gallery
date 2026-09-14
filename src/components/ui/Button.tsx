import React from 'react';
import { cn } from '@/src/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        {
          'bg-brand-baby-blue text-brand-text hover:bg-[#F9C9D6]': variant === 'primary',
          'bg-brand-blue text-brand-text hover:bg-[#C9E6F6]': variant === 'secondary',
          'border-2 border-brand-text bg-transparent hover:bg-brand-soft-cream': variant === 'outline',
          'bg-transparent hover:bg-black/5': variant === 'ghost',
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
