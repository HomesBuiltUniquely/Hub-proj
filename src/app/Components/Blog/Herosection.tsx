import React from "react";

const ContactHeader: React.FC = () => (


  <div>
    <div className="w-[1400px] h-[800px] hidden 3xl:block mx-auto mt-4 rounded-3xl overflow-hidden shadow-md bg-cover bg-center relative" style={{ backgroundImage: "url('/bn.jpg')" }}>
      {/* Navbar */}
      <div className="flex items-center justify-between px-8 py-4">
        <img src="LOGO.png" className="w-[100px] h-[40px]"></img>
        <div className="hidden md:flex gap-12 text-sm font-semibold text-white tracking-widest">
          <a href="#">HOME</a>
          <a href="#">SERVICES</a>
          <a href="#">EXPLORE ROOMS</a>
        </div>
        <button className="bg-orange-100 text-black px-4 py-2 rounded-xl manrope-medium shadow">GET FREE ESTIMATE</button>
      </div>
      {/* Hero content */}
      <div className="flex flex-col items-center justify-center pt-24 pb-20 text-white text-center mt-30">
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg">Budget Stories</h1>
        <p className="text-lg font-medium mb-8 drop-shadow-lg w-[600px]">Get inspired to live a more beautiful and happy life at home.
          Our mission to show how we are making each homes more
          beautiful with easy-life tips and photos for any range of budgets.</p>
        <div className="flex gap-4">
          <button className="bg-yellow-300 text-black px-6 py-3 rounded-2xl font-semibold shadow">Subscribe Now</button>
        </div>
      </div>

    </div>


    {/* Medium Desktop Version */}

    <div
      className="w-[1280px] h-[800px] hidden xl:block 3xl:hidden mx-auto mt-4 rounded-3xl overflow-hidden shadow-md bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bn.jpg')" }}
    >
 {/* Navbar */}
      <div className="flex flex-col h-full justify-between px-8 py-6">


        <div className="flex items-center justify-between">
          <img src="LOGO.png" className="w-[100px] h-[40px]" alt="Logo" />
          <div className="hidden md:flex gap-12 text-md font-semibold text-white tracking-widest">
            <a href="#">HOME</a>
            <a href="#">SERVICES</a>
            <a href="#">EXPLORE ROOMS</a>
          </div>
          <button className="bg-orange-100 text-black px-4 py-2 rounded-xl manrope-medium shadow">GET FREE ESTIMATE</button>
        </div>

  {/* Hero content */}
        <div className="flex flex-col items-center justify-center flex-grow text-white text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg">Budget Stories</h1>

          <p className="text-lg font-medium mb-8 drop-shadow-lg w-[600px]">
            Get inspired to live a more beautiful and happy life at home.
            Our mission is to show how we are making homes more
            beautiful with easy-life tips and photos for any range of budgets.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-300 text-black px-6 py-3 rounded-2xl font-semibold shadow">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>



  </div>


);



export default ContactHeader;
