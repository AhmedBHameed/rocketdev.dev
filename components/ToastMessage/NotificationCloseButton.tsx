import React from 'react';
import {TypeOptions} from 'react-toastify';
import {XCircleIcon} from '@heroicons/react/outline';
import clsx from '../../utils/clsx';

interface NotificationCloseButtonProps {
  notificationType?: TypeOptions;
}

const NotificationCloseButton: React.FC<NotificationCloseButtonProps> = ({
  notificationType,
}) => (
  <div className={clsx('flex', 'items-start')}>
    <button
      className={clsx('bg-transparent', 'border-0', 'text-red-400')}
      data-testid="toast-message-dismiss-button"
    >
      <XCircleIcon className={clsx('w-5', 'h-5')} />
    </button>
  </div>
);

export default NotificationCloseButton;
