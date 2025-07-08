'use client';
import { useState, useEffect, useRef } from 'react';

export function CxSection() {
  const videos = [
    { src: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//execution%20(1)%20(1)%20(1).mp4', title: 'Testimonial 1' },
    { src: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//hub%20journey%20(1)%20(1)%20(1).mp4', title: 'Testimonial 2' },
    { src: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//execution%20(1)%20(1)%20(1).mp4', title: 'Testimonial 3' },
    { src: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//hub%20journey%20(1)%20(1)%20(1).mp4', title: 'Testimonial 4' }
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [videos.length, isPlaying]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-[600px] flex flex-col items-center bg-[#F1F2F6] py-10 sm:py-10 px-4 sm:px-6">
      <div className="text-center mb-10 sm:mb-12">
        <h1 className="text-2xl lg:mr-5 sm:text-3xl md:text-4xl font-light gilda-display-regular text-amber-950 mb-4">
          Testimonials
        </h1>
      </div>

      {/* Mobile/Tablet - Single Video */}
      <div className="lg:hidden w-full max-w-[800px] h-[300px] sm:h-[400px] relative rounded-lg overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          src={videos[currentVideoIndex].src}
          className="w-full h-full object-cover"
          autoPlay={false}
          muted={false}
          loop
          playsInline
          onClick={togglePlayPause}
        />
        
        {!isPlaying && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              togglePlayPause();
            }}
            className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 bg-black/20 rounded-full flex items-center justify-center"
          >
            <span className="text-white text-3xl">▶</span>
          </button>
        )}
      </div>

      {/* Desktop - Triple Video Carousel (unchanged) */}
      <div className="hidden lg:flex relative w-[90%] max-w-[1400px] h-[500px] gap-6 mt-10">
        {[
          videos[(currentVideoIndex - 1 + videos.length) % videos.length],
          videos[currentVideoIndex],
          videos[(currentVideoIndex + 1) % videos.length]
        ].map((video, index) => (
          <div 
            key={`${video.src}-${index}`}
            className={`relative flex-1 rounded-lg overflow-hidden shadow-2xl transition-all duration-500 ${
              index === 1 ? 'z-10 scale-105' : 'z-0 scale-95 opacity-90'
            }`}
            onClick={() => {
              if (index === 1) {
                togglePlayPause();
              } else {
                setCurrentVideoIndex((currentVideoIndex + index - 1 + videos.length) % videos.length);
                setIsPlaying(false);
              }
            }}
          >
            <video
              src={video.src}
              className="w-full h-full object-cover cursor-pointer"
              autoPlay={false}
              muted={index !== 1}
              loop
              playsInline
            />
            
            {index === 1 && !isPlaying && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlayPause();
                }}
                className="absolute inset-0 m-auto w-16 h-16 bg-black/20 rounded-full flex items-center justify-center"
              >
                <span className="text-white text-3xl">▶</span>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Navigation indicators */}
      <div className="flex gap-4 mt-6 sm:mt-8">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentVideoIndex(index);
              setIsPlaying(false);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              currentVideoIndex === index ? 'bg-[#DDCDC1] w-6' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}