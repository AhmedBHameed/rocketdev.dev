import React from 'react';
import clsx from '../../utils/clsx';

interface BoldLabelProps {
  className?: string;
  children?: React.ReactNode;
}

const BoldLabel: React.FC<BoldLabelProps> = ({className, children}) => {
  return <span className={clsx(className, 'font-bold')}>{children}</span>;
};

export default BoldLabel;
