import Link from 'next/link';
import React from 'react';
import clsx from '../../utils/clsx';
import BoldLabel from '../Label/BoldLabel';
import MediumLabel from '../Label/MediumLabel';
import {useTranslation} from 'next-i18next';
import slugToTitle from '../../utils/slugToTitle';
import theme from '../../styles/theme';
import ReadMore from '../ReadMore/ReadMore';
import PremiumSign from '../PremiumSign/PremiumSign';

interface CourseCardProps {
  title: string;
  subTitle?: string;
  contentPreview: string;
  isPremium?: boolean;
  onClick?: () => void;
  href: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  subTitle,
  contentPreview,
  isPremium,
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
        <Link
          href={href}
          className={clsx('flex', 'flex-col', 'justify-between', 'h-full')}>

          <div>
            <h3
              className={clsx(
                'flex',
                'justify-between',
                'items-center',
                'title-hover--title',
                'font-bold',
                'text-xl'
              )}
            >
              {slugToTitle(title)}
              {isPremium && <PremiumSign />}
            </h3>
            <h3 className={clsx('text-base', 'mb-4', 'text-gray-400')}>
              <MediumLabel>{subTitle}</MediumLabel>
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

export default CourseCard;
