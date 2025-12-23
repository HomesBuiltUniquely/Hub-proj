'use client';

import { useState, useRef, useEffect } from 'react';


export default function Section7() {
  const steps = [
    { number: '01', title: 'Meet Our Designers', description: 'Visit our Experience Centre or consult online with our expert designers' },
    { number: '02', title: 'Custom Design Plan', description: 'We create personalized 3D designs tailored to your space, style, and budget.' },
    { number: '03', title: 'Material Selection', description: 'Choose from premium materials, finishes, and color palettes for your interiors.' },
    { number: '04', title: 'Installation Day', description: 'Our skilled craftsmen deliver and install your perfect interiors with precision.' },
  ];

  /* ===================== */
  /* STATE */
  /* ===================== */

  const [progress, setProgress] = useState(0);

  const controller2560Ref = useRef<HTMLDivElement | null>(null);
  const controller1920Ref = useRef<HTMLDivElement | null>(null);
  const controller1280Ref = useRef<HTMLDivElement | null>(null);


  /* ===================== */
  /* CONSTANTS */
  /* ===================== */

  const MAX_SCROLL_2560 = 350;
  const MAX_SCROLL_1920 = 350;
  const MAX_SCROLL_1280 = 400;



  /* ===================== */
  /* UP / DOWN OFFSETS */
  /* ===================== */

  const yOffsets2560 = [0, 130, 0, 130];
  const yOffsets1920 = [0, 130, 0, 130];
  const yOffsets1280 = [0, 90, 0, 90];


  /* ===================== */
  /* HELPERS */
  /* ===================== */

  const updateProgress = (
    clientX: number,
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setProgress(x / rect.width);
  };

  const startDrag = (
    clientX: number,
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    updateProgress(clientX, ref);

    const onMove = (e: MouseEvent) => {
      updateProgress(e.clientX, ref);
    };

    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };


  // mobile 

  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const [mobileProgress, setMobileProgress] = useState(0);

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;

    const el = mobileScrollRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;

    if (maxScroll <= 0) {
      setMobileProgress(1);
      return;
    }


    const CARD_WIDTH = 200; // your card width


    const visibleOffset = el.clientWidth - CARD_WIDTH;

    const effectiveScroll = Math.min(
      el.scrollLeft + visibleOffset,
      maxScroll
    );

    setMobileProgress(effectiveScroll / maxScroll);
  };

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      handleMobileScroll();
    });

    return () => cancelAnimationFrame(raf);
  }, []);


  return (
    <div>
      {/* VISIBILITY CONTROLS */}
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
        @media (min-width: 1440px) and (max-width: 1920px) {
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


      {/* ===================== */}
      {/* 2560 VERSION */}
      {/* ===================== */}

      <div className="desktop-2560 w-full py-20 px-20 relative overflow-hidden mt-5">
        <h1 className="text-5xl manrope mb-20">
          Home Interiors in 4 <span className="text-red-600">Simple</span>
          <p className="mt-4 text-red-600"> Steps</p>
        </h1>

        <div className="relative w-full overflow-hidden">


          {/* CARDS */}
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${progress * MAX_SCROLL_2560}px)` }}
          >

            {/* 1 → 2 */}
            <svg
              className="absolute left-[70px] top-[120px] pointer-events-none rotate-40"
              width="600"
              height="360"
              viewBox="0 0 600 360"
            >
              <path
                d="M0 40 C220 360 380 360 600 120"
                stroke="#2B2B2B"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

            </svg>

            {/* 2 → 3 */}

            <svg
              className="absolute left-[540px] -top-[10px] pointer-events-none rotate-125"
              width="600"
              height="360"
              viewBox="0 0 600 360"
            >
              <path
                d="M0 40 C220 360 380 360 600 120"
                stroke="#2B2B2B"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

            </svg>


            {/* 3 → 4 */}

            <svg
              className="absolute left-[950px] top-[120px] pointer-events-none rotate-40"
              width="600"
              height="360"
              viewBox="0 0 600 360"
            >
              <path
                d="M0 40 C220 360 380 360 600 120"
                stroke="#2B2B2B"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

            </svg>



            {/* DOTS */}
            {/* 1 → 2 */}
            <div className="absolute top-[420px] left-[360px] w-5 h-5 bg-red-600 rounded-full" />
            {/* 2 → 3 */}
            <div className="absolute top-[40px] left-[820px] w-5 h-5 bg-red-600 rounded-full" />
            {/* 3 → 4 */}
            <div className="absolute top-[415px] left-[1230px] w-5 h-5 bg-red-600 rounded-full" />



            {steps.map((step, i) => (
              <div
                key={step.number}
                style={{ transform: `translateY(${yOffsets2560[i]}px)` }}
                className={`w-[340px] h-[340px] bg-white rounded-3xl px-5
                  flex flex-col justify-center space-y-5 shadow-sm flex-shrink-0
                  ${i !== steps.length - 1 ? 'mr-[100px]' : ''}`}
              >
                <div className="text-8xl text-[#DDCDC1] manrope-semibold">
                  {step.number}
                </div>
                <h3 className="text-3xl manrope">{step.title}</h3>
                <p className="manrope-medium">{step.description}</p>
              </div>
            ))}
          </div>

          {/* CONTROLLER */}
          <div className="mt-50 mb-10 px-3">
            <div
              ref={controller2560Ref}
              className="relative w-full h-[2px] bg-black/40 cursor-pointer"
              onMouseDown={(e) => startDrag(e.clientX, controller2560Ref)}
              onTouchStart={(e) =>
                updateProgress(e.touches[0].clientX, controller2560Ref)
              }
              onTouchMove={(e) =>
                updateProgress(e.touches[0].clientX, controller2560Ref)
              }
            >
              <div
                className="absolute top-0 left-0 h-[2px] bg-red-600"
                style={{ width: `${progress * 100}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full"
                style={{ left: `calc(${progress * 100}% - 8px)` }}
              />
            </div>
          </div>
        </div>
      </div>



      {/* 1920 Version */}

      <div className="desktop-1920 w-full py-20 px-20 relative overflow-hidden mt-5">
        <h1 className="text-5xl manrope mb-20">
          Home Interiors in 4 <span className="text-red-600">Simple</span>
          <p className="mt-4 text-red-600"> Steps</p>
        </h1>

        <div className="relative w-full overflow-hidden">


          {/* CARDS */}
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${progress * MAX_SCROLL_1920}px)` }}
          >

            {/* 1 → 2 */}
            <svg
              className="absolute left-[70px] top-[120px] pointer-events-none rotate-40"
              width="600"
              height="360"
              viewBox="0 0 600 360"
            >
              <path
                d="M0 40 C220 360 380 360 600 120"
                stroke="#2B2B2B"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

            </svg>

            {/* 2 → 3 */}

            <svg
              className="absolute left-[540px] -top-[10px] pointer-events-none rotate-125"
              width="600"
              height="360"
              viewBox="0 0 600 360"
            >
              <path
                d="M0 40 C220 360 380 360 600 120"
                stroke="#2B2B2B"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

            </svg>


            {/* 3 → 4 */}

            <svg
              className="absolute left-[950px] top-[120px] pointer-events-none rotate-40"
              width="600"
              height="360"
              viewBox="0 0 600 360"
            >
              <path
                d="M0 40 C220 360 380 360 600 120"
                stroke="#2B2B2B"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

            </svg>


            {/* DOTS */}
            {/* 1 → 2 */}
            <div className="absolute top-[420px] left-[360px] w-5 h-5 bg-red-600 rounded-full" />
            {/* 2 → 3 */}
            <div className="absolute top-[40px] left-[820px] w-5 h-5 bg-red-600 rounded-full" />
            {/* 3 → 4 */}
            <div className="absolute top-[435px] left-[1280px] w-5 h-5 bg-red-600 rounded-full" />


            {steps.map((step, i) => (
              <div
                key={step.number}
                style={{ transform: `translateY(${yOffsets1920[i]}px)` }}
                className={`w-[340px] h-[340px] bg-white rounded-3xl px-5
                  flex flex-col justify-center space-y-5 shadow-sm flex-shrink-0
                  ${i !== steps.length - 1 ? 'mr-[100px]' : ''}`}
              >
                <div className="text-8xl text-[#DDCDC1] manrope-semibold">
                  {step.number}
                </div>
                <h3 className="text-3xl manrope">{step.title}</h3>
                <p className="manrope-medium">{step.description}</p>
              </div>
            ))}
          </div>

          {/* CONTROLLER */}
          <div className="mt-50 mb-10 px-3">
            <div
              ref={controller1920Ref}
              className="relative w-full h-[2px] bg-black/40 cursor-pointer"
              onMouseDown={(e) => startDrag(e.clientX, controller1920Ref)}
              onTouchStart={(e) =>
                updateProgress(e.touches[0].clientX, controller1920Ref)
              }
              onTouchMove={(e) =>
                updateProgress(e.touches[0].clientX, controller1920Ref)
              }
            >
              <div
                className="absolute top-0 left-0 h-[2px] bg-red-600"
                style={{ width: `${progress * 100}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full"
                style={{ left: `calc(${progress * 100}% - 8px)` }}
              />
            </div>
          </div>
        </div>
      </div>



      {/* ===================== */}
      {/* 1280 VERSION */}
      {/* ===================== */}
      <div className="desktop-1280 px-15 w-full  py-20 relative overflow-hidden mt-5">
        <div className="mb-20 ">
          <h1 className="text-5xl manrope">
            Home Interiors in 4 <span className="text-red-600">Simple</span>
            <p className="mt-4 text-red-600"> Steps</p>
          </h1>
        </div>

        <div className="relative w-full mx-auto overflow-hidden">

          {/* CARDS */}
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${progress * MAX_SCROLL_1280}px)` }}
          >


            {/* 1 → 2 */}
            <svg
              className="absolute left-[40px] top-[120px] pointer-events-none rotate-40"
              width="600"
              height="300"
              viewBox="0 010 600 360"
            >
              <path
                d="M0 40 C220 360 380 360 600 120"
                stroke="#2B2B2B"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

            </svg>

            {/* 2 → 3 */}

            <svg
              className="absolute left-[450px] -top-[10px] pointer-events-none rotate-135"
              width="600"
              height="230"
              viewBox="0 0 600 360"
            >
              <path
                d="M0 40 C220 360 380 360 600 120"
                stroke="#2B2B2B"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

            </svg>


            {/* 3 → 4 */}

            <svg
              className="absolute left-[840px] top-[120px] pointer-events-none rotate-40"
              width="600"
              height="300"
              viewBox="0 010 600 360"
            >
              <path
                d="M0 40 C220 360 380 360 600 120"
                stroke="#2B2B2B"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

            </svg>



            {/* DOTS */}
            {/* 1 → 2 */}
            <div className="absolute top-[368px] left-[350px] w-5 h-5 bg-red-600 rounded-full" />
            {/* 2 → 3 */}
            <div className="absolute top-[18px] left-[750px] w-5 h-5 bg-red-600 rounded-full z-5" />
            {/* 3 → 4 */}
            <div className="absolute top-[368px] left-[1150px] w-5 h-5 bg-red-600 rounded-full" />




            {steps.map((step, i) => (
              <div
                key={step.number}
                style={{ transform: `translateY(${yOffsets1280[i]}px)` }}
                className={`w-[340px] bg-white rounded-2xl p-8 shadow-sm flex-shrink-0
                  ${i !== steps.length - 1 ? 'mr-[60px]' : ''}`}
              >
                <div className="text-8xl text-[#DDCDC1] mb-4 manrope-semibold">
                  {step.number}
                </div>
                <h3 className="text-3xl manrope-medium mb-3">
                  {step.title}
                </h3>
                <p className="manrope-medium">{step.description}</p>
              </div>
            ))}
          </div>

          {/* CONTROLLER */}
          <div className="mt-40 mb-10 px-3">
            <div
              ref={controller1280Ref}
              className="relative w-full h-[2px] bg-black/40 cursor-pointer"
              onMouseDown={(e) => startDrag(e.clientX, controller1280Ref)}
              onTouchStart={(e) =>
                updateProgress(e.touches[0].clientX, controller1280Ref)
              }
              onTouchMove={(e) =>
                updateProgress(e.touches[0].clientX, controller1280Ref)
              }
            >
              <div
                className="absolute top-0 left-0 h-[2px] bg-red-600"
                style={{ width: `${progress * 100}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full"
                style={{ left: `calc(${progress * 100}% - 8px)` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===================== */}
      {/* MOBILE VERSION */}
      {/* ===================== */}
      <div className="lg:hidden px-3 w-full relative mt-5 overflow-x-hidden overflow-y-hidden">

        {/* Heading */}
        <div>
          <h1 className="text-4xl manrope-medium w-full leading-tight">
            Home Interiors in 4
            <span className="block mt-1 text-4xl text-red-600">
              Simple Steps
            </span>
          </h1>
        </div>

        {/* Scroll Container */}
        <div className="relative w-full mx-auto overflow-hidden">
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="relative flex overflow-x-auto overflow-y-hidden no-scrollbar mt-10 mb-6 gap-[20px] h-full"
            style={{
              scrollSnapType: 'proximity',
              scrollBehavior: 'smooth',
            }}
          >


            {/* Cards */}
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`w-[200px] h-[200px] bg-white rounded-2xl z-20
            flex flex-col justify-center items-start text-start flex-shrink-0 px-3
            ${i !== steps.length - 1 ? 'mr-[0px]' : ''}`}
              >
                <div className="text-3xl text-[#DDCDC1] mb-2 manrope-semibold">
                  {step.number}
                </div>

                <h3 className="text-xl w-[140px] manrope-medium mb-2">
                  {step.title}
                </h3>

                <p className="text-sm w-[180px] mb-1 manrope-medium">
                  {step.description}
                </p>
              </div>
            ))}



          </div>
          {/* MOBILE PROGRESS BAR */}
          <div className="mt-4 mb-4 px-2">
            <div className="relative w-full h-[2px] bg-black/30">
              <div
                className="absolute top-0 left-0 h-[2px] bg-red-600 transition-all duration-150"
                style={{ width: `${mobileProgress * 100}%` }}
              />

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}



