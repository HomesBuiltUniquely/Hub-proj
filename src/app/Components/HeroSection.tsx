"use client"
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image'

export function HeroSection(){
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
            {/* Mobile/Tablet View (hidden on lg) */}
            <div className="lg:hidden h-[600px] sm:h-[700px] mt-22 flex flex-col items-center justify-start pt-12" style={{backgroundColor: '#F1F2F6'}}>
                <div className="w-full max-w-4xl px-4">
                    <h1 className="text-3xl sm:text-4xl font-semibold text-amber-950 text-center tracking-wider gilda-display-regular mb-10">
                        Homes, Uniquely Built
                    </h1>
                    <p className="text-center text-base sm:text-lg font-semibold text-amber-950 mb-9 mt-16">
                        Your Home Deserves More Than Just Design — it deserves the story only your home can tell
                    </p>
                    <div className="flex justify-center">
                        <Link href="/Contact">
                            <div className="w-[150px] h-[45px] bg-[#DDCDC1] text-center pt-2.5 rounded-full gilda-display-regular mt-5">
                                Get Consultation
                            </div>
                        </Link>
                    </div>
                    <div className="w-full flex justify-center mt-20">
                        <video
                            src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//DemoVideo.mp4"
                            className="w-full rounded-2xl shadow-lg"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>
                </div>
            </div>

            {/* Original LG Layout (unchanged) */}
            <div className="hidden lg:block h-[1000px]" style={{backgroundColor: '#F1F2F6'}}>
                <div className="">
                    <div className="text-5xl mt-29 mb-4 font-semibold text-amber-950 text-center tracking-wider pl-8 pt-10 gilda-display-regular">
                        Homes, Uniquely Built
                    </div>
                    <div className="text-center text-[18px] font-semibold text-amber-950 pl-10 pt-2">
                        Your Home Deserves More Than Just Design — it deserves the story only your home can tell
                    </div>
                    <Link href="/Contact">
                        <div className="w-[150px] h-[45px] bg-[#DDCDC1] ml-165 mt-10 text-center pt-2.5 rounded-full gilda-display-regular">
                            Get Consultation
                        </div>
                    </Link>
                    <div className="flex justify-center items-start">
                        {/* Left column */}
                        <div className="flex flex-col flex-shrink-0 flex-grow-0 w-[350px]">
                            <div className="w-[350px] h-[200px] ml-20 rounded-2xl relative">
                                <Image 
                                    loading="lazy" 
                                    src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//img1.jpg" 
                                    alt="" 
                                    width={350} 
                                    height={200} 
                                    className="object-cover rounded-2xl"
                                />
                            </div>
                            <div className="w-[150px] h-[170px] rounded-2xl mt-35 ml-40">
                                <Image 
                                    loading="lazy" 
                                    src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//img3.jpg" 
                                    alt="" 
                                    width={150} 
                                    height={170} 
                                    className="object-cover rounded-2xl w-[150px] h-[170px]"
                                />
                            </div>
                        </div>

                        {/* Center column */}
                        <div className="relative flex flex-col items-center justify-start flex-shrink-0 flex-grow-0 w-[800px] min-w-[800px] max-w-[800px]">
                            <div
                                className="-ml-1 rounded-2xl flex items-center justify-center"
                                style={{
                                    position: 'absolute',
                                    left: '50%',
                                    top: '120px',
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

                        {/* Right column */}
                        <div className="w-[270px] h-[350px] rounded-2xl mr-20 ml-2 flex-shrink-0 flex-grow-0">
                            <Image 
                                loading="lazy" 
                                src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//img2.jpg" 
                                alt="" 
                                width={270} 
                                height={350} 
                                className="object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}