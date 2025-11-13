"use client"
import React from "react";


const BedroomSection: React.FC = () => {


  return (
    <div>
      <style jsx>{`
        /* Hide all mobile variants initially */
        .mobile-360plus,
        .mobile-300 {
          display: none;
        }

        /* Show 360–480px mobile variant */
        @media (min-width: 360px) and (max-width: 480px) {
          .mobile-360plus {
            display: block;
          }
          .mk-mobile-360 .menu {
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            height: 12%;
          }
        }

        /* Show 300–359px compact mobile variant */
        @media (min-width: 300px) and (max-width: 359px) {
          .mobile-300 {
            display: block;
          }
          .mk-mobile-300 .menu {
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
          }
        }
      `}</style>



       <style jsx>{`

  /* Hide both by default */
  .desktop-1280,
  .desktop-1440 {
    display: none !important;
  }

  /* Show 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
  @media (min-width: 1024px) and (max-width: 1439px) {
    .desktop-1280 {
      display: block !important;
    }
  }

  /* Show 1440px layout for large desktops (>=1440px) */
  @media (min-width: 1440px) {
    .desktop-1440 {
      display: block !important;
    }
  }
`}</style>




      <div className="desktop-1440">

      <section className="  bg-[#f1f2f6] h-[600px] flex items-center justify-center py-30">
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
          {/* Left: Card with description */}
          <div className=" hidden md:block bg-[#3a2b21] rounded-3xl px-9 py-10  flex-col justify-center md:w-1/2 w-full min-h-[350px]">
            <h2 className="text-4xl md:text-4xl manrope text-white mb-6">Ideal Bedroom</h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed manrope-medium">
              An ideal bedroom combines dreams, comfort, and feelings. HUB Interior offers more than just interior design — we create a cozy space that reflects your lifestyle and personality. As a trusted interior designer in Bengaluru, known for our cozy and comfortable bedroom interiors, we help you achieve your vision with warmth, care, and timeless elegance. Every corner of your bedroom is filled with thoughtful details, turning it into a sanctuary of peace and love.
            </p>
          </div>
          {/* Right: Bedroom image */}
          <div className="flex-1 md:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-xl md:h-full flex items-center bg-[#e8e5dd]">
              <img
                src="/bs1.jpg" // Replace with your actual bedroom image
                alt="Ideal Bedroom"
                className="w-full h-full object-cover hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>

      </div>



      <div className="desktop-1280">

        <section className="  bg-[#f1f2f6] h-[600px] flex items-center justify-center py-20">
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
          {/* Left: Card with description */}
          <div className=" hidden md:block bg-[#3a2b21] rounded-3xl px-9 py-10  flex-col justify-center md:w-1/2 w-full min-h-[350px]">
            <h2 className="text-3xl md:text-4xl manrope text-white mb-6">Ideal Bedroom</h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed manrope-medium">
              An ideal bedroom combines dreams, comfort, and feelings. HUB Interior offers more than just interior design — we create a cozy space that reflects your lifestyle and personality. As a trusted interior designer in Bengaluru, known for our cozy and comfortable bedroom interiors, we help you achieve your vision with warmth, care, and timeless elegance. Every corner of your bedroom is filled with thoughtful details, turning it into a sanctuary of peace and love.
            </p>
          </div>
          {/* Right: Bedroom image */}
          <div className="flex-1 md:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-xl md:h-full flex items-center bg-[#e8e5dd]">
              <img
                src="/bs1.jpg" // Replace with your actual bedroom image
                alt="Ideal Bedroom"
                className="w-full h-full object-cover hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>

      </div>







      {/* ===== MOBILE VERSION ===== */}


      {/* mobile version */}

      {/* Mobile Version (360px to 480px) */}
      <div className="md:hidden px-4 mk-mobile-360 mobile-360plus -mt-15 mb-20">
        <div className="relative h-[550] w-[full] ">

          <div className="relative bg-[#3a2b21] w-full pt-10 pb-10 rounded-[32px] overflow-hidden justify-items-center">

            <div className="grid grid-rows-2 ">


              <img src="/bs1.jpg" alt="Ideal Bedroom" className="rounded-3xl w-[280] h-50" />

              <h1 className="manrope-medium text-4xl text-white py-4 ">Ideal Bedroom</h1>

              <p className=" text-white manrope-medium w-70 -mt-32">
                An ideal bedroom combines dreams, comfort, and feelings. HUB Interior offers more than just interior design — we create a cozy space that reflects your lifestyle and personality. As a trusted interior designer in Bengaluru, known for our cozy and comfortable bedroom interiors, we help you achieve your vision with warmth, care, and timeless elegance. Every corner of your bedroom is filled with thoughtful details, turning it into a sanctuary of peace and love.
              </p>

            </div>


          </div>

        </div>
      </div>




      {/* Mobile Version (300px to 359px) */}
      <div className="block md:hidden">

        <div className="md:hidden p-3 -mb-15 -mt-5 mk-mobile-300 mobile-300 ">
          <div className="relative bg-[#3a2b21] w-full rounded-[32px] pt-10 pb-10 overflow-hidden justify-items-center">

            <div className="grid grid-rows-2 ">


              <img src="/bs1.jpg" alt="Ideal Bedroom" className="rounded-3xl w-[280] h-50" />

              <h1 className="manrope-medium text-4xl text-white py-4 ">Ideal Bedroom</h1>

              <p className=" text-white manrope-medium w-70 -mt-32">
                An ideal bedroom combines dreams, comfort, and feelings. HUB Interior offers more than just interior design — we create a cozy space that reflects your lifestyle and personality. As a trusted interior designer in Bengaluru, known for our cozy and comfortable bedroom interiors, we help you achieve your vision with warmth, care, and timeless elegance. Every corner of your bedroom is filled with thoughtful details, turning it into a sanctuary of peace and love.
              </p>

            </div>


          </div>
        </div>


      </div>






    </div>



  )
};


export default BedroomSection;