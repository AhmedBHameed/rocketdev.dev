import React, {useCallback} from 'react';
import {toast, ToastOptions, TypeOptions} from 'react-toastify';

import NotificationCloseButton from '../NotificationCloseButton';
import NotificationContainer from '../NotificationContainer';

export interface NotificationMessage {
  type: TypeOptions;
  title: string;
  message: string | React.ReactNode;
}

const useNotifications = () => {
  const notify = useCallback(
    (notification: NotificationMessage, opts?: ToastOptions) => {
      toast(
        <NotificationContainer
          {...notification}
          notificationType={notification.type}
        />,
        {
          autoClose: 5000,
          ...opts,
          closeButton: (
            <NotificationCloseButton notificationType={notification.type} />
          ),
        }
      );
    },
    []
  );

  return {
    notify,
  };
};

export {useNotifications};
