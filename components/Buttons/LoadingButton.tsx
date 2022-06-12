import React from 'react';
import clsx from '../../utils/clsx';

interface LoadingButtonProps {
  loading?: boolean;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  testId?: string;
  children?: React.ReactNode;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  children,
  className,
  disabled,
  icon,
  loading,
  onClick,
  type,
  testId,
}) => (
  <button
    className={clsx(
      className,
      'flex',
      'inline-flex',
      'items-center',
      'px-4',
      'py-2',
      'border',
      'border-transparent',
      'text-sm',
      'font-medium',
      'rounded-md',
      'shadow-sm',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2'
    )}
    data-testid={testId}
    disabled={disabled}
    onClick={onClick}
    type={type || 'button'}
  >
    {loading ? (
      <svg
        className={clsx('animate-spin', 'w-5', 'h-5', '-ml-1', 'mr-3')}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    ) : (
      icon
    )}
    {children}
  </button>
);

export default LoadingButton;
