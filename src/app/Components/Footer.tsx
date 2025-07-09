import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#DDCDC1] pt-10 pb-6 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-6 lg:gap-8 xl:gap-12">
          {/* Support Section */}
          <div className="flex-1 min-w-[200px] max-w-[300px]">
            <h3 className="text-sm sm:text-base font-bold mb-4 md:mb-5 text-[#2B1D14]">SUPPORT</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-[#4A3F35]">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 sm:size-5 mr-3 mt-0.5 flex-shrink-0">
                  <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
                <span>+91 889 889 2223</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 sm:size-5 mr-3 mt-0.5 flex-shrink-0">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                <span>hello@homesunderbudget.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 sm:size-5 mr-3 mt-0.5 flex-shrink-0">
                  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
                <span>HBR Layout, Bangalore</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 sm:size-5 mr-3 mt-0.5 flex-shrink-0">
                  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
                <span>Sarjapur Road, Bangalore</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex-1 min-w-[200px] max-w-[350px]">
            <h3 className="text-sm sm:text-base font-bold mb-4 md:mb-5 text-[#2B1D14]">SOCIAL MEDIA</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm sm:text-base text-[#4A3F35]">
              <div className="flex items-center">
                <Image loading="lazy" src="/facebook.png" width={20} height={20} alt="facebook" className="size-4 sm:size-5 mr-3" />
                <Link href="https://www.facebook.com/HomesUnderBudget/" className="hover:text-amber-50 transition-colors">Facebook</Link>
              </div>
              <div className="flex items-center">
                <Image loading="lazy" src="/twitter.png" width={20} height={20} alt="twitter" className="size-4 sm:size-5 mr-3" />
                <Link href="https://x.com/Homeunderbudget" className="hover:text-amber-50 transition-colors">Twitter</Link>
              </div>
              <div className="flex items-center">
                <Image loading="lazy" src="/pinterest.png" width={20} height={20} alt="pinterest" className="size-4 sm:size-5 mr-3" />
                <Link href="https://in.pinterest.com/homesunderbudget/" className="hover:text-amber-50 transition-colors">Pinterest</Link>
              </div>
              <div className="flex items-center">
                <Image loading="lazy" src="/instagram.png" width={20} height={20} alt="instagram" className="size-4 sm:size-5 mr-3" />
                <Link href="https://www.instagram.com/homesunderbudget/" className="hover:text-amber-50 transition-colors">Instagram</Link>
              </div>
              <div className="flex items-center">
                <Image loading="lazy" src="/youtube.png" width={20} height={20} alt="Youtube" className="size-4 sm:size-5 mr-3" />
                <Link href="https://www.youtube.com/@homesunderbudget" className="hover:text-amber-50 transition-colors">Youtube</Link>
              </div>
              <div className="flex items-center">
                <Image loading="lazy" src="/message.png" width={20} height={20} alt="LinkedIn" className="size-4 sm:size-5 mr-3" />
                <Link href="https://www.linkedin.com/company/homesunderbudget/" className="hover:text-amber-50 transition-colors">LinkedIn</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#B4A596] mt-10 mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4">
          <p className="text-xs sm:text-sm text-[#5A4C43] text-center md:text-left">
            © 2025 BRIGHTSPACE CREATIONS PRIVATE LIMITED All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="text-xs sm:text-sm text-[#5A4C43] hover:text-amber-50 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xs sm:text-sm text-[#5A4C43] hover:text-amber-50 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="text-xs sm:text-sm text-[#5A4C43] hover:text-amber-50 transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}