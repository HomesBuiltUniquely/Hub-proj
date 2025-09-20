import Image from "next/image";


export default function Section1() {
  return (
    <div>
    <div className="w-full h-[900px] bg-[#F1F2F6] lg:rounded-b-4xl mt-10 hidden md:block">
      <h1 className=" text-center w-[1010px] mx-auto text-2xl mt-5 lg:mx-auto marope-medium">
       HUB Interior is India’s leading and most innovative interior design company. We specialize in tailor-made solutions  from modular kitchen interiors to luxury villa interiors  designed to suit your lifestyle and professional needs. No compromises. Just personalized interiors that fit you perfectly.
      </h1>
      <div className="bg-[#F1F2F6] w-[1350px] h-auto  grid grid-cols-4 mt-10 ml-8 gap-20 2xl:mx-auto">

      <div className="grid grid-rows-2  mt-10 gap-6">
          <div className="w-[330px] h-[400px] bg-red-500 rounded-3xl">
            <Image src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img4.jpg" alt="Section 1" width={330} height={400} className="rounded-3xl h-[410px] object-cover" />
          </div>
          <div className="w-[330px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-10 pl-6 mt-3">
            10
            <h1 className="text-3xl manrope-medium pt-3">Years Warranty</h1>
            <p className="text-sm manrope-medium pt-2 w-[250px]">Every material we use and every detail we craft comes backed with a 10-year warranty — because timeless interiors deserve timeless trust..</p>
          </div>
        </div>
        <div className="grid grid-rows-2  mt-10">
        <div className="w-[330px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-10 pl-6">
            0%
            <h1 className="text-3xl manrope-medium pt-3">EMI</h1>
            <p className="text-sm manrope-medium pt-2 w-[250px]">Bring home the interiors you love with our 0% interest EMI plans — flexible, stress-free, and designed around your comfort.
            </p>
          </div>
          <div className="w-[330px] h-[400px] bg-red-500 rounded-3xl -mt-35">
          <Image src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img5.jpg" alt="Section 1" width={330} height={400} className="rounded-3xl h-[410px] object-cover" />
          </div>
        </div>
        <div className="grid grid-rows-2 mt-10 gap-6">
          <div className="w-[330px] h-[400px] bg-red-500 rounded-3xl">
          <Image src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img6.jpg" alt="Section 1" width={330} height={400} className="rounded-3xl h-[410px] object-cover" />
          </div>
          <div className="w-[330px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-10 pl-6  mt-3">
            Factory 
            <h1 className="text-3xl manrope-medium pt-3">Finish</h1>
            <p className="text-sm manrope-medium pt-2 w-[250px]">Enjoy flawless factory-finish interiors with premium craftsmanship, seamless edges, and unmatched detailing — all tailored to your home.</p>
          </div>
        </div>
        <div className="grid grid-rows-2  mt-10">
        <div className="w-[330px] h-[250px] bg-[#DDCDC1] rounded-3xl text-5xl manrope pt-10 pl-6">
            34
            <h1 className="text-3xl manrope-medium pt-3">Days Delivery</h1>
            <p className="text-sm manrope-medium pt-2 w-[250px]">Experience thoughtfully designed spaces with our fast-track delivery promise — without compromising on quality, detail, or elegance.
            </p>
          </div>
          <div className="w-[330px] h-[400px] bg-red-500 rounded-3xl -mt-35">
          <Image src="https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4/img2.jpg" alt="Section 1" width={330} height={400} className="rounded-3xl h-[410px] object-cover" />
          </div>
        </div>

      </div>
    </div>
    {/* Mobile version */}
    <div className="block md:hidden" >
      <div className="w-auto h-[1440px] bg-[#F1F2F6] mt-10">
        <h1 className=" text-center w-auto mx-auto text-[17px] mt-5 manrope-medium p-2">
           HUB Interior is India’s leading and most innovative interior design company. We specialize in tailor-made solutions from modular kitchen interiors to luxury villa interiors designed to suit your lifestyle and professional needs. No compromises. Just personalized interiors that fit you perfectly.
        </h1>
        <div className="w-auto mt-15 text-4xl wulkan-display-bold pl-5"> Why Choose Us</div>
        <p className="text-left w-[350px] text-[17px] mt-5  manrope-medium pl-6">We dont just deliver projects, we deliver experiences that last.</p>
        <div className="w-auto mt-10 h-[220px] border-2 border-[#ebd657] wulkan-display-bold m-5 rounded-4xl">
          <h1 className="text-4xl manrope ml-4 mt-6">10 <span className="text-2xl manrope-medium"> Years Warranty </span></h1>
          <p className="text-left w-auto  text-[17px] mt-5 manrope-medium px-4">Every material we use and every detail we craft comes backed with a 10-year warranty — because timeless interiors deserve timeless trust.</p>
        </div>
        <div className="w-auto mt-10 h-[220px] border-2 border-[#ebd657] wulkan-display-bold m-5 rounded-4xl">
          <h1 className="text-4xl manrope ml-4 mt-6">0%<span className="text-2xl manrope-medium"> EMI </span></h1>
          <p className="text-left w-auto  text-[17px] mt-5 manrope-medium px-4">Bring home the interiors you love with our 0% interest EMI plans — flexible, stress-free, and designed around your comfort.</p>
        </div>
        <div className="w-auto mt-10 h-[220px] border-2 border-[#ebd657] wulkan-display-bold m-5 rounded-4xl">
          <h1 className="text-4xl manrope ml-4 mt-6">Factory <span className="text-2xl manrope-medium"> Finish </span></h1>
          <p className="text-left w-auto  text-[17px] mt-5 manrope-medium px-4">Enjoy flawless factory-finish interiors with premium craftsmanship, seamless edges, and unmatched detailing — all tailored to your home.</p>
        </div>
        <div className="w-auto mt-10 h-[220px] border-2 border-[#ebd657] wulkan-display-bold m-5 rounded-4xl">
          <h1 className="text-4xl manrope ml-4 mt-6">34<span className="text-2xl manrope-medium"> Days Delivery </span></h1>
          <p className="text-left w-auto  text-[17px] mt-5 manrope-medium px-4">Experience thoughtfully designed spaces with our fast-track delivery promise — without compromising on quality, detail, or elegance.</p>
        </div>
      </div>
    </div>
    </div>
  )
}
