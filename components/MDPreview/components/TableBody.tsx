import React from 'react';
import clsx from '../../../utils/clsx';

interface TableBodyProps {
  children?: React.ReactNode;
}

const TableBody = ({children}: TableBodyProps) => {
  return <tbody>{children}</tbody>;
};

export default TableBody;
