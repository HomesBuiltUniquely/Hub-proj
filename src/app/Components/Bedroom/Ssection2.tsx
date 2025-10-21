import React from "react";

const BedroomSection: React.FC = () => (
  <section className="  bg-[#f1f2f6] h-[600px] flex items-center justify-center py-30">
    <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
      {/* Left: Card with description */}
      <div className=" hidden md:block bg-[#3a2b21] rounded-3xl px-9 py-10  flex-col justify-center md:w-1/2 w-full min-h-[350px]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Ideal Bedroom</h2>
        <p className="text-white/80 text-base md:text-lg leading-relaxed font-normal">
          An ideal bedroom combines dreams, comfort, and feelings. HUB Interior offers more than just interior design — we create a cozy space that reflects your lifestyle and personality. As a trusted interior designer in Bengaluru, known for our cozy and comfortable bedroom interiors, we help you achieve your vision with warmth, care, and timeless elegance. Every corner of your bedroom is filled with thoughtful details, turning it into a sanctuary of peace and love.
        </p>
      </div>
      {/* Right: Bedroom image */}
      <div className="flex-1 md:w-1/2">
        <div className="rounded-3xl overflow-hidden shadow-xl md:h-full flex items-center bg-[#e8e5dd]">
          <img
            src="/bs1.jpg" // Replace with your actual bedroom image
            alt="Ideal Bedroom"
            className="w-full h-[350px] md:h-[390px] object-cover hidden md:block"
          />
        </div>
      </div>
    </div>


    {/* mobile version */}

    <div className="block md:hidden">

      {/* <div className=" w-[full] max-w-[425px] h-[600px] mx-auto  mb-10">
        <div className="bg-[#3a2b21] w-[330] h-170 pt-10 mr-7 rounded-3xl justify-items-center">

          <div className="grid grid-rows-2 ">


            <img src="/bs1.jpg" alt="Ideal Bedroom" className="rounded-3xl w-[280] h-50" />

            <h1 className="manrope-medium text-4xl text-white py-4 ">Ideal Bedroom</h1>

            <p className=" text-white manrope-medium w-70 -mt-32">
              An ideal bedroom combines dreams, comfort, and feelings. HUB Interior offers more than just interior design — we create a cozy space that reflects your lifestyle and personality. As a trusted interior designer in Bengaluru, known for our cozy and comfortable bedroom interiors, we help you achieve your vision with warmth, care, and timeless elegance. Every corner of your bedroom is filled with thoughtful details, turning it into a sanctuary of peace and love.
            </p>

          </div>

        </div>

      </div> */}


<div className="block md:hidden">

<div className="md:hidden w-screen min-w-sm max-w-[425px] mx-auto px-4 pt-10 justify-items-center">
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




     

      <div className="block md:hidden">
        {/* <div className="w-[360px] h-[600px] mx-auto">

        <div className="grid grid-rows-2 justify-items-center">
          <div className="bg-[#3a2b21] w-[330px] h-170 pt-10 rounded-3xl mx-auto ">
            <img src="/bs1.jpg"  alt="Ideal Bedroom" className="rounded-3xl w-[300px] h-50 object-cover mx-auto"/>

            <h1 className="manrope-medium text-4xl text-white py-4 ml-3">
              Ideal Bedroom
            </h1>

            <p className="text-white manrope-medium w-70 ml-4">
              An ideal bedroom combines dreams, comfort, and feelings. HUB Interior
              offers more than just interior design — we create a cozy space that
              reflects your lifestyle and personality. As a trusted interior designer
              in Bengaluru, known for our cozy and comfortable bedroom interiors, we
              help you achieve your vision with warmth, care, and timeless elegance.
              Every corner of your bedroom is filled with thoughtful details, turning
              it into a sanctuary of peace and love.
            </p>
          </div>
         </div>

        </div> */}
      </div>






    </div>
  </section>


);




export default BedroomSection;