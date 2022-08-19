import {get} from 'lodash';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import EditFeedbackButton from '../../components/Dashboard/Feedback/EditFeedbackButton';
import usePagination from '../../components/Table/hooks/paginationHook';
import Table, {Column} from '../../components/Table/Table';
import {
  Feedback,
  SortingEnum,
  useListQuerierFeedbackLazyQuery,
} from '../../graphql/generated/graphql';
import getUserName from '../../utils/getUserName';

const Feedback = () => {
  const [fetchFeedback, {data}] = useListQuerierFeedbackLazyQuery();
  const {page, perPage} = usePagination();

  const paginatedFeedbackList = useCallback(
    async (number: number, size: number) => {
      await fetchFeedback({
        variables: {
          input: {
            sort: {
              resolved: SortingEnum.Asc,
            },
            page: {
              number,
              size,
            },
          },
        },
      });
    },
    [fetchFeedback]
  );

  const handleOnPaginationChange = useCallback(
    (selectedPage: number) => {
      paginatedFeedbackList(selectedPage, perPage);
    },
    [perPage, paginatedFeedbackList]
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
    paginatedFeedbackList(page, perPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardLayout>
      <Table
        rowKey="id"
        dataSource={(get(data, 'querier.listFeedback', []) || []) as Feedback[]}
        columns={tableColumn}
        pagination={{
          totalItems: get(data, 'querier.totalFeedback', 0),
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
