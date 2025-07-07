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
  const [isPlaying, setIsPlaying] = useState(false); // Start paused
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Always show 3 videos (current, next, previous)
  const visibleVideos = [
    videos[(currentVideoIndex - 1 + videos.length) % videos.length],
    videos[currentVideoIndex],
    videos[(currentVideoIndex + 1) % videos.length]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [videos.length, isPlaying]);

  const togglePlayPause = () => {
    const centerVideo = videoRefs.current[1];
    if (centerVideo) {
      if (isPlaying) {
        centerVideo.pause();
      } else {
        centerVideo.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = (index: number) => {
    if (index === 1) {
      togglePlayPause();
    } else {
      // Mute all videos first
      videoRefs.current.forEach(video => {
        if (video) video.muted = true;
      });
      
      setCurrentVideoIndex((currentVideoIndex + index - 1 + videos.length) % videos.length);
      setIsPlaying(false); // Keep paused when switching
      
      // Unmute the new center video after state update
      setTimeout(() => {
        if (videoRefs.current[1]) {
          videoRefs.current[1].muted = false;
        }
      }, 0);
    }
  };

  return (
    <div className="h-[750px] flex flex-col items-center bg-[#F1F2F6] py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light gilda-display-regular text-amber-950 mb-4 mr-3">
          Testimonials
        </h1>
      </div>

      {/* Triple Video Carousel */}
      <div className="relative w-[90%] max-w-[1400px] h-[500px] flex gap-6 mt-10">
        {visibleVideos.map((video, index) => (
          <div 
            key={`${video.src}-${index}`}
            className={`relative flex-1 rounded-lg overflow-hidden shadow-2xl transition-all duration-500 ${
              index === 1 ? 'z-10 scale-105' : 'z-0 scale-95 opacity-90'
            }`}
            onClick={() => handleVideoClick(index)}
          >
            <video
              ref={(el: HTMLVideoElement | null) => {
                videoRefs.current[index] = el;
              }}
              src={video.src}
              className="w-full h-full object-cover cursor-pointer"
              autoPlay={false}
              muted={index !== 1}
              loop
              playsInline
            />
            
            {/* Centered play button (only shows when paused) */}
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
      <div className="flex gap-4 mt-8">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              // Mute all videos first
              videoRefs.current.forEach(video => {
                if (video) video.muted = true;
              });
              
              setCurrentVideoIndex(index);
              setIsPlaying(false); // Keep paused when navigating
              
              // Unmute the new center video after state update
              setTimeout(() => {
                if (videoRefs.current[1]) {
                  videoRefs.current[1].muted = false;
                }
              }, 0);
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