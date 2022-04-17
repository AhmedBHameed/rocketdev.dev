import {gql} from '@apollo/client';

const REFRESH_TOKENS_QUERY = gql`
  query RefreshTokens {
    refreshTokens {
      accessToken
      refreshToken
      accessTokenExpire
      refreshTokenExpire
    }
  }
`;

export default REFRESH_TOKENS_QUERY;
