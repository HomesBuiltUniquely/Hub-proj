'use client';

import React from 'react';

const JourneySection = () => {
  const stats = [
    { value: "5000+", label: "Happy Homes" },
    { value: "60+", label: "Expert Designers" },
    { value: "2", label: "Experience Centre" },
    { value: "4.7+", label: "Google Rating" },
  ];

  const timeline = [
    { year: "2019", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
    { year: "2019 - 2020", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
    { year: "2020 - 2021", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
    { year: "2021 - 2022", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
    { year: "2022 - 2023", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
    { year: "2023 - 2024", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
    { year: "2024 - 2025", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
    { year: "2025 - 2026", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
    { year: "2026 - 2027", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
    { year: "2027 - 2028", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
    { year: "2028 - 2029", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
    { year: "2029 - 2030", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
  ];

  return (
    <section className="py-16 px-4 bg-white ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Journey So Far</h2>
          <p className="text-xl text-gray-600">The Path We&#39;ve Paved!</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Static Stats */}
          <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-[#ef0101]">{stat.value}</p>
                  <p className="text-gray-600 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Scrollable Timeline with always-visible scrollbar */}
          <div className="md:w-1/2 h-[500px] p-8 rounded-xl relative">
            <div className="h-full overflow-y-scroll pr-4 scrollbar scroll-container always-visible-scrollbar style={{ direction: 'rtl' }}">
              <div className="space-y-8 min-h-[800px]">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-8 pb-8 border-l-2 border-[#ef0101]">

                    <h3 className="text-xl font-semibold text-gray-900">{item.year}</h3>
                    <p className="mt-2 text-gray-600">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global scrollbar styling */}
      <style jsx global>{`
        .scrollbar::-webkit-scrollbar {
          width: 8px;
          background-color: #f5f5f5;
        }
        .scrollbar::-webkit-scrollbar-thumb {
          background-color: #ef0101;
          border-radius: 4px;
        }
        .scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #d00101;
        }
        .scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #ef0101 #f5f5f5;
        }
        .always-visible-scrollbar {
          overflow-y: scroll !important;
          scrollbar-gutter: stable;
        }
        .always-visible-scrollbar::-webkit-scrollbar {
          -webkit-appearance: none;
          width: 8px;
          display: block !important;
        }
        .always-visible-scrollbar::-webkit-scrollbar-track {
          background: #f5f5f5;
          border-radius: 4px;
          display: block !important;
        }
        .always-visible-scrollbar::-webkit-scrollbar-thumb {
          background: #ef0101;
          border-radius: 4px;
          min-height: 40px;
          display: block !important;
        }
        .always-visible-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d00101;
        }
        .always-visible-scrollbar::-webkit-scrollbar-corner {
          background: #f5f5f5;
        }
        /* Force scrollbar to always show */
        .always-visible-scrollbar {
          scrollbar-gutter: stable;
          overflow-y: scroll !important;
        }
        /* Additional force for scrollbar visibility */
        .scroll-container {
          overflow-y: scroll !important;
          scrollbar-width: thin;
          scrollbar-color: #ef0101 #f5f5f5;
        }
        .scroll-container::-webkit-scrollbar {
          width: 8px !important;
          display: block !important;
        }
        .scroll-container::-webkit-scrollbar-track {
          background: #f5f5f5 !important;
          border-radius: 4px;
        }
        .scroll-container::-webkit-scrollbar-thumb {
          background: #ef0101 !important;
          border-radius: 4px;
          min-height: 40px;
        }
        .scroll-container::-webkit-scrollbar-thumb:hover {
          background: #d00101 !important;
        }
      `}</style>
    </section>
  );
};

export default JourneySection;