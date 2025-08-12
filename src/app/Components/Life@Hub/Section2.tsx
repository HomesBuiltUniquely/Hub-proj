import React from "react";

const BedroomSection: React.FC = () => (
  <section className="bg-[#f1f2f6] h-[600px] flex items-center justify-center py-30">
    <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">

    <div className="flex-1 md:w-1/2">
        <div className="rounded-3xl overflow-hidden shadow-xl md:h-full flex items-center bg-[#e8e5dd]">
          <img
            src="/bn.jpg" // Replace with your actual bedroom image
            alt="Ideal Bedroom"
            className="w-full h-[350px] md:h-[390px] object-cover"
          />
        </div>
      </div>
      <div className="bg-[#ddcdc1] rounded-3xl px-9 py-10 flex flex-col justify-center md:w-1/2 w-full min-h-[350px]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-amber-950 mb-6">Why to become a HUBSTER?</h2>
        <p className="text-amber-950 text-base md:text-lg leading-relaxed font-normal">
        Because at HUB, you&#39;re not just joining a team — you&#39;re becoming part of a culture that values passion, creativity, and purpose. Here, you get the freedom to grow, the support to thrive, and the space to bring bold ideas to life. If you're looking for a place where your work makes a difference and every day feels inspired, then HUB is where you belong.
        </p>
      </div>
    </div>
  </section>
);

export default BedroomSection;
