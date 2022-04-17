import {gql} from '@apollo/client';

const GITHUB_LOGIN_MUTATION = gql`
  mutation GithubLogin($code: ID!) {
    githubLogin(code: $code) {
      accessToken
      refreshToken
      accessTokenExpire
      refreshTokenExpire
    }
  }
`;

export default GITHUB_LOGIN_MUTATION;
