'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type RoomType = 'Living Room' | 'Kitchen Room' | 'BedRoom' | 'Kids Room' | 'Devotional Room';

interface RoomItem {
  image: string;
}

export function Form() {
  const [activeRoom, setActiveRoom] = useState<RoomType>('Living Room');
  const [hoveredRoom, setHoveredRoom] = useState<RoomType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // const carouselRef = useRef<HTMLDivElement>(null);

  const roomData: Record<RoomType, RoomItem[]> = {
    'Living Room': [
      { image: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img1.jpg' },
      { image: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img2.jpg' },
      { image: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img3.jpg' },
      { image: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img4.jpg' },
      { image: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img5.jpg' },
      { image: 'https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img6.jpg' }
    ],
    'Kitchen Room': [
      { image: '/kitchen1.jpg' },
      { image: '/kitchen2.jpg' },
      { image: '/kitchen3.jpg' },
      { image: '/kitchen4.jpg' },
      { image: '/kitchen5.jpg' },
      { image: '/kitchen6.jpg' }
    ],
    'BedRoom': [
      { image: '/bed1.jpg' },
      { image: '/bed2.jpg' },
      { image: '/bed3.jpg' },
      { image: '/bed4.jpg' },
      { image: '/bed5.jpg' },
      { image: '/bed6.jpg' }
    ],
    'Kids Room': [
      { image: '/kids1.jpg' },
      { image: '/kids2.jpg' },
      { image: '/kids3.jpg' },
      { image: '/kids4.jpg' },
      { image: '/kids5.jpg' },
      { image: '/kids6.jpg' }
    ],
    'Devotional Room': [
      { image: '/pooja1.jpg' },
      { image: '/pooja2.jpg' },
      { image: '/pooja3.jpg' },
      { image: '/pooja4.jpg' },
      { image: '/pooja5.jpg' },
      { image: '/pooja6.jpg' }
    ]
  };

  const roomTypes = Object.keys(roomData) as RoomType[];

  // Auto-rotate carousel on mobile
  useEffect(() => {
    if (window.innerWidth >= 1024) return; // Only for mobile
    
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % roomData[activeRoom].length);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeRoom, isAutoPlaying, roomData]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => (prev + 1) % roomData[activeRoom].length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => (prev - 1 + roomData[activeRoom].length) % roomData[activeRoom].length);
  };

  return (
    <div className="min-h-screen lg:py-30 px-4 lg:px-8 lg:ml-30 bg-[#F1F2F6] hide-scrollbar">
      <h1 className="text-3xl lg:text-4xl font-extrabold text-amber-950 tracking-wider gilda-display-regular mb-8 lg:mb-15 text-center lg:text-left">
        The Features You Need, The Simplicity You Want
      </h1>

      <div className="flex flex-col lg:flex-row mt-20">
        {/* Mobile Room Selector */}
        <div className="lg:hidden mb-10  flex overflow-x-auto gap-3 hide-scrollbar">
          {roomTypes.map((room) => (
            <button
              key={room}
              onClick={() => {
                setActiveRoom(room);
                setCurrentIndex(0);
                setIsAutoPlaying(true);
              }}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeRoom === room
                  ? 'bg-[#DDCDC1] text-amber-950 font-bold'
                  : 'bg-white text-gray-700'
              }`}
            >
              {room}
            </button>
          ))}
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-[250px] sticky top-20 h-fit mt-10">
          {roomTypes.map((room) => (
            <div
              key={room}
              className="relative h-[50px] mb-10"
              onMouseEnter={() => setHoveredRoom(room)}
              onMouseLeave={() => setHoveredRoom(null)}
              onClick={() => setActiveRoom(room)}
            >
              <div
                className={`absolute inset-0 rounded-3xl transition-all duration-300 z-0 ${
                  hoveredRoom === room ? 'bg-[#DDCDC1] opacity-100' : 'opacity-0'
                }`}
              />
              <h1 className="relative z-10 text-center text-[20px] font-bold cursor-pointer gilda-display-regular h-full flex items-center justify-center">
                {room}
              </h1>
            </div>
          ))}
        </div>

        {/* Content section */}
        <div className="lg:ml-20 flex-1">
          {/* Desktop Grid (unchanged) */}
          <div className="hidden lg:flex flex-wrap gap-6">
            {roomData[activeRoom].map((item, index) => (
              <div
                key={`${activeRoom}-${index}`}
                className="w-[290px] h-[330px] rounded-3xl overflow-hidden"
              >
                <Image
                  loading='lazy'
                  width={290}
                  height={330}
                  src={item.image}
                  alt={`${activeRoom} design ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden relative">
            <div className="relative h-[300px] w-full rounded-2xl overflow-hidden">
              <Image
                src={roomData[activeRoom][currentIndex].image}
                alt={`${activeRoom} design ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={goToPrev}
                className="bg-[#DDCDC1] text-amber-950 px-4 py-2 rounded-full"
              >
                Previous
              </button>
              
              <div className="flex gap-2">
                {roomData[activeRoom].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex ? 'bg-[#DDCDC1]' : 'bg-gray-300'
                    }`}
                    aria-label={`View ${activeRoom} design ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNext}
                className="bg-[#DDCDC1] text-amber-950 px-4 py-2 rounded-full"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}