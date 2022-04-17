import Link from 'next/link';
import React from 'react';
import clsx from '../../utils/clsx';
import BoldLabel from '../Label/BoldLabel';
import MediumLabel from '../Label/MediumLabel';
import {ChevronDoubleRightIcon} from '@heroicons/react/outline';
import {useTranslation} from 'next-i18next';

interface PostCardProps {
  title: string;
  subTitle?: string;
  contentPreview: string;
  onClick?: () => void;
  href: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  subTitle,
  contentPreview,
  href,
  onClick,
}) => {
  const {t} = useTranslation('latest');

  return (
    <div
      className={clsx(
        'p-8',
        'rounded-2xl',
        'bg-white',
        'dark:bg-slate-800',
        'h-full'
      )}
    >
      <article
        className={clsx(
          'post-card',
          'h-full',
          'light:text-zinc-800',
          'dark:text-gray-200'
        )}
        onClick={onClick}
      >
        <Link href={href}>
          <a className={clsx('flex', 'flex-col', 'justify-between', 'h-full')}>
            <div>
              <h3 className={clsx('post-card--title', 'text-xl')}>
                <BoldLabel>{title}</BoldLabel>
              </h3>
              <h3 className={clsx('text-base', 'mb-4', 'text-gray-400')}>
                <MediumLabel>{subTitle}</MediumLabel>
              </h3>
              <p className={clsx('text-base')}>{contentPreview}</p>
            </div>

            <p className={clsx('text-sm', 'flex', 'gap-2', 'mt-5')}>
              {t<string>('readMore')}{' '}
              <ChevronDoubleRightIcon
                className={clsx('post-card--readme_icon', 'w-4')}
              />
            </p>
          </a>
        </Link>
      </article>
    </div>
  );
};

export default PostCard;
