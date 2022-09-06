import {gql} from '@apollo/client';
import POST_FRAGMENT from './fragments/POST_FRAGMENT.gql';

const GET_PUBLIC_POST_QUERY = gql`
  ${POST_FRAGMENT}
  query GetPublicPost($nanoId: ID!, $slug: String!, $lang: LanguageEnum) {
    getPublicPost(nanoId: $nanoId, slug: $slug) {
      ...postFragment
    }
  }
`;

export default GET_PUBLIC_POST_QUERY;
