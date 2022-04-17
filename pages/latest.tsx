import React from 'react';
import BoldLabel from '../components/Label/BoldLabel';
import Col from '../components/Col/Col';
import Layout from '../components/Layout';
import Row from '../components/Row/Row';
import PostCard from '../components/Latest/PostCard';

import {useNotifications} from '../components/ToastMessage/Hooks/NotificationsHook';
import {GetServerSideProps, NextPage} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import {ROUTES} from '../config/routes';
import apolloClient from '../utils/apolloClient';
import LIST_POST_QUERY from '../graphql/LIST_POST_QUERY.gql';
import {ListPostsQuery} from '../graphql/generated/graphql';
import slugToTitle from '../utils/slugToTitle';
import {ApolloQueryResult} from '@apollo/client';

interface LatestProps {
  listPostsQuery: ApolloQueryResult<ListPostsQuery>;
}

const Latest: NextPage<LatestProps> = ({listPostsQuery}) => {
  const {t} = useTranslation('latest');
  const {notify} = useNotifications();
  const triggerToastMessage = () => {
    notify(
      {
        type: 'success',
        title: 'Hey',
        message: 'Welcome to our hi.health services',
      },
      {
        autoClose: 15000,
      }
    );
  };

  const postPath = ROUTES.post.path;

  return (
    <Layout>
      <Row gutter={[8, 8]} md={2}>
        <Col>
          <BoldLabel>{t<string>('latestContent')}</BoldLabel>
        </Col>

        <Col className="col-end-6">
          <BoldLabel>35 posts</BoldLabel>
        </Col>
      </Row>

      <Row xs={1} md={2} gap={4}>
        {(listPostsQuery.data?.listPosts || []).map((post) => (
          <Col key={post.nanoId}>
            <PostCard
              href={`${postPath}/${post.slug}/${post.nanoId}`}
              onClick={triggerToastMessage}
              title={slugToTitle(post.slug)}
              subTitle="The mental model shift that makes CSS more intuitive"
              contentPreview={`
          As front-end developers, we often learn CSS by focusing on individual properties. Instead, we should focus on how the language uses those properties to calculate layouts. In this blog post, we'll pop the hood on CSS and see how the language is structured, and how to learn it effectively.
          `}
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

  const listPostsQuery = await apolloClient.query<ListPostsQuery>({
    query: LIST_POST_QUERY,
  });

  return {
    props: {
      listPostsQuery,
      ...translations,
    },
  };
};

export default Latest;
