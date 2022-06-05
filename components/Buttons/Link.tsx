import React, {MouseEventHandler} from 'react';
import clsx from '../../utils/clsx';

interface LinkProps {
  type?: 'submit' | 'button';
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const Link = ({className, type, children, onClick, ...reset}: LinkProps) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={clsx(
        'inline-flex',
        'items-center',
        'w-full',
        'cursor-pointer',
        'border',
        'border-transparent',
        'text-sm',
        className
      )}
      {...reset}
    >
      {children}
    </button>
  );
};

export default Link;
