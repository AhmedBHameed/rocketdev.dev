import React from 'react';

interface AudioProps {
  src: string;
}

const Audio = ({src, ...reset}: AudioProps) => {
  return (
    <audio controls className="audioplayer" {...reset}>
      <source type="audio/mp3" src={src}></source>
    </audio>
  );
};

export default Audio;
