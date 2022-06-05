import React, {Fragment, useMemo} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {
  PencilAltIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline';
import BrandLink from '../../BrandLink/BrandLink';
import {ROUTES} from '../../../config/routes';
import NavItem from './NavItem';

interface AsidebarProps {
  sidebarOpen: boolean;
  onToggleSidebar: (open: boolean) => void;
}

const Asidebar = ({sidebarOpen, onToggleSidebar}: AsidebarProps) => {
  const navigation = useMemo(() => {
    return [
      {label: 'Dashboard', href: '#', LinkIcon: HomeIcon},
      {
        label: 'Users',
        href: ROUTES.dashboardUsers.path,
        LinkIcon: UsersIcon,
      },
      {
        label: 'Courses',
        href: ROUTES.dashboardCourses.path,
        LinkIcon: FolderIcon,
      },
      {
        label: 'Posts',
        href: ROUTES.dashboardPosts.path,
        LinkIcon: PencilAltIcon,
      },
    ];
  }, []);

  return (
    <>
      {/* Mobile menu */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={() => onToggleSidebar(true)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => onToggleSidebar(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex items-center px-4">
                  <BrandLink />
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                    {navigation.map((item, index) => (
                      <NavItem {...item} key={index.toString()} />
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop menu */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
            <BrandLink />
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-3">
              {navigation.map((item, index) => (
                <NavItem {...item} key={index.toString()} />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Asidebar;
