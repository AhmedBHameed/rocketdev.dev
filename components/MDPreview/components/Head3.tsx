import React from 'react';
import clsx from '../../../utils/clsx';
import useGetHashIdFromChildren from '../hooks/useGetHashIdFromChildrenHook';

const Head3 = (props) => {
  let slug = useGetHashIdFromChildren(props);

  return (
    <h3 {...props} id={slug} className={clsx(props.className || '')}>
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
