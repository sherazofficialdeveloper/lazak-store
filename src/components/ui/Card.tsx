import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = true }) => {
  return (
    <div className={cn(
      'bg-surface border border-muted/10 overflow-hidden',
      hover && 'transition-main hover:-translate-y-1',
      className
    )}>
      {children}
    </div>
  );
};
