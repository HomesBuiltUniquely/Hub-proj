'use client';
import { useRef, useEffect, useState } from 'react';

export default function Services() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [userInteracted, setUserInteracted] = useState(false);

  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; 
      videoRef.current.play()
        .then(() => console.log("Video autoplaying (muted)"))
        .catch(error => console.error("Autoplay failed:", error));
    }
  }, []);

  
  const handleVideoClick = () => {
    if (!videoRef.current) return;
    
    if (!userInteracted) {
      setUserInteracted(true);
      videoRef.current.muted = false; // Unmute on first interaction
      videoRef.current.play() // Replay with sound
        .catch(error => console.error("Play with audio failed:", error));
    } else {
      // Toggle play/pause on subsequent clicks
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="relative w-full h-screen">
      <video
        ref={videoRef}
        playsInline
        autoPlay
        onClick={handleVideoClick}
        className="w-full h-full object-cover cursor-pointer"
        muted={!userInteracted}
      >
        <source src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//errorpage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {!userInteracted && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
          onClick={handleVideoClick}
        >
          <button 
            className="p-4 bg-white bg-opacity-80 rounded-full animate-pulse"
            aria-label="Unmute video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
              <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
              <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}