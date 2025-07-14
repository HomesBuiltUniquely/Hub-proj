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
            <h3 className="text-sm sm:text-base font-bold mb-4 md:mb-5 text-[#2B1D14] manrope-bold">SUPPORT</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-[#4A3F35]">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 sm:size-5 mr-3 mt-0.5 flex-shrink-0 manrope">
                  <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
                <span>+91 889 889 2223</span>
              </li>
              <li className="flex items-start manrope">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 sm:size-5 mr-3 mt-0.5 flex-shrink-0">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                <span className="manrope-medium">hello@homesunderbudget.com</span>
              </li>

              <Link href="https://maps.app.goo.gl/oySRtVCsY5NumAGt7">
                <li className="flex items-start manrope hover:text-amber-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 sm:size-5 mr-3 mt-0.5 flex-shrink-0">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                  <span className="manrope-medium">HBR Layout, Bangalore</span>
                </li>
              </Link>

              <Link href="https://maps.app.goo.gl/Z2iF19KJLUUJjy4e6">
                <li className="flex items-start manrope hover:text-amber-50 transition-colors mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 sm:size-5 mr-3 mt-0.5 flex-shrink-0">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                  <span className="manrope-medium">Sarjapur Road, Bangalore</span>
                </li>
              </Link>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex-1 min-w-[200px] max-w-[350px]">
            <h3 className="text-sm sm:text-base font-bold mb-4 md:mb-5 text-[#2B1D14] manrope-bold">SOCIAL MEDIA</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm sm:text-base text-[#4A3F35]">
              {[
                { name: "Facebook", href: "https://www.facebook.com/HomesUnderBudget/", icon: "ICONS-06.svg" },
                { name: "Twitter", href: "https://x.com/Homeunderbudget", icon: "ICONS-03.svg" },
                { name: "Pinterest", href: "https://in.pinterest.com/homesunderbudget/", icon: "ICONS-05.svg" },
                { name: "Instagram", href: "https://www.instagram.com/homesunderbudget/", icon: "ICONS-02.svg" },
                { name: "Youtube", href: "https://www.youtube.com/@homesunderbudget", icon: "ICONS-04.svg" },
                { name: "LinkedIn", href: "https://www.linkedin.com/company/homesunderbudget/", icon: "message.png" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <Image
                    loading="lazy"
                    src={`https://yzmnmgrkugecsfnsmhib.supabase.co/storage/v1/object/public/videosmp4//${item.icon}`}
                    width={20}
                    height={20}
                    alt={item.name}
                    className="size-4 sm:size-5 mr-3"
                  />
                  <Link href={item.href} className="hover:text-amber-50 transition-colors manrope-medium">
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#B4A596] mt-10 mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4">
          <p className="text-xs sm:text-sm text-[#5A4C43] text-center md:text-left manrope-medium">
            © 2025 BRIGHTSPACE CREATIONS PRIVATE LIMITED All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="text-xs sm:text-sm text-[#5A4C43] hover:text-amber-50 transition-colors manrope-medium">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xs sm:text-sm text-[#5A4C43] hover:text-amber-50 transition-colors manrope-medium">Terms of Service</Link>
            <Link href="/Contact" className="text-xs sm:text-sm text-[#5A4C43] hover:text-amber-50 transition-colors manrope-medium">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
