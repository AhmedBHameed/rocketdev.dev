import React from 'react';
import {TypeOptions} from 'react-toastify';
import clsx from '../../utils/clsx';

interface NotificationContainerProps {
  title: string;
  message: string | React.ReactNode;
  notificationType?: TypeOptions;
}

const NotificationContainer: React.FC<NotificationContainerProps> = ({
  title,
  message,
  notificationType,
}) => (
  <div className={clsx('text-zinc-800', 'dark:text-zinc-200')}>
    <h4 className={clsx('text-base')} data-testid="toast-message-title">
      {title}
    </h4>
    <p className={clsx('text-sm')}>{message}</p>
  </div>
);

export default NotificationContainer;
