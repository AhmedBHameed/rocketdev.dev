import {TrashIcon} from '@heroicons/react/24/solid';
import React, {useCallback, useState} from 'react';
import {
  ListCoursesDocument,
  ListCoursesQuery,
  useDeleteCourseMutation,
} from '../../../graphql/generated/graphql';
import Alert from '../../Alert/Alert';
import BaseButton from '../../Buttons/BaseButton';

interface DeleteCourseButtonProps {
  courseId: string;
  skip: number;
  top: number;
}

const DeleteCourseButton = ({courseId, skip, top}: DeleteCourseButtonProps) => {
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
            query: ListCoursesDocument,
            variables: {
              input: {
                page: {
                  number: skip,
                  size: top,
                },
              },
            },
          });

          if (deleteCourse) {
            cache.writeQuery({
              query: ListCoursesDocument,
              variables: {
                input: {
                  page: {
                    number: skip,
                    size: top,
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
    [skip, top, deleteCourse]
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
