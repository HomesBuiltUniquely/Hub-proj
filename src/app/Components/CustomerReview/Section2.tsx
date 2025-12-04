'use client';
import { useState, useRef, useEffect } from 'react';

interface Video {
  id: number;
  thumbnail: string;
  title: string;
  videoUrl: string;
}

export default function Section8() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide] = useState(0);
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

  // // Auto-advance carousel
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % videoThumbnails.length);
  //   }, 4000); // Change slide every 4 seconds

  //   return () => clearInterval(timer);
  // }, [videoThumbnails.length]);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % videoThumbnails.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + videoThumbnails.length) % videoThumbnails.length);
  // };

  // Background video autoplay with mute
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);



  // Mobile version carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const handleSwipe = () => {
    const distance = touchStart.current - touchEnd.current;
    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        // Swipe left (next)
        setCurrentIndex((prev) =>
          prev === videoThumbnails.length - 1 ? 0 : prev + 1
        );
      } else {
        // Swipe right (previous)
        setCurrentIndex((prev) =>
          prev === 0 ? videoThumbnails.length - 1 : prev - 1
        );
      }
    }
  };

  const getCardStyles = (index: number): React.CSSProperties => {
    const len = videoThumbnails.length;
    const offset = (index - currentIndex + len) % len;

    if (offset > 2) {
      return {
        opacity: 0,
        pointerEvents: "none" as React.CSSProperties["pointerEvents"], // ✅ explicit type
        transform: "translateX(0px) scale(0.95)",
        zIndex: 0,
        transition: "all 0.5s cubic-bezier(0.25,0.1,0.25,1)",
      };
    }

    const zIndex = 30 - offset;
    const scale = 1 - offset * 0.05;
    const translateX = offset * 40;
    const opacity = 1 - offset * 0.1;

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      zIndex,
      opacity,
      transition: "all 0.5s cubic-bezier(0.25,0.1,0.25,1)",
    };
  };




  return (

    // *****
    <div>

      <style jsx>{`

  /* Hide both by default */
        .desktop-1280,
        .desktop-1920,
        .desktop-2560{
    display: none !important;
  }

 /* Show 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }


         /* Show 1920px layout for large desktops (1441px) */
        @media (min-width: 1440px)  and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }

         /* Show 2560px layout for large desktops (>1920px) */
        @media (min-width: 1921px)  {
          .desktop-2560 {
            display: block !important;
          }
        }
`}</style>

  {/* Desktop Layout */}
  {/* 2560 Version */}
      <div className="desktop-1920 w-full ">
      
        <div className="w-full mx-auto relative h-[720px] overflow-hidden rounded-2xl mt-15">
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
              <source
                src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {/* Soft overlay for better contrast */}
            <div className="absolute inset-0 bg-[#F1F2F6]/40"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-center">
            <div className="max-w-[1400px] mx-auto px-6 w-full">

              {/* Header Row */}
              <div className="flex items-center justify-between mb-16 text-black manrope-medium relative">
                {/* Text Header */}
                <div>
                  <h1 className="text-5xl leading-tight tracking-tight wulkan-display-bold">
                    What our customers say about HUB
                  </h1>
                </div>

                {/* Nav Buttons (Commented out but left for future use) */}
                {/* 
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous video"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next video"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          */}
              </div>

              {/* Video Carousel */}
              <div className="relative -mt-5">
                {/* Carousel Container */}
                <div className="overflow-hidden rounded-xl">
                  <div
                    className="flex transition-transform duration-500 - ease-in-out gap-4"
                    style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
                  >
                    {videoThumbnails.map((video) => (
                      <div key={video.id} className="w-1/3 flex-shrink-0">
                        <div
                          className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105"
                          onClick={() => handleVideoClick(video)}
                        >
                          {/* Thumbnail */}
                          <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-[550px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                                <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                            {/* Title Overlay */}
                            <div className="absolute -bottom-3 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                              <h3 className="text-xl manrope-medium text-white transition-transform duration-300 group-hover:translate-y-[-3px]">
                                {video.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots Indicator (optional) */}
                {/*                 
          <div className="flex justify-center mt-6 gap-2">
            {videoThumbnails.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-red-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          */}
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isModalOpen && selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 ">
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
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-xl font-medium text-white">{selectedVideo.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ********desktop 2560 ends******** */}


      {/* 1920 Version */}

      <div className="desktop-2560 w-full ">
      
        <div className="w-[1440px] mx-auto relative h-[720px] overflow-hidden rounded-2xl mt-15">
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
              <source
                src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {/* Soft overlay for better contrast */}
            <div className="absolute inset-0 bg-[#F1F2F6]/40"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-center">
            <div className="max-w-[1400px] mx-auto px-6 w-full">

              {/* Header Row */}
              <div className="flex items-center justify-between mb-16 text-black manrope-medium relative">
                {/* Text Header */}
                <div>
                  <h1 className="text-5xl leading-tight tracking-tight wulkan-display-bold">
                    What our customers say about HUB
                  </h1>
                </div>

                {/* Nav Buttons (Commented out but left for future use) */}
                {/* 
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous video"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next video"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          */}
              </div>

              {/* Video Carousel */}
              <div className="relative">
                {/* Carousel Container */}
                <div className="overflow-hidden rounded-xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
                  >
                    {videoThumbnails.map((video) => (
                      <div key={video.id} className="w-1/3 flex-shrink-0 px-4">
                        <div
                          className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105"
                          onClick={() => handleVideoClick(video)}
                        >
                          {/* Thumbnail */}
                          <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-[550px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                                <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                            {/* Title Overlay */}
                            <div className="absolute -bottom-3 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                              <h3 className="text-xl manrope-medium text-white transition-transform duration-300 group-hover:translate-y-[-3px]">
                                {video.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots Indicator (optional) */}
                {/*                 
          <div className="flex justify-center mt-6 gap-2">
            {videoThumbnails.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-red-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          */}
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
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-xl font-medium text-white">{selectedVideo.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>


      {/* 1280 Version */}

      <div className='desktop-1280'>
        <div className="w-full mx-auto px-10 relative h-auto min-h-[700px] overflow-hidden rounded-2xl">
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
          <div className="relative z-10 flex flex-col justify-center py-10">
            <div className="max-w-[1240px] mx-auto px-6 w-full">

              <div className="flex items-center justify-between mb-16 text-black manrope-medium relative">
                {/* Text Header - Left side */}
                <div>
                  <h1 className="text-5xl leading-tight tracking-tight wulkan-display-bold">
                    What our customers say about HUB
                  </h1>
                </div>

                {/* Navigation Buttons - Right side */}
                <div className="flex items-center gap-4">
                  {/* <button
              onClick={prevSlide}
              className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous video"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next video"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button> */}
                </div>
              </div>

              {/* Video Carousel */}
              <div className="relative">
                {/* Carousel Container */}
                <div className="overflow-hidden rounded-xl -mt-10">
                  <div
                    className="flex transition-transform duration-500 gap-5 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
                  >
                    {videoThumbnails.map((video) => (
                      <div key={video.id} className="w-1/3 flex-shrink-0">
                        <div
                          className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105"
                          onClick={() => handleVideoClick(video)}
                        >
                          {/* Thumbnail Wrapper */}
                          <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
                            {/* Actual Thumbnail Image */}
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Subtle Dark Overlay (appears only on hover) */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Play Button (appears with fade-in) */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                                <svg
                                  className="w-6 h-6 text-gray-900 ml-1"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>

                            {/* Title Overlay (always visible, slight float on hover) */}
                            <div className="absolute -bottom-3 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                              <h3 className="text-xl manrope-medium text-white transition-transform duration-300 group-hover:translate-y-[-3px]">
                                {video.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots Indicator temporarily blocked till more video be added  */}
                {/* <div className="flex justify-center mt-6 gap-2">
            {videoThumbnails.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                  ? 'bg-red-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
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
      </div>



      {/* Mobile Version */}

      <div className="block md:hidden w-full -mt-10 px-4 py-6">
        {/* Section Header */}
        <div className="flex items-start mb-4">
          <div className="w-[2px] h-[70px] bg-[#ebd457] "></div>
          <h1 className="text-3xl wulkan-display-bold text-gray-800 ml-3 mb-3 leading-snug">
            What our customers say about HUB
          </h1>
        </div>


        {/* Stacked Swipe Carousel */}
        <div
          className="relative w-[85%] h-[520px] -mt-15 flex items-center justify-center"
          onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
          onTouchMove={(e) => (touchEnd.current = e.touches[0].clientX)}
          onTouchEnd={handleSwipe}
        >
          {videoThumbnails.map((video, index) => (
            <div
              key={video.id}
              className="absolute w-[100%] h-[400px] rounded-[28px] overflow-hidden shadow-xl transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer mr-2"
              style={getCardStyles(index)}  // 👈 new logic here
              onClick={() => handleVideoClick(video)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover rounded-[28px]"
              />

              {/* Play Button Overlay */}
              <div className="absolute bottom-5 right-5 bg-black/50 rounded-full p-4 backdrop-blur-sm">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          ))}

        </div>

        {/* Video Modal */}
        {isModalOpen && selectedVideo && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-md">
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="aspect-[16/9] bg-black rounded-lg overflow-hidden">
                <video
                  className="w-full h-full"
                  controls
                  autoPlay
                  playsInline
                  src={selectedVideo.videoUrl}
                />
              </div>

              <div className="mt-3 text-center">
                <h3 className="text-lg font-medium text-white">
                  {selectedVideo.title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* MOBILE VERSION END */}


    </div>


    // *****
  );
}