import React, {useCallback} from 'react';
import {
  ListQuerierPostsQuery,
  PostTypeEnum,
  useUpsertPostMutation,
} from '../../../graphql/generated/graphql';
import LoadingButton from '../../Buttons/LoadingButton';
import {ulid} from 'ulid';
import titleToSlug from '../../../utils/titleToSlug';
import useVerifyMe from '../../hooks/verifyMeHook';
import LIST_QUERIER_POSTS_QUERY from '../../../graphql/querier/LIST_POSTS.gql';

interface AddPostButtonProps {
  page: number;
  perPage: number;
}

const AddPostButton = ({page, perPage}: AddPostButtonProps) => {
  const {userProfile} = useVerifyMe();

  const [upsertPost, {loading}] = useUpsertPostMutation({
    update: (
      cache,
      {
        data: {
          mutator: {upsertPost},
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

      if (upsertPost) {
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
              totalPosts: posts.querier.totalPosts + 1,
              listPosts: [{...upsertPost}, ...posts.querier.listPosts],
            },
          },
        });
      }
    },
  });

  const handleAddNewPost = useCallback(async () => {
    await upsertPost({
      variables: {
        input: {
          id: ulid(),
          nanoId: crypto.randomUUID().slice(-10),
          isPremium: false,
          slug: titleToSlug('New Post'),
          authorId: userProfile.verifyMe.id,
          nextPostId: '',
          prevPostId: '',
          postContentIds: [],
          accessedByUserIds: [],
          tagIds: [],
          type: PostTypeEnum.Course,
          visibility: false,
        },
      },
    });
  }, [userProfile]);

  return (
    <LoadingButton loading={loading} onClick={handleAddNewPost}>
      Add new post
    </LoadingButton>
  );
};

export default AddPostButton;
