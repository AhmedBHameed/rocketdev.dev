import {useCallback, useState} from 'react';
import {GithubLoginQuery} from '../../graphql/generated/graphql';
import GITHUB_LOGIN_QUERY from '../../graphql/GITHUB_LOGIN_QUERY.gql';
import apolloClient from '../../utils/apolloClient';

const useGithubLoginHook = () => {
  const [tokens, setTokens] = useState<GithubLoginQuery | undefined>();
  const [error, setError] = useState<Error | undefined>();
  const [loading, setLoading] = useState(false);

  const githubLogin = useCallback(async (code: string) => {
    setLoading(true);
    try {
      const result = await apolloClient.query<GithubLoginQuery>({
        query: GITHUB_LOGIN_QUERY,
        variables: {
          code,
        },
      });
      setTokens(result.data);
      setLoading(false);
    } catch (error) {
      console.error('<GithubLoginHook />', error);
      setError(error);
      setLoading(false);
    }
  }, []);

  return {tokens, loading, error, githubLogin};
};

export default useGithubLoginHook;
