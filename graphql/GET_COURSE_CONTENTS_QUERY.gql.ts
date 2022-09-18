import {gql} from '@apollo/client';

const GET_COURSE_CONTENTS_QUERY = gql`
  query GetCourseContents($courseId: ID!, $lang: LanguageEnum) {
    getCourseContents(courseId: $courseId) {
      id
      slug
      groupName
      nanoId
      isPremium
      postContents(lang: $lang) {
        id
        headLines
        postImage
        lang
        contentPreview
        readingTime
      }
    }
  }
`;

export default GET_COURSE_CONTENTS_QUERY;
