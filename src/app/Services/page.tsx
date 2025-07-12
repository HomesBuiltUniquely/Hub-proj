'use client';
import { useRef, useEffect, useState } from 'react';

export default function Services() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => console.log('Autoplay started'))
        .catch((err) => console.warn('Autoplay blocked:', err));
    }
  }, []);

  const handleVideoClick = () => {
    if (!videoRef.current) return;

    if (!userInteracted) {
      setUserInteracted(true);
      videoRef.current.muted = false;
      videoRef.current
        .play()
        .then(() => console.log('Playing with sound'))
        .catch((err) => console.warn('Play with audio failed:', err));
    } else {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="relative w-full max-w-[1200px] aspect-video mx-auto mt-16 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onClick={handleVideoClick}
        className="w-full h-full object-cover cursor-pointer"
      >
        <source
          src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//errorpage.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {!userInteracted && (
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-6 z-10 cursor-pointer"
          onClick={handleVideoClick}
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl manrope drop-shadow-xl mb-10">
            #CHANGEISGOOD
          </h1>
          <button
            className="p-4 bg-white bg-opacity-80 rounded-full animate-pulse"
            aria-label="Play video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-10 h-10 sm:w-12 sm:h-12"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
