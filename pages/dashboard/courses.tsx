import React, {useCallback, useEffect, useMemo, useState} from 'react';
import AlertError from '../../components/AlertError/AlertError';
import Link from '../../components/Buttons/Link';
import PostsReorder from '../../components/Dashboard/Courses/PostsReorder';

import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import Modal from '../../components/Modal/Modal';
import Table, {Column} from '../../components/Table/Table';
import {
  Course,
  Post,
  useListCoursesLazyQuery,
} from '../../graphql/generated/graphql';
import slugToTitle from '../../utils/slugToTitle';

const Courses = () => {
  const [openPostOrderModal, setPostOrderModal] = useState(false);
  const [postIds, setPostIds] = useState<string[]>([]);
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

  const handleReorderPosts = useCallback((course: Course) => {
    setPostIds(course.postIds);
    setPostOrderModal(true);
  }, []);

  const tableColumn = useMemo(() => {
    return [
      {
        title: 'Title',
        dataIndex: 'slug',
        key: 'slug',
        render: (slug: string) => slugToTitle(slug),
      },
      {
        title: 'Language',
        dataIndex: 'lang',
        key: 'lang',
      },
      {
        title: 'Posts action',
        dataIndex: 'action',
        key: 'action',
        render: (_, row) => (
          <Link onClick={() => handleReorderPosts(row)}>Reorder</Link>
        ),
      },
    ] as Column<Course>[];
  }, [handleReorderPosts]);

  const handleOnItemOrderChange = useCallback((posts: Post[]) => {
    console.log(posts.map((post) => post.id));
  }, []);

  useEffect(() => {
    paginateCourseList(1, 1);
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
        scroll={{
          y: 250,
        }}
      />

      <Modal
        title="Posts related"
        open={openPostOrderModal}
        onClose={() => setPostOrderModal(false)}
      >
        <PostsReorder
          onItemOrderChange={handleOnItemOrderChange}
          ids={postIds}
        />
      </Modal>
    </DashboardLayout>
  );
};

export default Courses;
