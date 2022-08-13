import React from 'react';

interface ImgProps {
  alt: string;
  src: string;
  title: string;
}

const Img = ({alt, src, title}: ImgProps) => {
  return (
    <img
      className="w-full"
      crossOrigin="anonymous"
      src={src}
      alt={alt}
      title={title}
    />
  );
};

export default Img;
