'use client';


export default function Section1() {
  
  
  const features = [
    {
      icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//fast-delivery.png",
      title: "34 Days Delivery",
      description: "Fast and reliable project completion"
    },
    {
      icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//CALENDER.png",
      title: "10 Years Warranty",
      description: "Long-term protection for your investment"
    },
    {
      icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//quality.png",
      title: "150+ Quality Analysis",
      description: "Rigorous quality control processes"
    },
    {
      icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//EMI.png",
      title: "0% EMI Options",
      description: "Flexible payment plans available"
    },
    {
      icon: "https://tgqcnyhwjfretjmnlmaq.supabase.co/storage/v1/object/public/hubinteriors//FACTORY.png",
      title: "Factory Finish",
      description: "Premium materials and craftsmanship"
    }
  ];


  return (
    <div className="w-full min-h-[410px] bg-[#F1F2F6] lg:rounded-b-4xl mt-10 overflow-x-hidden">
      <h1 className="lg:pt-10 lg:m-10 lg:ml-16 lg:text-6xl text-4xl mt-12 ml-8 manrope-medium text-center sm:text-center pr-10">
        Why We&#39;re Different
      </h1>

      {/* Desktop Grid View */}
      <div className="hidden lg:flex justify-between lg:m-20 lg:mt-20 mt-15">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="w-[200px] h-[200px] border-2 border-[#DDCDC1] rounded-2xl flex flex-col items-center justify-center p-4 hover:shadow-lg transition-all"
          >
            <img className="w-16 h-16 mb-4" src={feature.icon} alt={feature.title} />
            <div className="text-center text-[16px] font-medium">{feature.title}</div>
          </div>
        ))}
      </div>

      {/* Mobile Marquee */}
      <div className="lg:hidden w-full overflow-x-hidden mt-16 mb-10 ">
        <div className="relative w-full">
          <div className="flex items-center gap-6 animate-marquee">
            {features.concat(features).map((feature, index) => (
              <div
                key={index}
                className={`h-[190px] border-2 border-[#DDCDC1] rounded-2xl flex flex-col items-center justify-center p-6 mx-2 bg-white ${
                  feature.title === "150+ Quality Checks" ? "w-[300px]" : "w-[400px]"
                }`}
              >
                <img 
                  className={`mb-3 ${
                    feature.title === "34 Days Delivery" ? "w-14 h-14" :
                    feature.title === "10 Years Warranty" ? "w-12 h-12" :
                    feature.title === "Validated 150+ Quality Checks" ? "w-10 h-14" :
                    feature.title === "0% EMI Options" ? "w-12 h-12" :
                    "w-10 h-10" // Factory Finish
                  }`} 
                  src={feature.icon} 
                  alt={feature.title} 
                />
                <div className="text-center text-lg font-medium">{feature.title}</div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 6s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}