import React from 'react';
import clsx from '../../utils/clsx';

interface ColProps {
  children?: React.ReactNode;
  className?: string;
}

const Col: React.FC<ColProps> = ({children, className}) => {
  return <div className={clsx(className)}>{children}</div>;
};

export default Col;
