import React, {useCallback, useState} from 'react';
import {
  Course,
  useUpsertCourseMutation,
} from '../../../graphql/generated/graphql';
import omitDeepLodash from '../../../utils/omitDeepLodash';

import LoadingButton from '../../Buttons/LoadingButton';
import JsonViewContainer from '../../JsonView/JsonViewContainer';
import Modal from '../../Modal/Modal';
import {useNotifications} from '../../ToastMessage/Hooks/NotificationsHook';

interface EditCourseButtonProps {
  course: Course;
}

const EditCourseButton = ({course}: EditCourseButtonProps) => {
  const [open, setOpen] = useState(false);
  const [userData, setUser] = useState<Course>(course);
  const {notify} = useNotifications();

  const [upsertCourse, {loading}] = useUpsertCourseMutation();

  const handleOnSubmit = useCallback(async (updatedUserData: Course) => {
    const updatedCourse = omitDeepLodash(updatedUserData, [
      '__typename',
      'tags',
      'author',
    ]);
    await upsertCourse({
      variables: {
        input: updatedCourse,
      },
    });
    setUser(updatedUserData);
    notify({
      title: 'Course updated',
      message: 'Course data has been updated successfully',
      type: 'success',
    });
    setOpen(false);
  }, []);

  return (
    <>
      <LoadingButton
        loading={loading}
        className="text-red-500"
        onClick={() => setOpen(true)}
      >
        Edit
      </LoadingButton>

      <Modal title="Edit course" open={open} onClose={() => setOpen(false)}>
        <JsonViewContainer
          name="course"
          onSubmit={handleOnSubmit}
          src={userData}
          loading={false}
        />
      </Modal>
    </>
  );
};

export default EditCourseButton;
