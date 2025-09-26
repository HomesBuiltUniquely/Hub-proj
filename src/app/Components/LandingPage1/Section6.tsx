'use client';

import { useState, useEffect } from 'react';

export default function Section6() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileSlides, setMobileSlides] = useState({
    smartStorage: 0,
    modularKitchen: 0,
    bedrooms: 0,
    livingSpaces: 0
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

  // Auto-rotate slides within current category
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

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
  // };

  const currentSlides = categories[currentCategory].slides;

  return (
    <div className="w-full min-h-[800px] bg-white py-16">
      {/* Desktop Carousel */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto relative">
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
                <h2 className="text-4xl font-bold mb-2">{currentSlides[currentSlide].title}</h2>
                <p className="text-xl mb-6">{currentSlides[currentSlide].subtitle}</p>
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
            <div className="absolute bottom-8 right-8 flex gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCategory(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    currentCategory === index
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
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index <= currentSlide 
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

      {/* Mobile Carousel */}
      <div className="lg:hidden px-4 mx-auto bg-[#f1f2f6] rounded-4xl">
        {/* Smart Storage Section */} 
        <div className="mb-8">
          <div className='flex'>
            <div className='bg-[#ebd657]  w-0.75 h-24 ml-4 mt-10'></div>
            <div className='ml-3'>
              <h1 className='text-4xl mr-12 mt-10 manrope-medium'>Smart Storage</h1>
              <p className='manrope-medium text-[15px] pt-2'>Tailored Storage Designs for Maximum Space - 
              Unlock 25% Extra Space</p>
            </div>
          </div>
          <div className='w-[340px] h-[450px] mt-6 mx-auto rounded-4xl overflow-hidden relative'>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${mobileSlides.smartStorage * 100}%)` }}
            >
              {categories[0].slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img 
                    className='w-[320px] h-[450px] rounded-4xl object-cover' 
                    src={slide.image}
                    alt={slide.title}
                  />
                </div>
              ))}
            </div>
            <button 
              onClick={scrollToForm}
              className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#f1f2f6] w-[180px] h-[60px] rounded-2xl manrope-medium hover:bg-red-500 shadow-xl z-10'
            >
              Meet Our Designer
            </button>
          </div>
        </div>

        {/* Modular Kitchen Section */}
        <div className="mb-8">
          <div className='flex mt-10'>
            <div className='bg-[#ebd657] w-0.75 h-20 ml-4'></div>
            <div className='ml-3'>
              <h1 className='text-3xl mr-12 mt-2 manrope-medium'>Modular Kitchen</h1>
              <p className='manrope-medium'>Modular Kitchen With Smarter Storage</p>
            </div>
          </div>
          <div className='w-[320px] h-[450px] mt-6 mx-auto rounded-4xl overflow-hidden relative'>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${mobileSlides.modularKitchen * 100}%)` }}
            >
              {categories[1].slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img 
                    className='w-[340px] h-[450px] rounded-4xl object-cover' 
                    src={slide.image}
                    alt={slide.title}
                  />
                </div>
              ))}
            </div>
            <button 
              onClick={scrollToForm}
              className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#f1f2f6] w-[180px] h-[60px] rounded-2xl manrope-medium hover:bg-red-500 shadow-xl z-10'
            >
              Meet Our Designer
            </button>
          </div>
        </div>

        {/* Bedrooms Section */}
        <div className="mb-8">
          <div className='flex mt-10'>
            <div className='bg-[#ebd657] w-0.75 h-24 ml-4 mt-2'></div>
            <div className='ml-3'>
              <h1 className='text-4xl mr-12 mt-5 manrope-medium'>Bedrooms</h1>
              <p className='manrope-medium'>Bedrooms That Blend Comfort With Elegance</p>
            </div>
          </div>
          <div className='w-[320px] h-[450px] mt-6 mx-auto rounded-4xl overflow-hidden relative'>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${mobileSlides.bedrooms * 100}%)` }}
            >
              {categories[2].slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img 
                    className='w-[340px] h-[450px] rounded-4xl object-cover' 
                    src={slide.image}
                    alt={slide.title}
                  />
                </div>
              ))}
            </div>
            <button 
              onClick={scrollToForm}
              className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#f1f2f6] w-[180px] h-[60px] rounded-2xl manrope-medium hover:bg-red-500 shadow-xl z-10'
            >
              Meet Our Designer
            </button>
          </div>
        </div>

        {/* Living Spaces Section */}
        <div className="mb-8">
          <div className='flex mt-10'>
            <div className='bg-[#ebd657] w-0.75 h-24 ml-4'></div>
            <div className='ml-3'>
              <h1 className='text-4xl mr-12 mt-2 manrope-medium'>Living Spaces</h1>
              <p className='manrope-medium'>Living Spaces Made For Style & Comfort</p>
            </div>
          </div>
          <div className='w-[320px] h-[450px] mt-6 mx-auto rounded-4xl overflow-hidden relative'>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${mobileSlides.livingSpaces * 100}%)` }}
            >
              {categories[3].slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img 
                    className='w-[340px] h-[450px] rounded-4xl object-cover' 
                    src={slide.image}
                    alt={slide.title}
                  />
                </div>
              ))}
            </div>
            <button 
              onClick={scrollToForm}
              className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#f1f2f6] w-[180px] h-[60px] rounded-2xl manrope-medium hover:bg-red-500 shadow-xl z-10'
            >
              Meet Our Designer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}