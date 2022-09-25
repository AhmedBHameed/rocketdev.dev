import {useCallback, useEffect, useState} from 'react';
import {VerifyMeDocument, VerifyMeQuery} from '../../graphql/generated/graphql';
import apolloClient from '../../utils/apolloClient';

const useVerifyMe = () => {
  const [userProfile, setUserProfile] = useState<VerifyMeQuery | undefined>();
  const [error, setError] = useState<Error | undefined>();
  const [loading, setLoading] = useState(false);

  const verifyMe = useCallback(async () => {
    setLoading(true);
    try {
      const result = await apolloClient.query<VerifyMeQuery>({
        query: VerifyMeDocument,
      });
      setUserProfile(result.data);
      setLoading(false);
    } catch (error) {
      console.error('<VerifyMeHook />', error);
      setError(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    verifyMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {userProfile, loading, error, verifyMe};
};

export default useVerifyMe;
