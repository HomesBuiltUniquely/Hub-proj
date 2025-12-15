'use client'

export default function Section7() {
  const steps = [
    {
      number: '01',
      title: 'Meet Our Designers',
      description: 'Visit our Experience Centre or schedule an online consultation with our expert designers.',
    },
    {
      number: '02',
      title: 'Custom Design Plan',
      description: 'We create personalized 3D designs tailored to your space, style, and budget.',
    },
    {
      number: '03',
      title: 'Material Selection',
      description: 'Choose from premium materials, finishes, and color palettes for your interiors.',
    },
    {
      number: '04',
      title: 'Installation Day',
      description: 'Our skilled craftsmen deliver and install your perfect interiors with precision.',
    }
  ];

  return (

    <div>

      <style global jsx>{`

                /* Hide both by default */
                .desktop-1280,
                .desktop-1440 {
                    display: none !important;
                }

                /* 1024px → 1439px = desktop-1280 */
                @media (min-width: 1024px) and (max-width: 1439px) {
                    .desktop-1280 {
                        display: block !important;
                    }
                }

                /* 1440px and above = desktop-1440 */
                @media (min-width: 1440px) {
                    .desktop-1440 {
                        display: block !important;
                    }
                }

            `}</style>

      <div className="w-full  py-16 relative overflow-hidden">
        {/* Subtle diagonal lines in corners */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
          <div className="w-full h-full bg-gray-300 transform rotate-45"></div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <div className="w-full h-full bg-gray-300 transform -rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">


          {/* Desktop Layout */}

          {/* 1440 Version */}
          <div className="desktop-1440 hidden lg:block">
            {/* Title Section */}
            <div className="text-center mb-16">
              <div className="w-30 h-2 rounded-2xl bg-red-500 mx-auto mb-10"></div>
              <h1 className="text-7xl manrope-medium text-black mt-2">Home Interiors in 4 <p className="mt-4">Simple Steps</p></h1>
            </div>

            {/* Steps Cards - Now with unique content */}
            <div className="grid grid-cols-4 gap-8 mt-10 h-[350px]">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-8 shadow-sm hover:bg-red-500 hover:text-white transition-all bg-[#F1F2F6] hover:transform hover:scale-105 duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-8xl text-[#DDCDC1] mb-4 manrope-semibold">{step.number}</div>
                  </div>
                  <h3 className="text-3xl mb-3 pt-4 manrope-medium">{step.title}</h3>
                  <p className="leading-relaxed manrope-medium">{step.description}</p>
                </div>
              ))}
            </div>
          </div>



          {/* 1280 Version */}
          <div className="desktop-1280 hidden lg:block">
            {/* Title Section */}
            <div className="text-center mb-16">
              <div className="w-30 h-2 rounded-2xl bg-red-500 mx-auto mb-10"></div>
              <h1 className="text-7xl manrope-medium text-black mt-2">Home Interiors in 4 <p className="mt-4">Simple Steps</p></h1>
            </div>

            {/* Steps Cards - Now with unique content */}
            <div className="grid grid-cols-4 gap-8 mt-10 h-[350px]">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-8 shadow-sm hover:bg-red-500 hover:text-white transition-all bg-[#F1F2F6] hover:transform hover:scale-105 duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-8xl text-[#DDCDC1] mb-4 manrope-semibold">{step.number}</div>
                  </div>
                  <h3 className="text-3xl mb-3 pt-4 manrope-medium">{step.title}</h3>
                  <p className="leading-relaxed manrope-medium">{step.description}</p>
                </div>
              ))}
            </div>
          </div>




          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Title Section */}
            <div className="text-center mb-12">
              <div className="w-20 h-1.5 rounded-2xl bg-red-500 mx-auto mb-6"></div>
              <h1 className="text-4xl manrope-medium text-black">Home Interiors in 4 Simple Steps</h1>
            </div>

            {/* Steps Cards - Vertical layout for mobile */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-6 shadow-sm hover:bg-red-500 hover:text-white transition-all bg-[#F1F2F6]"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-6xl text-[#DDCDC1] mb-3 manrope-semibold">{step.number}</div>
                  </div>
                  <h3 className="text-2xl mb-2 pt-2 manrope-medium">{step.title}</h3>
                  <p className="leading-relaxed manrope-medium text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}