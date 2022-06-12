import {gql} from '@apollo/client';
import POST_FRAGMENT from '../fragments/POST_FRAGMENT.gql';

const LIST_QUERIER_POSTS_QUERY = gql`
  ${POST_FRAGMENT}
  query ListQuerierPosts($input: ListPostCollateInput!, $lang: LanguageEnum) {
    querier {
      totalPosts
      listPosts(input: $input) {
        ...postFragment
      }
    }
  }
`;

export default LIST_QUERIER_POSTS_QUERY;
