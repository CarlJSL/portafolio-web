import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  const hoverStyles = hover ? 'hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/10' : '';
  
  return (
    <div className={`bg-slate-900 p-6 rounded-xl border border-slate-800 transition-all ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
