import React, {useCallback} from 'react';
import {
  LanguageEnum,
  ListCoursesQuery,
  useUpsertCourseMutation,
} from '../../../graphql/generated/graphql';
import LoadingButton from '../../Buttons/LoadingButton';
import {ulid} from 'ulid';
import useVerifyMe from '../../hooks/verifyMeHook';
import LIST_COURSES_QUERY from '../../../graphql/LIST_COURSES_QUERY.gql';

interface AddCourseButtonProps {
  page: number;
  perPage: number;
}

const AddCourseButton = ({page, perPage}: AddCourseButtonProps) => {
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

      if (upsertCourse) {
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
          accessedByUserIds: [],
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
  }, [userProfile]);

  return (
    <LoadingButton loading={loading} onClick={handleAddNewCourse}>
      Add new course
    </LoadingButton>
  );
};

export default AddCourseButton;
