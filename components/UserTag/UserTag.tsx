import React from 'react';
import {User} from '../../graphql/generated/graphql';
import theme from '../../styles/theme';
import clsx from '../../utils/clsx';
import getUserName from '../../utils/getUserName';
import {XMarkIcon} from '@heroicons/react/20/solid';

interface UserTagProps {
  user?: User;
  onRemove: (user: User) => void;
}

const UserTag = ({user, onRemove}: UserTagProps) => {
  return (
    <button
      className={clsx(
        'flex',
        'items-center',
        'border',
        'border-gray-600',
        'rounded-lg',
        'px-2',
        'pr-2',
        'py-1'
      )}
      onClick={() => onRemove(user)}
    >
      <small className={clsx('text-xs', 'font-medium', 'mr-0.5', theme.text)}>
        {user && getUserName(user.name)}
      </small>
      <XMarkIcon className={clsx('w-4', 'h-4', theme.text)} />
    </button>
  );
};

export default UserTag;
