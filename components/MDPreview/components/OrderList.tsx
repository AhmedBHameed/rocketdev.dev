import React from 'react';
import clsx from '../../../utils/clsx';

interface OrderListProps {
  children?: React.ReactNode;
}

const OrderList = ({children}: OrderListProps) => {
  return (
    <ol
      className={clsx(
        'list-decimal',
        'text-gray-800',
        'dark:text-gray-200',
        'no-underline'
      )}
    >
      {children}
    </ol>
  );
};

export default OrderList;
