import {get} from 'lodash';
import Image from 'next/legacy/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
import ROUTES from '../../config/routes';
import {Post} from '../../graphql/generated/graphql';
import theme from '../../styles/theme';
import clsx from '../../utils/clsx';
import {getPathWithoutStartSlash} from '../../utils/getPathWithoutLastSlash';
import slugToTitle from '../../utils/slugToTitle';
import titleToSlug from '../../utils/titleToSlug';
import ReadingTime from '../ReadingTime/ReadingTime';
import ReadMore from '../ReadMore/ReadMore';

interface ServiceCardProps {
  post: Post;
  index: number;
}

export const ServiceCard = ({post, index}: ServiceCardProps) => {
  const router = useRouter();
  const imageUrl =
    get(post, 'postContents.0.postImage') ||
    'https://minio.rocketdev.dev/blog/courses/placeholders/empty_preview.jpg';

  const postLink = `${getPathWithoutStartSlash(router.asPath)}${
    ROUTES.post.path
  }/${titleToSlug(post.slug)}/${post.nanoId}`;

  return (
    <Link href={postLink}>
      <div
        className={clsx(
          theme.bgSecondary,
          'title-hover',
          'service-card',
          'flex',
          'gap-5',
          'h-64',
          'my-2',
          'overflow-hidden',
          'flex-nowrap',
          'border',
          'rounded-lg',
          'border-gray-500',
          'cursor-pointer',
          'hover:border-indigo-500'
          // checked ? 'border-transparent' : 'border-gray-300',
          // active ? 'border-indigo-500 ring-2 ring-indigo-500' : '',
        )}
      >
        <div className={clsx('w-1/3', 'relative')}>
          <span
            className={clsx(
              'absolute',
              'bottom-2',
              'left-4',
              'z-10',
              'font-bold',
              'text-gray-50'
            )}
          >
            {index.toString().padStart(2, '0')}
          </span>

          <div
            className={clsx('relative', 'h-full')}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(242, 65, 37, 0.2), rgba(242, 65, 37, 0.6))`,
              clipPath: 'polygon(0 0, 100% 0%, 90% 100%, 0% 100%)',
            }}
          >
            <Image
              className={clsx('opacity-70', 'bg-cover')}
              src={imageUrl}
              alt="post"
              layout="fill"
              crossOrigin="anonymous"
            />
          </div>
        </div>

        <div
          className={clsx(
            'w-2/3',
            'p-4',
            'flex',
            'flex-col',
            'justify-between'
          )}
        >
          <div>
            <div className={clsx('flex', 'justify-between')}>
              <small
                className={clsx(
                  'prose',
                  'sm:prose-sm',
                  'italic',
                  'text-blue-500',
                  'font-medium',
                  'title-hover--title'
                )}
              >
                {post.groupName}
              </small>

              <span
                className={clsx(
                  'font-medium',
                  'title-hover--title',
                  theme.text
                )}
              >
                <ReadingTime
                  readingTime={get(post, 'postContents.0.readingTime', '')}
                />
              </span>
            </div>

            <h6
              className={clsx(
                theme.text,
                'prose',
                'lg:prose-2xl',
                'font-medium',
                'title-hover--title'
              )}
            >
              {slugToTitle(post.slug)}
            </h6>

            <p
              className={clsx(
                'block',
                'sm:inline',
                'dark:text-gray-300',
                'text-gray-500'
              )}
            >
              {post.postContents[0].contentPreview}
            </p>

            {/* <ul role="list" className={clsx('ml-6', 'mt-4')}>
                  {post.postContents[0].headLines.map((headLine) => (
                      <li key={headLine} className={clsx('my-1')}>
                      <div className="focus-within:ring-2 focus-within:ring-indigo-500">
                          <h3
                          className={clsx('text-sm', 'font-semibold', 'text-gray-400')}
                          >
                          <span>{startCase(toLower(headLine.replace(/#/g, '')))}</span>
                          </h3>
                      </div>
                      </li>
                  ))}
              </ul> */}
          </div>
          <div className={clsx('flex')}>
            <ReadMore />
          </div>
        </div>
      </div>
    </Link>
  );
};
