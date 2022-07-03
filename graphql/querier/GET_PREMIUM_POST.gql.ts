import {gql} from '@apollo/client';
import POST_FRAGMENT from '../fragments/POST_FRAGMENT.gql';

const GET_PREMIUM_POST = gql`
  ${POST_FRAGMENT}
  query GetPremiumPost($input: GetPremiumPostInput!, $lang: LanguageEnum) {
    querier {
      getPremiumPost(input: $input) {
        ...postFragment
      }
    }
  }
`;

export default GET_PREMIUM_POST;
