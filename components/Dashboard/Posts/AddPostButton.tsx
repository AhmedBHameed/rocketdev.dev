import React, {useCallback} from 'react';
import {
  ListQuerierPostsDocument,
  ListQuerierPostsQuery,
  PostTypeEnum,
  useUpsertPostMutation,
} from '../../../graphql/generated/graphql';
import LoadingButton from '../../Buttons/LoadingButton';
import {ulid} from 'ulid';
import titleToSlug from '../../../utils/titleToSlug';
import useVerifyMe from '../../hooks/verifyMeHook';

interface AddPostButtonProps {
  skip: number;
  top: number;
}

const AddPostButton = ({skip, top}: AddPostButtonProps) => {
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
      const params = new URLSearchParams();
      params.set('$skip', `${skip}`);
      params.set('$top', `${top}`);

      const posts = cache.readQuery<ListQuerierPostsQuery>({
        query: ListQuerierPostsDocument,
        variables: {
          query: params.toString(),
        },
      });

      if (upsertPost) {
        cache.writeQuery({
          query: ListQuerierPostsDocument,
          variables: {
            query: params.toString(),
          },
          data: {
            querier: {
              totalPosts: posts.querier.totalPosts + 1,
              listPosts: [...posts.querier.listPosts, {...upsertPost}],
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
  }, [userProfile, upsertPost]);

  return (
    <LoadingButton loading={loading} onClick={handleAddNewPost}>
      Add new post
    </LoadingButton>
  );
};

export default AddPostButton;
