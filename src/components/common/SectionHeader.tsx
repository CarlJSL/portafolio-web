import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  align = 'center' 
}) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  
  return (
    <div className={`mb-16 ${alignClass}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      <div className={`w-20 h-1 bg-blue-500 rounded-full ${align === 'center' ? 'mx-auto' : ''}`}></div>
      {subtitle && <p className="text-slate-400 mt-4">{subtitle}</p>}
    </div>
  );
};
