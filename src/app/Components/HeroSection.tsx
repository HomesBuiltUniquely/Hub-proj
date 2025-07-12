"use client"
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

export function HeroSection() {
  const [videoSize, setVideoSize] = useState({ width: 800, height: 450 });
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  const [showMainTitle, setShowMainTitle] = useState(false);
  const [startFontAnimation, setStartFontAnimation] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showLayout, setShowLayout] = useState(false);

  const fonts = [
    'font-serif italic text-amber-950',
    'font-mono font-bold text-amber-950',
    'font-sans font-extrabold italic text-amber-950',
    'wulkan-display text-amber-950'
  ];

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    
    // Initial animation sequence
    setShowMainTitle(true);
    timeouts.push(setTimeout(() => setStartFontAnimation(true), 1000));
    
    // Font cycling animation
    timeouts.push(setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        if (i < fonts.length) {
          setCurrentFontIndex(i);
        } else {
          clearInterval(interval);
          // After font animation completes, show other elements
          setShowSubtext(true);
          timeouts.push(setTimeout(() => setShowButton(true), 500));
          timeouts.push(setTimeout(() => setShowLayout(true), 1000));
        }
      }, 500);
      timeouts.push(interval);
    }, 1500));

    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 500;
      const progress = Math.min(scrollY / maxScroll, 1);
      
      const screenWidth = window.innerWidth;
      let baseWidth, maxWidth, baseHeight, maxHeight;
      
      if (screenWidth < 1280) {
        baseWidth = 600;
        maxWidth = 800;
        baseHeight = 338;
        maxHeight = 450;
      } else {
        baseWidth = 800;
        maxWidth = 1200;
        baseHeight = 450;
        maxHeight = 675;
      }
      
      setVideoSize({
        width: baseWidth + (maxWidth - baseWidth) * progress,
        height: baseHeight + (maxHeight - baseHeight) * progress
      });
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Mobile/Tablet View */}
      <div className="lg:hidden h-[600px] sm:h-[700px] flex flex-col items-center justify-start pt-12 bg-[#F1F2F6]">
        <div className="w-full max-w-4xl px-4 mt-16">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={showMainTitle ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl text-amber-950 text-center tracking-wider gilda-display-regular mb-10"
          >
            <span className="manrope">Homes</span>{" "}
            {startFontAnimation ? (
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentFontIndex}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className={`inline-block ${fonts[currentFontIndex]}`}
                >
                  Uniquely
                </motion.span>
              </AnimatePresence>
            ) : (
              <span className="wulkan-display text-amber-950">Uniquely</span>
            )}{" "}
            <span className="manrope">Built</span>
          </motion.h1>

          <AnimatePresence>
            {showSubtext && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center text-base sm:text-lg font-semibold text-amber-950 mb-9 mt-16"
              >
                Your Home Deserves More Than Just Design — it deserves the story only your home can tell
              </motion.p>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showButton && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <Link href="/Contact">
                  <div className="manrope-medium w-[150px] h-[45px] bg-[#DDCDC1] flex items-center justify-center rounded-full mt-5 shadow-lg border-b-4 border-[#b8a48c] transition duration-150 active:translate-y-1 active:shadow hover:shadow-2xl cursor-pointer select-none text-base tracking-tight">
                    Get Consultation
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showLayout && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full flex justify-center mt-20"
              >
                <video
                  src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//DemoVideo.mp4"
                  className="w-full rounded-2xl shadow-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block h-[1000px] xl:h-[1100px] 2xl:h-[1200px] bg-[#F1F2F6]">
        <div className="max-w-7xl mx-auto px-4 xl:px-8 2xl:px-12 pt-40">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={showMainTitle ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl xl:text-[55px] 2xl:text-7xl mb-4 text-amber-950 text-center wulkan-display"
          >
            <motion.span 
              initial={{ x: 0 }}
              animate={showMainTitle ? { x: 32 } : {}}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="manrope-semibold text-[40px]"
            >
              HOMES
            </motion.span>{" "}
            {startFontAnimation ? (
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentFontIndex}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className={`inline-block ${fonts[currentFontIndex]}`}
                >
                  uniquely
                </motion.span>
              </AnimatePresence>
            ) : (
              <span className="wulkan-display text-amber-950">uniquely</span>
            )}{" "}
            <motion.span 
              initial={{ x: 0 }}
              animate={showMainTitle ? { x: -32 } : {}}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="manrope-semibold text-[40px]"
            >
              BUILT
            </motion.span>
          </motion.div>

          <AnimatePresence>
            {showSubtext && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-amber-950 pl-10 pt-2 .manrope-semibold"
              >
                Your Home Deserves More Than Just Design — it deserves the story only your home can tell
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showButton && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mt-8 lg:mt-10 xl:mt-12"
              >
                <Link href="/Contact">
                  <div className="manrope-semibold w-[140px] lg:w-[150px] xl:w-[200px] h-[40px] lg:h-[45px] xl:h-[50px] bg-[#DDCDC1] flex items-center justify-center rounded-full shadow-lg border-b-4 border-[#b8a48c] transition duration-150 active:translate-y-1 active:shadow hover:shadow-2xl cursor-pointer select-none text-base tracking-tight">
                    Get Consultation
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showLayout && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center items-start mt-8 lg:mt-6 xl:mt-8 2xl:mt-10"
              >
                {/* Left column */}
                <div className="flex flex-col flex-shrink-0 flex-grow-0 w-[280px] lg:w-[320px] xl:w-[350px] 2xl:w-[400px]">
                  <div className="w-full h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[220px] ml-8 lg:ml-12 xl:ml-16 2xl:ml-20 rounded-2xl relative shadow-2xl hover:shadow-3xl transition hover:-translate-y-1">
                    <Image 
                      loading="lazy" 
                      src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//img1.jpg" 
                      alt="" 
                      width={400} 
                      height={220} 
                      className="object-cover rounded-2xl w-full h-full"
                    />
                  </div>
                  <div className="w-[120px] lg:w-[130px] xl:w-[150px] 2xl:w-[160px] h-[120px] lg:h-[140px] xl:h-[170px] 2xl:h-[180px] rounded-2xl mt-16 lg:mt-20 xl:mt-24 2xl:mt-28 ml-20 lg:ml-24 xl:ml-28 2xl:ml-32 shadow-2xl hover:shadow-3xl transition hover:-translate-y-1">
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
                <div className="w-[200px] lg:w-[220px] xl:w-[270px] 2xl:w-[300px] h-[250px] lg:h-[280px] xl:h-[350px] 2xl:h-[380px] rounded-2xl mr-8 lg:mr-12 xl:mr-16 2xl:mr-20 ml-4 lg:ml-6 xl:ml-8 flex-shrink-0 flex-grow-0 shadow-2xl hover:shadow-3xl transition hover:-translate-y-1">
                  <Image 
                    loading="lazy" 
                    src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//img2.jpg" 
                    alt="" 
                    width={300} 
                    height={380} 
                    className="object-cover rounded-2xl w-full h-full"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}