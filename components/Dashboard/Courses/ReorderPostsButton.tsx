import dynamic from 'next/dynamic';
import React, {useCallback, useState} from 'react';
import {
  Post,
  useUpsertCourseMutation,
} from '../../../graphql/generated/graphql';
import LoadingButton from '../../Buttons/LoadingButton';
import Modal from '../../Modal/Modal';
import {useNotifications} from '../../ToastMessage/Hooks/NotificationsHook';
const PostsReorder = dynamic(() => import('./PostsReorder'), {ssr: false});

interface ReorderPostsButtonProps {
  courseId: string;
}

const ReorderPostsButton = ({courseId}: ReorderPostsButtonProps) => {
  const [open, setOpen] = useState(false);
  const [coursePostsIds, setCoursePostsIds] = useState<string[]>([]);
  const {notify} = useNotifications();

  const [upsertCourse, {loading}] = useUpsertCourseMutation();

  const reorderPostsIds = useCallback(async () => {
    await upsertCourse({
      variables: {
        input: {
          id: courseId,
          postIds: coursePostsIds,
        },
      },
    });
    notify({
      title: 'Posts order',
      message: 'Posts order updated',
      type: 'success',
    });
    setOpen(false);
  }, [courseId, coursePostsIds, notify, upsertCourse]);

  return (
    <>
      <LoadingButton
        loading={loading}
        className="text-red-500"
        onClick={() => setOpen(true)}
      >
        Reorder posts
      </LoadingButton>

      <Modal title="Posts related" open={open} onClose={() => setOpen(false)}>
        <PostsReorder
          onItemOrderChange={(posts: Post[]) => {
            setCoursePostsIds([...posts.map((post) => post.id)]);
          }}
          courseId={courseId}
        />

        <div className="flex mt-10 justify-end">
          <LoadingButton
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            loading={loading}
            onClick={reorderPostsIds}
          >
            Reorder
          </LoadingButton>
        </div>
      </Modal>
    </>
  );
};

export default ReorderPostsButton;
