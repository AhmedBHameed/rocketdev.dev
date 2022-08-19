import {get} from 'lodash';
import React, {useCallback, useState} from 'react';
import {User, useUpdateUserMutation} from '../../../graphql/generated/graphql';

import LoadingButton from '../../Buttons/LoadingButton';
import JsonViewContainer from '../../JsonView/JsonViewContainer';
import Modal from '../../Modal/Modal';
import {useNotifications} from '../../ToastMessage/Hooks/NotificationsHook';

interface EditUserButtonProps {
  user: User;
}

const EditUserButton = ({user}: EditUserButtonProps) => {
  const [open, setOpen] = useState(false);
  const [userData, setUser] = useState<User>(user);
  const {notify} = useNotifications();

  const [updatedUser, {loading}] = useUpdateUserMutation();

  const handleOnSubmit = useCallback(
    async (updatedUserData: User) => {
      await updatedUser({
        variables: {
          input: {
            id: updatedUserData.id,
            avatar: updatedUserData.avatar,
            firstName: get(updatedUserData, 'name.first', ''),
            lastName: get(updatedUserData, 'name.last', ''),
          },
        },
      });
      setUser(updatedUserData);
      notify({
        title: 'User updated',
        message: 'User data has been updated successfully',
        type: 'success',
      });
      setOpen(false);
    },
    [updatedUser, notify]
  );

  return (
    <>
      <LoadingButton
        loading={loading}
        className="text-red-500"
        onClick={() => setOpen(true)}
      >
        Edit
      </LoadingButton>

      <Modal title="Edit user" open={open} onClose={() => setOpen(false)}>
        <JsonViewContainer
          name="user"
          onSubmit={handleOnSubmit}
          src={userData}
          loading={false}
        />
      </Modal>
    </>
  );
};

export default EditUserButton;
