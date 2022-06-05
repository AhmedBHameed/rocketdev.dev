import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Link from '../../components/Buttons/Link';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import Table, {Column} from '../../components/Table/Table';
import {
  Post,
  useListQuerierPostsLazyQuery,
} from '../../graphql/generated/graphql';
import slugToTitle from '../../utils/slugToTitle';

const DashboardPosts = () => {
  const [fetchQuerierPosts, {data, error}] = useListQuerierPostsLazyQuery();

  const [post, setPost] = useState<Post | undefined>();

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

  const tableColumn = useMemo(() => {
    return [
      {
        title: 'Title',
        dataIndex: 'slug',
        key: 'slug',
        render: (slug: string) => slugToTitle(slug),
      },
      {
        title: 'Edit',
        dataIndex: 'edit',
        key: 'edit',
        render: (_, row) => <Link onClick={() => setPost(row)}>Reorder</Link>,
      },
    ] as Column<Post>[];
  }, []);

  useEffect(() => {
    paginatedPostList(1, 1);
  }, []);

  return (
    <DashboardLayout>
      <Table
        rowKey="id"
        dataSource={(data?.querier?.listPosts.data || []) as Post[]}
        columns={tableColumn}
      />
    </DashboardLayout>
  );
};

export default DashboardPosts;
