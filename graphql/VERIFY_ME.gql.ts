import {gql} from '@apollo/client';

const VERIFY_ME_QUERY = gql`
  query VerifyMe {
    verifyMe {
      id
      avatar
      isSuper
      name {
        first
        last
      }
      authorization {
        id
        actions {
          name
          permissions
        }
      }
    }
  }
`;

export default VERIFY_ME_QUERY;
