import React from 'react';
import clsx from '../../../utils/clsx';

interface TableRowProps {
  children?: React.ReactNode;
}

const TableRow = ({children, ...reset}: TableRowProps) => {
  return (
    <tr className={clsx('dark:odd:bg-transparent', 'dark:even:bg-gray-900')}>
      {children}
    </tr>
  );
};

export default TableRow;
