import React from 'react';

interface AudioProps {
  src: string;
}

const Audio: React.FC<AudioProps> = ({src}) => {
  return (
    <audio controls className="audioplayer">
      <source type="audio/mp3" src={src}></source>
    </audio>
  );
};

export default Audio;
