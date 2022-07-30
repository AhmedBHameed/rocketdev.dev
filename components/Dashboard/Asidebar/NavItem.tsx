import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
import {memo} from 'react';
import clsx from '../../../utils/clsx';

interface NavItemProps {
  href: string;
  label: string;
  LinkIcon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

const NavItem = ({href, LinkIcon, label}: NavItemProps) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        href={href}
        className={clsx(
          'flex',
          'gap-3',
          'items-center',
          'text-xl',
          router.pathname === href
            ? 'text-gray-300'
            : 'text-gray-400 group-hover:text-gray-300'
        )}
      >
        <LinkIcon
          className={clsx('flex-shrink-0', ' h-6', 'w-6', 'ml-2')}
          aria-hidden="true"
        />
        {label}
      </a>
    </Link>
  );
};

export default memo(NavItem);
