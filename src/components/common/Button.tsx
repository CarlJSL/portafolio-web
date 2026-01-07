import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

interface BaseButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button';
};

type LinkProps = BaseButtonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'a';
};

type Props = ButtonProps | LinkProps;

const variantStyles = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20',
  secondary: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700',
  outline: 'bg-transparent hover:bg-slate-800 text-slate-200 border border-slate-700'
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-base'
};

export const Button: React.FC<Props> = ({ 
  children, 
  icon: Icon, 
  variant = 'primary', 
  size = 'md',
  className = '',
  as = 'button',
  ...props 
}) => {
  const baseStyles = 'rounded-lg font-semibold transition-all flex items-center justify-center gap-2';
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {Icon && <Icon size={20} />}
      {children}
    </>
  );

  if (as === 'a') {
    return (
      <a className={styles} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={styles} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
};
