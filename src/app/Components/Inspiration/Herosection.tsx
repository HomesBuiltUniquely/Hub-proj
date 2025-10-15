import React from "react";

const ContactHeader: React.FC = () => (


  <div>
    <div className="w-[1400px] h-[800px] mx-auto mt-4 rounded-3xl overflow-hidden shadow-md bg-cover bg-center relative hidden md:block" style={{ backgroundImage: "url('/bn.jpg')" }}>
      {/* Navbar */}
      <div className="flex items-center justify-between px-8 py-4">
        <img src="LOGO.png" className="w-[100px] h-[40px]"></img>
        <div className="hidden md:flex gap-12 manrope text-white tracking-widest">
          <a href="#">HOME</a>
          <a href="#">SERVICES</a>
          <a href="#">EXPLORE ROOMS</a>
        </div>
        <button className="bg-orange-100 text-black px-4 py-2 rounded-xl manrope-medium shadow">GET FREE ESTIMATE</button>
      </div>
      {/* Hero content */}
      <div className="flex w-[600px] flex-col items-center justify-center pt-90 pb-20 text-white text-center pr-30">
        <div className="text-5xl lg:text-6xl manrope mb-6 drop-shadow-lg w-[500px] ml-12 text-nowrap">Interior Inspirations</div>
        <p className="text-lg manrope-medium mb-8 drop-shadow-lg w-[600px] ml-25">Every corner of your home holds a story - let’s design it beautifully.
</p>
      </div>
    </div>


{/* 
    Mobile Version */}

 <div className="w-[320px] w-max-[425px]h-full block md:hidden  mx-auto p-3">


 <div className="w-[full] h-[490px] mt-4 rounded-3xl overflow-hidden shadow-md bg-cover bg-center relative block md:hidden" style={{ backgroundImage: "url('/bn.jpg')" }}>
      {/* Navbar */}
      <div className="flex items-center justify-between px-8 py-4">
        <img src="redlogo.png" className="w-[100px] h-[full] -ml-10"></img>
        {/* <div className="hidden md:flex gap-12 text-sm font-semibold text-white tracking-widest">
          <a href="#">HOME</a>
          <a href="#">SERVICES</a>
          <a href="#">EXPLORE ROOMS</a>
        </div> */}
        {/* <button className="bg-orange-100 text-black px-4 py-2 rounded-xl font-semibold shadow">GET FREE ESTIMATE</button> */}
      </div>
      {/* Hero content */}
      
      <div className="text-white">
        <div className="text-3xl manrope drop-shadow-lg w-[20px] text-nowrap mt-40 ml-5">Interior <div>Inspirations</div></div>
        <p className="manrope-medium drop-shadow-lg w-[full] mt-3 ml-5">Every corner of your home holds a story - let’s design it beautifully.</p>
      </div>
    </div>

 </div> 


      


  </div>

);

export default ContactHeader;
