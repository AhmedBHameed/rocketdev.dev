import React from 'react';
import clsx from '../../../utils/clsx';

interface Head3Props {
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

const Head3: React.FC<Head3Props> = (props) => {
  return (
    <h3 {...props} className={clsx(props.className || '')}>
      <a
        href={`#/${props.id}`}
        className={clsx('text-gray-800', 'dark:text-gray-200', 'no-underline')}
      >
        <span>{props.children}</span>
      </a>
    </h3>
  );
};

export default Head3;
