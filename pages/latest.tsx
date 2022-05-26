import React from 'react';
import BoldLabel from '../components/Label/BoldLabel';
import Col from '../components/Col/Col';
import Layout from '../components/Layout';
import Row from '../components/Row/Row';
import PostCard from '../components/Latest/PostCard';
import {GetServerSideProps, NextPage} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import {ROUTES} from '../config/routes';
import apolloClient from '../utils/apolloClient';
import {
  LanguageEnum,
  ListPostsQuery,
  ListPostsQueryVariables,
} from '../graphql/generated/graphql';
import slugToTitle from '../utils/slugToTitle';
import {ApolloQueryResult} from '@apollo/client';
import LATEST_POSTS_QUERY from '../graphql/LATEST_POSTS_QUERY.gql';
import AlertError from '../components/AlertError/AlertError';

interface LatestProps {
  locale: string;
  listPostsQuery: ApolloQueryResult<ListPostsQuery>;
  error: {
    status: number;
    message: string;
  } | null;
}

const Latest: NextPage<LatestProps> = ({listPostsQuery, error, locale}) => {
  const {t} = useTranslation('latest');
  // const {notify} = useNotifications();
  // const triggerToastMessage = () => {
  //   notify(
  //     {
  //       type: 'success',
  //       title: 'Hey',
  //       message: 'Welcome to our hi.health services',
  //     },
  //     {
  //       autoClose: 15000,
  //     }
  //   );
  // };

  if (error)
    return (
      <Layout>
        <AlertError message={error.message} httpStatusCode={error.status} />
      </Layout>
    );

  const postPath = ROUTES.post.path;

  return (
    <Layout>
      <Row gutter={[8, 8]} md={2}>
        <Col>
          <BoldLabel>{t<string>('latestContent')}</BoldLabel>
        </Col>

        <Col className="col-end-6">
          <BoldLabel>
            {listPostsQuery.data?.listPosts.totalCount} posts
          </BoldLabel>
        </Col>
      </Row>

      <Row xs={1} md={2} gap={4}>
        {(listPostsQuery.data?.listPosts.data || []).map((post) => (
          <Col key={post.nanoId}>
            <PostCard
              href={`${postPath}/${post.slug}/${post.nanoId}`}
              title={slugToTitle(post.slug)}
              subTitle={post.postContents?.[0].metaTags.description}
              contentPreview={post.postContents?.[0].contentPreview}
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
    'latest',
  ]);
  let listPostsQuery = {};
  let httpError = null;

  try {
    listPostsQuery = await apolloClient.query<
      ListPostsQuery,
      ListPostsQueryVariables
    >({
      query: LATEST_POSTS_QUERY,
      variables: {
        lang: locale as LanguageEnum,
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
      listPostsQuery,
      error: httpError,
      ...translations,
    },
  };
};

export default Latest;
