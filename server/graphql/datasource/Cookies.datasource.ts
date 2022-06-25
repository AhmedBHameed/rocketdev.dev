import {
  GraphQLDataSourceProcessOptions,
  RemoteGraphQLDataSource,
} from '@apollo/gateway';
import {GraphQLRequestContext} from 'apollo-server-core';
import {Context} from '../models';

class CookiesDataSource extends RemoteGraphQLDataSource {
  url!: string;

  constructor(url?: string) {
    super();
    this.url = url || '';
    this.didReceiveResponse = this.didReceiveResponse.bind(this);
    this.willSendRequest = this.willSendRequest.bind(this);
  }

  didReceiveResponse({
    response,
    context,
  }: Required<
    Pick<GraphQLRequestContext<Context>, 'request' | 'response' | 'context'>
  >) {
    const {res} = context;
    const {createTokens, refreshTokens, clearTokens, githubLogin} =
      response.data || {};

    const tokens = createTokens || refreshTokens || githubLogin;

    if (tokens) {
      const {accessToken, refreshToken, accessTokenExpire, refreshTokenExpire} =
        tokens;

      if (accessTokenExpire > -1) {
        res.cookie('ACCESS_TOKEN', accessToken, {
          maxAge: accessTokenExpire,
          httpOnly: true,
        });
        res.cookie('REFRESH_TOKEN', refreshToken, {
          maxAge: refreshTokenExpire,
          httpOnly: true,
        });
      } else {
        res.cookie('ACCESS_TOKEN', accessToken, {
          httpOnly: true,
        });
        res.cookie('REFRESH_TOKEN', refreshToken, {
          httpOnly: true,
        });
      }
    }

    if (clearTokens) {
      res.clearCookie('ACCESS_TOKEN');
      res.clearCookie('REFRESH_TOKEN');
    }

    return response;
  }

  willSendRequest(requestContext: GraphQLDataSourceProcessOptions<Context>) {
    const cookies =
      (requestContext.context as Context).req?.headers.cookie || '';
    requestContext.request.http?.headers.set('Cookie', cookies);
  }
}

export default CookiesDataSource;
