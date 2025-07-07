import Link from "next/link"
import Image from "next/image";

export function Footer() {

  return (
      <footer className="bg-[#DDCDC1] pt-12 pb-6 px-6">
        {/* Top Section */}
        <div className="flex justify-around">

          <div>
            <h3 className="text-sm font-bold mb-4 text-[#2B1D14]">SUPPORT</h3>
            <ul className="space-y-2 text-sm text-[#4A3F35]">
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 mr-3 mt-0.5">
                  <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg><li>+91 889 889 2223</li></div>
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 mr-3 mt-0.5">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg><li>hello@homesunderbudget.com</li></div>
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 mr-3 mt-0.5">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg><li>HBR Layout, Bangalore</li></div>
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 mr-3 mt-0.5">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg><li>Sarjapur Road, Bangalore</li></div>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-[#2B1D14] ml-8" >SOCIAL MEDIA</h3>
            <ul className="space-y-2 text-sm text-[#4A3F35]">
            <div className="flex"> 
              <div className="flex"><Image loading="lazy" src="/facebook.png" width={350} height={200} alt="facebook" className="size-5 mr-3 mb-1"></Image><li className="hover:text-amber-50"><Link href="https://www.facebook.com/HomesUnderBudget/" className="mr-5">Facebook</Link></li></div>
              <div className="flex"><Image loading="lazy" src="/twitter.png" width={350} height={200} alt="twitter" className="size-5 mr-3 mb-1"></Image><li className="hover:text-amber-50"><Link href="https://x.com/Homeunderbudget" className="">Twitter</Link></li></div>
            </div>
            <div className="flex">
              <div className="flex"><Image loading="lazy" src="/pinterest.png" width={350} height={200} alt="pintrest" className="size-5 mr-3 mb-1"></Image><li className="hover:text-amber-50"><Link href="https://in.pinterest.com/homesunderbudget/" className="mr-5">Pinterest</Link></li></div>
              <div className="flex ml-1.5"><Image loading="lazy" src="/instagram.png" width={350} height={200} alt="instagram" className="size-5 mr-3 mb-1"></Image><li className="hover:text-amber-50"><Link href="https://www.instagram.com/homesunderbudget/">Instagram</Link></li></div>
            </div>
            <div className="flex">
              <div className="flex"><Image loading="lazy" src="/youtube.png" width={350} height={200} alt="Youtube" className="size-5 mr-3 mb-1"></Image><li className="hover:text-amber-50"><Link href="https://www.youtube.com/@homesunderbudget" className="mr-5">Youtube</Link></li></div>
              <div className="flex ml-3"><Image loading="lazy" src="/message.png" width={350} height={200} alt="Linkdin" className="size-5 mr-3 mb-1"></Image><li className="hover:text-amber-50"><Link href="https://www.linkedin.com/company/homesunderbudget/">LinkedIn</Link></li></div>
            </div>
            </ul>
          </div>

        </div>
  
        {/* Divider */}
        <div className="border-t border-[#B4A596] mt-12 mb-6"></div>
  
        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-2">
          <p className="text-sm text-[#5A4C43]">
            © 2025 BRIGHTSPACE CREATIONS PRIVATE LIMITED All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  