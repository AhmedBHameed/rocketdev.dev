import React from 'react';
import theme from '../../../styles/theme';
import clsx from '../../../utils/clsx';
import {ExclamationCircleIcon} from '@heroicons/react/24/outline';

interface BlockquoteProps {
  children?: React.ReactNode;
}

const Blockquote = (props: BlockquoteProps) => {
  return (
    <div className={clsx('relative', 'mb-10')}>
      <div
        className={clsx(
          'absolute',
          '-left-5',
          '-top-5',
          'z-50',
          'rounded-full',
          'p-1',
          'bg-slate-200',
          'dark:bg-neutral-900'
        )}
      >
        <ExclamationCircleIcon
          className={clsx('w-9', 'h-9', 'text-blue-600')}
        />
      </div>
      <blockquote
        className={clsx(
          theme.bgSecondary,
          'p-6',
          'border-l-4',
          'border-blue-600',
          'rounded-md'
        )}
      >
        <div className={clsx('pt-2')}>{props.children}</div>
      </blockquote>
    </div>
  );
};

export default Blockquote;
