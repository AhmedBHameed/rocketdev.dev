import React from 'react';

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
          alt="avatar"
        />
      </div>
    );

  if (!lastName) {
  }

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
