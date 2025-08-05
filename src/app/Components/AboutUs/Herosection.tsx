import Image from "next/image"
import Link from "next/link"

export default function Herosection(){
    return(
        <div>
            <div>
                <div className="w-screen h-screen">
                <div className="relative w-[1420px] h-[800px]">
                <img src="Mask-group.png" alt="" className="w-[1420px] h-[800px] m-6"/>
                <Image src="/LOGO.png" alt="LOGO" width={140} height={90} className="-mt-200 ml-16"></Image>
                <div className=" ml-224 -mt-12 text-white ">
                <Link href="/" className="pr-4 hover:text-amber-300">HOME</Link>
                <Link href="/Services" className="pr-4 hover:text-amber-300">SERVICE</Link>
                <Link href="/Services" className="hover:text-amber-300">EXPLORE ROOMS</Link>
                </div>
                <div className="w-[300px] h-[60px] ml-294 -mt-12 bg-[#f1f2f6]"><button className="manrope-medium w-[190px] h-[40px] bg-[#ddcdc1] rounded-4xl ml-10 mt-2">Get Free Estimate</button></div>
                <div className=" text-white ml-20 mt-90">
                        <div className="text-7xl manrope">HOMES ,</div>  
                        <div className="text-7xl wulkan-display pt-5">uniquely</div>
                        <div className="text-7xl manrope pt-5">BUILT</div>
               </div>
                </div>   
                </div>
            </div>
        </div>
    )
}