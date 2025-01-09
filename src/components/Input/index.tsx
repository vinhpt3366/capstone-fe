import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  rightLabel?: React.ReactNode;
  icon?: React.ReactNode;
  showPasswordToggle?: boolean;
  autoComplete?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      rightLabel,
      icon,
      className = '',
      showPasswordToggle,
      type = 'text',
      disabled,
      autoComplete,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const inputType = showPasswordToggle
      ? showPassword
        ? 'text'
        : 'password'
      : type;

    return (
      <div className="w-full">
        {/* Label Area */}
        {(label || rightLabel) && (
          <div className="flex justify-between items-center mb-1.5">
            {label && (
              <label className="block text-sm font-medium text-gray-700">
                {label}
              </label>
            )}
            {rightLabel && (
              <div className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                {rightLabel}
              </div>
            )}
          </div>
        )}

        {/* Input Area */}
        <div
          className={`
          relative bg-gray-50 rounded-lg
          transition-all duration-200
          border border-gray-300
          hover:border-blue-400
          focus-within:shadow-[0_0_10px_rgba(59,130,246,0.5)] 
          focus-within:border-blue-500
          ${error ? '!border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : ''}
          ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
        `}
        >
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            type={inputType}
            disabled={disabled}
            className={`
              w-full bg-transparent
              px-4 py-2.5 
              rounded-lg
              outline-none
              placeholder:text-gray-400
              disabled:cursor-not-allowed
              transition-colors
              ${icon ? 'pl-10' : ''}
              ${showPasswordToggle ? 'pr-10' : ''}
              ${className}
            `}
            autoComplete={autoComplete}
            {...props}
          />

          {showPasswordToggle && (
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 
                        hover:text-blue-600 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
              disabled={disabled}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>

        {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

export default Input;
