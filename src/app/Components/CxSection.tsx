'use client';
import { useState, useRef, useEffect } from 'react';

interface Video {
  id: number;
  thumbnail: string;
  title: string;
  videoUrl: string;
}

export default function CxSection() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoThumbnails: Video[] = [
    {
      id: 1,
      thumbnail: "iam.webp",
      title: "Master Bedroom Design",
      videoUrl: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//Video_20250802_153915_702.mp4"
    },
    {
      id: 2,
      thumbnail: "iam2.webp",
      title: "Modern Living Room",
      videoUrl: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//george%20f%20v_1%20(1)%20(1)%20(1).mp4"
    },
    {
      id: 3,
      thumbnail: "fk.webp",
      title: "Kitchen Interior",
      videoUrl: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//Video_20250802_150443_314.mp4"
    }
  ];

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoThumbnails.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [videoThumbnails.length]);

  // Background video autoplay with mute
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return ( 
    <div className="w-full h-auto">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="w-[1200px] ml-10  relative h-[800px] min-h-[700px] overflow-hidden rounded-2xl">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-[#F1F2F6] bg-opacity-40"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              {/* Text Header - Matching your screenshot */}
              <div className="mb-16 text-black manrope-medium">
                <h2 className="text-5xl md:text-4xl mr-10 leading-tight tracking-tight manrope-medium">
                  HUB Happy Customers
                </h2>
                <div className="w-24 h-1 bg-red-500 mt-8"></div>
              </div>

              {/* Video Thumbnails Grid */}
              <div className="grid grid-cols-3 gap-8">
                {videoThumbnails.map((video) => (
                  <div 
                    key={video.id} 
                    className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                    onClick={() => handleVideoClick(video)}
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                        // Check here
                      />
                      <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                          <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                      <h3 className="text-xl font-medium text-white">{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="w-full bg-[#F1F2F6] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12 text-center">
              <h2 className="text-4xl manrope-medium leading-tight tracking-tight text-gray-800 mb-4">
                <span className="block ">HUB Happy</span>
                <span className="block">Customers</span>
              </h2>
              <div className="w-16 h-1 bg-red-500 mx-auto"></div>
            </div>

            {/* Video Carousel */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {videoThumbnails.map((video) => (
                  <div 
                    key={video.id} 
                    className="w-full flex-shrink-0 px-2"
                    onClick={() => handleVideoClick(video)}
                  >
                    <div className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 active:scale-95">
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-gray-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                        {/* <h3 className="text-lg font-medium text-white">{video.title}</h3> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 z-10 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
              <video
                className="w-full h-full"
                controls
                autoPlay
                playsInline
                src={selectedVideo.videoUrl}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className="mt-4 text-center">
              <h3 className="text-xl font-medium text-white">{selectedVideo.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}