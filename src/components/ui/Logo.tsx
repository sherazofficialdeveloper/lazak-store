import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className, 
  showText = true, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: {
      box: 'w-8 h-8 rounded-lg text-lg',
      text: 'text-lg',
      subtext: 'text-[6px]'
    },
    md: {
      box: 'w-10 h-10 rounded-xl text-xl',
      text: 'text-xl',
      subtext: 'text-[8px]'
    },
    lg: {
      box: 'w-14 h-14 rounded-2xl text-2xl',
      text: 'text-2xl',
      subtext: 'text-[10px]'
    }
  };

  const currentSize = sizeClasses[size];

  return (
   
        <div className="flex flex-col leading-none">
        <img src="LA-Logo.png" alt="" className="w-44 h-32"/>
        </div>
  );
};
