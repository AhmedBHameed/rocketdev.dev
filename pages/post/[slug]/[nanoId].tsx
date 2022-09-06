import {ApolloQueryResult} from '@apollo/client';
import {get} from 'lodash';
import {GetServerSideProps, NextPage} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import React from 'react';
import AboutMe from '../../../components/AboutMe/AboutMe';
import AlertError from '../../../components/AlertError/AlertError';
import Layout from '../../../components/Layout';
import PostContent from '../../../components/PostContent/PostContent';
import {
  GetPublicPostQuery,
  GetPublicPostQueryVariables,
  LanguageEnum,
  Post,
} from '../../../graphql/generated/graphql';
import GET_PUBLIC_POST_QUERY from '../../../graphql/GET_POST_QUERY.gql';
import apolloClient from '../../../utils/apolloClient';

// TODO: Make error interface extendable.
interface PostProps {
  post: Post;
  error: {
    status: number;
    message: string;
  };
}

const Post: NextPage<PostProps> = ({post, error}) => {
  if (error)
    return (
      <Layout>
        <AlertError message={error.message} httpStatusCode={error.status} />
      </Layout>
    );

  if (!post)
    return (
      <Layout>
        <AlertError
          message={'Please check the URL in the address bar and try again.'}
          httpStatusCode={404}
        />
      </Layout>
    );

  return (
    <Layout>
      <PostContent post={post} />

      <AboutMe />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  const translations = await serverSideTranslations(locale, [
    'common',
    'navbar',
    'latest',
  ]);

  let postQuery: ApolloQueryResult<GetPublicPostQuery>;
  let httpError = null;

  try {
    postQuery = await apolloClient.query<
      GetPublicPostQuery,
      GetPublicPostQueryVariables
    >({
      query: GET_PUBLIC_POST_QUERY,
      fetchPolicy: 'network-only',
      variables: {
        nanoId: params.nanoId as string,
        slug: params.slug as string,
        lang: locale as LanguageEnum,
      },
    });
  } catch (error) {
    const errorMessage = error?.message || '';
    if (errorMessage.includes('ECONNREFUSED')) {
      httpError.message =
        "Oh no! We couldn't connect to the server. Please refresh the page.";
      httpError.status = 500;
    }
  }

  return {
    props: {
      post: get(postQuery, 'data.getPublicPost'),
      error: httpError,
      ...translations,
    },
  };
};

export default Post;
