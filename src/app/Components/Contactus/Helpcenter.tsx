import React from "react";

const enquiries = [
  {
    title: "Design your dream home?",
    description: "For press, investor & partnership enquiries.",
  },
  {
    title: "Customer Support",
    description: "For press, investor & partnership enquiries.",
  },
  {
    title: "Career opportunities",
    description: "For press, investor & partnership enquiries.",
  },
  {
    title: "Vendor Partnerships",
    description: "For press, investor & partnership enquiries.",
  },
  {
    title: "Franchise",
    description: "For press, investor & partnership enquiries.",
  }
];

const HelpCenter: React.FC = () => (
  <section className="max-w-screen-2xl mx-auto mt-10 px-4">
    <h2 className="text-3xl font-extrabold mb-2 text-gray-800 mt-20">Connect With The Right Team</h2>
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
);

export default HelpCenter;
