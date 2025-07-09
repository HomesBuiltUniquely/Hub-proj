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
            
            // Responsive video sizing based on screen width
            const screenWidth = window.innerWidth;
            let baseWidth, maxWidth, baseHeight, maxHeight;
            
            if (screenWidth < 1280) { // Smaller screens
                baseWidth = 600;
                maxWidth = 800;
                baseHeight = 338;
                maxHeight = 450;
            } else { // Large screens
                baseWidth = 800;
                maxWidth = 1200;
                baseHeight = 450;
                maxHeight = 675;
            }
            
            const width = baseWidth + (maxWidth - baseWidth) * progress;
            const height = baseHeight + (maxHeight - baseHeight) * progress;
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
                    <p className="text-center text-base sm:text-lg font-medium text-amber-950 mb-9 mt-16">
                        Your Home Deserves More Than Just Design — it deserves the story only your home can tell
                    </p>
                    <div className="flex justify-center">
                        <Link href="/Contact">
                            <div className="w-[150px] h-[45px] bg-[#DDCDC1] manrope-medium text-center pt-2.5 rounded-full mt-5">
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

            {/* Desktop Layout (lg and above) - Responsive sizing */}
            <div className="hidden lg:block h-[1000px] xl:h-[1100px] 2xl:h-[1200px]" style={{backgroundColor: '#F1F2F6'}}>
                <div className="max-w-7xl mx-auto px-4 xl:px-8 2xl:px-12">
                    <div className="text-4xl lg:text-5xl xl:text-4xl 2xl:text-7xl mt-16 lg:mt-20 xl:mt-24 mb-4 font-medium text-amber-950 text-center tracking-wider pl-8 pt-10 gilda-display-regular">
                        Homes, Uniquely Built
                    </div>
                    <div className="text-center text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-amber-950 pl-10 pt-2 .manrope-semibold">
                        Your Home Deserves More Than Just Design — it deserves the story only your home can tell
                    </div>
                    <div className="flex justify-center mt-8 lg:mt-10 xl:mt-12">
                        <Link href="/Contact">
                            <div className="w-[140px] lg:w-[150px] xl:w-[160px] h-[40px] lg:h-[45px] xl:h-[50px] bg-[#DDCDC1] text-center pt-2 lg:pt-2.5 xl:pt-3 rounded-full manrope-medium  text-sm lg:text-base xl:text-lg">
                                Get Consultation
                            </div>
                        </Link>
                    </div>

                    <div className="flex justify-center items-start mt-8 lg:mt-6 xl:mt-8 2xl:mt-10">
                        {/* Left column */}
                        <div className="flex flex-col flex-shrink-0 flex-grow-0 w-[280px] lg:w-[320px] xl:w-[350px] 2xl:w-[400px]">
                            <div className="w-full h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[220px] ml-8 lg:ml-12 xl:ml-16 2xl:ml-20 rounded-2xl relative">
                                <Image 
                                    loading="lazy" 
                                    src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//img1.jpg" 
                                    alt="" 
                                    width={400} 
                                    height={220} 
                                    className="object-cover rounded-2xl w-full h-full"
                                />
                            </div>
                            <div className="w-[120px] lg:w-[130px] xl:w-[150px] 2xl:w-[160px] h-[120px] lg:h-[140px] xl:h-[170px] 2xl:h-[180px] rounded-2xl mt-16 lg:mt-20 xl:mt-24 2xl:mt-28 ml-20 lg:ml-24 xl:ml-28 2xl:ml-32">
                                <Image 
                                    loading="lazy" 
                                    src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//img3.jpg" 
                                    alt="" 
                                    width={160} 
                                    height={180} 
                                    className="object-cover rounded-2xl w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Center column */}
                        <div className="relative flex flex-col items-center justify-start flex-shrink-0 flex-grow-0 w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[900px] min-w-0">
                            <div
                                className="-ml-1 rounded-2xl flex items-center justify-center"
                                style={{
                                    position: 'absolute',
                                    left: '50%',
                                    top: '100px',
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
                        <div className="w-[200px] lg:w-[220px] xl:w-[270px] 2xl:w-[300px] h-[250px] lg:h-[280px] xl:h-[350px] 2xl:h-[380px] rounded-2xl mr-8 lg:mr-12 xl:mr-16 2xl:mr-20 ml-2 lg:ml-6 xl:ml-4 flex-shrink-0 flex-grow-0">
                            <Image 
                                loading="lazy" 
                                src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//img2.jpg" 
                                alt="" 
                                width={300} 
                                height={380} 
                                className="object-cover rounded-2xl w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}