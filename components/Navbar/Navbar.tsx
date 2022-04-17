import {Fragment, useCallback} from 'react';
import Link from 'next/link';
import {Disclosure, Menu, Transition} from '@headlessui/react';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import clsx from '../../utils/clsx';
import RocketDevsSvg from '../SVG/ReactDevsSvg';
import {ROUTES} from '../../config/routes';
import ThemeButton from './ThemeButton';
import {useRouter} from 'next/router';
import {useClearTokensLazyQuery} from '../../graphql/generated/graphql';
import {useTranslation} from 'next-i18next';
import useVerifyMe from '../hooks/verifyMeHook';
import {get} from 'lodash';

const Navbar = () => {
  const router = useRouter();
  const {t, i18n} = useTranslation('navbar');
  const {userProfile, error} = useVerifyMe();

  const [logout] = useClearTokensLazyQuery();

  const handleLogout = useCallback(async () => {
    await logout();
    router.push(ROUTES.login.path, undefined, {locale: i18n.language});
  }, [i18n]);

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
                    <a aria-current="home page">
                      <RocketDevsSvg />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:flex sm:ml-6 items-center">
                  <div className="flex space-x-4">
                    <Link href={ROUTES.latest.path}>
                      <a
                        className={clsx(
                          router.asPath.indexOf(ROUTES.latest.path) > -1
                            ? 'bg-gray-600 dark:bg-gray-700 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current="latest page"
                      >
                        {t<string>('latest')}
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
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={
                          avatar ||
                          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        }
                        alt="profile avatar"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({active}) => (
                          <a
                            href="#"
                            className={clsx(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({active}) => (
                          <a
                            href="#"
                            className={clsx(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({active}) => (
                          <a
                            href="#"
                            onClick={handleLogout}
                            className={clsx(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
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
