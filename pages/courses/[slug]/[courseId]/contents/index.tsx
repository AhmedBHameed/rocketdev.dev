import {ApolloQueryResult} from '@apollo/client';
import {get, uniqBy} from 'lodash';
import {GetServerSideProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Col from '../../../../../components/Col/Col';
import SelectMenu from '../../../../../components/Forms/SelectMenu';
import BoldLabel from '../../../../../components/Label/BoldLabel';
import Layout from '../../../../../components/Layout';
import Row from '../../../../../components/Row/Row';
import {ServiceCard} from '../../../../../components/ServiceCard/ServiceCard';
import {
  GetCourseContentsDocument,
  GetCourseContentsQuery,
  GetCourseContentsQueryVariables,
  LanguageEnum,
  Post,
} from '../../../../../graphql/generated/graphql';
import apolloClient from '../../../../../utils/apolloClient';
import clsx from '../../../../../utils/clsx';
import slugToTitle from '../../../../../utils/slugToTitle';

interface CourseContent {
  courseContents: Post[];
  courseSlug: string;
}

const CourseContent = ({courseContents, courseSlug}: CourseContent) => {
  const localStorageKey = `${courseSlug}-selected-chapter`;

  const [selectedChapterId, setSelectedChapterId] = useState('all');

  const courseChapters = useMemo(
    () =>
      [
        {
          label: 'Show all',
          value: 'all',
        },
      ].concat(
        uniqBy(
          courseContents.map((courseContent) => ({
            label: courseContent.groupName.toLowerCase(),
            value: courseContent.groupName,
          })),
          (option) => option.label
        )
      ),
    []
  );

  const handleSelectedChapter = useCallback(
    (selectedChapter: string) => {
      localStorage.setItem(localStorageKey, selectedChapter);
      setSelectedChapterId(selectedChapter);
    },
    [localStorageKey]
  );

  useEffect(() => {
    if (localStorageKey) {
      const selectedChapter = localStorage.getItem(localStorageKey) || 'all';
      setSelectedChapterId(selectedChapter);
    }
  }, [localStorageKey]);

  return (
    <Layout>
      <Row gutter={[8, 8]} md={2}>
        <Col>
          <BoldLabel>{slugToTitle(courseSlug)} course</BoldLabel>
        </Col>

        <Col className="col-end-6">
          <div className={clsx('flex', 'items-center', 'gap-2')}>
            <BoldLabel>Chapter</BoldLabel>
            <SelectMenu
              id="chapter"
              options={courseChapters}
              name="chapter"
              onChange={handleSelectedChapter}
              placeholder="Select chapter"
              testId="course-content-select"
              value={selectedChapterId}
            />
          </div>
        </Col>
      </Row>

      {courseContents
        .filter(
          (courseContent) =>
            selectedChapterId === 'all' ||
            courseContent.groupName === selectedChapterId
        )
        .map((post, index) => (
          <ServiceCard key={post.nanoId} post={post} index={index} />
        ))}
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
      query: GetCourseContentsDocument,
      fetchPolicy: 'no-cache',
      context: {
        headers: {
          cookie,
        },
      },
      variables: {
        courseId: (params.courseId || '') as string,
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
