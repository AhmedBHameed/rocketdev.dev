import React, {useCallback, useEffect, useMemo, useState} from 'react';
import AlertError from '../../components/AlertError/AlertError';
import Link from '../../components/Buttons/Link';
import EditCourseButton from '../../components/Dashboard/Courses/EditCourseButton';
import PostsReorder from '../../components/Dashboard/Courses/PostsReorder';
import ReorderPostsButton from '../../components/Dashboard/Courses/ReorderPostsButton';

import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import Table, {Column} from '../../components/Table/Table';
import {Course, useListCoursesLazyQuery} from '../../graphql/generated/graphql';
import slugToTitle from '../../utils/slugToTitle';

const Courses = () => {
  const [listCoursesQuery, {data, error}] = useListCoursesLazyQuery();

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
        render: (_, row) => (
          <ReorderPostsButton courseId={row.id} postIds={row.postIds} />
        ),
      },
    ] as Column<Course>[];
  }, []);

  useEffect(() => {
    paginateCourseList(1, 10);
  }, []);

  if (error)
    return (
      <DashboardLayout>
        <AlertError httpStatusCode={400} message={error.message} />
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      <Table
        rowKey="id"
        dataSource={(data?.listCourses || []) as Course[]}
        columns={tableColumn}
      />
    </DashboardLayout>
  );
};

export default Courses;
