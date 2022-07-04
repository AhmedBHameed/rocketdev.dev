import React from 'react';

interface ImgProps {
  src: string;
}

const Img = (props: ImgProps) => {
  return <img crossOrigin="anonymous" {...props} />;
};

export default Img;
