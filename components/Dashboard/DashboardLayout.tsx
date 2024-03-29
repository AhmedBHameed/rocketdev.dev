import {get} from 'lodash';
import React, {useCallback} from 'react';
import {useClearTokensLazyQuery} from '../../graphql/generated/graphql';
import useVerifyMe from '../hooks/verifyMeHook';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import useNavigateToDashboardLogin from './hooks/navigateToDashboardLoginHook';
import {useState} from 'react';
import {BellIcon, Bars3Icon} from '@heroicons/react/24/outline';
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid';
import Asidebar from './Asidebar/Asidebar';

interface DashboardLayoutProps {
  title?: string;
  children?: React.ReactNode;
  onSearch?: (search: React.ChangeEvent<HTMLInputElement>) => void;
}

const DashboardLayout = ({children, title, onSearch}: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {goToDashboardLogin} = useNavigateToDashboardLogin();
  // const {t} = useTranslation('navbar');
  const {userProfile} = useVerifyMe();

  const [logout] = useClearTokensLazyQuery();

  const handleLogout = useCallback(async () => {
    await logout();
    goToDashboardLogin();
  }, [logout, goToDashboardLogin]);

  const avatar = get(userProfile, 'verifyMe.avatar');

  return (
    <div>
      <Asidebar
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(false)}
      />
      <div className="md:pl-64 flex flex-col">
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 shadow">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search-field"
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                    onChange={onSearch}
                  />
                </div>
              </form>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <ProfileMenu
                isLoggedIn={!!userProfile}
                avatar={avatar}
                menu={[
                  {
                    name: 'Your Profile',
                    href: '#',
                  },
                  {
                    name: 'Sign out',
                    href: '#',
                    onClick: handleLogout,
                  },
                ]}
              />
            </div>
          </div>
        </div>

        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
            </div>
            <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
