import React from 'react';
import clsx from '../../../utils/clsx';
import useGetHashIdFromChildren from '../hooks/useGetHashIdFromChildrenHook';

const Head1 = (props) => {
  let slug = useGetHashIdFromChildren(props);

  return (
    <h1 {...props} id={slug} className={clsx(props.className || '')}>
      <a
        href={`#${slug}`}
        className={clsx('text-gray-800', 'dark:text-gray-200', 'no-underline')}
      >
        <span>{props.children}</span>
      </a>
    </h1>
  );
};

export default Head1;
