import Link from 'next/link';
import React from 'react';
import clsx from '../../utils/clsx';
import BoldLabel from '../Label/BoldLabel';
import MediumLabel from '../Label/MediumLabel';
import {ChevronDoubleRightIcon} from '@heroicons/react/outline';
import {useTranslation} from 'next-i18next';
import slugToTitle from '../../utils/slugToTitle';

interface CourseCardProps {
  title: string;
  subTitle?: string;
  contentPreview: string;
  onClick?: () => void;
  href: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  subTitle,
  contentPreview,
  href,
  onClick,
}) => {
  const {t} = useTranslation('common');

  return (
    <div
      className={clsx(
        'p-8',
        'min-h-[250px]',
        'rounded-2xl',
        'bg-neutral-100',
        'dark:bg-neutral-800',
        'h-full'
      )}
    >
      <article
        className={clsx(
          'title-hover',
          'h-full',
          'light:text-zinc-800',
          'dark:text-gray-200'
        )}
        onClick={onClick}
      >
        <Link href={href}>
          <a className={clsx('flex', 'flex-col', 'justify-between', 'h-full')}>
            <div>
              <h3 className={clsx('title-hover--title', 'text-xl')}>
                <BoldLabel>{slugToTitle(title)}</BoldLabel>
              </h3>
              <h3 className={clsx('text-base', 'mb-4', 'text-gray-400')}>
                <MediumLabel>{subTitle}</MediumLabel>
              </h3>
              <p className={clsx('text-base')}>{contentPreview}</p>
            </div>

            <p className={clsx('text-sm', 'flex', 'gap-2', 'mt-5')}>
              {t('readMore', {defaultValue: 'Read more'})}{' '}
              <ChevronDoubleRightIcon
                className={clsx('title-hover--readme_icon', 'w-4')}
              />
            </p>
          </a>
        </Link>
      </article>
    </div>
  );
};

export default CourseCard;
