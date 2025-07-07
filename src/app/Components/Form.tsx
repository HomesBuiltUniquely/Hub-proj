'use client';
import { useState } from 'react';
import Image from 'next/image';

type RoomType = 'Living Room' | 'Kitchen Room' | 'BedRoom' | 'Kids Room' | 'Devotional Room';

interface RoomItem {
  image: string;
}

export function Form() {
  const [activeRoom, setActiveRoom] = useState<RoomType>('Living Room');
  const [hoveredRoom, setHoveredRoom] = useState<RoomType | null>(null);

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

  return (
    <div className="min-h-screen mt-25 ml-30 text">
      <h1 className="text-4xl font-extrabold text-amber-950 tracking-wider gilda-display-regular mb-15">
        The Features You Need, The Simplicity You Want
      </h1>

      <div className="flex">
        {/* Sidebar with hover effect only */}
        <div className="w-[250px] sticky top-20 h-fit mt-10 ">
          {roomTypes.map((room) => (
            <div
              key={room}
              className="relative h-[50px] mb-10"
              onMouseEnter={() => setHoveredRoom(room)}
              onMouseLeave={() => setHoveredRoom(null)}
              onClick={() => setActiveRoom(room)}
            >
              {/* Hover background only */}
              <div
                className={`absolute inset-0 rounded-3xl transition-all duration-300 z-0 ${
                  hoveredRoom === room ? 'bg-[#DDCDC1] opacity-100' : 'opacity-0'
                }`}
              />
              <h1
                className="relative z-10 text-center text-[20px] font-bold cursor-pointer gilda-display-regular h-full flex items-center justify-center"
              >
                {room}
              </h1>
            </div>
          ))}
        </div>

        {/* Content section */}
        <div className="ml-20 flex-1">
          <div className="flex flex-wrap gap-6">
            {roomData[activeRoom].map((item, index) => (
              <div
                key={`${activeRoom}-${index}`}
                className="w-[290px] h-[330px] rounded-3xl overflow-hidden"
              >
                <Image
                  loading='lazy'
                  width={290} height={330}
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
