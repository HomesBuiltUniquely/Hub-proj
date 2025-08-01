"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

type RoomType =
  | "Living Room"
  | "Kitchen Room"
  | "Bed Room"
  | "Kids Room"
  | "Devotional Room";

interface RoomItem {
  image: string;
}

export function Form() {
  const [activeRoom, setActiveRoom] = useState<RoomType>("Living Room");
  const [hoveredRoom, setHoveredRoom] = useState<RoomType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const roomData: Record<RoomType, RoomItem[]> = {
    "Living Room": [
      { image: "https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img1.jpg" },
      { image: "https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img2.jpg" },
      { image: "https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img3.jpg" },
      { image: "https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img4.jpg" },
      { image: "https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img5.jpg" },
      { image: "https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img6.jpg" }
    ],
    "Kitchen Room": [ 
       { image: "https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img1.jpg" }, 
       { image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//KITCHEN%202.png" }, 
       { image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//KITCHEN%203.png" }, 
       { image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//KITCHEN%204.png" }, 
       { image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//kitchen6.jpg" }, 
       { image: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//Kitchen5.jpg" } 
      ],
    "Bed Room": [ { image: "/bed1.jpg" }, { image: "/bed2.jpg" }, { image: "/bed3.jpg" }, { image: "/bed4.jpg" }, { image: "/bed5.jpg" }, { image: "/bed1.jpg" } ],
    "Kids Room": [ { image: "/kids1.jpg" }, { image: "/kids2.jpg" }, { image: "/kids3.jpg" }, { image: "/kids4.jpg" }, { image: "/kids5.jpg" }, { image: "/kids1.jpg" } ],
    "Devotional Room": [ { image: "/temple1.jpg" }, { image: "/temple2.jpg" }, { image: "/temple3.jpg" }, { image: "/templ5.jpg" }, { image: "/temple6.jpg" }, { image: "/temple2.jpg" } ]
  };

  const roomTypes = Object.keys(roomData) as RoomType[];

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 1024) return;
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roomData[activeRoom].length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeRoom, isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % roomData[activeRoom].length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + roomData[activeRoom].length) % roomData[activeRoom].length
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    preventScrollOnSwipe: true,
    trackMouse: false
  });

  return (
    <div className="w-full bg-[#F1F2F6] py-50 px-6 sm:px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="wulkan-display-bold text-2xl md:text-3xl lg:text-[40px] text-amber-950 lg:ml-16 lg:mb-25 mb-10  lg:text-left">
          Every space has a story, start yours here
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 manrope ">
          {/* Sidebar (Desktop) */}
          <div className="hidden lg:flex flex-col w-[240px] flex-shrink-0 sticky top-20 self-start">
            {roomTypes.map((room) => (
              <div
                key={room}
                className="relative h-[50px] mb-6 cursor-pointer"
                onMouseEnter={() => setHoveredRoom(room)}
                onMouseLeave={() => setHoveredRoom(null)}
                onClick={() => setActiveRoom(room)}
              >
                <div
                  className={`absolute inset-0 rounded-3xl transition-all duration-300 z-0 ${
                    hoveredRoom === room ? "bg-[#DDCDC1] opacity-100 w-[190px] ml-14 " : "opacity-0"
                  }`}
                />
                <h1 className="manrope-semibold relative z-10 text-left text-lg h-full flex items-center pl-18">
                  {room}
                </h1>
              </div>
            ))}
          </div>

          {/* Tabs (Mobile) */}
          <div className="lg:hidden mb-6 flex overflow-x-auto gap-3 hide-scrollbar">
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
                    ? "bg-[#DDCDC1] text-amber-950 .manrope-semibold"
                    : "bg-white text-gray-700 .manrope-semibold"
                }`}
              >
                {room}
              </button>
            ))}
          </div>

          {/* Image Grid (Desktop) */}
          <div className="hidden lg:flex flex-wrap gap-6 flex-1 justify-center">
            {roomData[activeRoom].map((item, index) => (
              <div
                key={`${activeRoom}-${index}`}
                className="w-[280px] h-[320px] rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={item.image}
                  alt={`${activeRoom} design ${index + 1}`}
                  width={280}
                  height={320}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Swipe Carousel (Mobile) */}
          <div className="lg:hidden relative" {...swipeHandlers}>
            <div className="relative h-[300px] w-full rounded-2xl overflow-hidden">
              <Image
                src={roomData[activeRoom][currentIndex].image}
                alt={`${activeRoom} design ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Controls */}
            <button
              onClick={goToPrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 text-amber-900 p-3 rounded-full shadow-md"
            >
              ◀
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 text-amber-900 p-3 rounded-full shadow-md"
            >
              ▶
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {roomData[activeRoom].map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-[#DDCDC1]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
