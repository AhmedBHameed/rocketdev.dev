import React from 'react';
import clsx from '../../../utils/clsx';

interface Head2Props {
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

const Head2: React.FC<Head2Props> = (props) => {
  return (
    <h2 {...props} className={clsx(props.className || '')}>
      <a
        href={`#${props.id}`}
        className={clsx('text-gray-800', 'dark:text-gray-200', 'no-underline')}
      >
        <span>{props.children}</span>
      </a>
    </h2>
  );
};

export default Head2;
