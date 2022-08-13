import React from 'react';
import clsx from '../../../utils/clsx';

interface LinkProps {
  children?: React.ReactNode;
}

const Link = ({children, ...reset}: LinkProps) => {
  return (
    <a
      {...reset}
      className={clsx('text-blue-500', 'dark:text-blue-400')}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default Link;
