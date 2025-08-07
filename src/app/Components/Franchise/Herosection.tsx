// pages/index.tsx

import React from "react";

const FRANCHISE_OPTIONS = [
  {
    title: "FICO (Franchise Invested Company Operated)",
    details: [
      "Tier 1 cities",
      "ROI 200% in 1 year",
      "Investment 35L - 50L",
      "Breakeven in 6-12 months",
    ],
  },
  {
    title: "FOCO (Franchise Invested Company Operated)",
    details: [
      "Tier 1 cities",
      "ROI 200% in 1 year",
      "Investment 35L - 50L",
      "Breakeven in 6-12 months",
    ],
  },
  {
    title: "FOFO (Franchise Invested Company Operated)",
    details: [
      "Tier 1 cities",
      "ROI 200% in 1 year",
      "Investment 35L - 50L",
      "Breakeven in 6-12 months",
    ],
  },
  // Add more objects if you want more franchise cards
];

const Home: React.FC = () => (
  <div className="min-h-screen bg-gray-50 w-[1400px] h-screen mx-auto mt-4">
    {/* Hero Section with navbar, text, form, background image */}
    <div
      className="
        relative flex flex-col
        w-full
        h-[850px]
        min-h-[600px]
        md:min-h-[700px]
        overflow-hidden
        rounded-3xl
        "
      style={{
        backgroundImage: "url('/bn.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute"></div>

      {/* Navbar */}
      <header className="relative z-10 flex justify-between items-center px-8 py-6">
         <img src="LOGO.png" className="w-[100px] h-[40px]"></img>
        <nav className="flex gap-8 items-center">
          <a className="text-white hover:text-[#ef0101] font-medium" href="#">HOME</a>
          <a className="text-white hover:text-[#ef0101] font-medium" href="#">SERVICES</a>
          <a className="text-white hover:text-[#ef0101] font-medium" href="#">EXPLORE ROOMS</a>
          <button className="bg-[#ddcdc1] text-black font-semibold px-5 py-2 rounded-4xl ml-4 hover:bg-[#ef0101]">
            GET FREE ESTIMATE
          </button>
        </nav>
      </header>

      {/* Main Content & Form */}
      <div className="relative z-10 flex flex-col gap-10 md:flex-row justify-between px-8 md:px-20 w-full flex-1 py-10 md:py-0">
        {/* Left: Headline & intro */}
        <div className="flex-1 flex flex-col justify-center md:max-w-lg pt-10 md:pt-0">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
            Become a <span className="text-[#ef0101]">HUB Partner</span>
          </h1>
          <p className="text-lg text-gray-100 mb-6">
            The Future of Smart Investing
          </p>
        </div>

        {/* Right: Form */}
        <div className="md:w-[500px] h-[500px] w-full bg-black/30 rounded-xl shadow-lg px-7 py-8 self-center">
          <form className="space-y-4">
            <div className="flex gap-3">
              <div className="">
              <label className="pl-1 text-white">First Name*</label>
              <input
                required
                placeholder="First Name*"
                className="flex-1 px-4 py-2 rounded border mt-4 bg-[#f2f2f6]/70"
                type="text"
              />
              </div>
              <div className="">
              <label className="pl-1 text-white">Last Name</label>
              <input
                required
                placeholder="Last Name*"
                className="flex-1 px-4 py-2 rounded border mt-4 bg-[#f2f2f6]/70"
                type="text"
              />
              </div>
            </div>
            <label className="pl-1 text-white">Email*</label>
            <input
              required
              placeholder="Email*"
              className="w-full px-4 py-2 rounded border mt-4 bg-[#f2f2f6]/70"
              type="email"
            />
            <label className="pl-1 text-white">Phone*</label>
            <input
              required
              placeholder="Phone*"
              className="w-full px-4 py-2 rounded border mt-4 bg-[#f2f2f6]/70"
              type="tel"
            />
            <label className="pl-1 text-white">Preffered Location</label>
            <input
              required
              placeholder="Preferred Location*"
              className="w-full px-4 py-2 mt-2 rounded border bg-[#f2f2f6]/70"
              type="text"
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-bold py-2 rounded mt-2 hover:bg-red-700 transition"
            >
              Join our network
            </button>
          </form>
        </div>
      </div>
    </div>

    <div className="w-[800px] text-center mx-auto mt-20 text-[18px]">
        Hub Interior is the fastest growing home interiors brands. We help homeowners in getting their interiors done with the best quality. Explore lucrative interior design franchise opportunities with Homes Under Budget. Join our dynamic team and turn your passion for design into a thriving business.
    </div>

    {/* Franchise Options Section */}
    <div className="flex">
    <section className="w-screen h-[500px] mx-auto mt-20">
      <h2 className="text-4xl font-bold mb-2 pl-3">Types of franchise</h2>
      <p className="mb-6 text-gray-700 pl-3 pt-4 text-xl">Explore Your Franchise Options</p>
      <div className="grid md:grid-cols-3 gap-6 ">
        {FRANCHISE_OPTIONS.map((option, idx) => (
          <div
            key={idx}
            className="bg-white w-[400px] h-[300px] rounded-xl shadow-md p-6 flex flex-col justify-between border border-gray-100 mt-2"
          >
            <div className="">
              <strong className="font-semibold">{option.title}</strong>
              <ul className="list-disc ml-6 mt-3 mb-4 text-gray-700 space-y-1">
                {option.details.map((d, i) => (
                  <li key={i} className={d.includes("ROI") ? "text-red-500 font-semibold" : ""}>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <button className="bg-[#ddcdc1] text-black font-semibold px-4 py-2 rounded-md mt-2 hover:bg-neutral-300">
              Know More
            </button>
          </div>
        ))}
      </div>
    </section>
    </div>
  </div>
);

export default Home;
