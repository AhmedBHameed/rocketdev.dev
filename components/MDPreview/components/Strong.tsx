import React from 'react';
import clsx from '../../../utils/clsx';

interface StrongProps {
  children?: React.ReactNode;
}

const Strong = ({children}: StrongProps) => {
  return (
    <strong
      className={clsx('text-zinc-700', 'dark:text-zinc-300', 'font-bold')}
    >
      {children}
    </strong>
  );
};

export default Strong;
