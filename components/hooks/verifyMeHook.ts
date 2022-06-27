import {useCallback, useLayoutEffect, useState} from 'react';
import {VerifyMeQuery} from '../../graphql/generated/graphql';
import VERIFY_ME_QUERY from '../../graphql/VERIFY_ME.gql';
import apolloClient from '../../utils/apolloClient';
import useNavigateToLogin from '../Login/hooks/navigateToLoginHook';

const useVerifyMe = () => {
  const [userProfile, setUserProfile] = useState<VerifyMeQuery | undefined>();
  const [error, setError] = useState<Error | undefined>();
  const [loading, setLoading] = useState(false);
  const {goToLogin} = useNavigateToLogin();

  const verifyMe = useCallback(async () => {
    setLoading(true);
    try {
      const result = await apolloClient.query<VerifyMeQuery>({
        query: VERIFY_ME_QUERY,
      });
      setUserProfile(result.data);
      setLoading(false);
    } catch (error) {
      console.error('<VerifyMeHook />', error);
      setError(error);
      setLoading(false);
      goToLogin();
    }
  }, [goToLogin]);

  useLayoutEffect(() => {
    verifyMe();
  }, []);

  return {userProfile, loading, error, verifyMe};
};

export default useVerifyMe;
