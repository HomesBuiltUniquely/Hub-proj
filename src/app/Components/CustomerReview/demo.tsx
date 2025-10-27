
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
              {/* Mobile Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300"
                aria-label="Previous video"
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300"
                aria-label="Next video"
              >
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

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
                        <h3 className="text-lg font-medium text-white">{video.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Dots Indicator */}
              <div className="flex justify-center mt-4 gap-2">
                {videoThumbnails.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-red-500 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>