import React from 'react';
import clsx from '../../../utils/clsx';

interface TableHeaderCellProps {
  children?: React.ReactNode;
}

const TableHeaderCell = ({children}: TableHeaderCellProps) => {
  return (
    <th
      scope="col"
      className={clsx(
        'px-6',
        'py-3',
        'font-bold',
        'text-gray-800',
        'dark:text-gray-200'
      )}
    >
      {children}
    </th>
  );
};

export default TableHeaderCell;
