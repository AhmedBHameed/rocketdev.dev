import React from 'react';
import clsx from '../../../utils/clsx';

const Head3 = (props) => {
  return (
    <h3 {...props} className={clsx(props.className || '')}>
      <a
        href={`#${props.id}`}
        className={clsx('text-gray-800', 'dark:text-gray-200', 'no-underline')}
      >
        <span>{props.children}</span>
      </a>
    </h3>
  );
};

export default Head3;
