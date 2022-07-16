import React, {useCallback, useState} from 'react';
import {
  Feedback,
  useUpsertFeedbackMutation,
} from '../../../graphql/generated/graphql';
import omitDeepLodash from '../../../utils/omitDeepLodash';
import LoadingButton from '../../Buttons/LoadingButton';
import JsonViewContainer from '../../JsonView/JsonViewContainer';
import Modal from '../../Modal/Modal';
import {useNotifications} from '../../ToastMessage/Hooks/NotificationsHook';

interface EditFeedbackButtonProps {
  feedback: Feedback;
}

const EditFeedbackButton = ({feedback}: EditFeedbackButtonProps) => {
  const {notify} = useNotifications();
  const [open, setOpen] = useState(false);

  const [upsertFeedback, {loading}] = useUpsertFeedbackMutation();

  const handleFeedbackUpdate = useCallback(async (feedback: Feedback) => {
    const cleanedFeedback = omitDeepLodash(feedback, ['__typename']);
    await upsertFeedback({
      variables: {
        input: {
          id: cleanedFeedback.id,
          message: cleanedFeedback.message,
          title: cleanedFeedback.title,
          resolved: cleanedFeedback.resolved,
        },
      },
    });

    notify({
      title: 'Feedback updated',
      message: 'Feedback updated successfully',
      type: 'success',
    });
    setOpen(false);
  }, []);

  return (
    <>
      <LoadingButton onClick={() => setOpen(true)}>Edit feedback</LoadingButton>

      <Modal title="Edit feedback" open={open} onClose={() => setOpen(false)}>
        <JsonViewContainer
          name="feedback"
          onSubmit={handleFeedbackUpdate}
          src={feedback}
          loading={false}
        />
      </Modal>
    </>
  );
};

export default EditFeedbackButton;
