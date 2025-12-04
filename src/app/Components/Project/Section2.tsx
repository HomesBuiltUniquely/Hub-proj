
"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useRef } from "react";




const FeaturedProjects = [
  { img: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/FP!.webp", title: "Designed for Life, Not Just Looks", path: `/Blog/Blog2`, button: "Get free estimate", estpath: `/GetEstimate`, description: "Warm & Functional Home Interiors by HUB Interior for Mr. Rijul at Azizam", BHK: "BHK", NO: "3BHK" },
  { img: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/FP3.webp", title: "Quiet Luxury Meets Thoughtful Living", path: `/Blog/Blog1`, button: "Get free estimate", estpath: `/GetEstimate`, description: "HUB Interior’s Modern Home Interior Design at Bhoo Aabharana, Bengaluru", BHK: "BHK", NO: "3BHK" },
  { img: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/FP2.webp", title: "Royal Tulip Villa", path: `/Blog/Blog4`, button: "Get free estimate", estpath: `/GetEstimate`, description: "HUB Interior Creates a Home Filled with Story, Elegance & Comfort for the George Family", BHK: "BHK", NO: "3BHK" },
  { img: "https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/iam.web3.webp", title: "Peaceful Retreat Designed with Care", path: `/Blog/Blog5`, button: "Get free estimate", estpath: `/GetEstimate`, description: "Modern Home Interior by HUB for Mr. Allen & Mrs. Ann", BHK: "BHK", NO: "3BHK" },
];


const CardSection = ({
  cards,
  scrollDirection = 1,

}: {
  cards: typeof FeaturedProjects;
  scrollDirection?: 1 | -1;

}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    if (scrollDirection === 1) {
      el.scrollLeft = el.scrollWidth - el.clientWidth;
    } else {
      el.scrollLeft = 0;
    }

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY * -scrollDirection;
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, [scrollDirection]);

  const router = useRouter();





  return (
    <section className="w-full py-8 md:py-12 bg-[#f1f2f6]">



      <style jsx>{`
  /* Default: Hide all desktops */
  .desktop-2560,
  .desktop-1920,
  .desktop-1280 {
    display: none;
  }

  /* 1280 layout for screens 768px–1439px */
  @media (min-width: 768px) and (max-width: 1439px) {
    .desktop-1280 {
      display: block;
    }
  }

  /* 1920 layout for 1440px–1919px */
  @media (min-width: 1440px) and (max-width: 1919px) {
    .desktop-1920 {
      display: block !important;
    }
  }

  /* 2560 layout for 1920px and above */
  @media (min-width: 1920px) {
    .desktop-2560 {
      display: block;
    }
  }
`}</style>


      {/* Desktop Version */}
      <div className="desktop-2560 hidden md:block w-[1440px] h-[710px] ">

        {/* Featured Projects */}
        <div className="w-full max-w-5xl px-5 ml-5 ">
          <h2 className="text-[50px]  mb-1  text-gray-900 wulkan-display-bold">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-[20px] mb-10 manrope-medium">A glimpse at our best work</p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-7 overflow-x-auto scrollbar-none px-2 md:px-0 pb-15 w-full md:max-w-[1360px] mx-auto "
          style={{ paddingRight: "px" }}
        >
          {cards.map((card, idx) => {
            function handleCardClick() {
              if (card.path) router.push(card.path);
            }

            function handleEstimateClick() {
              router.push(card.estpath);
            }




            return (
              <div
                key={idx}
                onClick={handleCardClick}
                className="min-w-[350px] max-w-[950] bg-white rounded-[32px] shadow-lg overflow-hidden group transition hover:shadow-2xl"
                style={{ height: "475px" }}
              >

                <Image src={card.img} alt="images" width={870} height={250} className="w-800 h-55" />

                <div className="manrope-medium ml-3 text-bold text-2xl gap-1 m-3 h-15">
                  {card.title}
                </div>

                <div className="ml-3 text-sm w-80 h-10 m-5 manrope-medium">
                  {card.description}
                </div>

                {/* line */}
                <div className="w-auto h-0.5 bg-[#f1f2f6]">
                </div>

                <div className="ml-3 m-3 manrope-medium text-gray-500">
                  {card.BHK} <div className="text-black manrope">{card.NO}</div>
                </div>



                <div className="-mt-10 ml-[160px] flex justify-center">
                  <button

                    onClick={(e) => { e.stopPropagation(); handleEstimateClick(); }}
                    className="h-[35px] px-4 bg-red-500 rounded-full text-white manrope text-sm whitespace-nowrap hover:bg-red-600 transition-colors duration-200 drop-shadow-lg"
                  >
                    {card.button}
                  </button>
                </div>


              </div>
            )

          })}
        </div>
      </div>


      {/* 1920 Version */}

      <div className="desktop-1920 hidden md:block h-[710px] mx-auto px-20">


        {/* Featured Projects */}
        <div className="w-full">
          <h2 className="text-[50px]  mb-1  text-gray-900 wulkan-display-bold">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-[20px] mb-10 manrope-medium">A glimpse at our best work</p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-7 overflow-x-auto scrollbar-none px-2 md:px-0 pb-10  mx-auto "
          style={{ paddingRight: "px" }}
        >
          {cards.map((card, idx) => {
            function handleCardClick() {
              if (card.path) router.push(card.path);
            }

            function handleEstimateClick() {
              router.push(card.estpath);
            }




            return (
              <div
                key={idx}
                onClick={handleCardClick}
                className="min-w-[350px] max-w-[950] bg-white rounded-[32px] shadow-lg overflow-hidden group transition hover:shadow-2xl"
                style={{ height: "475px" }}
              >

                <Image src={card.img} alt="images" width={870} height={250} className="w-800 h-55" />

                <div className="manrope-medium ml-3 text-bold text-2xl gap-1 m-3 h-15">
                  {card.title}
                </div>

                <div className="ml-3 text-sm w-80 h-10 m-5 manrope-medium">
                  {card.description}
                </div>

                {/* line */}
                <div className="w-auto h-0.5 bg-[#f1f2f6]">
                </div>

                <div className="ml-3 m-3 manrope-medium text-gray-500">
                  {card.BHK} <div className="text-black manrope">{card.NO}</div>
                </div>



                <div className="-mt-10 ml-[160px] flex justify-center">
                  <button

                    onClick={(e) => { e.stopPropagation(); handleEstimateClick(); }}
                    className="h-[35px] px-4 bg-red-500 rounded-full text-white manrope text-sm whitespace-nowrap hover:bg-red-600 transition-colors duration-200 drop-shadow-lg"
                  >
                    {card.button}
                  </button>
                </div>


              </div>
            )

          })}
        </div>
      </div>



      {/* 1280 version */}

      <div className="desktop-1280 ">

        <div className=" w-[1280px] h-[800px] mx-auto mb-5 relative px-15">

          <div className="w-full max-w-5xl">
            <h2 className="text-[50px]  mb-1  text-gray-900 wulkan-display-bold">
              Featured Projects
            </h2>
            <p className="text-gray-600 text-[20px] mb-10 manrope-medium">A glimpse at our best work</p>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-7 overflow-x-scroll always-show-scrollbar px-2 md:px-0 pb-12 w-full mx-auto"
            style={{ paddingRight: "px" }}
          >

            {cards.map((card, idx) => {
              function handleCardClick() {
                if (card.path) router.push(card.path);
              }

              function handleEstimateClick() {
                router.push(card.estpath);
              }


              return (
                <div
                  key={idx}

                  onClick={handleCardClick}
                  className="min-w-[350px] max-w-[750] bg-white rounded-[32px] shadow-lg overflow-hidden group transition hover:shadow-10xl"
                  style={{ height: "475px" }}
                >

                  <Image src={card.img} alt="images" width={470} height={250} className="w-600 h-55" />

                  <div className="manrope-medium ml-3 text-bold text-2xl gap-1 m-3 h-15">
                    {card.title}
                  </div>

                  <div className="ml-3 text-sm w-80 h-10 m-5 manrope-medium">
                    {card.description}
                  </div>

                  {/* line */}
                  <div className="w-auto h-0.5 bg-[#f1f2f6]">
                  </div>

                  <div className="ml-3 m-3 manrope-medium text-gray-500">
                    {card.BHK} <div className="text-black manrope">{card.NO}</div>
                  </div>



                  <div className="-mt-10 ml-[160px] flex justify-center">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleEstimateClick(); }}
                      className="h-[35px] px-4 bg-red-500 rounded-full text-white manrope text-sm whitespace-nowrap hover:bg-red-600 transition-colors duration-200 drop-shadow-lg"
                    >
                      {card.button}
                    </button>
                  </div>


                </div>
              )

            })}
          </div>

        </div>

      </div>


      {/* mobile version  */}


      <div className="block md:hidden px-4 h-screen w-full max-w-[425px] mx-auto mb-5">


        <div className=' mt- manrope-medium '>
          <div className="flex flex-row">
            <div className="w-0.75 h-10 bg-[#ebd657] ml-2">
              <h2 className="text-3xl tracking-wide wulkan-display-bold text-nowrap ml-3">Featured Projects</h2>
            </div>
            <p className="text-gray-600 text-[15px] manrope-bold mt-12  text-nowrap -ml-1">A glimpse at our best work</p>
          </div>
        </div>


        <div
          ref={scrollRef}
          className="flex gap-7 overflow-x-scroll scrollbar-none  px-2 md:px-0 -mt-2  w-full max-w-[645]  mx-auto h-[450px]"
          style={{ paddingLeft: "px" }}
        >
          {cards.map((card, idx) => {
            function handleCardClick() {
              if (card.path) router.push(card.path);
            }

            function handleEstimateClick() {
              router.push(card.estpath);
            }


            return (
              <div
                key={idx}

                onClick={handleCardClick}
                className="min-w-[250px] max-w-[750] bg-white rounded-[23px] shadow-lg overflow-hidden group transition hover:shadow-2xl mt-8"
                style={{ height: "355px" }}
              >

                <Image src={card.img} alt="images" width={470} height={250} className="w-450 h-40" />

                <div className="manrope-medium ml-3 text-bold text-xl w-50 gap-1 mt-3 h-15">
                  {card.title}
                </div>

                <div className="ml-3 text-xs w-50 h-10 mt-1 mb-3 manrope-medium">
                  {card.description}
                </div>

                <div className="ml-3 mt-5 manrope-medium text-gray-500 text-sm">
                  {card.BHK} <div className="text-black manrope">{card.NO}</div>
                </div>



                <div className="-mt-10 ml-[66px] flex justify-center">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleEstimateClick(); }}
                    className=" px-4 py-2 text-xs mt-1 ml-4 bg-red-500 rounded-full text-white manrope-medium whitespace-nowrap hover:bg-red-600 transition-colors duration-200 drop-shadow-lg"
                  >
                    {card.button}
                  </button>
                </div>


              </div>
            )

          })}
        </div>

      </div>
    </section>


  );
};

const FeaturedProjectsAndEbook: React.FC = () => (
  <div className="bg-[#f9fafc] w-screen min-h-screen ">
    <CardSection
      cards={FeaturedProjects}
      scrollDirection={-1}
    />
  </div>
);


export default FeaturedProjectsAndEbook;
