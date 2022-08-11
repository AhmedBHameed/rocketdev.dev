import React from 'react';

interface ImgProps {
  alt: string;
  src: string;
}

const Img = ({alt, src}: ImgProps) => {
  return <img className="w-full" crossOrigin="anonymous" src={src} alt={alt} />;
};

export default Img;
