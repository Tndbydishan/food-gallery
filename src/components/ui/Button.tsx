import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'red' | 'outline' | 'ghost' | 'blue' | 'green';
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
        "inline-flex items-center justify-center font-display font-black border-3 border-black uppercase tracking-tight select-none cursor-pointer transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none active:translate-x-[5px] active:translate-y-[5px] active:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
        {
          /* Color Variants with Physical Offset Shadows */
          'bg-primary text-black hover:bg-yellow shadow-[5px_5px_0px_#111111] hover:shadow-[3px_3px_0px_#111111]': variant === 'primary',
          'bg-black text-yellow hover:bg-[#222222] shadow-[5px_5px_0px_#111111] hover:shadow-[3px_3px_0px_#111111]': variant === 'secondary',
          'bg-red text-white hover:bg-red-japanese shadow-[5px_5px_0px_#111111] hover:shadow-[3px_3px_0px_#111111]': variant === 'red',
          'bg-white text-black hover:bg-offwhite shadow-[5px_5px_0px_#111111] hover:shadow-[3px_3px_0px_#111111]': variant === 'outline',
          'bg-transparent border-transparent hover:bg-primary/20 text-black shadow-none': variant === 'ghost',
          'bg-blue text-white hover:bg-blue-retro shadow-[5px_5px_0px_#111111] hover:shadow-[3px_3px_0px_#111111]': variant === 'blue',
          'bg-green text-white hover:bg-green-deep shadow-[5px_5px_0px_#111111] hover:shadow-[3px_3px_0px_#111111]': variant === 'green',

          /* Sizes with controlled geometry */
          'px-3.5 py-1.5 text-xs rounded-lg': size === 'sm',
          'px-5 py-2.5 text-sm rounded-xl': size === 'md',
          'px-7 py-3.5 text-base rounded-2xl': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
