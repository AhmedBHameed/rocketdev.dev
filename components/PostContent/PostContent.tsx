import {get} from 'lodash';
import React from 'react';
import {DOMAIN} from '../../config/environments';
import ROUTES from '../../config/routes';
import {Post} from '../../graphql/generated/graphql';
import getUserName from '../../utils/getUserName';
import slugToTitle from '../../utils/slugToTitle';
import MDPreviewClient from '../MDPreview/MDPreviewClient';
import MetaTags from '../MetaTags/MetaTags';
import {format} from 'date-fns';
import clsx from '../../utils/clsx';

interface PostContentProps {
  post?: Post;
}

const PostContent: React.FC<PostContentProps> = ({post}) => {
  const image = get(post, 'postContents.0.postImage');
  const slug = slugToTitle(post.slug);
  const twitterDescription = get(post, 'postContents.0.contentPreview');

  // const SEO = {
  //   title: `${slugToTitle(post.slug)} | Rocket Dev`,
  //   description: twitterDescription,
  //   facebook: {
  //     appId: post.id,
  //   },
  //   openGraph: {
  //     type: 'website',
  //     locale: 'en_IE',
  //     images: image,
  //     url: `${DOMAIN}/${ROUTES.post.path}/${post.slug}/${post.nanoId}`,
  //     title: slugToTitle(post.slug),
  //     site_name: 'Rocket Dev',
  //   },

  //   twitter: {
  //     handle: '@Ahmed_B_HAMEED',
  //     site: '@Ahmed_B_HAMEED',
  //     cardType: 'summary_large_image',
  //   },
  //   images: [
  //     {
  //       url: image,
  //       width: 800,
  //       height: 600,
  //       alt: slug,
  //     },
  //   ],
  // };

  const updatedAt = format(new Date(get(post, 'updatedAt')), 'MMM dd, yyyy');
  const authorName = getUserName(get(post, 'author.name', ''));
  const readingTime = get(post, 'postContents.0.readingTime', '');

  return (
    <div className="relative py-24 overflow-hidden">
      <MetaTags
        articleBy="@Ahmed_B_HAMEED"
        articleId={post.id}
        articleUrl={`${DOMAIN}${ROUTES.post.path}/${post.slug}/${post.nanoId}/`}
        description={twitterDescription}
        imageUrl={image}
        title={slug}
      />
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              {get(post, 'groupName', '')}
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl">
              {slugToTitle(post?.slug || '')}
            </span>
          </h1>
          <h2 className="mt-8 text-xl italic opacity-90 font-bold text-gray-700 dark:text-gray-300 leading-8">
            {get(post, 'postContents[0].contentPreview', '')}
          </h2>

          <small className={clsx('mb-10', 'mt-8', 'block', 'opacity-60')}>
            By <strong>{authorName}</strong> • Updated: {updatedAt} •{' '}
            {readingTime}
          </small>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg mx-auto">
          <MDPreviewClient markdown={get(post, 'postContents[0].body', '')} />
        </div>
      </div>
    </div>
  );
};

export default PostContent;
