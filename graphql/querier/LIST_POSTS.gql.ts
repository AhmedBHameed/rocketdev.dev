import {gql} from '@apollo/client';
import POST_FRAGMENT from '../fragments/POST_FRAGMENT.gql';

const LIST_QUERIER_POSTS_QUERY = gql`
  ${POST_FRAGMENT}
  query ListQuerierPosts($query: String!, $lang: LanguageEnum) {
    querier {
      totalPosts
      listPosts(query: $query) {
        ...postFragment
      }
    }
  }
`;

export default LIST_QUERIER_POSTS_QUERY;
