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
  ListPublicPostsQuery,
  ListPublicPostsQueryVariables,
  Post,
  PostTypeEnum,
} from '../graphql/generated/graphql';
import slugToTitle from '../utils/slugToTitle';
import {ApolloQueryResult} from '@apollo/client';
import AlertError from '../components/AlertError/AlertError';
import {get} from 'lodash';
import LIST_PUBLIC_POSTS_QUERY from '../graphql/LIST_PUBLIC_POSTS_QUERY.gql';

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
              readingTime={get(post, 'postContents.0.readingTime', '')}
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
  let listPostsQuery: ApolloQueryResult<ListPublicPostsQuery>;
  let httpError = null;

  try {
    listPostsQuery = await apolloClient.query<
      ListPublicPostsQuery,
      ListPublicPostsQueryVariables
    >({
      query: LIST_PUBLIC_POSTS_QUERY,
      fetchPolicy: 'network-only',
      variables: {
        query: encodeURIComponent(
          `$orderby=slug` // $filter=isPremium eq false and (type eq '${PostTypeEnum.Article}') and (visibility eq true)&$orderby=slug&$skip=0&$top=10
        ),
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
      posts: get(listPostsQuery, 'data.listPublicPosts'),
      totalFreeArticles: listPostsQuery.data.totalFreeArticles,
      error: httpError,
      ...translations,
    },
  };
};

export default Latest;
