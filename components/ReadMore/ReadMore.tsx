import {useTranslation} from 'next-i18next';
import React from 'react';
import {ChevronsRight} from 'react-feather';
import clsx from '../../utils/clsx';

interface ReadMoreProps {
  className?: string;
}

const ReadMore = ({className}: ReadMoreProps) => {
  const {t} = useTranslation('common');

  return (
    <p
      className={clsx(
        'text-sm',
        'font-semibold',
        'flex',
        'items-center',
        'gap-2',
        className
      )}
    >
      {t('readMore', 'Read more')}{' '}
      <ChevronsRight className={clsx('title-hover--readme_icon', 'w-5')} />
    </p>
  );
};

export default ReadMore;
