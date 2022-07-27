import React from 'react';
import BoldLabel from '../components/Label/BoldLabel';
import Col from '../components/Col/Col';
import Layout from '../components/Layout';
import Row from '../components/Row/Row';
import PostCard from '../components/Latest/PostCard';
import {GetServerSideProps, NextPage} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import ROUTES from '../config/routes';
import apolloClient from '../utils/apolloClient';
import {
  LanguageEnum,
  ListPostsQuery,
  ListPostsQueryVariables,
  Post,
  PostTypeEnum,
} from '../graphql/generated/graphql';
import slugToTitle from '../utils/slugToTitle';
import {ApolloQueryResult} from '@apollo/client';
import LIST_POSTS_QUERY from '../graphql/LIST_POSTS_QUERY.gql';
import AlertError from '../components/AlertError/AlertError';

interface LatestProps {
  locale: string;
  posts: Post[];
  totalFreeArticles: number;
  error: {
    status: number;
    message: string;
  } | null;
}

const Latest: NextPage<LatestProps> = ({posts, totalFreeArticles, error}) => {
  console.log('🚀 ~ file: latest.tsx ~ line 35 ~ posts', posts);
  const {t} = useTranslation('latest');

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
          <BoldLabel>{totalFreeArticles} posts</BoldLabel>
        </Col>
      </Row>

      <Row xs={1} md={2} gap={4}>
        {(posts || []).map((post) => (
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
  let listPostsQuery: ApolloQueryResult<ListPostsQuery>;
  let httpError = null;

  try {
    listPostsQuery = await apolloClient.query<
      ListPostsQuery,
      ListPostsQueryVariables
    >({
      query: LIST_POSTS_QUERY,
      fetchPolicy: 'network-only',
      variables: {
        input: {
          filter: {
            isPremium: false,
            type: PostTypeEnum.Article,
            visibility: true,
          },
        },
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
      posts: listPostsQuery.data.listPosts,
      totalFreeArticles: listPostsQuery.data.totalFreeArticles,
      error: httpError,
      ...translations,
    },
  };
};

export default Latest;
