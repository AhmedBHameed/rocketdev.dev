import {TrashIcon} from '@heroicons/react/solid';
import React, {useCallback, useState} from 'react';
import {
  ListCoursesQuery,
  useDeleteCourseMutation,
} from '../../../graphql/generated/graphql';
import LIST_COURSES_QUERY from '../../../graphql/LIST_COURSES_QUERY.gql';
import Alert from '../../Alert/Alert';
import BaseButton from '../../Buttons/BaseButton';

interface DeleteCourseButtonProps {
  courseId: string;
  page: number;
  perPage: number;
}

const DeleteCourseButton = ({
  courseId,
  page,
  perPage,
}: DeleteCourseButtonProps) => {
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [deleteCourse] = useDeleteCourseMutation();

  const handleDeleteCourse = useCallback(
    async (id: string) => {
      await deleteCourse({
        variables: {
          id,
        },
        update: (
          cache,
          {
            data: {
              mutator: {deleteCourse},
            },
          }
        ) => {
          const courses = cache.readQuery<ListCoursesQuery>({
            query: LIST_COURSES_QUERY,
            variables: {
              input: {
                page: {
                  number: page,
                  size: perPage,
                },
              },
            },
          });

          if (deleteCourse) {
            cache.writeQuery({
              query: LIST_COURSES_QUERY,
              variables: {
                input: {
                  page: {
                    number: page,
                    size: perPage,
                  },
                },
              },
              data: {
                ...courses.listCourses,
                totalCourses: courses.totalCourses,
                listCourses: courses.listCourses.filter(
                  (post) => post.id !== deleteCourse.id
                ),
              },
            });
          }
        },
      });
      setOpenConfirmation(false);
    },
    [page, perPage, deleteCourse]
  );

  return (
    <>
      <BaseButton onClick={() => setOpenConfirmation(true)}>
        <TrashIcon className="h-8 w-8 text-red-500" />
      </BaseButton>

      <Alert
        title="Deleting post"
        message="Are you sure you want to delete this course?"
        open={openConfirmation}
        onClose={() => setOpenConfirmation(false)}
        onConfirm={() => handleDeleteCourse(courseId)}
      />
    </>
  );
};

export default DeleteCourseButton;
