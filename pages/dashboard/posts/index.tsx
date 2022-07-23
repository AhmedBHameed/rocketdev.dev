import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Link from '../../../components/Buttons/Link';
import DashboardLayout from '../../../components/Dashboard/DashboardLayout';
import AddPostButton from '../../../components/Dashboard/Posts/AddPostButton';
import JsonViewContainer from '../../../components/JsonView/JsonViewContainer';
import Modal from '../../../components/Modal/Modal';
import Table, {Column} from '../../../components/Table/Table';
import {
  Post,
  useListQuerierPostsLazyQuery,
  useUpsertPostMutation,
} from '../../../graphql/generated/graphql';
import slugToTitle from '../../../utils/slugToTitle';
import usePagination from '../../../components/Table/hooks/paginationHook';
import DeletePostButton from '../../../components/Dashboard/Posts/DeletePostButton';
import EditPostContentButton from '../../../components/Dashboard/Posts/EditPostContentButton';
import LIST_QUERIER_POSTS_QUERY from '../../../graphql/querier/LIST_POSTS.gql';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useRouter} from 'next/router';
import ROUTES from '../../../config/routes';

const DashboardPosts = () => {
  const router = useRouter();
  const [openPostModel, setPostModal] = useState(false);
  const [post, setPost] = useState<Post | undefined>();
  const {page, perPage} = usePagination();

  const [fetchQuerierPosts, {data}] = useListQuerierPostsLazyQuery();
  const [upsertPost] = useUpsertPostMutation();

  const paginatedPostList = useCallback(
    async (number: number, size: number) => {
      await fetchQuerierPosts({
        variables: {
          input: {
            page: {
              number,
              size,
            },
          },
        },
      });
    },
    []
  );

  const redirectToPostContentUi = useCallback((postId) => {
    const {path} = ROUTES.dashboardPostContent;
    router.push(`${path}/${postId}`);
  }, []);

  const handlePostUpdate = useCallback(async (post: Post) => {
    await upsertPost({
      variables: {
        input: {
          id: post.id,
          isPremium: post.isPremium,
          nextPostId: post.nextPostId,
          prevPostId: post.prevPostId,
          postContentIds: post.postContentIds,
          slug: post.slug,
          groupName: post.groupName,
          type: post.type,
          visibility: post.visibility,
          tagIds: post.tagIds,
        },
      },
      update: (
        cache,
        {
          data: {
            mutator: {upsertPost},
          },
        }
      ) => {
        const posts = cache.readQuery<Post[]>({
          query: LIST_QUERIER_POSTS_QUERY,
        });
        if (posts) {
          const copyPosts = [...posts];

          const modifiedIndex = copyPosts.findIndex(
            (post) => post.id === upsertPost.id
          );
          copyPosts[modifiedIndex] = upsertPost as Post;

          cache.writeQuery({
            query: LIST_QUERIER_POSTS_QUERY,
            data: {
              querier: {
                listPosts: copyPosts,
              },
            },
          });
        }

        console.log(posts);
      },
    });
    setPost(post);
    setPostModal(false);
  }, []);

  const handleOnPaginationChange = useCallback(
    (selectedPage: number) => {
      paginatedPostList(selectedPage, perPage);
    },
    [perPage]
  );

  const tableColumn = useMemo(() => {
    return [
      {
        title: 'Title',
        dataIndex: 'slug',
        key: 'slug',
        render: (slug: string) => slugToTitle(slug),
      },
      {
        title: 'Is premium?',
        dataIndex: 'isPremium',
        key: 'isPremium',
        render: (isPremium: boolean) => (isPremium ? 'Yes' : 'No'),
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: 'Grouped name',
        dataIndex: 'groupName',
        key: 'groupName',
        render: (groupName: string) => slugToTitle(groupName),
      },
      {
        title: 'Post content action',
        dataIndex: 'editPostContent',
        key: 'editPostContent',
        render: (_, row) => (
          <EditPostContentButton
            postId={row.id}
            postContents={row.postContents}
            page={page}
            perPage={perPage}
          />
        ),
      },
      {
        title: 'Post content action (New UI)',
        dataIndex: 'editPostContentUi',
        key: 'editPostContentUi',
        render: (_, row) => (
          <Link
            className="text-green-500"
            onClick={() => redirectToPostContentUi(row.id)}
          >
            Edit post content
          </Link>
        ),
      },
      {
        title: 'Action',
        dataIndex: 'edit',
        key: 'edit',
        render: (_, row) => (
          <Link
            className="text-green-500"
            onClick={() => {
              setPost(row);
              setPostModal(true);
            }}
          >
            Edit
          </Link>
        ),
      },
      {
        title: 'Delete',
        dataIndex: 'delete',
        key: 'delete',
        render: (_, row) => (
          <DeletePostButton page={page} perPage={perPage} id={row.id} />
        ),
      },
    ] as Column<Post>[];
  }, [page, perPage]);

  useEffect(() => {
    paginatedPostList(page, perPage);
  }, []);

  return (
    <DashboardLayout>
      <div className="flex justify-end px-4">
        <AddPostButton page={page} perPage={perPage} />
      </div>
      <Table
        rowKey="id"
        dataSource={(data?.querier?.listPosts || []) as Post[]}
        columns={tableColumn}
        pagination={{
          totalItems: 11 || data?.querier?.totalPosts || 0,
          onChange: handleOnPaginationChange,
        }}
      />

      <Modal
        title={`Post ~${post?.id.slice(-6)}`}
        open={openPostModel}
        onClose={() => setPostModal(false)}
      >
        <JsonViewContainer
          name="Edit post contents"
          onSubmit={handlePostUpdate}
          src={post}
          loading={false}
        />
      </Modal>
    </DashboardLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const translations = await serverSideTranslations(locale, [
    'common',
    'posts',
  ]);

  return {
    props: {
      ...translations,
    },
  };
};

export default DashboardPosts;
