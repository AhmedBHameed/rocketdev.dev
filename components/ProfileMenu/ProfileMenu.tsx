import {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react';
import clsx from '../../utils/clsx';
import Link from '../Buttons/Link';
import {STATIC_ASSETS_PATH} from '../../config/environments';

interface MenuProps {
  name: string;
  href: string;
  onClick?: () => void;
}

interface ProfileMenuProps {
  avatar: string;
  menu: MenuProps[];
}

const ProfileMenu = ({menu, avatar}: ProfileMenuProps) => {
  const isAvatarLink = avatar.includes('http');
  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src={isAvatarLink ? avatar : `${STATIC_ASSETS_PATH}${avatar}`}
            alt="profile menu"
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
        <Menu.Items className="origin-top-right absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {menu.map((item) => (
            <Menu.Item key={item.name}>
              {({active}) =>
                item.onClick ? (
                  <Link
                    className={clsx(active && 'bg-gray-100', 'text-gray-700')}
                    onClick={item.onClick}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={clsx(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    {item.name}
                  </a>
                )
              }
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileMenu;
