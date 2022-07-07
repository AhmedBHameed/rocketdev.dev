import {gql} from '@apollo/client';

const GET_COURSE_CONTENTS_QUERY = gql`
  query GetCourseContents($input: CourseContentsInput!, $lang: LanguageEnum) {
    getCourseContents(input: $input) {
      id
      slug
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
