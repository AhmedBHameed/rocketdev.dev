import React from 'react';
import clsx from '../../../utils/clsx';

const Head2 = (props) => {
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
