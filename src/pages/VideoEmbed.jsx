import React, { useState } from 'react';
import thumbnail from '../assets/thumbnail.jpg';

const VideoEmbed = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative mx-auto my-10 w-full max-w-4xl aspect-video rounded-lg overflow-hidden">
      {!isPlaying ? (
        <div className="relative w-full h-full cursor-pointer" onClick={handlePlay}>
          {/* Thumbnail image */}
          <img
            src={thumbnail}
            alt="Video thumbnail"
            className="w-full h-full object-cover brightness-50"
          />

          {/* Play button */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full p-4 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 4l12 6-12 6V4z" />
            </svg>
          </div>

          {/* Caption */}
          <div className="absolute bottom-5 sm:bottom-20 left-0 w-full text-center text-white px-4">
            <h2 className="text-2xl font-bold">Our land transformation</h2>
            <p className="text-sm mt-1">
              How we transform the Future of Africa's with CareerLeap’s MBA/MSc Study Abroad Program
            </p>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/TloEexWU18Y?autoplay=1&si=wyj9F3HJ6jZW_o2Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
  );
};

export default VideoEmbed;
