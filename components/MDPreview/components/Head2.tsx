import React from 'react';
import clsx from '../../../utils/clsx';
import useGetHashIdFromChildren from '../hooks/useGetHashIdFromChildrenHook';

const Head2 = (props) => {
  let slug = useGetHashIdFromChildren(props);

  return (
    <h2 {...props} id={slug} className={clsx(props.className || '')}>
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
