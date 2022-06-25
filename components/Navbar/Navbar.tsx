import {useCallback} from 'react';
import Link from 'next/link';
import {Disclosure} from '@headlessui/react';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import clsx from '../../utils/clsx';
import RocketDevsSvg from '../SVG/ReactDevsSvg';
import ROUTES from '../../config/routes';
import ThemeButton from './ThemeButton';
import {useRouter} from 'next/router';
import {useClearTokensLazyQuery} from '../../graphql/generated/graphql';
import {useTranslation} from 'next-i18next';
import useVerifyMe from '../hooks/verifyMeHook';
import {get} from 'lodash';
import ProfileMenu from '../ProfileMenu/ProfileMenu';

const Navbar = () => {
  const router = useRouter();
  const {t} = useTranslation('navbar');
  const {userProfile} = useVerifyMe();

  const avatar = get(userProfile, 'verifyMe.avatar');

  return (
    <Disclosure as="nav">
      {({open}) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md light:text-gray-400 light:hover:text-gray-500 light:hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href={ROUTES.home.path}>
                    <a href="#">
                      <RocketDevsSvg />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:flex sm:ml-6 items-center">
                  <div className="flex space-x-4">
                    <Link href={ROUTES.latest.path}>
                      <a
                        href="#"
                        className={clsx(
                          router.asPath.indexOf(ROUTES.latest.path) > -1
                            ? 'bg-gray-600 dark:bg-gray-700 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                      >
                        {t('latest')}
                      </a>
                    </Link>

                    <Link href={ROUTES.courses.path}>
                      <a
                        href="#"
                        className={clsx(
                          router.asPath.indexOf(ROUTES.courses.path) > -1
                            ? 'bg-gray-600 dark:bg-gray-700 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                      >
                        {t('courses', {defaultValue: 'Courses'})}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
                <ThemeButton />

                {/* Profile dropdown */}
                <ProfileMenu
                  avatar={
                    avatar ||
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  }
                  menu={[
                    {
                      name: 'Your Profile',
                      href: '#',
                    },
                    {
                      name: 'Feedback',
                      href: ROUTES.feedback.path,
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                href={ROUTES.latest.path}
                className={clsx(
                  router.asPath.indexOf(ROUTES.latest.path) > -1
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={
                  router.asPath.indexOf(ROUTES.latest.path) > -1
                    ? 'page'
                    : undefined
                }
              >
                {t<string>('latest')}
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
