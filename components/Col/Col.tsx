import React from 'react';
import clsx from '../../utils/clsx';

interface ColProps {
  children?: React.ReactNode;
  className?: string;
  colSpan?: number;
}

const Col: React.FC<ColProps> = ({children, colSpan, className}) => {
  return (
    <div
      className={clsx(
        colSpan === 1 && 'col-span-1',
        colSpan === 2 && 'col-span-2',
        colSpan === 3 && 'col-span-3',
        colSpan === 4 && 'col-span-4',
        colSpan === 5 && 'col-span-5',
        colSpan === 6 && 'col-span-6',
        colSpan === 7 && 'col-span-7',
        colSpan === 8 && 'col-span-8',
        colSpan === 9 && 'col-span-9',
        colSpan === 10 && 'col-span-10',
        colSpan === 11 && 'col-span-11',
        colSpan === 12 && 'col-span-12',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Col;
