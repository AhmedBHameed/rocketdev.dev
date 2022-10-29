import {useMemo} from 'react';
import Link from 'next/link';
import {Disclosure} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import clsx from '../../utils/clsx';
import RocketDevSvg from '../SVG/LogoSvg';
import ROUTES from '../../config/routes';
import ThemeButton from './ThemeButton';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import useVerifyMe from '../hooks/verifyMeHook';
import {get} from 'lodash';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import theme from '../../styles/theme';

const Navbar = () => {
  const router = useRouter();
  const {t} = useTranslation('navbar');
  const {userProfile} = useVerifyMe();

  const avatar = get(userProfile, 'verifyMe.avatar', '');
  const isAdmin = get(userProfile, 'verifyMe.isSuper', false);

  const menu = useMemo(() => {
    const menuList = [
      {
        name: 'Feedback',
        href: ROUTES.feedback.path,
      },
    ];

    if (isAdmin)
      menuList.unshift({
        name: 'Dashboard',
        href: ROUTES.dashboard.path,
      });

    return menuList;
  }, [isAdmin]);

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
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href={ROUTES.home.path}>
                    <RocketDevSvg />
                  </Link>
                </div>
                <div className="hidden sm:flex sm:ml-6 items-center">
                  <div className={clsx(theme.text, 'flex space-x-4')}>
                    <Link
                      href={ROUTES.latest.path}
                      className={clsx(
                        router.asPath.indexOf(ROUTES.latest.path) > -1
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : 'hover:bg-gray-500',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                    >
                      {t('latest')}
                    </Link>

                    <Link
                      href={ROUTES.courses.path}
                      className={clsx(
                        router.asPath.indexOf(ROUTES.courses.path) > -1
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : 'hover:bg-gray-500',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                    >
                      {t('courses', {defaultValue: 'Courses'})}
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
                  isLoggedIn={!!userProfile}
                  avatar={avatar}
                  menu={menu}
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

              <Disclosure.Button
                as="a"
                href={ROUTES.latest.path}
                className={clsx(
                  router.asPath.indexOf(ROUTES.courses.path) > -1
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={
                  router.asPath.indexOf(ROUTES.courses.path) > -1
                    ? 'page'
                    : undefined
                }
              >
                {t('courses', {defaultValue: 'Courses'})}
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
