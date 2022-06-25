import {ApolloServer} from 'apollo-server-express';
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core';
import environment from '../config/environment';
import executeSchema from './schema.graphql';
import {logger} from '../services';

const {IS_PRODUCTION} = environment;

const initApolloServer = async () =>
  new ApolloServer({
    debug: !IS_PRODUCTION,
    introspection: true,
    formatError: (graphqlError) => {
      logger.error(graphqlError);
      return graphqlError;
    },
    plugins: IS_PRODUCTION
      ? []
      : [
          ApolloServerPluginLandingPageGraphQLPlayground({
            cdnUrl: 'https://cdn.jsdelivr.net/npm',
            faviconUrl: '',
          }),
        ],
    ...(await executeSchema()),
    context: async ({req, res}) => ({req, res}),
  });

export default initApolloServer;
