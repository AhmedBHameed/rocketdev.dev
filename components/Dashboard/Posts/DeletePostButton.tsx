import {TrashIcon} from '@heroicons/react/solid';
import React, {useCallback, useState} from 'react';
import {
  ListQuerierPostsQuery,
  useDeletePostMutation,
} from '../../../graphql/generated/graphql';
import LIST_QUERIER_POSTS_QUERY from '../../../graphql/querier/LIST_POSTS.gql';
import clsx from '../../../utils/clsx';
import Alert from '../../Alert/Alert';
import BaseButton from '../../Buttons/BaseButton';
import Popup from '../../Popup/Popup';

interface DeletePostButtonProps {
  id: string;
  page: number;
  perPage: number;
}

const DeletePostButton = ({id, page, perPage}: DeletePostButtonProps) => {
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [deletePost] = useDeletePostMutation();

  const handleDeletePost = useCallback(async (id: string) => {
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
          query: LIST_QUERIER_POSTS_QUERY,
          variables: {
            input: {
              page: {
                number: page,
                size: perPage,
              },
            },
          },
        });

        if (deletePost) {
          cache.writeQuery({
            query: LIST_QUERIER_POSTS_QUERY,
            variables: {
              input: {
                page: {
                  number: page,
                  size: perPage,
                },
              },
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
  }, []);

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
