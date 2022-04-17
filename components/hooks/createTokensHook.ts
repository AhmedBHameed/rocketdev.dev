import {useCallback, useState} from 'react';
import CREATE_TOKENS_QUERY from '../../graphql/CREATE_TOKENS.gql';
import {AuthInput, VerifyMeQuery} from '../../graphql/generated/graphql';
import apolloClient from '../../utils/apolloClient';

const useCreateTokens = () => {
  const [tokens, setTokens] = useState<VerifyMeQuery | undefined>();
  const [error, setError] = useState<Error | undefined>();
  const [loading, setLoading] = useState(false);

  const createTokens = useCallback(async (loginData: AuthInput) => {
    setLoading(true);
    try {
      const result = await apolloClient.query<VerifyMeQuery>({
        query: CREATE_TOKENS_QUERY,
        variables: {
          email: loginData.email,
          password: loginData.password,
          rememberMe: loginData.rememberMe,
        },
      });
      setTokens(result.data);
      setLoading(false);
    } catch (error) {
      console.error('<CreateTokensHook />', error);
      setError(error);
      setLoading(false);
    }
  }, []);

  return {tokens, loading, error, createTokens};
};

export default useCreateTokens;
