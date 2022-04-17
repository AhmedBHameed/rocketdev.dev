import React from 'react';
import clsx from '../../utils/clsx';

interface MediumLabelProps {
  className?: string;
  children?: React.ReactNode;
}

const MediumLabel: React.FC<MediumLabelProps> = ({className, children}) => {
  return <span className={clsx(className, 'font-medium')}>{children}</span>;
};

export default MediumLabel;
