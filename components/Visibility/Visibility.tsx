import React from 'react';
import {EyeOff, Eye} from 'react-feather';
import clsx from '../../utils/clsx';

interface VisibilityProps {
  published?: boolean;
}

const Visibility = ({published}: VisibilityProps) => {
  return (
    <div>
      {published ? (
        <Eye className={clsx('w-8', 'text-green-500')} />
      ) : (
        <EyeOff className={clsx('w-8', 'text-yellow-500')} />
      )}
    </div>
  );
};

export default Visibility;
