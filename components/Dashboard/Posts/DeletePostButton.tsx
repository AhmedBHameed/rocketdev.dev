import {TrashIcon} from '@heroicons/react/24/solid';
import React, {useCallback, useState} from 'react';
import {
  ListQuerierPostsDocument,
  ListQuerierPostsQuery,
  useDeletePostMutation,
} from '../../../graphql/generated/graphql';
import Alert from '../../Alert/Alert';
import BaseButton from '../../Buttons/BaseButton';

interface DeletePostButtonProps {
  id: string;
  skip: number;
  top: number;
}

const DeletePostButton = ({id, skip, top}: DeletePostButtonProps) => {
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [deletePost] = useDeletePostMutation();

  const handleDeletePost = useCallback(
    async (id: string) => {
      const params = new URLSearchParams();
      params.set('$skip', `${skip}`);
      params.set('$top', `${top}`);

      await deletePost({
        variables: {
          id,
        },
        update: (
          cache,
          {
            data: {
              mutator: {deletePost},
            },
          }
        ) => {
          const posts = cache.readQuery<ListQuerierPostsQuery>({
            query: ListQuerierPostsDocument,
            variables: {
              query: params.toString(),
            },
          });

          if (deletePost) {
            cache.writeQuery({
              query: ListQuerierPostsDocument,
              variables: {
                query: params.toString(),
              },
              data: {
                querier: {
                  ...posts.querier,
                  listPosts: posts.querier.listPosts.filter(
                    (post) => post.id !== deletePost.id
                  ),
                },
              },
            });
          }
        },
      });
      setOpenConfirmation(false);
    },
    [skip, top, deletePost]
  );

  return (
    <>
      <BaseButton onClick={() => setOpenConfirmation(true)}>
        <TrashIcon className="h-8 w-8" />
      </BaseButton>

      <Alert
        title="Deleting post"
        message="Are you sure you want to delete this post?"
        open={openConfirmation}
        onClose={() => setOpenConfirmation(false)}
        onConfirm={() => handleDeletePost(id)}
      />
    </>
  );
};

export default DeletePostButton;
