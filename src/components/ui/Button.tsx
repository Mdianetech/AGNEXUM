import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
  responsive?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  loading,
  fullWidth,
  responsive = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = `
    btn transition-smooth focus-visible gpu-accelerated
    ${fullWidth ? 'w-full' : ''}
    ${responsive ? 'mobile-full' : ''}
  `;
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  };

  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
  };

  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
        </>
      ) : (
        Icon && iconPosition === 'left' && (
          <Icon
            className="mr-2 flex-shrink-0 w-4 h-4"
            aria-hidden="true"
          />
        )
      )}
      
      {children && <span>{children}</span>}
      
      {Icon && iconPosition === 'right' && !loading && (
        <Icon
          className="ml-2 flex-shrink-0 w-4 h-4"
          aria-hidden="true"
        />
      )}
    </button>
  );
};