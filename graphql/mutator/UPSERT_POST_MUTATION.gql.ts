import {gql} from '@apollo/client';
import POST_FRAGMENT from '../fragments/POST_FRAGMENT.gql';

const UPSERT_POST_MUTATION = gql`
  ${POST_FRAGMENT}
  mutation UpsertPost($input: UpsertPostInput!, $lang: LanguageEnum) {
    mutator {
      upsertPost(input: $input) {
        ...postFragment
      }
    }
  }
`;

export default UPSERT_POST_MUTATION;
