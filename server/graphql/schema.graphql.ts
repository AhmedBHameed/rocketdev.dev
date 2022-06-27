import {ApolloGateway, IntrospectAndCompose} from '@apollo/gateway';
import environment from '../config/environment';
import CookiesDataSource from './datasource/Cookies.datasource';

const {AUTH_SERVICE_BASE_URL, CODING_SCHOOL_SERVICE_BASE_URL, IS_PRODUCTION} =
  environment;

const executeSchema = async () => {
  const gateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
      subgraphs: [
        {name: 'auth', url: `${AUTH_SERVICE_BASE_URL}/graphql`},
        {
          name: 'coding_school',
          url: `${CODING_SCHOOL_SERVICE_BASE_URL}/graphql`,
        },
      ],
    }),
    pollIntervalInMs: IS_PRODUCTION ? 5 * 60 * 1000 : 10 * 1000, // IS_PRODUCTION ? 5 minutes  | 10 seconds
    buildService({url}) {
      return new CookiesDataSource(url);
    },
  });

  const gatewayResult = await gateway.load();

  return gatewayResult;
};

export default executeSchema;
