import Image from "next/image"
import Link from "next/link"

export default function Herosection(){
    return(
        <div>
            <div>
                <div className="bg-red-500 w-[1400px] h-screen mx-auto mt-6 rounded-4xl">
                <Image src="/LOGO.png" alt="LOGO" width={220} height={100} className="p-10"></Image>
                <div>
                <div><Link href="">HOME</Link></div>
                <div><Link href="">SERVICES</Link></div>
                <div><Link href="">EXPLORE ROOMS</Link></div>
                </div>
                </div>
            </div>  
        </div>
    )
}