import {ApolloQueryResult} from '@apollo/client';
import {RadioGroup} from '@headlessui/react';
import {get} from 'lodash';
import {GetServerSideProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useRouter} from 'next/router';
import React, {useCallback, useState} from 'react';
import Col from '../../../../../components/Col/Col';
import BoldLabel from '../../../../../components/Label/BoldLabel';
import Layout from '../../../../../components/Layout';
import Row from '../../../../../components/Row/Row';
import ROUTES from '../../../../../config/routes';

import {
  GetCourseContentsQuery,
  GetCourseContentsQueryVariables,
  LanguageEnum,
  Post,
} from '../../../../../graphql/generated/graphql';
import GET_COURSE_CONTENTS_QUERY from '../../../../../graphql/GET_COURSE_CONTENTS_QUERY.gql';
import theme from '../../../../../styles/theme';
import apolloClient from '../../../../../utils/apolloClient';
import clsx from '../../../../../utils/clsx';
import getPathWithoutLastSlash from '../../../../../utils/getPathWithoutLastSlash';
import slugToTitle from '../../../../../utils/slugToTitle';
import titleToSlug from '../../../../../utils/titleToSlug';

interface CourseContent {
  courseContents: Post[];
  courseSlug: string;
}

// remove the last back slash from the path

const CourseContent = ({courseContents, courseSlug}: CourseContent) => {
  const router = useRouter();
  const [selectedPostUri, setSelectedPostUri] = useState('');

  const onSelectedPost = useCallback((postUri: string) => {
    setSelectedPostUri(postUri);
    window.open(
      `${getPathWithoutLastSlash(router.asPath)}${ROUTES.post.path}/${postUri}`,
      '_blank'
    );
  }, []);

  return (
    <Layout>
      <Row gutter={[8, 8]} md={2}>
        <Col>
          <BoldLabel>{slugToTitle(courseSlug)} course</BoldLabel>
        </Col>

        <Col className="col-end-6">
          <BoldLabel>Syllabus</BoldLabel>
        </Col>
      </Row>

      <RadioGroup value={selectedPostUri} onChange={onSelectedPost}>
        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
        <div className="space-y-1">
          {courseContents.map((post, index) => (
            <RadioGroup.Option
              key={post.nanoId}
              value={`${titleToSlug(post.slug)}/${post.nanoId}`}
              className={({checked, active}) =>
                clsx(
                  checked ? 'border-transparent' : 'border-gray-300',
                  active ? 'border-indigo-500 ring-2 ring-indigo-500' : '',
                  theme.bgSecondary,
                  'relative',
                  'block',
                  'border',
                  'rounded-lg',
                  'shadow-sm',
                  'px-6',
                  'py-4',
                  'cursor-pointer',
                  'sm:flex',
                  'sm:justify-between',
                  'focus:outline-none'
                )
              }
            >
              {({active, checked}) => (
                <>
                  <span className="flex items-center">
                    <span className="text-sm flex flex-col">
                      <RadioGroup.Label
                        as="span"
                        className={clsx('font-medium', theme.text)}
                      >
                        CH-{index}&nbsp;&nbsp;&nbsp;{slugToTitle(post.slug)}
                      </RadioGroup.Label>
                      <RadioGroup.Description
                        as="span"
                        className={clsx(theme.text)}
                      >
                        <span className="block sm:inline">
                          {post.postContents[0].contentPreview}
                        </span>
                        <span
                          className="hidden sm:inline sm:mx-1"
                          aria-hidden="true"
                        >
                          &middot;
                        </span>
                      </RadioGroup.Description>
                    </span>
                  </span>
                  <RadioGroup.Description
                    as="span"
                    className="mt-2 flex text-sm sm:mt-0 sm:flex-col sm:ml-4 sm:text-right"
                  >
                    <span className={clsx('font-medium', theme.text)}>
                      {post.postContents[0].readingTime}
                    </span>
                  </RadioGroup.Description>
                  <span
                    className={clsx(
                      active ? 'border' : 'border-2',
                      checked ? 'border-indigo-500' : 'border-transparent',
                      'absolute -inset-px rounded-lg pointer-events-none'
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  locale,
  params,
}) => {
  const translations = await serverSideTranslations(locale, [
    'common',
    'navbar',
    'courses',
  ]);
  let getCourseContentsQuery: ApolloQueryResult<GetCourseContentsQuery>;
  let httpError = null;

  const cookie = get(req, 'headers.cookie');
  try {
    getCourseContentsQuery = await apolloClient.query<
      GetCourseContentsQuery,
      GetCourseContentsQueryVariables
    >({
      query: GET_COURSE_CONTENTS_QUERY,
      fetchPolicy: 'network-only',
      context: {
        headers: {
          cookie,
        },
      },
      variables: {
        input: {
          courseId: (params.courseId || '') as string,
          slug: (params.slug || '') as string,
        },
        lang: LanguageEnum.En,
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
      courseSlug: params.slug,
      courseContents: get(getCourseContentsQuery, 'data.getCourseContents', []),
      error: httpError,
      ...translations,
    },
  };
};

export default CourseContent;
