import Head from 'next/head';
import React from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  imageUrl: string;
  articleUrl: string;
  articleId: string;
  articleBy: string;
  children?: React.ReactNode;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  articleUrl,
  title,
  imageUrl,
  description,
  articleId,
  articleBy,
  children,
}) => (
  <Head>
    <title>{title}</title>

    {/* Essential META Tags */}
    {/* <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={articleUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" /> */}

    <meta content="article" property="og:type" />
    {articleUrl && <meta content={articleUrl} property="og:url" />}
    <meta content="summary_large_image" name="twitter:card" />
    <meta content={title} property="og:site_name" />
    <meta content={title} property="og:title" />
    <meta content={title} name="twitter:title" />
    {imageUrl && (
      <>
        <meta content={imageUrl} name="image" property="og:image" />
        <meta content={imageUrl} name="twitter:image:src" />
      </>
    )}
    {description && (
      <>
        <meta content={description} property="og:description" />
        <meta content={description} name="twitter:description" />
      </>
    )}
    {articleBy && <meta content={articleBy} name="twitter:creator" />}
    <meta content="www.ahmedhameed.dev" name="twitter:site" />
    <meta content="Ahmed HAMEED" name="author" />
    {/* Non-Essential, But Recommended */}

    {/* <meta property="og:site_name" content="www.ahmedhameed.dev" />
      <meta name="twitter:image:alt" content={title} /> */}

    {/* Non-Essential, But Required for Analytics */}

    {articleId && <meta content={articleId} property="fb:app_id" />}
    {/* <meta name="twitter:site" content={articleBy} /> */}
    {children}
  </Head>
);

export default MetaTags;
