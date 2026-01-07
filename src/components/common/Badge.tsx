import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'info';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary' }) => {
  const variantStyles = {
    primary: 'text-blue-400 bg-blue-900/30 border-blue-800',
    success: 'text-emerald-400 bg-emerald-900/20 border-emerald-900/50',
    info: 'text-slate-300 bg-slate-900 border-slate-700'
  };

  return (
    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${variantStyles[variant]}`}>
      {children}
    </span>
  );
};
