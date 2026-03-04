import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary/90 shadow-soft',
      secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-soft',
      accent: 'bg-accent text-white hover:bg-accent/90 shadow-soft',
      outline: 'border-2 border-primary text-primary hover:bg-primary/5',
      ghost: 'hover:bg-primary/5 text-text-main',
      icon: 'p-2 rounded-full hover:bg-muted/10',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm rounded-sm',
      md: 'px-6 py-2.5 text-base rounded-md',
      lg: 'px-8 py-3.5 text-lg rounded-lg',
      icon: 'w-10 h-10 flex items-center justify-center',
    };

    return (
      <motion.button
        ref={ref as any}
        whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          size !== 'icon' && sizes[size],
          size === 'icon' && sizes.icon,
          className
        )}
        {...props as any}
      />
    );
  }
);

Button.displayName = 'Button';
