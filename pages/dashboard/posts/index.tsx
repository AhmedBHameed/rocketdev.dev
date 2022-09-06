import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Link from '../../../components/Buttons/Link';
import DashboardLayout from '../../../components/Dashboard/DashboardLayout';
import AddPostButton from '../../../components/Dashboard/Posts/AddPostButton';
import JsonViewContainer from '../../../components/JsonView/JsonViewContainer';
import Modal from '../../../components/Modal/Modal';
import Table, {Column} from '../../../components/Table/Table';
import {
  Post,
  PostTypeEnum,
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
import titleToSlug from '../../../utils/titleToSlug';
import Visibility from '../../../components/Visibility/Visibility';
import {Edit, BookOpen} from 'react-feather';
import PremiumSign from '../../../components/PremiumSign/PremiumSign';
import clsx from '../../../utils/clsx';
import {debounce} from 'lodash';

const DashboardPosts = () => {
  const router = useRouter();
  const searchParams = router.query as {$skip?: string; $top?: string};

  const [openPostModel, setPostModal] = useState(false);
  const [post, setPost] = useState<Post | undefined>();
  const {skip, top, total} = usePagination();

  const [listQuerierPosts, {data}] = useListQuerierPostsLazyQuery();
  const [upsertPost] = useUpsertPostMutation();

  const paginatedPostList = useCallback(
    async (skip: number) => {
      const params = new URLSearchParams();
      params.set('$skip', `${skip}`);
      params.set('$top', `${top}`);

      router.push(`?${params.toString()}`);

      await listQuerierPosts({
        variables: {
          query: params.toString(),
        },
      });
    },
    [router, top, listQuerierPosts]
  );

  const onSearch = useMemo(
    () =>
      debounce(async (search: string) => {
        const params = new URLSearchParams();

        if (search) params.set('$filter', `contains(slug, '${search}')`);

        params.set('$skip', '0');
        params.set('$top', `${top}`);
        params.set('$filter', `contains(slug,'${search}')`);
        router.push(`?${params.toString()}`);

        await listQuerierPosts({
          variables: {
            query: params.toString(),
          },
        });
      }, 500),
    [router, top, listQuerierPosts]
  );

  const redirectToPostContentUi = useCallback(
    (postId) => {
      const {path} = ROUTES.dashboardPostContent;
      router.push(`${path}/${postId}`);
    },
    [router]
  );

  const handlePostUpdate = useCallback(
    async (post: Post) => {
      await upsertPost({
        variables: {
          input: {
            id: post.id,
            isPremium: post.isPremium,
            nextPostId: post.nextPostId,
            prevPostId: post.prevPostId,
            postContentIds: post.postContentIds,
            slug: titleToSlug(post.slug),
            groupName: post.groupName,
            accessedByUserIds: post.accessedByUserIds,
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
        },
      });
      setPost(post);
      setPostModal(false);
    },
    [upsertPost]
  );

  const tableColumn = useMemo(() => {
    return [
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        render: (type: string) =>
          type === PostTypeEnum.Article ? (
            <Edit className="w-8" />
          ) : (
            <BookOpen className="w-8" />
          ),
      },
      {
        title: 'Title',
        dataIndex: 'slug',
        key: 'slug',
        render: (slug: string, raw) => {
          return (
            <div className={clsx('flex', 'items-center')}>
              {raw.isPremium && <PremiumSign />}
              {slugToTitle(slug)}
            </div>
          );
        },
      },
      {
        title: 'Is premium?',
        dataIndex: 'isPremium',
        key: 'isPremium',
        render: (isPremium: boolean) => (isPremium ? 'Yes' : 'No'),
      },
      {
        title: 'Grouped name',
        dataIndex: 'groupName',
        key: 'groupName',
        render: (groupName: string) => slugToTitle(groupName),
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
        title: 'Published?',
        dataIndex: 'visibility',
        key: 'visibility',
        render: (visibility: boolean, row) => (
          <Visibility published={visibility} />
        ),
      },
      {
        title: 'Delete',
        dataIndex: 'delete',
        key: 'delete',
        render: (_, row) => (
          <DeletePostButton skip={skip} top={top} id={row.id} />
        ),
      },
      {
        title: 'Post content action',
        dataIndex: 'editPostContent',
        key: 'editPostContent',
        render: (_, row) => (
          <EditPostContentButton
            postId={row.id}
            postContents={row.postContents}
            skip={skip}
            top={top}
          />
        ),
      },
    ] as Column<Post>[];
  }, [skip, top, redirectToPostContentUi]);

  const handleOnPaginationChange = useCallback(
    (selectedPage: number) => {
      // selectedPage Started from 0
      paginatedPostList(selectedPage * top);
    },
    [top, paginatedPostList]
  );

  useEffect(() => {
    if (router.isReady) {
      const $skip = +(searchParams.$skip || '0');
      paginatedPostList($skip);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  return (
    <DashboardLayout onSearch={(event) => onSearch(event.target.value)}>
      <div className="flex justify-end px-4">
        <AddPostButton skip={skip} top={top} />
      </div>
      <Table
        rowKey="id"
        dataSource={(data?.querier?.listPosts || []) as Post[]}
        columns={tableColumn}
        pagination={{
          currentPage: Math.floor(+(searchParams.$skip || skip) / top) + 1,
          totalItems: data?.querier?.totalPosts || 0,
          topPerPage: +(searchParams.$top || top),
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
