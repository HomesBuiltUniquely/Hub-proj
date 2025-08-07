import React from "react";

const enquiries = [
  {
    title: "Partnership Enquiries",
    description: "For press, investor & partnership enquiries.",
  },
  {
    title: "Designer & Architect Enquiries",
    description: "For press, investor & partnership enquiries.",
  },
  {
    title: "Supplier & Brand Enquiries",
    description: "For press, investor & partnership enquiries.",
  },
];

const HelpCenter: React.FC = () => (
  <section className="max-w-screen-xl mx-auto mt-10 px-4">
    <h2 className="text-3xl font-extrabold mb-2 text-gray-800 mt-20">Can we help?</h2>
    <p className="mb-3 text-gray-700">Explore help topics in our help centre</p>
    <button className="mb-7 bg-amber-950 text-white px-5 py-2 rounded-lg font-medium">Help Centre</button>
    <div className="flex flex-col md:flex-row gap-6 h-[250px]">
      {enquiries.map((item) => (
        <div key={item.title} className="flex-1 bg-[#ddcdc1] rounded-xl p-6">
          <div className="font-semibold text-lg mb-2">{item.title}</div>
          <p className="mb-4 text-gray-700">{item.description}</p>
          <div className="w-10 h-10 flex items-center justify-center mt-26 bg-white rounded-full shadow">
            <span className="text-2xl text-amber-950">&#8594;</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default HelpCenter;
