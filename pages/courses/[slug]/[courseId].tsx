import {ApolloQueryResult} from '@apollo/client';
import {GraphQLErrors} from '@apollo/client/errors';

import {GetServerSideProps, NextPage} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import React, {useState} from 'react';
import AlertError from '../../../components/AlertError/AlertError';
import Layout from '../../../components/Layout';
import PostContent from '../../../components/PostContent/PostContent';
import {
  ListQuerierCoursePostsQuery,
  ListQuerierCoursePostsQueryVariables,
  Post,
} from '../../../graphql/generated/graphql';
import LIST_QUERIER_COURSE_POSTS_QUERY from '../../../graphql/querier/LIST_COURSE_POSTS.gql';
import apolloClient from '../../../utils/apolloClient';

// TODO: Make error interface extendable.
interface CoursePost {
  coursePostsQuery: ApolloQueryResult<ListQuerierCoursePostsQuery>;
  error: {
    status: number;
    message: string;
  };
}

const CoursePost: NextPage<CoursePost> = ({coursePostsQuery, error}) => {
  const [postIndex, setPostIndex] = useState(0);
  if (error)
    return (
      <Layout>
        <AlertError message={error.message} httpStatusCode={error.status} />
      </Layout>
    );

  // if (!coursePostsQuery.data?.querier.listCoursePosts)
  //   return (
  //     <Layout>
  //       <AlertError
  //         message={'Please check the URL in the address bar and try again.'}
  //         httpStatusCode={404}
  //       />
  //     </Layout>
  //   );

  return (
    <Layout>
      <PostContent
        post={coursePostsQuery.data.querier.listCoursePosts[postIndex] as Post}
      />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
  req,
}) => {
  const cookie = req.headers.cookie;
  const translations = await serverSideTranslations(locale, [
    'common',
    'navbar',
    'latest',
    'courses',
  ]);

  let coursePostsQuery = {};
  let httpError = null;

  try {
    coursePostsQuery = await apolloClient.query<
      ListQuerierCoursePostsQuery,
      ListQuerierCoursePostsQueryVariables
    >({
      query: LIST_QUERIER_COURSE_POSTS_QUERY,
      fetchPolicy: 'network-only',
      context: {
        headers: {
          cookie,
        },
      },
      variables: {
        courseId: params.courseId as string,
      },
    });
  } catch (e) {
    httpError = {};
    const errors: {graphQLErrors: GraphQLErrors} = e;
    const errorMessage = errors.graphQLErrors?.[0].message || '';
    const errorCode = errors.graphQLErrors?.[0].extensions.code || '';

    if (errorMessage.includes('ECONNREFUSED')) {
      httpError.message =
        "Oh no! We couldn't connect to the server. Please refresh the page.";
      httpError.status = 500;
    }

    if (errorCode === 'FORBIDDEN') {
      httpError.message = errorMessage;
      httpError.status = 402;
    }
  }

  return {
    props: {
      coursePostsQuery,
      error: httpError,
      ...translations,
    },
  };
};

export default CoursePost;
