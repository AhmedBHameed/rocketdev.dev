import React from 'react';
import clsx from '../../../utils/clsx';

interface Head1Props {
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

const Head1: React.FC<Head1Props> = (props) => {
  return (
    <h1 {...props} className={clsx(props.className || '')}>
      <a
        href={`#${props.id}`}
        className={clsx('text-gray-800', 'dark:text-gray-200', 'no-underline')}
      >
        <span>{props.children}</span>
      </a>
    </h1>
  );
};

export default Head1;
