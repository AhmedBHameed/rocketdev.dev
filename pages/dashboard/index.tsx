import AlertError from '../../components/AlertError/AlertError';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import useVerifyMe from '../../components/hooks/verifyMeHook';
import Loader from '../../components/Loader/Loader';
import clsx from '../../utils/clsx';

const Dashboard = () => {
  const {loading, error} = useVerifyMe();

  if (loading)
    return (
      <DashboardLayout>
        <div
          className={clsx(
            'flex',
            'justify-center',
            'items-center',
            'h-[calc(100vh-64px)]'
          )}
        >
          <Loader />
        </div>
      </DashboardLayout>
    );

  if (error)
    return (
      <DashboardLayout>
        <AlertError message={error.message} httpStatusCode={401} />
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      <div className="py-4">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
