import {get} from 'lodash';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useRouter} from 'next/router';
import React, {useCallback, useEffect, useMemo} from 'react';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import EditFeedbackButton from '../../components/Dashboard/Feedback/EditFeedbackButton';
import usePagination from '../../components/Table/hooks/paginationHook';
import Table, {Column} from '../../components/Table/Table';
import {
  Feedback,
  useListQuerierFeedbackLazyQuery,
} from '../../graphql/generated/graphql';
import getUserName from '../../utils/getUserName';

const Feedback = () => {
  const router = useRouter();
  const searchParams = router.query as {$skip?: string; $top?: string};

  const [fetchFeedback, {data}] = useListQuerierFeedbackLazyQuery();
  const {skip, top} = usePagination();

  const paginatedFeedbackList = useCallback(
    async (skip = 0) => {
      const params = new URLSearchParams();
      params.set('$orderby', 'resolved');
      params.set('$skip', `${skip}`);
      params.set('$top', `${top}`);

      await fetchFeedback({
        variables: {
          query: params.toString(),
        },
      });
    },
    [top, fetchFeedback]
  );

  const handleOnPaginationChange = useCallback(
    (selectedPage: number) => {
      paginatedFeedbackList(selectedPage * top);
    },
    [top, paginatedFeedbackList]
  );

  const tableColumn = useMemo(() => {
    return [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Resolved',
        dataIndex: 'resolved',
        key: 'resolved',
        render: (resolved: boolean) => {
          return resolved ? 'Yes' : 'No';
        },
      },
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
        render: (_, row: Feedback) => getUserName(row.author.name),
      },
      {
        title: 'Post content action',
        dataIndex: 'editPostContent',
        key: 'editPostContent',
        render: (_, row) => <EditFeedbackButton feedback={row} />,
      },
    ] as Column<Feedback>[];
  }, []);

  useEffect(() => {
    paginatedFeedbackList(skip);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardLayout>
      <Table
        rowKey="id"
        dataSource={(get(data, 'querier.listFeedback', []) || []) as Feedback[]}
        columns={tableColumn}
        pagination={{
          currentPage: Math.floor(+(searchParams.$skip || skip) / top) + 1,
          totalItems: data?.querier?.totalFeedback || 0,
          topPerPage: +(searchParams.$top || top),
          onChange: handleOnPaginationChange,
        }}
      />
    </DashboardLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const translations = await serverSideTranslations(locale, [
    'common',
    'users',
  ]);

  return {
    props: {
      ...translations,
    },
  };
};

export default Feedback;
