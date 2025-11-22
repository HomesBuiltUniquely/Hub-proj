'use client';

export default function Section1() {

  const features = [
    {
      icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors/fast-delivery.png",
      title: "34 Days Delivery",
      description: "Fast and reliable project completion"
    },
    {
      icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors/CALENDER.png",
      title: "10 Years Warranty",
      description: "Long-term protection for your investment"
    },
    {
      icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors/quality.png",
      title: "150+ Quality Analysis",
      description: "Rigorous quality control processes"
    },
    {
      icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors/EMI.png",
      title: "0% EMI Options",
      description: "Flexible payment plans available"
    },
    {
      icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors/FACTORY.png",
      title: "Factory Finish",
      description: "Premium materials and craftsmanship"
    }
  ];

  return (
    <div>

      {/* DESKTOP BREAKPOINT CSS */}
      <style jsx>{`
        .desktop-1280,
        .desktop-1440 {
          display: none !important;
        }

        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }

        @media (min-width: 1440px) {
          .desktop-1440 {
            display: block !important;
          }
        }
      `}</style>

      {/* 1440 Version */}
      <div className="desktop-1440 w-full min-h-[410px] bg-[#F1F2F6] lg:rounded-b-4xl mt-10 overflow-x-hidden">
        <h1 className="lg:pt-10 lg:m-10 lg:ml-16 lg:text-6xl text-4xl mt-12 ml-8 manrope-medium text-center sm:text-center pr-10">
          Why We&#39;re Different
        </h1>

        <div className="hidden lg:flex justify-between lg:m-20 lg:mt-20 mt-15">
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
      </div>

      {/* 1280 Version */}
      <div className="desktop-1280 w-full min-h-[410px] bg-[#F1F2F6] lg:rounded-b-4xl mt-10 overflow-x-hidden">
        <h1 className="lg:pt-10 lg:m-10 lg:ml-16 lg:text-6xl text-4xl mt-12 ml-8 manrope-medium text-center sm:text-center pr-10">
          Why We&#39;re Different
        </h1>

        <div className="hidden lg:flex justify-between lg:m-20 lg:mt-20 mt-15">
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
      </div>

      {/* MOBILE VERSION */}
      <div className="lg:hidden w-full min-h-[410px] bg-[#F1F2F6] mt-10 overflow-x-hidden">
        <h1 className="lg:pt-10 lg:m-10 lg:ml-16 lg:text-6xl text-4xl mt-12 ml-8 manrope-medium text-center sm:text-center pr-10">
          Why We&#39;re Different
        </h1>

        {/* MOBILE MARQUEE */}
        <div className="w-full overflow-x-hidden mt-16 mb-10">
          <div className="relative w-full">
            <div className="flex items-center gap-6 animate-mobile-marquee">
              {features.concat(features).map((feature, index) => (
                <div
                  key={index}
                  className="h-[190px] w-[400px] border-2 border-[#DDCDC1] rounded-2xl flex flex-col items-center justify-center p-6 mx-2 bg-white"
                >
                  <img className="w-14 h-14 mb-3" src={feature.icon} alt={feature.title} />
                  <div className="text-center text-lg manrope-medium">{feature.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MARQUEE ANIMATION CSS (MOVED HERE – VALID) */}
      <style jsx>{`
        @keyframes mobile-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-mobile-marquee {
          animation: mobile-marquee 6s linear infinite;
        }
      `}</style>

    </div>
  );
}
