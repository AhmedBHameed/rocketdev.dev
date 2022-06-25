import React from 'react';
import {GetServerSideProps, NextPage} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import {ApolloQueryResult} from '@apollo/client';
import {
  ListCoursesQuery,
  ListCoursesQueryVariables,
  ListPostsQuery,
} from '../../graphql/generated/graphql';
import Layout from '../../components/Layout';
import AlertError from '../../components/AlertError/AlertError';
import ROUTES from '../../config/routes';
import Row from '../../components/Row/Row';
import Col from '../../components/Col/Col';
import BoldLabel from '../../components/Label/BoldLabel';
import slugToTitle from '../../utils/slugToTitle';
import CourseCard from '../../components/Courses/CourseCard';
import LIST_COURSES_QUERY from '../../graphql/LIST_COURSES_QUERY.gql';
import apolloClient from '../../utils/apolloClient';

interface CoursesProps {
  locale: string;
  listCoursesQuery: ApolloQueryResult<ListCoursesQuery>;
  error: {
    status: number;
    message: string;
  } | null;
}

const Courses: NextPage<CoursesProps> = ({listCoursesQuery, error, locale}) => {
  const {t} = useTranslation('courses');

  if (error)
    return (
      <Layout>
        <AlertError message={error.message} httpStatusCode={error.status} />
      </Layout>
    );

  const coursesPath = ROUTES.courses.path;
  const coursesText = t('headTitle', {defaultValue: 'Courses'});

  return (
    <Layout>
      <Row gutter={[8, 8]} md={2}>
        <Col>
          <BoldLabel>{coursesText}</BoldLabel>
        </Col>

        <Col className="col-end-6">
          <BoldLabel>
            {listCoursesQuery.data?.totalCourses} {coursesText}
          </BoldLabel>
        </Col>
      </Row>

      <Row xs={1} md={2} gap={4}>
        {(listCoursesQuery.data?.listCourses || []).map((course, index) => (
          <Col key={course.nanoId}>
            <CourseCard
              href={`${coursesPath}/${course.slug}/${course.id}`}
              title={slugToTitle(course.slug)}
              subTitle={'course.[0].metaTags.description'}
              contentPreview={'course.postContents?.[0].contentPreview'}
            />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({locale}) => {
  const translations = await serverSideTranslations(locale, [
    'common',
    'navbar',
    'courses',
  ]);
  let listCoursesQuery = {};
  let httpError = null;

  try {
    listCoursesQuery = await apolloClient.query<
      ListCoursesQuery,
      ListCoursesQueryVariables
    >({
      query: LIST_COURSES_QUERY,
      fetchPolicy: 'network-only',
      variables: {
        input: {
          page: {
            number: 1,
            size: 10,
          },
        },
        // lang: locale as LanguageEnum,
      },
    });
  } catch (error) {
    httpError = {};
    const errorMessage = error?.message || '';
    if (errorMessage.includes('ECONNREFUSED')) {
      httpError.message =
        "Oh no! We couldn't connect to the server. Please refresh the page.";
      httpError.status = 500;
    }
  }

  return {
    props: {
      locale,
      listCoursesQuery,
      error: httpError,
      ...translations,
    },
  };
};

export default Courses;
