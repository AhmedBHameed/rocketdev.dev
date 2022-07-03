import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import React, {useCallback, useEffect, useMemo} from 'react';
import AlertError from '../../components/AlertError/AlertError';

import AddCourseButton from '../../components/Dashboard/Courses/AddCourseButton';
import EditCourseButton from '../../components/Dashboard/Courses/EditCourseButton';
import ReorderPostsButton from '../../components/Dashboard/Courses/ReorderPostsButton';

import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import usePagination from '../../components/Table/hooks/paginationHook';
import Table, {Column} from '../../components/Table/Table';
import {Course, useListCoursesLazyQuery} from '../../graphql/generated/graphql';
import slugToTitle from '../../utils/slugToTitle';

const Courses = () => {
  const [listCoursesQuery, {data, error}] = useListCoursesLazyQuery();
  const {page, perPage} = usePagination();

  const paginateCourseList = useCallback(
    async (pageNumber = 1, pageSize = 10) => {
      await listCoursesQuery({
        variables: {
          input: {
            page: {
              number: pageNumber,
              size: pageSize,
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
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (_, row) => <EditCourseButton course={row} />,
      },
      {
        title: 'Posts action',
        dataIndex: 'postAction',
        key: 'postAction',
        render: (_, row) => <ReorderPostsButton courseId={row.id} />,
      },
    ] as Column<Course>[];
  }, []);

  useEffect(() => {
    paginateCourseList(page, perPage);
  }, [page, perPage]);

  if (error)
    return (
      <DashboardLayout>
        <AlertError httpStatusCode={400} message={error.message} />
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      <div className="flex justify-end px-4">
        <AddCourseButton page={page} perPage={perPage} />
      </div>
      <Table
        rowKey="id"
        dataSource={(data?.listCourses || []) as Course[]}
        columns={tableColumn}
      />
    </DashboardLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const translations = await serverSideTranslations(locale, [
    'common',
    'courses',
  ]);

  return {
    props: {
      ...translations,
    },
  };
};

export default Courses;
