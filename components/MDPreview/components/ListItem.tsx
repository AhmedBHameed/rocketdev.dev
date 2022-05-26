import React from 'react';
import clsx from '../../../utils/clsx';

interface ListItemProps {
  children?: React.ReactNode;
}

const ListItem = ({children}: ListItemProps) => {
  return (
    <li className={clsx('text-gray-800', 'dark:text-gray-200', 'no-underline')}>
      {children}
    </li>
  );
};

export default ListItem;
