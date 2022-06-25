import {useRouter} from 'next/router';
import {useCallback} from 'react';
import ROUTES from '../../../config/routes';

const useNavigateToDashboardLogin = () => {
  const router = useRouter();

  const goToDashboardLogin = useCallback(() => {
    router.push(ROUTES.dashboardLogin.path);
  }, []);

  return {
    goToDashboardLogin,
  };
};

export default useNavigateToDashboardLogin;
