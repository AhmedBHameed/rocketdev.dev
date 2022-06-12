import {gql} from '@apollo/client';
import POST_FRAGMENT from '../fragments/POST_FRAGMENT.gql';

const LIST_QUERIER_COURSE_POSTS_QUERY = gql`
  ${POST_FRAGMENT}
  query ListQuerierCoursePosts($ids: [String!]!, $lang: LanguageEnum) {
    querier {
      listCoursePosts(ids: $ids) {
        ...postFragment
      }
    }
  }
`;

export default LIST_QUERIER_COURSE_POSTS_QUERY;
