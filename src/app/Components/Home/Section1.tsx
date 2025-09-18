import Image from "next/image";


export default function Section1() {
  return (
    <div className="w-full h-[900px] bg-[#F1F2F6] lg:rounded-b-4xl mt-10 ">
      <h1 className=" text-center w-[1010px] mx-auto text-2xl mt-5 lg:mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </h1>
      <div className="bg-[#F1F2F6] w-[1350px] h-auto  grid grid-cols-4 mt-10 ml-8 gap-20 2xl:mx-auto">

      <div className="grid grid-rows-2  mt-10 gap-6">
          <div className="w-[330px] h-[400px] bg-red-500 rounded-3xl">
            <Image src="/1.png" alt="Section 1" width={330} height={400} className="rounded-3xl" />
          </div>
          <div className="w-[330px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-10 pl-6 mt-3">
            10
            <h1 className="text-3xl manrope-medium pt-3">Years Warranty</h1>
            <p className="text-sm manrope-medium pt-2 w-[250px]">Every material we use and every detail we craft comes backed with a 10-year warranty — because timeless interiors deserve timeless trust.</p>
          </div>
        </div>
        <div className="grid grid-rows-2  mt-10">
        <div className="w-[330px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-10 pl-6">
            0%
            <h1 className="text-3xl manrope-medium pt-3">EMI</h1>
            <p className="text-sm manrope-medium pt-2 w-[250px]">Every material we use and every detail we craft comes backed with a 10-year warranty — because timeless interiors deserve timeless trust.</p>
          </div>
          <div className="w-[330px] h-[400px] bg-red-500 rounded-3xl -mt-35">
          <Image src="/1.png" alt="Section 1" width={330} height={400} className="rounded-3xl" />
          </div>
        </div>
        <div className="grid grid-rows-2 mt-10 gap-6">
          <div className="w-[330px] h-[400px] bg-red-500 rounded-3xl">
          <Image src="/1.png" alt="Section 1" width={330} height={400} className="rounded-3xl" />
          </div>
          <div className="w-[330px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-10 pl-6  mt-3">
            Factory 
            <h1 className="text-3xl manrope-medium pt-3">Finish</h1>
            <p className="text-sm manrope-medium pt-2 w-[250px]">Every material we use and every detail we craft comes backed with a 10-year warranty — because timeless interiors deserve timeless trust.</p>
          </div>
        </div>
        <div className="grid grid-rows-2  mt-10">
        <div className="w-[330px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-10 pl-6">
            34
            <h1 className="text-3xl manrope-medium pt-3">Days Delivery</h1>
            <p className="text-sm manrope-medium pt-2 w-[250px]">Every material we use and every detail we craft comes backed with a 10-year warranty — because timeless interiors deserve timeless trust.</p>
          </div>
          <div className="w-[330px] h-[400px] bg-red-500 rounded-3xl -mt-35">
          <Image src="/1.png" alt="Section 1" width={330} height={400} className="rounded-3xl" />
          </div>
        </div>

      </div>
    </div>
  )
}
