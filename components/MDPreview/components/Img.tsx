import React from 'react';
import theme from '../../../styles/theme';
import clsx from '../../../utils/clsx';

interface ImgProps {
  alt: string;
  src: string;
  title: string;
}

const Img = ({alt, src, title}: ImgProps) => {
  if (!title)
    return (
      <img className="w-full" crossOrigin="anonymous" src={src} alt={alt} />
    );

  return (
    <figure
      className={clsx('border', 'border-gray-300', 'dark:border-gray-800')}
    >
      <img
        className="w-full"
        crossOrigin="anonymous"
        src={src}
        alt={alt}
        title={title}
      />
      <figcaption
        className={clsx(
          'flex',
          'justify-center',
          'items-center',
          'm-0',
          'h-12',
          'uppercase',
          theme.bgSecondary,
          theme.text
        )}
      >
        {title}
      </figcaption>
    </figure>
  );
};

export default Img;
