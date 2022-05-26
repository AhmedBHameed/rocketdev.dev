import React from 'react';
import clsx from '../../../utils/clsx';

interface CodeProps {
  children?: React.ReactNode;
}

const Code: React.FC<CodeProps> = (props) => {
  return (
    <code
      className={clsx(
        'before:content-none',
        'after:content-none',
        'bg-gray-300',
        'text-zinc-700',
        'dark:bg-neutral-700',
        'dark:text-zinc-300',
        'p-0.5',
        'px-2',
        'rounded-md',
        'overflow-x-scroll'
      )}
    >
      {props.children}
    </code>
  );
};

export default Code;
