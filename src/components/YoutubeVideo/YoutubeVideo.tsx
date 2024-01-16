import React from 'react';

const YoutubeVideo = () => {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/FKasfm6hUnk?si=8MuqeKUq30yqySnF"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default YoutubeVideo;