'use client';
import Image from "next/image";


export default function Section1() {
  return (

    <div>

      <style jsx>{`
        /* Hide both sections by default on mobile */
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

        

           /* Show 1920px layout for large desktops (1441px to 1920px) */
        @media (min-width: 1440px)  and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }

        
         /* Show  layout for large desktops (>1921px) */
        @media (min-width: 1921px) {
          .desktop-2560 {
            display: block !important;
          }
        }

      `}</style>


      <div className="desktop-2560 w-full max-w-8xl h-[900px] bg-[#F1F2F6] lg:rounded-b-4xl mt-10 hidden md:block ">
        <h1 className=" text-center w-[1010px] mx-auto text-2xl mt-5 lg:mx-auto manrope-medium">
          HUB Interior is India&#39;s leading and most innovative interior design company. We specialize in tailor-made solutions  from modular kitchen interiors to luxury villa interiors  designed to suit your lifestyle and professional needs. No compromises. Just personalized interiors that fit you perfectly.
        </h1>
        <div className="bg-[#F1F2F6] w-[1250px] h-auto  grid grid-cols-4 mt-10 gap-30 mx-85">

          <div className="grid grid-rows-2  mt-10 gap-6">
            <div className="w-[330px] h-[400px] bg-red-500 rounded-3xl">
              <Image src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img4.jpg" alt="Section 1" width={330} height={400} className="rounded-3xl h-[410px] object-cover" />
            </div>
            <div className="w-[330px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-10 pl-6 mt-3">
              10
              <h1 className="text-3xl manrope-medium pt-3">Years Warranty</h1>
              <p className="text-sm manrope-medium pt-2 w-[250px]">Every material we use and every detail we craft comes backed with a 10-year warranty — because timeless interiors deserve timeless trust..</p>
            </div>
          </div>
          <div className="grid grid-rows-2  mt-10">
            <div className="w-[330px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-10 pl-6">
              0%
              <h1 className="text-3xl manrope-medium pt-3">EMI</h1>
              <p className="text-sm manrope-medium pt-2 w-[250px]">Bring home the interiors you love with our 0% interest EMI plans — flexible, stress-free, and designed around your comfort.
              </p>
            </div>
            <div className="w-[330px] h-[400px] bg-red-500 rounded-3xl -mt-35">
              <Image src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img5.jpg" alt="Section 1" width={330} height={400} className="rounded-3xl h-[410px] object-cover" />
            </div>
          </div>
          <div className="grid grid-rows-2 mt-10 gap-6">
            <div className="w-[330px] h-[400px] bg-red-500 rounded-3xl">
              <Image src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img6.jpg" alt="Section 1" width={330} height={400} className="rounded-3xl h-[410px] object-cover" />
            </div>
            <div className="w-[330px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-10 pl-6  mt-3">
              Factory
              <h1 className="text-3xl manrope-medium pt-3">Finish</h1>
              <p className="text-sm manrope-medium pt-2 w-[250px]">Enjoy flawless factory-finish interiors with premium craftsmanship, seamless edges, and unmatched detailing — all tailored to your home.</p>
            </div>
          </div>
          <div className="grid grid-rows-2  mt-10">
            <div className="w-[330px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-10 pl-6">
              34
              <h1 className="text-3xl manrope-medium pt-3">Days Delivery</h1>
              <p className="text-sm manrope-medium pt-2 w-[250px]">Experience thoughtfully designed spaces with our fast-track delivery promise — without compromising on quality, detail, or elegance.
              </p>
            </div>
            <div className="w-[330px] h-[400px] bg-red-500 rounded-3xl -mt-35">
              <Image src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img2.jpg" alt="Section 1" width={330} height={400} className="rounded-3xl h-[410px] object-cover" />
            </div>
          </div>

        </div>
      </div>



      <div className="desktop-1920 hidden md:block mx-20">

        <div className="w-full h-[900px] bg-[#F1F2F6] lg:rounded-b-4xl mt-10">
          <h1 className=" text-center w-[1010px] mx-auto text-2xl mt-5 manrope-medium">
            HUB Interior is India&#39;s leading and most innovative interior design company. We specialize in tailor-made solutions  from modular kitchen interiors to luxury villa interiors  designed to suit your lifestyle and professional needs. No compromises. Just personalized interiors that fit you perfectly.
          </h1>
          <div className="bg-[#F1F2F6] w-max-[1920px] h-auto grid grid-cols-4 place-items-center ">

            <div className="grid grid-rows-2  mt-10 gap-3">
              <div className="w-[325px] h-[400px] bg-red-500 rounded-3xl">
                <Image src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img4.jpg" alt="Section 1" width={330} height={400} className="rounded-3xl h-[410px] object-cover" />
              </div>
              <div className="w-[325px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-8 pl-6 mt-3">
                10
                <h1 className="text-3xl manrope-medium pt-3">Years Warranty</h1>
                <p className="text-sm manrope-medium pt-2 w-[250px]">Every material we use and every detail we craft comes backed with a 10-year warranty — because timeless interiors deserve timeless trust..</p>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-36 -mt-26">
              <div className="w-[325px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-8 pl-6 ">
                0%
                <h1 className="text-3xl manrope-medium pt-3">EMI</h1>
                <p className="text-sm manrope-medium pt-2 w-[250px]">Bring home the interiors you love with our 0% interest EMI plans — flexible, stress-free, and designed around your comfort.
                </p>
              </div>
              <div className="w-[325px] h-[400px] bg-red-500 rounded-3xl -mt-35">
                <Image src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img5.jpg" alt="Section 1" width={330} height={400} className="rounded-3xl h-[410px] object-cover" />
              </div>
            </div>
            <div className="grid grid-rows-2 mt-10 gap-3">
              <div className="w-[325px] h-[400px] bg-red-500 rounded-3xl">
                <Image src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img6.jpg" alt="Section 1" width={330} height={400} className="rounded-3xl h-[410px] object-cover" />
              </div>
              <div className="w-[325px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-8 pl-6   mt-3">
                Factory
                <h1 className="text-3xl manrope-medium pt-3">Finish</h1>
                <p className="text-sm manrope-medium pt-2 w-[250px]">Enjoy flawless factory-finish interiors with premium craftsmanship, seamless edges, and unmatched detailing — all tailored to your home.</p>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-36 -mt-26">
              <div className="w-[320px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-8 pl-6 ">
                34
                <h1 className="text-3xl manrope-medium pt-3">Days Delivery</h1>
                <p className="text-sm manrope-medium pt-2 w-[250px]">Experience thoughtfully designed spaces with our fast-track delivery promise — without compromising on quality, detail, or elegance.
                </p>
              </div>
              <div className="w-[320px] h-[400px] bg-red-500 rounded-3xl -mt-35">
                <Image src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img2.jpg" alt="Section 1" width={330} height={400} className="rounded-3xl h-[410px] object-cover" />
              </div>
            </div>

          </div>
        </div>

      </div>



      {/* 1280 veersion */}

      <div className="desktop-1280 w-full max-w-[1240px] h-[900px] bg-[#F1F2F6] lg:rounded-b-4xl mt-10 mx-auto px-5">
          <h1 className=" text-center w-[1120px] mx-auto text-2xl mt-5 manrope-medium">
            HUB Interior is India&#39;s leading and most innovative interior design company. We specialize in tailor-made solutions  from modular kitchen interiors to luxury villa interiors  designed to suit your lifestyle and professional needs. No compromises. Just personalized interiors that fit you perfectly.
          </h1>
          <div className="bg-[#F1F2F6] w-full h-auto grid grid-cols-4 place-items-center mt-10 ">

            <div className="grid grid-rows-2  mt-10 gap-2">
              <div className="w-[280px] h-[400px] bg-red-500 rounded-3xl">
                <Image src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img4.jpg" alt="Section 1" width={330} height={400} className="rounded-3xl h-[410px] object-cover" />
              </div>
              <div className="w-[280px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-8 pl-3 mt-3">
                10
                <h1 className="text-3xl manrope-medium pt-3">Years Warranty</h1>
                <p className="text-sm manrope-medium pt-2 w-[250px]">Every material we use and every detail we craft comes backed with a 10-year warranty — because timeless interiors deserve timeless trust..</p>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-35 -mt-26">
              <div className="w-[280px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope  pt-8 pl-3">
                0%
                <h1 className="text-3xl manrope-medium pt-3">EMI</h1>
                <p className="text-sm manrope-medium pt-2 w-[250px]">Bring home the interiors you love with our 0% interest EMI plans — flexible, stress-free, and designed around your comfort.
                </p>
              </div>
              <div className="w-[280px] h-[400px] bg-red-500 rounded-3xl -mt-35">
                <Image src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img5.jpg" alt="Section 1" width={330} height={400} className="rounded-3xl h-[410px] object-cover" />
              </div>
            </div>
            <div className="grid grid-rows-2 mt-10 gap-2">
              <div className="w-[280px] h-[400px] bg-red-500 rounded-3xl">
                <Image src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img6.jpg" alt="Section 1" width={330} height={400} className="rounded-3xl h-[410px] object-cover" />
              </div>
              <div className="w-[280px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-8 pl-3  mt-3">
                Factory
                <h1 className="text-3xl manrope-medium pt-3">Finish</h1>
                <p className="text-sm manrope-medium pt-2 w-[250px]">Enjoy flawless factory-finish interiors with premium craftsmanship, seamless edges, and unmatched detailing — all tailored to your home.</p>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-35 -mt-26">
              <div className="w-[280px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope  pt-8 pl-3">
                34
                <h1 className="text-3xl manrope-medium pt-3">Days Delivery</h1>
                <p className="text-sm manrope-medium pt-2 w-[250px]">Experience thoughtfully designed spaces with our fast-track delivery promise — without compromising on quality, detail, or elegance.
                </p>
              </div>
              <div className="w-[280px] h-[400px] bg-red-500 rounded-3xl -mt-35">
                <Image src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img2.jpg" alt="Section 1" width={330} height={400} className="rounded-3xl h-[410px] object-cover" />
              </div>
            </div>

          </div>
        </div>



      {/* Mobile version - Adaptive */}
      <div className="block md:hidden" >
        <div className="w-full min-h-[700px] bg-[#F1F2F6] mt-6 px-4">
          <h1 className="text-center text-sm sm:text-base md:text-lg manrope-medium mt-4 px-1">
            HUB Interior is India&#39;s leading and most innovative interior design company. We specialize in tailor-made solutions from modular kitchen interiors to luxury villa interiors designed to suit your lifestyle and professional needs. No compromises. Just personalized interiors that fit you perfectly.
          </h1>

          <div className="mt-15">
            <div className="w-[2px] h-[35px] bg-[#ebd457] ml-"></div>
            <div className="-mt-10 text-4xl sm:text-3xl md:text-4xl wulkan-display-bold pl-4 sm:pl-6"> why choose us</div>
            <p className="text-left text-sm sm:text-base mt-4 manrope-medium pl-4 sm:pl-6 max-w-sm">We dont just deliver projects, we deliver experiences that last.</p>
          </div>


          {/* Mobile Grid Container */}
          <div className="flex justify-center mt-8 px-4">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-sm">
              {/* Top Row */}
              <div className="w-full h-[180px] sm:h-[200px]  border border-[#ddcdc1] rounded-3xl flex flex-col justify-center items-start pl-4">
                <h1 className="text-4xl sm:text-4xl manrope  text-[#ef0101] mb-2 -mt-6">
                  10
                </h1>
                <div className="text-lg sm:text-xl manrope-medium text-black">
                  Years
                </div>
                <div className="text-lg sm:text-xl manrope-medium text-black">
                  Warranty
                </div>
              </div>

              <div className="w-full h-[180px] sm:h-[200px]  border border-[#ddcdc1] rounded-3xl flex flex-col justify-center items-start pl-4">
                <h1 className="text-4xl sm:text-5xl manrope  text-[#ef0101] mb-2  -mt-10">
                  0%
                </h1>
                <div className="text-lg sm:text-xl manrope-medium text-black ml-1">
                  EMI
                </div>
              </div>

              {/* Bottom Row */}
              <div className="w-full h-[180px] sm:h-[200px]  border border-[#ddcdc1] rounded-3xl flex flex-col justify-center items-start pl-4">
                <h1 className="text-4xl sm:text-5xl manrope  text-[#ef0101] mb-2">
                  34
                </h1>
                <div className="text-lg sm:text-xl manrope-medium text-black">
                  Days
                </div>
                <div className="text-lg sm:text-xl manrope-medium text-black">
                  Delivery
                </div>
              </div>

              <div className="w-full h-[180px] sm:h-[200px]  border border-[#ddcdc1] rounded-3xl flex flex-col justify-center items-start pl-2">
                <h1 className="text-3xl sm:text-5xl manrope  text-[#ef0101] mb-2">
                  Factory
                </h1>
                <div className="text-lg sm:text-xl manrope-medium text-black">
                  Finish
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}