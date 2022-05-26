import React from 'react';
import clsx from '../../../utils/clsx';

interface TableHeadProps {
  children?: React.ReactNode;
}

const TableHead = ({children}: TableHeadProps) => {
  return (
    <thead
      className={clsx(
        'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'
      )}
    >
      {children}
    </thead>
  );
};

export default TableHead;
