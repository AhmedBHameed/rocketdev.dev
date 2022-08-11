import React from 'react';
import theme from '../../styles/theme';
import clsx from '../../utils/clsx';

interface AvatarProps {
  src?: string;
  firstName?: string;
  lastName?: string;
}

const Avatar = ({src, firstName, lastName}: AvatarProps) => {
  if (src)
    return (
      <div className="h-12 w-12 flex-shrink-0">
        <img
          crossOrigin="anonymous"
          className="h-12 w-12 rounded-full"
          src={src}
          title="avatar"
          alt="avatar"
        />
      </div>
    );

  if (!firstName && !lastName)
    return (
      <span
        className={clsx(
          'inline-block',
          'h-8',
          'w-8',
          'rounded-full',
          'overflow-hidden',
          theme.bgSecondary
        )}
      >
        <svg
          className="h-full w-full text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>
    );

  return (
    <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-500">
      <span className="text-lg font-medium leading-none text-white">
        {!lastName
          ? `${firstName.substring(0, 2)}`
          : `${firstName.charAt(0)}${lastName.charAt(0)}`}
      </span>
    </span>
  );
};

export default Avatar;
