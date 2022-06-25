import {gql} from '@apollo/client';
import COURSE_POST_FRAGMENT from '../fragments/COURSE_POST_FRAGMENT.gql';

const LIST_QUERIER_COURSE_POSTS_QUERY = gql`
  ${COURSE_POST_FRAGMENT}
  query ListQuerierCoursePosts($courseId: ID!, $lang: LanguageEnum) {
    querier {
      listCoursePosts(courseId: $courseId) {
        ...querierPostFragment
      }
    }
  }
`;

export default LIST_QUERIER_COURSE_POSTS_QUERY;
