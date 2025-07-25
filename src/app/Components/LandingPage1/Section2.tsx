export default function Section2(){
    return(
        <div>
            {/* DESKTOP */}
            <div className="hidden lg:block w-screen h-[350px] bg-white">
            <div className="text-center lg:pt-16 lg:text-[55px]  pt-10 text-4xl   manrope-medium">Where Trust Meets Design Excellence</div>
            <div className="flex justify-evenly mt-20 ml-6">
                <div className="">
                <div className="text-red-600 text-5xl font-bold ">3,500+ </div>
                <p className="text-black text-[18px] font-normal pl-4 pt-4 ">Happy Homes</p>
                </div>
                <div className="">
                <div className="text-red-600 text-5xl font-bold pl-10">60+ </div>
                <p className="text-black text-[18px] font-normal pl-4 pt-4 ">Expert designers</p>
                </div>
                <div className="">
                <div className="text-red-600 text-5xl font-bold pl-18 ">2</div>
                <p className="text-black text-[18px] font-normal pl-4 pt-4 ">Experience centers</p>
                </div>
                <div className="">
                <div className="text-red-600 text-5xl font-bold pl-8 ">4.7+</div>
                <p className="text-black text-[18px] font-normal pl-4 pt-4 ">Google Rating</p>
                </div>
            </div>

            </div>
            
            {/* MOBILE */}

            <div className=" lg:hidden w-screen h-[420px] bg-white">
            <div className=" text-left pt-10 text-4xl pl-6  manrope-medium">Where Trust Meets Design Excellence</div>
            <div className="flex mt-14 ml-2 ">
            <div className="ml-6">
                <div className="font-bold text-red-500 text-[30px]">3,500+ </div>
                <p>Happy Homes</p>
            </div>
            <div className="ml-28">
                <div className="font-bold text-red-500 text-[30px]">60+ </div>
                <div>Expert <p>Designers</p></div>
            </div>
            </div>

            <div className="flex mt-10 ml-2">
            <div className="ml-6">
                <div className="font-bold text-red-500 text-[30px]">2</div>
                <div>Experince <p>Centers</p></div>
            </div>
            <div className="ml-36">
                <div className="font-bold text-red-500 text-[30px]">4.7+ </div>
                <p>Google Rating</p>
            </div>
            </div>

            </div>

        </div>
        
    )
}