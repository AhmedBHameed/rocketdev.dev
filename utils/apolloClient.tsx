import {
  ApolloClient,
  from,
  fromPromise,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import {get} from 'lodash';
import {DOMAIN} from '../config/environments';
import {httpClient} from './httpClient';

const uri = `${DOMAIN}/graphql`;

const httpLink = new HttpLink({uri, credentials: 'include'});

const errorLink = onError(({graphQLErrors, operation, forward}) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      switch (err.extensions.code) {
        case 'UNAUTHENTICATED':
          const headers = operation.getContext().headers || {};

          return fromPromise(
            httpClient
              .post(
                uri,
                {
                  query: `
                  {
                    refreshTokens{
                      accessToken
                      refreshToken
                      accessTokenExpire
                      refreshTokenExpire
                    }
                  }
                `,
                },
                {
                  withCredentials: true,
                  headers,
                }
              )
              .catch((error) => {
                return error;
              })
          ).flatMap((res) => {
            const head = new Headers();
            const setCookie = get(res, 'headers.set-cookie');
            if (setCookie) head.append('set-cookie', setCookie);

            const oldHeaders = operation.getContext().headers;
            operation.setContext({
              headers: {
                ...oldHeaders,
                ...(setCookie ? {'set-cookie': setCookie} : {}),
                cookie: head.get('set-cookie'),
              },
            });

            return forward(operation);
          });
      }
    }
  }
});

const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default apolloClient;
