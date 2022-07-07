import {ApolloQueryResult} from '@apollo/client';
import {GraphQLErrors} from '@apollo/client/errors';
import {get} from 'lodash';

import {GetServerSideProps, NextPage} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import React from 'react';
import AlertError from '../../../../../../../components/AlertError/AlertError';
import Layout from '../../../../../../../components/Layout';
import useNavigateToLogin from '../../../../../../../components/Login/hooks/navigateToLoginHook';
import PostContent from '../../../../../../../components/PostContent/PostContent';
import {
  GetPremiumPostQuery,
  GetPremiumPostQueryVariables,
  LanguageEnum,
  Post,
} from '../../../../../../../graphql/generated/graphql';
import GET_PREMIUM_POST from '../../../../../../../graphql/querier/GET_PREMIUM_POST.gql';
import apolloClient from '../../../../../../../utils/apolloClient';

interface CoursePost {
  post: Post;
  error?: {
    status: number;
    message: string;
  };
}

const CoursePost: NextPage<CoursePost> = ({post, error}) => {
  const {goToLogin} = useNavigateToLogin();

  let alertErrorAction;
  let alertErrorActionLabel = '';
  switch (error?.status) {
    case 401:
      alertErrorAction = goToLogin;
      alertErrorActionLabel = 'Go to login';
      break;
    default:
      alertErrorAction = undefined;
      alertErrorActionLabel = '';
  }

  if (error)
    return (
      <Layout>
        <AlertError
          onActionClicked={alertErrorAction}
          message={error.message}
          httpStatusCode={error.status}
          actionLabel={alertErrorActionLabel}
        />
      </Layout>
    );

  return (
    <Layout>
      <PostContent post={post} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
  req,
}) => {
  const translations = await serverSideTranslations(locale, [
    'common',
    'navbar',
    'latest',
    'courses',
  ]);

  let postQuery: ApolloQueryResult<GetPremiumPostQuery>;
  let httpError = null;

  const cookie = get(req, 'headers.cookie');
  try {
    postQuery = await apolloClient.query<
      GetPremiumPostQuery,
      GetPremiumPostQueryVariables
    >({
      query: GET_PREMIUM_POST,
      fetchPolicy: 'network-only',
      context: {
        headers: {
          cookie,
        },
      },
      variables: {
        input: {
          courseId: params.courseId as string,
          postNanoId: params.postNanoId as string,
          postSlug: params.postSlug as string,
        },
        lang: LanguageEnum.En,
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
    } else if (errorCode === 'FORBIDDEN') {
      httpError.message = errorMessage;
      httpError.status = 402;
    } else if (errorCode === 'UNAUTHENTICATED') {
      httpError.message = 'Unauthenticated Access';
      httpError.status = 401;
    } else {
      httpError.message = errorMessage;
      httpError.status = 500;
    }
  }

  return {
    props: {
      post: get(postQuery, 'data.querier.getPremiumPost', {}),
      error: httpError,
      ...translations,
    },
  };
};

export default CoursePost;
