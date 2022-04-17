import {gql} from '@apollo/client';

const CREATE_TOKENS_QUERY = gql`
  query CreateTokens(
    $email: EmailAddress!
    $password: Password!
    $rememberMe: Boolean
  ) {
    createTokens(
      input: {email: $email, password: $password, rememberMe: $rememberMe}
    ) {
      accessToken
      refreshToken
      accessTokenExpire
      refreshTokenExpire
    }
  }
`;

export default CREATE_TOKENS_QUERY;
