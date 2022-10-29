import Link from 'next/link';
import React from 'react';
import clsx from '../../utils/clsx';
import BoldLabel from '../Label/BoldLabel';
import {useTranslation} from 'next-i18next';
import slugToTitle from '../../utils/slugToTitle';
import theme from '../../styles/theme';
import ReadingTime from '../ReadingTime/ReadingTime';
import ReadMore from '../ReadMore/ReadMore';

interface PostCardProps {
  title: string;
  subTitle?: string;
  readingTime: string;
  contentPreview: string;
  onClick?: () => void;
  href: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  readingTime,
  contentPreview,
  href,
  onClick,
}) => {
  const {t} = useTranslation('common');

  return (
    <div
      className={clsx(
        'p-8',
        'min-h-[260px]',
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
        <Link
          href={href}
          className={clsx('flex', 'flex-col', 'justify-between', 'h-full')}>

          <div>
            <ReadingTime readingTime={readingTime} />
            <h3 className={clsx('title-hover--title', 'text-xl')}>
              <BoldLabel>{slugToTitle(title)}</BoldLabel>
            </h3>
            <p className={clsx('text-base', 'mt-2', theme.subText)}>
              {contentPreview}
            </p>
          </div>
          <ReadMore />

        </Link>
      </article>
    </div>
  );
};

export default PostCard;
