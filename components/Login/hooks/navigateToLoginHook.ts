import {useRouter} from 'next/router';
import {useCallback} from 'react';
import ROUTES from '../../../config/routes';

const useNavigateToLogin = () => {
  const router = useRouter();

  const goToLogin = useCallback(() => {
    router.push(ROUTES.login.path);
  }, []);

  return {
    goToLogin,
  };
};

export default useNavigateToLogin;
