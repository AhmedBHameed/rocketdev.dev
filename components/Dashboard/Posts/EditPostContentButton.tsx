import React, {useCallback, useState} from 'react';
import {ulid} from 'ulid';
import {
  LanguageEnum,
  PostContent,
  useUpsertPostContentMutation,
} from '../../../graphql/generated/graphql';
import LIST_QUERIER_POSTS_QUERY from '../../../graphql/querier/LIST_POSTS.gql';
import clsx from '../../../utils/clsx';
import omitDeepLodash from '../../../utils/omitDeepLodash';
import LoadingButton from '../../Buttons/LoadingButton';
import JsonViewContainer from '../../JsonView/JsonViewContainer';
import Modal from '../../Modal/Modal';
import {useNotifications} from '../../ToastMessage/Hooks/NotificationsHook';

interface EditPostContentButtonProps {
  postId: string;
  postContents: PostContent[];
  page: number;
  perPage: number;
}

const EditPostContentButton = ({
  postId,
  postContents,
  page,
  perPage,
}: EditPostContentButtonProps) => {
  const {notify} = useNotifications();
  const [open, setOpen] = useState(false);

  const [upsertPostContent, {loading}] = useUpsertPostContentMutation();

  const handlePostContentUpdate = useCallback(
    async (postContents: PostContent[]) => {
      // remove inner keys from objects

      for (let postContent of postContents) {
        const cleanedPostContent = omitDeepLodash(postContent, ['__typename']);
        await upsertPostContent({
          variables: {
            postId,
            input: {
              id: cleanedPostContent.id,
              body: cleanedPostContent.body,
              lang: cleanedPostContent.lang,
              contentPreview: cleanedPostContent.contentPreview,
              postImage: cleanedPostContent.postImage,
              publishedAt: cleanedPostContent.publishedAt,
              metaTags: cleanedPostContent.metaTags,
            },
          },
        });
      }
      notify({
        title: 'Post content updated',
        message: 'Post content updated successfully',
        type: 'success',
      });
      setOpen(false);
    },
    [postId, notify, upsertPostContent]
  );

  const addNewPostContent = useCallback(async () => {
    await upsertPostContent({
      variables: {
        postId,
        input: {
          id: ulid(),
          postImage: '',
          lang: LanguageEnum.En,
          body: 'New post content',
          contentPreview: '',
          metaTags: {
            injectHeader: '',
            injectCssStyle: '',
            description: 'New post content',
          },
        },
      },
      refetchQueries: () => [
        {
          query: LIST_QUERIER_POSTS_QUERY,
          variables: {
            input: {
              page: {
                number: page,
                size: perPage,
              },
            },
          },
        },
      ],
    });
  }, [page, perPage, postId, upsertPostContent]);

  if (!postContents.length)
    return (
      <LoadingButton
        className={clsx('text-blue-500')}
        loading={loading}
        onClick={addNewPostContent}
      >
        Add post content
      </LoadingButton>
    );

  return (
    <>
      <LoadingButton onClick={() => setOpen(true)}>
        Edit post content (JSON)
      </LoadingButton>

      <Modal
        title="Edit Posts content"
        open={open}
        onClose={() => setOpen(false)}
      >
        <JsonViewContainer
          name="Edit Post content"
          onSubmit={handlePostContentUpdate}
          src={postContents}
          loading={false}
        />
      </Modal>
    </>
  );
};

export default EditPostContentButton;
