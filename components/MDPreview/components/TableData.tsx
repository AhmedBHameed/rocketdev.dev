import React from 'react';
import clsx from '../../../utils/clsx';

interface TableDataProps {
  children?: React.ReactNode;
}

const TableData = ({children}: TableDataProps) => {
  return (
    <td className={clsx('text-gray-800', 'px-6', 'py-3', 'dark:text-gray-200')}>
      {children}
    </td>
  );
};

export default TableData;
