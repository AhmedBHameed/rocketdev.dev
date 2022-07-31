import React from 'react';
import clsx from '../../utils/clsx';

interface ReadingTimeProps {
  readingTime: string;
}

const ReadingTime = ({readingTime}: ReadingTimeProps) => {
  return (
    <small
      className={clsx(
        'text-red-500',
        'dark:text-red-300',
        'italic',
        'font-bold'
      )}
    >
      {readingTime}
    </small>
  );
};

export default ReadingTime;
