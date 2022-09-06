import {gql} from '@apollo/client';
import POST_FRAGMENT from './fragments/POST_FRAGMENT.gql';

const LIST_PUBLIC_POSTS_QUERY = gql`
  ${POST_FRAGMENT}
  query ListPublicPosts($query: String, $lang: LanguageEnum) {
    totalFreeArticles
    listPublicPosts(query: $query) {
      ...postFragment
    }
  }
`;

export default LIST_PUBLIC_POSTS_QUERY;
