import {gql} from '@apollo/client';

const CLEAR_TOKENS_QUERY = gql`
  query ClearTokens {
    clearTokens {
      message
    }
  }
`;

export default CLEAR_TOKENS_QUERY;
