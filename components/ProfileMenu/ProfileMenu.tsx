import {Fragment, useCallback} from 'react';
import {Menu, Transition} from '@headlessui/react';
import clsx from '../../utils/clsx';
import LinkButton from '../Buttons/Link';
import {STATIC_ASSETS_PATH} from '../../config/environments';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useClearTokensLazyQuery} from '../../graphql/generated/graphql';
import ROUTES from '../../config/routes';
import Avatar from '../Avatar/Avatar';
import Image from 'next/image';

interface MenuProps {
  name: string;
  href?: string;
  onClick?: () => void;
}

interface ProfileMenuProps {
  isLoggedIn: boolean;
  avatar?: string;
  menu: MenuProps[];
}

const ProfileMenu = ({isLoggedIn, menu, avatar}: ProfileMenuProps) => {
  const router = useRouter();

  const [logout] = useClearTokensLazyQuery();

  const handleLogout = useCallback(async () => {
    await logout();
    router.push(ROUTES.login.path);
  }, [router, logout]);

  const isAvatarLink = avatar?.includes('http');

  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="bg-gray-800 h-8 w-8 relative flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">Open user menu</span>
          {avatar ? (
            <Image
              crossOrigin="anonymous"
              className="rounded-full absolute"
              src={isAvatarLink ? avatar : `${STATIC_ASSETS_PATH}${avatar}`}
              width={32}
              height={32}
              alt="profile menu"
            />
          ) : (
            <Avatar />
          )}
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
        <Menu.Items className="origin-top-right absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {menu.map((item) => (
            <Menu.Item key={item.name}>
              {({active}) => (
                <Link href={item.href}>
                  <a
                    className={clsx(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    {item.name}
                  </a>
                </Link>
              )}
            </Menu.Item>
          ))}
          <Menu.Item>
            <LinkButton
              className={clsx('text-gray-700', 'py-2 px-4')}
              onClick={handleLogout}
            >
              {isLoggedIn ? 'Log out' : 'Log in'}
            </LinkButton>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileMenu;
