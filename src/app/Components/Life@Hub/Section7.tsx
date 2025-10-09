export default function Section7() {



  return (

    <>
      <div>
        <div className=" ml-9 w-screen h-auto hidden md:block">
          <div className="w-[1400px] h-[450px] bg-red-300 relative rounded-2xl">
            <img src="bn.jpg" className="w-[1400px] h-[450px] rounded-2xl absolute"></img>
            <div className="w-[550px] h-[300px] border backdrop-blur-sm bg-black/20 border-[#ddcdc1] absolute ml-10 mt-25 rounded-2xl">
              <h1 className="text-3xl w-[400px] text-white pt-14 pl-6 manrope-medium">Shape the Future of Interior Design With Us</h1>
              <p className="text-md manrpe-medium pt-4 text-white w-[400px] pl-6">Come be part of a culture where ideas are valued, growth is constant, and work feels like home.</p>
              <button className="w-[200px] h-[40px] bg-white rounded-4xl mt-6 ml-6">Join Our Team</button>
            </div>
          </div>
        </div>
      </div>



      <div className="block md:hidden">

<div className="relative w-full min-h-[full] mt-5 rounded-xl overflow-hidden">
              {/* Background Image */}
              <img
                src="ab2.png"
                alt="Background"
                className="w-full h-full object-cover filter scale-105/"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" p-4 rounded-lg text-center ">

                  {/* Heading - SM optimized */}
                  <h1 className="text-xl text-white  manrope-medium leading-tight">
                    Shape the Future of Interior Design With Us
                  </h1>

                  {/* Description - SM optimized */}
                  <p className="text-sm manrope-medium pt-2 text-white w-full pl-2 leading-relaxed">
                    Come be part of a culture where ideas are valued, growth is constant, and work feels like home.
                  </p>

                  {/* Button - SM optimized */}
                  <button className="w-[150px] h-[35px] bg-white rounded-full mt-2 ml-2 mb-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition-colors duration-300">
                    Join Our Team
                  </button>

                </div>
              </div>
            </div>
      
      </div>
    </>

  );
}