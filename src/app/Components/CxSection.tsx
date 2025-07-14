'use client';
import { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

export function CxSection() {
  const videos = [
    { src: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//execution%20(1)%20(1)%20(1).mp4', title: 'Testimonial 1' },
    { src: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//hub%20journey%20(1)%20(1)%20(1).mp4', title: 'Testimonial 2' },
    { src: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//execution%20(1)%20(1)%20(1).mp4', title: 'Testimonial 3' },
    { src: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//hub%20journey%20(1)%20(1)%20(1).mp4', title: 'Testimonial 4' }
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const desktopVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  // Initialize desktop video refs array
  useEffect(() => {
    desktopVideoRefs.current = desktopVideoRefs.current.slice(0, videos.length);
  }, [videos.length]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isSwiping) return;
    
    const interval = setInterval(() => {
      if (isPlaying) {
        handleVideoChange((currentVideoIndex + 1) % videos.length);
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, [videos.length, isPlaying, isSwiping, currentVideoIndex]);

  const handleVideoChange = (newIndex: number) => {
    // Pause all videos first
    if (windowWidth >= 1024) {
      desktopVideoRefs.current.forEach(video => video?.pause());
    } else {
      mobileVideoRef.current?.pause();
    }
    
    setCurrentVideoIndex(newIndex);
    setIsPlaying(false);
    
    // Reset video elements
    setTimeout(() => {
      if (windowWidth >= 1024) {
        const newVideo = desktopVideoRefs.current[1];
        if (newVideo) {
          newVideo.currentTime = 0;
          if (isPlaying) {
            newVideo.play().catch(e => console.log("Autoplay prevented:", e));
          }
        }
      } else {
        if (mobileVideoRef.current) {
          mobileVideoRef.current.currentTime = 0;
          if (isPlaying) {
            mobileVideoRef.current.play().catch(e => console.log("Mobile play failed:", e));
          }
        }
      }
    }, 10);
  };

  const togglePlayPause = () => {
    const activeVideo = windowWidth >= 1024 
      ? desktopVideoRefs.current[1] 
      : mobileVideoRef.current;
      
    if (activeVideo) {
      if (isPlaying) {
        activeVideo.pause();
      } else {
        // On mobile, we need to play with sound
        if (windowWidth < 1024 && activeVideo.muted) {
          activeVideo.muted = false;
        }
        activeVideo.play().catch(e => {
          console.log("Play failed:", e);
          // Fallback: mute and try again if autoplay fails
          activeVideo.muted = true;
          activeVideo.play().catch(e => console.log("Muted play failed:", e));
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwiping: () => setIsSwiping(true),
    onSwipedLeft: () => handleVideoChange((currentVideoIndex + 1) % videos.length),
    onSwipedRight: () => handleVideoChange((currentVideoIndex - 1 + videos.length) % videos.length),
    onSwiped: () => setIsSwiping(false),
    trackMouse: false,
  });

  const getVideoHeight = () => {
    if (windowWidth < 640) return '250px';
    if (windowWidth < 768) return '300px';
    if (windowWidth < 1024) return '350px';
    return '500px';
  };

  return (
    <div className="min-h-[500px] sm:min-h-[700px] flex flex-col items-center bg-[#F1F2F6] sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl tracking-wider wulkan-display-bold text-amber-950 mb-20">
          Testimonials
        </h1>
      </div>

      {/* Mobile/Tablet - Single Video with Swipe */}
      <div className="lg:hidden w-full max-w-[800px]" style={{ height: getVideoHeight() }}>
        <div 
          className="relative w-full h-full rounded-lg overflow-hidden shadow-xl sm:shadow-2xl"
          {...swipeHandlers}
        >
          <video
            ref={mobileVideoRef}
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
              className="absolute inset-0 m-auto w-12 h-12 sm:w-14 sm:h-14 bg-black/30 rounded-full flex items-center justify-center hover:bg-black/40 transition-all"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <span className="text-white text-2xl sm:text-3xl">▶</span>
            </button>
          )}
        </div>
      </div>

      {/* Desktop - Triple Video Carousel */}
      <div className="hidden lg:flex relative w-full max-w-[1400px] h-[500px] gap-4 xl:gap-6 mt-6">
        {[
          videos[(currentVideoIndex - 1 + videos.length) % videos.length],
          videos[currentVideoIndex],
          videos[(currentVideoIndex + 1) % videos.length]
        ].map((video, index) => (
          <div 
            key={`${video.src}-${index}`}
            className={`relative flex-1 rounded-lg overflow-hidden shadow-xl xl:shadow-2xl transition-all duration-500 ${
              index === 1 ? 'z-10 scale-105' : 'z-0 scale-95 opacity-90'
            }`}
            onClick={() => {
              if (index === 1) {
                togglePlayPause();
              } else {
                handleVideoChange((currentVideoIndex + index - 1 + videos.length) % videos.length);
              }
            }}
          >
            <video
              ref={el => {
                if (el) {
                  desktopVideoRefs.current[index] = el;
                }
              }}
              src={video.src}
              className="w-full h-full object-cover cursor-pointer"
              autoPlay={index === 1 && isPlaying}
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
                className="absolute inset-0 m-auto w-16 h-16 bg-black/30 rounded-full flex items-center justify-center hover:bg-black/40 transition-all"
                aria-label="Play video"
              >
                <span className="text-white text-3xl">▶</span>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Navigation indicators */}
      <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => handleVideoChange(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentVideoIndex === index ? 'bg-[#DDCDC1] w-4 sm:w-6' : 'bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}