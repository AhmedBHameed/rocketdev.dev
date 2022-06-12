import {gql} from '@apollo/client';
import POST_FRAGMENT from './fragments/POST_FRAGMENT.gql';

const LIST_POSTS_QUERY = gql`
  ${POST_FRAGMENT}
  query ListPosts($input: ListPostCollateInput, $lang: LanguageEnum) {
    totalFreeArticles
    listPosts(input: $input) {
      ...postFragment
    }
  }
`;

export default LIST_POSTS_QUERY;
