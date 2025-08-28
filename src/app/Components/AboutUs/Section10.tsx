export default function Section10() {
  return (
    <div>
      <div className="2xl:block hidden">

      </div>
      <div className="mt-20 ml-9 w-screen h-auto 2xl:hidden block">
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
  );
}