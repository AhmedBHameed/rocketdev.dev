import React, {useCallback} from 'react';
import {
  LanguageEnum,
  ListCoursesDocument,
  ListCoursesQuery,
  useUpsertCourseMutation,
} from '../../../graphql/generated/graphql';
import LoadingButton from '../../Buttons/LoadingButton';
import {ulid} from 'ulid';
import useVerifyMe from '../../hooks/verifyMeHook';

interface AddCourseButtonProps {
  skip: number;
  top: number;
}

const AddCourseButton = ({skip, top}: AddCourseButtonProps) => {
  const {userProfile} = useVerifyMe();

  const [upsertCourse, {loading}] = useUpsertCourseMutation({
    update: (
      cache,
      {
        data: {
          mutator: {upsertCourse},
        },
      }
    ) => {
      const listCourseQuery = cache.readQuery<ListCoursesQuery>({
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

      if (upsertCourse) {
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
            totalCourses: listCourseQuery.totalCourses + 1,
            listCourses: [...listCourseQuery.listCourses, upsertCourse],
          },
        });
      }
    },
  });

  const handleAddNewCourse = useCallback(async () => {
    await upsertCourse({
      variables: {
        input: {
          id: ulid(),
          authorId: userProfile.verifyMe.id,
          image: '',
          isPremium: true,
          lang: LanguageEnum.En,
          postIds: [],
          publishedAt: null,
          slug: `new_course_${crypto.randomUUID().slice(-6)}`,
          nanoId: crypto.randomUUID().slice(-10),
          tagIds: [],
          visibility: false,
        },
      },
    });
  }, [userProfile, upsertCourse]);

  return (
    <LoadingButton loading={loading} onClick={handleAddNewCourse}>
      Add new course
    </LoadingButton>
  );
};

export default AddCourseButton;
