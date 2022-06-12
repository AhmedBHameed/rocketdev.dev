import {gql} from '@apollo/client';
import POST_FRAGMENT from './fragments/POST_FRAGMENT.gql';

const GET_POST_QUERY = gql`
  ${POST_FRAGMENT}
  query GetPost($nanoId: ID!, $slug: String!, $lang: LanguageEnum) {
    getPost(nanoId: $nanoId, slug: $slug) {
      ...postFragment
    }
  }
`;

export default GET_POST_QUERY;
