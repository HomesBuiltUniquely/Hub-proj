import React from "react";

const BedroomSection: React.FC = () => (
  <section className="bg-[#f1f2f6] h-[600px] flex items-center justify-center py-30">
    <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
      {/* Left: Card with description */}
      <div className="bg-[#3a2b21] rounded-3xl px-9 py-10 flex flex-col justify-center md:w-1/2 w-full min-h-[350px]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Ideal Bedroom</h2>
        <p className="text-white/80 text-base md:text-lg leading-relaxed font-normal">
        An ideal bedroom combines dreams, comfort, and feelings. HUB Interior offers more than just interior design — we create a cozy space that reflects your lifestyle and personality. As a trusted interior designer in Bengaluru, known for our cozy and comfortable bedroom interiors, we help you achieve your vision with warmth, care, and timeless elegance. Every corner of your bedroom is filled with thoughtful details, turning it into a sanctuary of peace and love.
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
