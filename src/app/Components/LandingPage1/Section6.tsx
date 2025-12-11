'use client';

import { useState, useEffect } from 'react';

export default function Section6() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  type MobileSlideKeys = 'smartStorage' | 'modularKitchen' | 'bedrooms' | 'livingSpaces';

  const [mobileSlides, setMobileSlides] = useState<Record<MobileSlideKeys, number>>({
    smartStorage: 0,
    modularKitchen: 0,
    bedrooms: 0,
    livingSpaces: 0,
  });


  const scrollToForm = () => {
    const formElement = document.getElementById('hero-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const categories = [
    {
      name: "Smart Storage",
      slides: [
        {
          image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//smart1.png",

          title: "Tailored Storage Designs For Maximum Space",
          subtitle: "Unlock 25% Extra Space"
        },
        {
          image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//smart2.png",
          title: "Built-in Wardrobe Solutions",
          subtitle: "Custom Storage for Every Room"
        },
        {
          image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//smart3.png",
          title: "Multi-functional Furniture",
          subtitle: "Space-Saving Design Innovation"
        },
        {
          image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//smart4.png",
          title: "Hidden Storage Solutions",
          subtitle: "Seamless Integration"
        }
      ]
    },
    {
      name: "Modular Kitchens",
      slides: [
        {
          image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//Kitchen1.jpg",
          title: "Modern Kitchen Design",
          subtitle: "Functional Beauty"
        },
        {
          image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//KITCHEN%202.png",
          title: "Smart Kitchen Storage",
          subtitle: "Organized Cooking Space"
        },
        {
          image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//1000064686.jpeg",
          title: "Premium Kitchen Materials",
          subtitle: "Quality Craftsmanship"
        },
        {
          image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//1000064701.jpeg",
          title: "Kitchen Workflow Design",
          subtitle: "Efficient Layout Planning"
        }
      ]
    },
    {
      name: "Bedrooms",
      slides: [
        {
          image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//bedroom_interior_design.jpg",
          title: "Master Bedroom Design",
          subtitle: "Luxury Meets Comfort"
        },
        {
          image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//BEDROOM%202.png",
          title: "Kids Room Solutions",
          subtitle: "Fun and Functional"
        },
        {
          image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//BEDROOM%203.png",
          title: "Guest Room Design",
          subtitle: "Welcoming Spaces"
        },
        {
          image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//BEDROOM%204.png",
          title: "Bedroom Storage Systems",
          subtitle: "Clutter-Free Living"
        }
      ]
    },
    {
      name: "Living Spaces",
      slides: [
        {
          image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//LIVING%201.png",
          title: "Living Room Design",
          subtitle: "Entertainment Hub"
        },
        {
          image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//LIVING%202.png",
          title: "Dining Area Solutions",
          subtitle: "Gathering Spaces"
        },
        {
          image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//LIVING%203.png",
          title: "Home Office Design",
          subtitle: "Productive Environments"
        },
        {
          image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//1000064700.jpeg",
          title: "Entertainment Centers",
          subtitle: "Modern Living"
        }
      ]
    }
  ];

  // Auto-rotate slides within current category (Desktop)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [currentCategory]);

  // Auto-advance mobile carousels
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileSlides(prev => ({
        smartStorage: (prev.smartStorage + 1) % 4,
        modularKitchen: (prev.modularKitchen + 1) % 4,
        bedrooms: (prev.bedrooms + 1) % 4,
        livingSpaces: (prev.livingSpaces + 1) % 4
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Reset slide when category changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [currentCategory]);

  const currentSlides = categories[currentCategory].slides;


  // Swipe tracking
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const minSwipeDistance = 50;

  // Dynamic swipe handler for all mobile carousels
  const handleSwipe = (key: MobileSlideKeys, total: number) => {

    const distance = touchStartX - touchEndX;

    setMobileSlides(prev => {
      const current = prev[key] ?? 0;
      let next = current;

      if (distance > minSwipeDistance) {
        next = (current + 1) % total; // left swipe → next slide
      } else if (distance < -minSwipeDistance) {
        next = (current - 1 + total) % total; // right swipe → previous
      }

      return { ...prev, [key]: next };
    });
  };


  return (

    <div>

      <style jsx>{`
        /* Hide all sections by default */
    
        .desktop-1280,
        .desktop-1920,
        .desktop-2560 {
          display: none;
        }

        /* Show 1280px section for screens between 768px and 1439px */
        @media (min-width: 768px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block;
          }
        }

        
          /* Show 1920px layout for large desktops (1441px) */
        @media (min-width: 1440px)  and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }

          /* Show  layout for large desktops (>1921px) */
        @media (min-width: 1921px) {
          .desktop-2560 {
            display: block !important;
          }
        }
          
      `}</style>

      {/* Desktop Version */}

      <div className=" w-full min-h-[800px] bg-white py-16">


        {/* Desktop Carousel (1280, 1920, 2560 versions omitted for brevity, assumed to be working) */}

        {/* ... Desktop rendering blocks ... */}

        <div className="desktop-2560 hidden lg:block px-20">
          <div className="w-full mx-auto relative">
            <div className="relative h-[700px] rounded-4xl overflow-hidden">
              {/* Main Image */}
              <div className="relative w-full h-full">
                <img
                  src={currentSlides[currentSlide].image}
                  alt={currentSlides[currentSlide].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Text Overlay */}
                <div className="absolute bottom-8 left-8 text-white max-w-md">
                  <h2 className="text-4xl manrope mb-2">{currentSlides[currentSlide].title}</h2>
                  <p className="text-xl manrope-medium mb-6">{currentSlides[currentSlide].subtitle}</p>
                </div>

                {/* Meet Our Designers Button */}
                <button
                  onClick={scrollToForm}
                  className="absolute top-8 right-8 bg-red-500 text-white px-6 py-3 rounded-full manrope-medium hover:bg-red-600 transition-colors"
                >
                  Meet Our Designers
                </button>
              </div>

              {/* Category Navigation */}
              <div className="absolute bottom-8 right-8 flex gap-3 manrope-medium">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCategory(index)}
                    className={`px-4 py-2 rounded-full text-sm manrope-medium transition-all ${currentCategory === index
                      ? 'bg-white text-black'
                      : 'bg-red-500 bg-opacity-50 text-white hover:bg-opacity-70'
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Progress Bar Indicator */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-1">
                  {currentSlides.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${index <= currentSlide
                        ? 'bg-white w-12'
                        : 'bg-gray-300 bg-opacity-30 w-12'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="desktop-1920 hidden lg:block px-20">
          <div className="w-full mx-auto relative">
            <div className="relative h-[700px] rounded-3xl overflow-hidden">
              {/* Main Image */}
              <div className="relative w-full h-full">
                <img
                  src={currentSlides[currentSlide].image}
                  alt={currentSlides[currentSlide].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Text Overlay */}
                <div className="absolute bottom-8 left-8 text-white max-w-md">
                  <h2 className="text-4xl manrope mb-2">{currentSlides[currentSlide].title}</h2>
                  <p className="text-xl manrope-medium mb-6">{currentSlides[currentSlide].subtitle}</p>
                </div>

                {/* Meet Our Designers Button */}
                <button
                  onClick={scrollToForm}
                  className="absolute top-8 right-8 bg-red-500 text-white px-6 py-3 rounded-full manrope-medium hover:bg-red-600 transition-colors"
                >
                  Meet Our Designers
                </button>
              </div>

              {/* Category Navigation */}
              <div className="absolute bottom-8 right-8 flex gap-3 manrope-medium">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCategory(index)}
                    className={`px-4 py-2 rounded-full text-sm manrope-medium transition-all ${currentCategory === index
                      ? 'bg-white text-black'
                      : 'bg-red-500 bg-opacity-50 text-white hover:bg-opacity-70'
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Progress Bar Indicator */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-1">
                  {currentSlides.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${index <= currentSlide
                        ? 'bg-white w-12'
                        : 'bg-gray-300 bg-opacity-30 w-12'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="desktop-1280  lg:block px-15">
          <div className="w-full mx-auto relative">
            <div className="relative h-[700px] rounded-4xl overflow-hidden">
              {/* Main Image */}
              <div className="relative w-full h-full">
                <img
                  src={currentSlides[currentSlide].image}
                  alt={currentSlides[currentSlide].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Text Overlay */}
                <div className="absolute bottom-8 left-8 text-white max-w-md">
                  <h2 className="text-4xl manrope mb-2">{currentSlides[currentSlide].title}</h2>
                  <p className="text-xl manrope-medium mb-6">{currentSlides[currentSlide].subtitle}</p>
                </div>

                {/* Meet Our Designers Button */}
                <button
                  onClick={scrollToForm}
                  className="absolute top-8 right-8 bg-red-500 text-white px-6 py-3 rounded-full manrope-medium hover:bg-red-600 transition-colors"
                >
                  Meet Our Designers
                </button>
              </div>

              {/* Category Navigation */}
              <div className="absolute bottom-8 right-8 flex gap-3 manrope-medium">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCategory(index)}
                    className={`px-4 py-2 rounded-full text-sm manrope-medium transition-all ${currentCategory === index
                      ? 'bg-white text-black'
                      : 'bg-red-500 bg-opacity-50 text-white hover:bg-opacity-70'
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Progress Bar Indicator */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-1">
                  {currentSlides.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${index <= currentSlide
                        ? 'bg-white w-12'
                        : 'bg-gray-300 bg-opacity-30 w-12'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Mobile Carousel - ONLY MANUAL SWIPE NOW */}
        <div className="lg:hidden mx-auto bg-[#f1f2f6] px-5 rounded-3xl mb-15 w-full h-[2435px]">
          {/* Smart Storage Section */}
          <div className="mb-8">
            <div className='flex'>
              <div className=''>
                <h1 className='text-4xl mr-12 mt-10 manrope-medium'>Smart Storage</h1>
                <p className='manrope-medium text-[15px] pt-2'>
                  Tailored Storage Designs for Maximum Space - Unlock 25% Extra Space
                </p>
              </div>
            </div>

            <div
              className='w-full h-[450px] mt-6 mx-auto rounded-4xl overflow-hidden relative'
              onTouchStart={(e) => setTouchStartX(e.changedTouches[0].clientX)}
              onTouchEnd={(e) => {
                setTouchEndX(e.changedTouches[0].clientX);
                handleSwipe("smartStorage", categories[0].slides.length);
              }}
            >

              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${mobileSlides.smartStorage * 100}%)` }}

              >
                {categories[0].slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      className='w-full h-[450px] rounded-4xl object-cover'
                      src={slide.image}
                      alt={slide.title}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {categories[0].slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all duration-300 
        ${mobileSlides.smartStorage === index ? 'bg-black scale-125' : 'bg-gray-400'}`}
                />
              ))}
            </div>
          </div>



          {/* Modular Kitchen Section */}
          <div className="mb-8">
            <div className='flex mt-10'>
              <div className=''>
                <h1 className='text-3xl mr-12 mt-2 manrope-medium'>Modular Kitchen</h1>
                <p className='manrope-medium'>Modular Kitchen With Smarter Storage</p>
              </div>
            </div>

            <div
              className='w-full h-[450px] mt-6 mx-auto rounded-4xl overflow-hidden relative'
              onTouchStart={(e) => setTouchStartX(e.changedTouches[0].clientX)}
              onTouchEnd={(e) => {
                setTouchEndX(e.changedTouches[0].clientX);
                handleSwipe("modularKitchen", categories[1].slides.length);
              }}
            >

              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${mobileSlides.modularKitchen * 100}%)` }}

              >

                {categories[1].slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      className='w-full h-[450px] rounded-4xl object-cover'
                      src={slide.image}
                      alt={slide.title}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dot indicators */}

            <div className="flex justify-center mt-4 gap-2">
              {categories[1].slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all duration-300 
      ${mobileSlides.modularKitchen === index ? 'bg-black scale-125' : 'bg-gray-400'}`}
                />
              ))}
            </div>
          </div>

          {/* Bedrooms Section */}
          <div className="mb-8">
            <div className='flex mt-10'>
              <div className=''>
                <h1 className='text-4xl mr-12 mt-5 manrope-medium'>Bedrooms</h1>
                <p className='manrope-medium'>Bedrooms That Blend Comfort With Elegance</p>
              </div>
            </div>
            <div
              className='w-full h-[450px] mt-6 mx-auto rounded-4xl overflow-hidden relative'
              onTouchStart={(e) => setTouchStartX(e.changedTouches[0].clientX)}
              onTouchEnd={(e) => {
                setTouchEndX(e.changedTouches[0].clientX);
                handleSwipe("bedrooms", categories[2].slides.length);
              }}
            >

              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${mobileSlides.bedrooms * 100}%)` }}

              >
                {categories[2].slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      className='w-full h-[450px] rounded-4xl object-cover'
                      src={slide.image}
                      alt={slide.title}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {categories[2].slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all duration-300 
      ${mobileSlides.bedrooms === index ? 'bg-black scale-125' : 'bg-gray-400'}`}
                />
              ))}
            </div>
          </div>

          {/* Living Spaces Section */}
          <div className="mb-8">
            <div className='flex mt-10'>
              <div className=''>
                <h1 className='text-4xl mr-12 mt-2 manrope-medium'>Living Spaces</h1>
                <p className='manrope-medium'>Living Spaces Made For Style & Comfort</p>
              </div>
            </div>
            <div
              className='w-full h-[450px] mt-6 mx-auto rounded-4xl overflow-hidden relative'
              onTouchStart={(e) => setTouchStartX(e.changedTouches[0].clientX)}
              onTouchEnd={(e) => {
                setTouchEndX(e.changedTouches[0].clientX);
                handleSwipe("livingSpaces", categories[3].slides.length);
              }}
            >

              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${mobileSlides.livingSpaces * 100}%)` }}

              >
                {categories[3].slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      className='w-full h-[450px] rounded-4xl object-cover'
                      src={slide.image}
                      alt={slide.title}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {categories[3].slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all duration-300 
      ${mobileSlides.livingSpaces === index ? 'bg-black scale-125' : 'bg-gray-400'}`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}