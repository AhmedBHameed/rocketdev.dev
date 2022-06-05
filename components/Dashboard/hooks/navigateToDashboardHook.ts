import {useRouter} from 'next/router';
import {useCallback} from 'react';
import {ROUTES} from '../../../config/routes';

const useNavigateToDashboard = () => {
  const router = useRouter();

  const goToAdminDashboard = useCallback(() => {
    router.push(ROUTES.dashboard.path);
  }, []);

  return {
    goToAdminDashboard,
  };
};

export default useNavigateToDashboard;
