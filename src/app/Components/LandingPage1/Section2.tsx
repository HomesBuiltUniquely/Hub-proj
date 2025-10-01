
export default function Section2(){
    return(
        <div>
            {/* DESKTOP */}
            <div className="hidden lg:block w-screen h-[350px] bg-white ">
            <div className="text-center lg:pt-16 lg:text-[55px]  pt-10 text-4xl manrope-medium">Where Trust Meets Design Excellence</div>
            <div className="flex justify-evenly mt-20 ml-6">
                <div className="">
                <div className="text-red-600 text-5xl manrope-medium ">5000+ </div>
                <p className="text-black text-[18px] manrope-medium pl-4 pt-4 ">Happy Homes</p>
                </div>
                <div className="">
                <div className="text-red-600 text-5xl manrope-medium pl-10">60+ </div>
                <p className="text-black text-[18px] manrope-medium pl-4 pt-4 ">Expert designers</p>
                </div>
                <div className="">
                <div className="text-red-600 text-5xl manrope-medium pl-18 ">2</div>
                <p className="text-black text-[18px] manrope-medium pl-4 pt-4 ">Experience centers</p>
                </div>
                <div className="">
                <div className="text-red-600 text-5xl manrope-medium pl-8 ">4.7+</div>
                <p className="text-black text-[18px] manrope-medium pl-4 pt-4 ">Google Rating</p>
                </div>
            </div>

            </div>
            
            {/* MOBILE */}

            <div className="lg:hidden w-full max-w-[400px] h-[420px] bg-white mx-auto rounded-3xl">
              <div className="text-left pt-10 text-4xl pl-6 manrope-medium">Where Trust Meets Design Excellence</div>
              <div className="flex mt-14 gap-6 px-4">
                <div className="ml-4">
                  <div className="manrope text-red-500 text-[30px]"> 5000+ </div>
                  <p className="manrope-medium" >Happy Homes</p>
                </div>
                <div className="ml-20">
                  <div className="manrope  text-red-500 text-[30px]">60+ </div>
                  <div className="manrope-medium"  >Expert <p className="manrope-medium"  >Designers</p></div>
                </div>
              </div>
              <div className="flex gap-6 px-4 mt-4">
                <div className="ml-4">
                  <div className="manrope text-red-500 text-[30px]">2</div>
                  <div className="manrope-medium"  >Experience <p className="manrope-medium"  >Centers</p></div>
                </div>
                <div className="ml-22 mt-1">
                  <div className="manrope text-red-500 text-[30px] pl-4">4.7+ </div>
                  <div className="ml-4 manrope-medium ">Google Rating</div>
                </div>
              </div>
            </div>

        </div>
        
    )
}