"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

type RoomType =
  | "Living Room"
  | "Kitchen Room"
  | "BedRoom"
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
    "Kitchen Room": [ { image: "/kitchen1.jpg" }, { image: "/kitchen2.jpg" }, { image: "/kitchen3.jpg" }, { image: "/kitchen4.jpg" }, { image: "/kitchen5.jpg" }, { image: "/kitchen6.jpg" } ],
    BedRoom: [ { image: "/bed1.jpg" }, { image: "/bed2.jpg" }, { image: "/bed3.jpg" }, { image: "/bed4.jpg" }, { image: "/bed5.jpg" }, { image: "/bed6.jpg" } ],
    "Kids Room": [ { image: "/kids1.jpg" }, { image: "/kids2.jpg" }, { image: "/kids3.jpg" }, { image: "/kids4.jpg" }, { image: "/kids5.jpg" }, { image: "/kids6.jpg" } ],
    "Devotional Room": [ { image: "/pooja1.jpg" }, { image: "/pooja2.jpg" }, { image: "/pooja3.jpg" }, { image: "/pooja4.jpg" }, { image: "/pooja5.jpg" }, { image: "/pooja6.jpg" } ]
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
    <div className="w-full bg-[#F1F2F6] py-30 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl  text-amber-950 tracking-wider gilda-display-regular lg:mb-25 mb-10  lg:text-left">
          The Features You Need, The Simplicity You Want
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 ">
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
                    hoveredRoom === room ? "bg-[#DDCDC1] opacity-100" : "opacity-0"
                  }`}
                />
                <h1 className="relative z-10 text-center text-lg   .manrope-semibold h-full flex items-center justify-center">
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
