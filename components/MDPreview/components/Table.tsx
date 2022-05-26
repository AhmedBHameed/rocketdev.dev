import React from 'react';
import clsx from '../../../utils/clsx';

interface TableProps {
  children?: React.ReactNode;
}

const Table = ({children}: TableProps) => {
  return (
    <table
      className={clsx(
        'w-full text-sm text-left text-gray-500 dark:text-gray-400'
      )}
    >
      {children}
    </table>
  );
};

export default Table;
