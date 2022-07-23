import {get} from 'lodash';
import {GetServerSideProps, GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useRouter} from 'next/router';
import React from 'react';
import DashboardLayout from '../../../components/Dashboard/DashboardLayout';
import DashboardPostForm from '../../../components/Dashboard/Posts/DashboardPostForm';
import Loader from '../../../components/Loader/Loader';
import {
  LanguageEnum,
  Post,
  useGetPostByIdQuery,
} from '../../../graphql/generated/graphql';
import clsx from '../../../utils/clsx';

interface PostContentProps {
  lang: LanguageEnum;
}

const PostContent = ({lang}: PostContentProps) => {
  const router = useRouter();
  const {postId} = router.query;

  const {data: post, loading} = useGetPostByIdQuery({
    variables: {
      id: postId as string,
      lang,
    },
  });

  if (loading)
    return (
      <DashboardLayout>
        <div className={clsx('flex', 'justify-center')}>
          <Loader />
        </div>
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      <DashboardPostForm
        post={get(post, 'querier.getPostById') as Post | undefined}
        loading={false}
      />
    </DashboardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({locale}) => {
  const translations = await serverSideTranslations(locale, [
    'common',
    'posts',
  ]);

  return {
    props: {
      ...translations,
      lang: locale,
    },
  };
};

export default PostContent;
