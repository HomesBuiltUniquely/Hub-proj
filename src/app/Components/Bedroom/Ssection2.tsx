import React from "react";

const BedroomSection: React.FC = () => (
  <section className="bg-[#f1f2f6] h-[600px] flex items-center justify-center py-30">
    <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
      {/* Left: Card with description */}
      <div className="bg-[#3a2b21] rounded-3xl px-9 py-10 flex flex-col justify-center md:w-1/2 w-full min-h-[350px]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Ideal Bedroom</h2>
        <p className="text-white/80 text-base md:text-lg leading-relaxed font-normal">
          An ideal bedroom is more than just a place to sleep — 
          it’s a personal sanctuary designed for comfort, function, and peace of mind. 
          With the right balance of soothing colors, smart storage, cozy furnishings, and thoughtful lighting, 
          it becomes a space that supports rest, reflects your style, and fits your lifestyle.
        </p>
      </div>
      {/* Right: Bedroom image */}
      <div className="flex-1 md:w-1/2">
        <div className="rounded-3xl overflow-hidden shadow-xl md:h-full flex items-center bg-[#e8e5dd]">
          <img
            src="/bn.jpg" // Replace with your actual bedroom image
            alt="Ideal Bedroom"
            className="w-full h-[350px] md:h-[390px] object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default BedroomSection;
