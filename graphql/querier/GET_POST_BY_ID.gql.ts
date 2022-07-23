import {gql} from '@apollo/client';
import POST_FRAGMENT from '../fragments/POST_FRAGMENT.gql';

const GET_POST_BY_ID = gql`
  ${POST_FRAGMENT}
  query GetPostById($id: ID!, $lang: LanguageEnum) {
    querier {
      getPostById(id: $id) {
        ...postFragment
      }
    }
  }
`;

export default GET_POST_BY_ID;
