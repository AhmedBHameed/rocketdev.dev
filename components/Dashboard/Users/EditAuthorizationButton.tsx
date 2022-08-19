import React, {useCallback, useState} from 'react';
import {
  ActionInput,
  Authorization,
  useUpsertAuthorizationMutation,
} from '../../../graphql/generated/graphql';
import omitDeepLodash from '../../../utils/omitDeepLodash';

import LoadingButton from '../../Buttons/LoadingButton';
import JsonViewContainer from '../../JsonView/JsonViewContainer';
import Modal from '../../Modal/Modal';
import {useNotifications} from '../../ToastMessage/Hooks/NotificationsHook';

interface EditAuthorizationButtonProps {
  authorization: Authorization;
}

const EditAuthorizationButton = ({
  authorization,
}: EditAuthorizationButtonProps) => {
  const [open, setOpen] = useState(false);
  const [authorizationData, setAuthorizationData] =
    useState<Authorization>(authorization);

  const {notify} = useNotifications();

  const [upsertAuthorization, {loading}] = useUpsertAuthorizationMutation();

  const handleOnSubmit = useCallback(
    async (updatedUser: Authorization) => {
      const userAuth = omitDeepLodash(updatedUser, ['_id', '__typename']);
      await upsertAuthorization({
        variables: {
          input: {
            userId: userAuth.userId,
            actions: (userAuth.actions || []) as ActionInput[],
          },
        },
      });

      setAuthorizationData(updatedUser);
      notify({
        title: 'Authorization',
        message: 'Authorization updated',
        type: 'success',
      });
      setOpen(false);
    },
    [notify, upsertAuthorization]
  );

  return (
    <>
      <LoadingButton
        loading={loading}
        className="text-red-500"
        onClick={() => setOpen(true)}
      >
        Edit authorization
      </LoadingButton>

      <Modal title="Edit user" open={open} onClose={() => setOpen(false)}>
        <JsonViewContainer
          name="user"
          onSubmit={handleOnSubmit}
          src={authorizationData}
          loading={false}
        />
      </Modal>
    </>
  );
};

export default EditAuthorizationButton;