{/* Red Dot */ }
{/* <div className="absolute top-[245px] left-[200px] w-5 h-5 bg-red-600 rounded-full z-5" /> */ }

{/* Connector SVG */ }

{/* 1-2 */ }

{/* <svg
              className="absolute left-[40px] top-[50px] pointer-events-none overflow-hidden"
              width="300"
              height="300"
              viewBox="0 0 600 360"
            >
              <path
                d="M0 40 C220 360 380 360 600 120"
                stroke="#2B2B2B"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg> */}


{/* 2-3 */ }

{/* <div className="absolute top-[245px] left-[200px] w-5 h-5 bg-red-600 rounded-full z-5" />

            <svg
              className="absolute left-[240px] top-[5px] pointer-events-none overflow-hidden"
              width="300"
              height="300"
              viewBox="0 0 600 360"
            >
              <path
                d="M0 320 C220 0 380 0 600 240"
                stroke="#2B2B2B"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg> */}


{/* DOTS */ }

{/* 1 → 2 */ }
{/* <div className="absolute top-[325px] left-[200px] w-5 h-5 bg-red-600 rounded-full" /> */ }

{/* THIN THREAD */ }
{/* 1 → 2 */ }
{/* <svg
              className="absolute left-[35px] top-[80px] pointer-events-none "
              width="300"
              height="300"
              viewBox="0 010 600 360"
            >
              <path
                d="M0 40 C220 360 380 360 600 120"
                stroke="#2B2B2B"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

            </svg> */}