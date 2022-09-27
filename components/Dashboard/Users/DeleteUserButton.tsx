import {TrashIcon} from '@heroicons/react/24/solid';
import React, {useCallback, useState} from 'react';
import {
  ListUsersDocument,
  ListUsersQuery,
  ListUsersQueryVariables,
  useDeleteUserMutation,
} from '../../../graphql/generated/graphql';
import Alert from '../../Alert/Alert';
import BaseButton from '../../Buttons/BaseButton';
import {useNotifications} from '../../ToastMessage/Hooks/NotificationsHook';

interface DeletePostButtonProps {
  id: string;
  skip: number;
  top: number;
}

const DeleteUserButton = ({id, skip, top}: DeletePostButtonProps) => {
  const {notify} = useNotifications();
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [deleteUser] = useDeleteUserMutation({
    onError: ({graphQLErrors}) => {
      notify({
        type: 'error',
        title: 'Deleting failed',
        message: graphQLErrors[0].message,
      });
    },
  });

  const handleDeleteUser = useCallback(
    async (id: string) => {
      const params = new URLSearchParams();
      params.set('$skip', `${skip}`);
      params.set('$top', `${top}`);

      await deleteUser({
        variables: {
          id,
        },
        update: (cache, {data: {deleteUser}}) => {
          const users = cache.readQuery<ListUsersQuery>({
            query: ListUsersDocument,
            variables: {
              query: params.toString(),
            },
          });

          if (deleteUser?.message) {
            cache.writeQuery<ListUsersQuery, ListUsersQueryVariables>({
              query: ListUsersDocument,
              variables: {
                query: params.toString(),
              },
              data: {
                listUsers: users.listUsers.filter((post) => post.id !== id),
              },
            });
          }
        },
      });
      setOpenConfirmation(false);
    },
    [skip, top, deleteUser]
  );

  return (
    <>
      <BaseButton onClick={() => setOpenConfirmation(true)}>
        <TrashIcon className="h-8 w-8 text-red-500" />
      </BaseButton>

      <Alert
        title="Deleting user"
        message="Are you sure you want to delete this user?"
        open={openConfirmation}
        onClose={() => setOpenConfirmation(false)}
        onConfirm={() => handleDeleteUser(id)}
      />
    </>
  );
};

export default DeleteUserButton;
