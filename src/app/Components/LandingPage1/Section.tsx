'use client';

export default function Section1() {

  // const features = [
  //   {
  //     icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors/fast-delivery.png",
  //     title: "34 Days Delivery",
  //     description: "Fast and reliable project completion"
  //   },
  //   {
  //     icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors/CALENDER.png",
  //     title: "10 Years Warranty",
  //     description: "Long-term protection for your investment"
  //   },
  //   {
  //     icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors/quality.png",
  //     title: "150+ Quality Analysis",
  //     description: "Rigorous quality control processes"
  //   },
  //   {
  //     icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors/EMI.png",
  //     title: "0% EMI Options",
  //     description: "Flexible payment plans available"
  //   },
  //   {
  //     icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors/FACTORY.png",
  //     title: "Factory Finish",
  //     description: "Premium materials and craftsmanship"
  //   }
  // ];

  return (
    <div>

      {/* DESKTOP BREAKPOINT CSS */}
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


      {/* 2560 Version */}
      {/* <div className="desktop-2560 w-full min-h-[410px] bg-[#F1F2F6] rounded-b-4xl mt-10 overflow-x-hidden">
        <h1 className="pt-10 m-10 ml-16 text-6xl text-center mt-12 manrope-medium pr-10">
          Why We&#39;re Different
        </h1>

        <div className="flex justify-between m-20 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-[200px] h-[200px] border-2 border-[#DDCDC1] rounded-2xl flex flex-col items-center justify-center p-4 hover:shadow-lg transition-all"
            >
              <img className="w-16 h-16 mb-4" src={feature.icon} alt={feature.title} />
              <div className="text-center text-[16px] manrope-medium">{feature.title}</div>
            </div>
          ))}
        </div>
      </div> */}


      <div className="desktop-2560 mx-auto px-20 py-30">
        <div className="w-full h-[410px] bg-white rounded-3xl  flex px-20">

          {/* Left side */}
          <div className="w-full flex flex-col justify-center items-start">
            <h1 className="text-6xl manrope leading-tight">
              Why We&apos;re <br />
              <span className="text-red-600">Different</span>
            </h1>

            <p className="mt-4 text-lg manrope-medium">
              Numbers that showcase credibility,<br />
              <span> experience, and success</span>
            </p>
          </div>

          {/* Right side */}
          <div className="w-full flex justify-end items-center">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-[#F1F2F6] rounded-2xl w-[180px] h-[150px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-5xl manrope mx-3">5000+</div>
                <p className="mt-2 text-lg manrope-medium mx-3">Happy Homes</p>
              </div>

              <div className="bg-[#F1F2F6] rounded-2xl w-[180px] h-[150px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-5xl manrope mx-3">34</div>
                <p className="mt-2 text-lg manrope-medium mx-3">Days Delivery</p>
              </div>

              <div className="bg-[#F1F2F6] rounded-2xl w-[180px] h-[150px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-5xl manrope mx-3">150+</div>
                <p className="mt-2 text-lg manrope-medium mx-3">Quality Checks</p>
              </div>

              <div className="bg-[#F1F2F6] rounded-2xl w-[180px] h-[150px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-5xl manrope mx-3">0%</div>
                <p className="mt-2 text-lg manrope-medium mx-3">EMI Options</p>
              </div>

              <div className="bg-[#F1F2F6] rounded-2xl w-[180px] h-[150px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-5xl manrope mx-3">10</div>
                <p className="mt-2 text-lg manrope-medium mx-3">Years Warranty</p>
              </div>

              <div className="bg-[#F1F2F6] rounded-2xl w-[180px] h-[150px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-5xl manrope mx-3">3</div>
                <p className="mt-2 text-lg manrope-medium mx-3">Experience Centre</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* 1920 Version */}
      {/* <div className="desktop-1920 w-full min-h-[410px] bg-[#F1F2F6] rounded-b-4xl mt-10 overflow-x-hidden">
        <h1 className="pt-10 m-10 ml-16 text-6xl text-center mt-12 manrope-medium pr-10">
          Why We&#39;re Different
        </h1>

          <div className="flex justify-between m-20 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-[200px] h-[200px] border-2 border-[#DDCDC1] rounded-2xl flex flex-col items-center justify-center p-4 hover:shadow-lg transition-all"
            >
              <img className="w-16 h-16 mb-4" src={feature.icon} alt={feature.title} />
              <div className="text-center text-[16px] manrope-medium">{feature.title}</div>
            </div>
          ))}
        </div>

        </div> */}





      {/* 1920 Version */}

      <div className="desktop-1920 mx-auto px-20 py-30">
        <div className="w-full h-[410px] bg-white rounded-3xl  flex px-20">

          {/* Left side */}
          <div className="w-full flex flex-col justify-center items-start">
            <h1 className="text-6xl manrope leading-tight">
              Why We&apos;re <br />
              <span className="text-red-600">Different</span>
            </h1>

            <p className="mt-4 text-lg manrope-medium">
              Numbers that showcase credibility,<br />
              <span> experience, and success</span>
            </p>
          </div>

          {/* Right side */}
          <div className="w-full flex justify-end items-center">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-[#F1F2F6] rounded-2xl w-[180px] h-[150px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-5xl manrope mx-3">5000+</div>
                <p className="mt-2 text-lg manrope-medium mx-3">Happy Homes</p>
              </div>

              <div className="bg-[#F1F2F6] rounded-2xl w-[180px] h-[150px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-5xl manrope mx-3">34</div>
                <p className="mt-2 text-lg manrope-medium mx-3">Days Delivery</p>
              </div>

              <div className="bg-[#F1F2F6] rounded-2xl w-[180px] h-[150px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-5xl manrope mx-3">150+</div>
                <p className="mt-2 text-lg manrope-medium mx-3">Quality Checks</p>
              </div>

              <div className="bg-[#F1F2F6] rounded-2xl w-[180px] h-[150px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-5xl manrope mx-3">0%</div>
                <p className="mt-2 text-lg manrope-medium mx-3">EMI Options</p>
              </div>

              <div className="bg-[#F1F2F6] rounded-2xl w-[180px] h-[150px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-5xl manrope mx-3">10</div>
                <p className="mt-2 text-lg manrope-medium mx-3">Years Warranty</p>
              </div>

              <div className="bg-[#F1F2F6] rounded-2xl w-[180px] h-[150px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-5xl manrope mx-3">3</div>
                <p className="mt-2 text-lg manrope-medium mx-3">Experience Centre</p>
              </div>
            </div>
          </div>
        </div>
      </div>






      {/* 1280 Version */}
      {/* <div className="desktop-1280 w-full min-h-[410px] bg-[#F1F2F6] rounded-b-4xl overflow-x-hidden">
        <h1 className=" text-6xl text-center manrope-medium ">
          Why We&#39;re Different
        </h1>

        <div className="flex justify-between m-20 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-[200px] h-[200px] border-2 border-[#DDCDC1] rounded-2xl flex flex-col items-center justify-center p-4 hover:shadow-lg transition-all"
            >
              <img className="w-16 h-16 mb-4" src={feature.icon} alt={feature.title} />
              <div className="text-center text-[16px] manrope-medium">{feature.title}</div>
            </div>
          ))}
        </div>
      </div> */}


      {/* 1280 Version */}

      <div className="desktop-1280 mx-auto px-15 py-25">
        <div className="w-full h-[410px] bg-white rounded-3xl  flex px-20">

          {/* Left side */}
          <div className="w-full flex flex-col justify-center items-start">
            <h1 className="text-5xl manrope leading-tight">
              Why We&apos;re <br />
              <span className="text-red-600">Different</span>
            </h1>

            <p className="mt-4 text- manrope-medium">
              Numbers that showcase credibility,<br />
              <span> experience, and success</span>
            </p>
          </div>

          {/* Right side */}
          <div className="w-full flex justify-end items-center">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-[#F1F2F6] rounded-2xl w-[140px] h-[130px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-4xl manrope mx-3">5000+</div>
                <p className="mt-2 text-md manrope-medium mx-3">Happy Homes</p>
              </div>

              <div className="bg-[#F1F2F6] rounded-2xl w-[140px] h-[130px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-4xl manrope mx-3">34</div>
                <p className="mt-2 text-md manrope-medium mx-3">Days Delivery</p>
              </div>

              <div className="bg-[#F1F2F6] rounded-2xl w-[140px] h-[130px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-4xl manrope mx-3">150+</div>
                <p className="mt-2 text-md manrope-medium mx-3">Quality Checks</p>
              </div>

              <div className="bg-[#F1F2F6] rounded-2xl w-[140px] h-[130px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-4xl manrope mx-3">0%</div>
                <p className="mt-2 text-md manrope-medium mx-3">EMI Options</p>
              </div>

              <div className="bg-[#F1F2F6] rounded-2xl w-[140px] h-[130px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-4xl manrope mx-3">10</div>
                <p className="mt-2 text-md manrope-medium mx-3">Years Warranty</p>
              </div>

              <div className="bg-[#F1F2F6] rounded-2xl w-[140px] h-[130px] flex flex-col justify-center items-start">
                <div className="text-red-600 text-4xl manrope mx-3">3</div>
                <p className="mt-2 text-md manrope-medium mx-3">Experience Centre</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* mobile version */}

      <div className="lg:hidden px-4 mt-15">
        <div className="bg-white rounded-3xl px-5 py-5">
          {/* Heading */}
          <h1 className="text-4xl manrope-medium leading-tight">
            Why We&apos;re <br />
            <span className="text-red-600">Different</span>
          </h1>

          {/* Grid */}
          <div className="mt-6 grid grid-cols-2 pb-3 gap-4 place-items-center mx-auto min-w-[270px] max-w-[470px] text-center">
            {/* Card */}
            <div className="bg-[#F1F2F6] rounded-2xl h-[110px] w-full flex flex-col justify-center items-center px-4">
              <div className="text-red-600 text-3xl manrope-medium">5000+</div>
              <p className="manrope-medium w-[100px]">Happy Homes</p>
            </div>

            <div className="bg-[#F1F2F6] rounded-2xl h-[110px] w-full flex flex-col justify-center items-center px-4">
              <div className="text-red-600 text-3xl manrope-medium">34</div>
              <p className="manrope-medium w-[80px]">Days Delivery</p>
            </div>

            <div className="bg-[#F1F2F6] rounded-2xl h-[110px] w-full flex flex-col justify-center items-center px-4">
              <div className="text-red-600 text-3xl manrope-medium">10</div>
              <p className="manrope-medium w-[100px]">Years Warranty</p>
            </div>

            <div className="bg-[#F1F2F6] rounded-2xl h-[110px] w-full flex flex-col justify-center items-center px-4">
              <div className="text-red-600 text-3xl manrope-medium">0%</div>
              <p className="manrope-medium w-[80px]">EMI Options</p>
            </div>

            <div className="bg-[#F1F2F6] rounded-2xl h-[110px] w-full flex flex-col justify-center items-center px-4">
              <div className="text-red-600 text-3xl manrope-medium">150+</div>
              <p className="manrope-medium w-[100px]">Quality Checks</p>
            </div>

            <div className="bg-[#F1F2F6] rounded-2xl h-[110px] w-full flex flex-col justify-center items-center px-4">
              <div className="text-red-600 text-3xl manrope-medium">2</div>
              <p className="manrope-medium w-[100px]">Experience Centre</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
