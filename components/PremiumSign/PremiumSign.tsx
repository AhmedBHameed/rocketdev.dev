import React from 'react';
import {DollarSign} from 'react-feather';
import clsx from '../../utils/clsx';

const PremiumSign = () => {
  return (
    <div
      title="Premium course"
      className={clsx('text-red-500', 'dark:text-red-300')}
    >
      <DollarSign />
    </div>
  );
};

export default PremiumSign;
