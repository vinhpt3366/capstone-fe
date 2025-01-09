import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  disabled,
  className = '',
  ...props
}) => {
  const baseStyles =
    'relative font-bold uppercase rounded-full outline-none transition-all duration-300 flex items-center justify-center whitespace-nowrap';

  const sizeStyles = {
    sm: 'px-4 py-1.5 text-xs min-w-[80px]',
    md: 'px-6 py-2 text-sm min-w-[100px]',
    lg: 'px-8 py-3 text-base min-w-[120px]'
  };

  const variantStyles = {
    primary:
      'text-white bg-gradient-to-r from-pink-500 via-orange-400 to-pink-500 bg-[length:200%] border border-transparent hover:bg-right hover:border-pink-500 hover:shadow-[0_0_10px_rgba(245,95,141,0.5)]',
    secondary:
      'text-white bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-500 bg-[length:200%] border border-transparent hover:bg-right hover:border-purple-500 hover:shadow-[0_0_10px_rgba(147,51,234,0.5)]',
    outline:
      'text-pink-500 bg-transparent border-2 border-pink-500 hover:bg-pink-50 hover:shadow-[0_0_10px_rgba(245,95,141,0.3)]',
    ghost: 'text-pink-500 bg-transparent hover:bg-pink-50'
  };

  const LoadingDots = () => (
    <div className="flex items-center space-x-1">
      <div
        className="w-1.5 h-1.5 rounded-full bg-current animate-[bounce_0.8s_infinite]"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="w-1.5 h-1.5 rounded-full bg-current animate-[bounce_0.8s_infinite]"
        style={{ animationDelay: '0.2s' }}
      />
      <div
        className="w-1.5 h-1.5 rounded-full bg-current animate-[bounce_0.8s_infinite]"
        style={{ animationDelay: '0.4s' }}
      />
    </div>
  );

  const buttonClasses = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${isLoading || disabled ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}
    ${className}
  `.trim();

  return (
    <button
      className={buttonClasses}
      disabled={isLoading || disabled}
      {...props}
    >
      <div className="relative flex items-center justify-center w-full">
        {/* Content container */}
        <div
          className={`flex items-center justify-center space-x-2 transition-opacity duration-200 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {leftIcon && <span className="inline-flex">{leftIcon}</span>}
          <span>{text}</span>
          {rightIcon && <span className="inline-flex">{rightIcon}</span>}
        </div>

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <LoadingDots />
          </div>
        )}
      </div>
    </button>
  );
};

export default Button;
