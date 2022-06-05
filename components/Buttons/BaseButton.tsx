import React from 'react';

interface BaseButtonProps {
  loading?: boolean;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  testId?: string;
  children?: React.ReactNode;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  className,
  disabled,
  onClick,
  type,
  testId,
}) => (
  <button
    className={className}
    data-testid={testId}
    disabled={disabled}
    onClick={onClick}
    type={type || 'button'}
  >
    {children}
  </button>
);

export default BaseButton;
