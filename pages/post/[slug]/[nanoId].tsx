import {ApolloQueryResult} from '@apollo/client';
import {GetServerSideProps, NextPage} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import React from 'react';
import AlertError from '../../../components/AlertError/AlertError';
import Layout from '../../../components/Layout';
import PostContent from '../../../components/PostContent/PostContent';
import {
  GetPostQuery,
  GetPostQueryVariables,
  LanguageEnum,
} from '../../../graphql/generated/graphql';
import GET_POST_QUERY from '../../../graphql/GET_POST_QUERY.gql';
import apolloClient from '../../../utils/apolloClient';

// TODO: Make error interface extendable.
interface PostProps {
  postQuery: ApolloQueryResult<GetPostQuery>;
  error: {
    status: number;
    message: string;
  };
}

const Post: NextPage<PostProps> = ({postQuery, error}) => {
  if (error)
    return (
      <Layout>
        <AlertError message={error.message} httpStatusCode={error.status} />
      </Layout>
    );

  if (!postQuery.data?.getPost)
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
      <PostContent getPostQuery={postQuery.data} />
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

  let postQuery = {};
  let httpError = null;

  try {
    postQuery = await apolloClient.query<GetPostQuery, GetPostQueryVariables>({
      query: GET_POST_QUERY,
      variables: {
        input: {
          nanoId: params.nanoId as string,
          slug: params.slug as string,
        },
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
      postQuery,
      error: httpError,
      ...translations,
    },
  };
};

export default Post;
