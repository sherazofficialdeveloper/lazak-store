import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'icon' | 'auth';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-white border-2 border-primary hover:bg-transparent hover:text-primary',
      secondary: 'bg-secondary text-white border-2 border-secondary hover:bg-transparent hover:text-secondary',
      accent: 'bg-accent text-white border-2 border-accent hover:bg-transparent hover:text-accent',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
      ghost: 'hover:bg-primary/5 text-text-main',
      icon: 'p-2 rounded-full hover:bg-muted/10',
      auth: 'bg-primary text-white border-2 border-primary hover:bg-transparent hover:text-primary',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-[10px]',
      md: 'px-6 py-2.5 text-base rounded-[12px]',
      lg: 'px-8 py-3.5 text-lg rounded-[14px]',
      icon: 'w-10 h-10 flex items-center justify-center rounded-[12px]',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-tight',
          variants[variant],
          size !== 'icon' && sizes[size],
          size === 'icon' && sizes.icon,
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
