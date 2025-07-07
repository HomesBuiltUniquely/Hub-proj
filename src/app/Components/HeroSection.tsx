"use client"

import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image'

export function HeroSection(){
    // State to track scroll position
    const [videoSize, setVideoSize] = useState({ width: 800, height: 450 });

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;
            const maxScroll = 500;
            const progress = Math.min(scrollY / maxScroll, 1);
            const width = 800 + (1200 - 800) * progress;
            const height = 450 + (675 - 450) * progress;
            setVideoSize({ width, height });
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
        <div className="  h-[1000px]" style={{backgroundColor: '#F1F2F6'}}>
            <div className="">
            <div className="text-5xl mt-29  mb-4 font-semibold text-amber-950 text-center tracking-wider pl-8 pt-10 gilda-display-regular" >Homes, Uniquely Built</div>
            <div className="text-center text-[18px] font-semibold text-amber-950 pl-10 pt-2 " > Your Home Deserves More Than Just Design — it deserves the story only your home can tell </div>
            <Link href="/Contact"><div className="w-[150px] h-[45px] bg-[#DDCDC1] ml-165 mt-10 text-center pt-2.5 rounded-full gilda-display-regular  ">Get Consultation</div></Link>
                <div className="flex justify-center items-start ">
                    {/* Left column - fixed width, no grow/shrink */}
                    <div className="flex flex-col flex-shrink-0 flex-grow-0 w-[350px]">
                        <div className=" w-[350px] h-[200px] ml-20 rounded-2xl relative">
                            <Image loading="lazy" src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//img1.jpg" alt="" width={350} height={200} className="object-cover rounded-2xl"></Image>
                        </div>
                        <div className=" w-[150px] h-[170px] rounded-2xl mt-35 ml-40">
                            <Image loading="lazy" src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//img3.jpg" alt="" width={150} height={170} className="object-cover rounded-2xl w-[150px] h-[170px]"></Image>
                        </div>
                    </div>

                    {/* Center column - fixed width, relative for overlay, no grow/shrink */}
                    <div className="relative flex flex-col items-center justify-start flex-shrink-0 flex-grow-0 w-[800px] min-w-[800px] max-w-[800px]">
                        {/* Absolutely positioned expanding video, overlays but never shifts layout */}
                        <div
                            className=" -ml-1 rounded-2xl flex items-center justify-center"
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '120px', // adjust as needed
                                transform: 'translateX(-50%)',
                                width: videoSize.width,
                                height: videoSize.height,
                                zIndex: 20,
                                transition: 'width 0.3s, height 0.3s',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                                pointerEvents: 'none',
                                maxWidth: 'none',
                            }}
                        >
                            <video
                                src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//DemoVideo.mp4"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }}
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>
                    </div>
                    {/* Right column - fixed width, no grow/shrink */}
                    <div className= "w-[270px] h-[350px] rounded-2xl mr-20  ml-2 flex-shrink-0 flex-grow-0">
                        <Image loading="lazy" src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//img2.jpg" alt="" width={270} height={350} className="object-cover rounded-2xl "></Image>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}