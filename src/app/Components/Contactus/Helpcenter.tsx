import React from "react";

const enquiries = [

  {
    title: "Design your dream home?",
    description: "For press, investor & partnership enquiries.",
    link: "/Contact",
  },
  {
    title: "Customer Support",
    description: "For press, investor & partnership enquiries.",
    link: "/CustomerReviews",
  },
  {
    title: "Career opportunities",
    description: "For press, investor & partnership enquiries.",
    link: "/Career",
  },
  {
    title: "Vendor Partnerships",
    description: "For press, investor & partnership enquiries.",
    link: "/Vendor",
  },
  {
    title: "Franchise",
    description: "For press, investor & partnership enquiries.",
    link: "/interior-design-franchise",
  }
];

const HelpCenter: React.FC = () => (
  <div>
  <section className="hidden md:block max-w-screen-2xl mx-auto mt-10 px-4">
    <h2 className="text-3xl manrope mb-2 text-gray-800 mt-20">Connect With The Right Team</h2>
    <div className="flex flex-col md:flex-row gap-6 h-[180px] mt-10">
      {enquiries.map((item) => (
        <div key={item.title} className="flex-1 bg-[#ddcdc1] rounded-xl p-6 w-[200px]">
          <div className="font-semibold text-lg mb-2">{item.title}</div>
          <div className="w-10 h-10 flex items-center justify-center mt-10 bg-white rounded-full shadow">
            <span className="text-2xl text-amber-950">&#8594;</span>
          </div>
        </div>
      ))}
    </div>
  </section>
  <div className="block md:hidden bg-[#f1f2f6]">
  <section className=" max-w-screen-2xl h-[750px] mx-auto mt-10 px-4">
   <div className="flex items-center gap-4 ">
    <div className="w-1 h-10 bg-[#edb657]"></div>
     <h2 className="text-3xl manrope mb-2 text-gray-800 pt-2">Connect With The Right Team</h2>
   </div>
    <div className="">
    <div className="grid grid-cols-2 gap-6 mt-15">
      {enquiries.map((item) => (
        <a href={item.link} key={item.title}>
        <div key={item.title} className=" bg-[#ddcdc1] rounded-xl p-6 w-[200px]">
          <div className="font-semibold text-lg mb-2">{item.title}</div>
          <div className="w-10 h-10 flex items-center justify-center mt-10 bg-white rounded-full shadow">
            <span className="text-2xl text-amber-950">&#8594;</span>
          </div>
        </div>
        </a>
      ))}
    </div>
    </div>
  </section>
  </div>

  </div>
);

export default HelpCenter;
