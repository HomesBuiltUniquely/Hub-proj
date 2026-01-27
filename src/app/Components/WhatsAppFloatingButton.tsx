 "use client";
 
 import { usePathname } from "next/navigation";
 
 const HIDE_WHATSAPP_PATHS = [
   "/interior-designers-in-bangalore",
   "/interior-designers-in-bangalore/Calculator",
   "/best-interior-designers-in-bangalore",
   "/best-interior-designers-in-bangalore/Calculator",
 ];
 
const WHATSAPP_NUMBER = "918898892223";
const WHATSAPP_MESSAGE =
`Hi , I am looking for interiors.

Name:
Phone number:
Property Pincode: `;
 
 export default function WhatsAppFloatingButton() {
   const pathname = usePathname() || "/";
 
   const shouldHide = HIDE_WHATSAPP_PATHS.some(
     path => pathname === path || pathname.startsWith(`${path}/`)
   );
 
   if (shouldHide) {
     return null;
   }
 
   const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
     WHATSAPP_MESSAGE
   )}`;
 
   return (
     <a
       href={whatsappUrl}
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Chat with us on WhatsApp"
       className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366]"
     >
       <svg
         width="28"
         height="28"
         viewBox="0 0 32 32"
         fill="currentColor"
         aria-hidden="true"
       >
         <path d="M16.006 2.667C8.844 2.667 3.001 8.51 3.001 15.673c0 2.747.862 5.273 2.33 7.36L3 29.334l6.524-2.266a12.93 12.93 0 0 0 6.482 1.739h.001c7.161 0 13.004-5.843 13.004-13.006 0-7.162-5.843-13.134-13.005-13.134Zm0 23.47h-.001a10.8 10.8 0 0 1-5.502-1.51l-.394-.234-3.87 1.344 1.302-3.774-.257-.389a10.79 10.79 0 1 1 8.722 4.563Zm5.927-8.065c-.324-.162-1.919-.947-2.217-1.055-.297-.108-.513-.162-.73.162-.216.324-.838 1.055-1.027 1.271-.189.216-.378.243-.702.081-.324-.162-1.368-.505-2.606-1.61-.963-.86-1.613-1.924-1.802-2.248-.189-.324-.02-.5.142-.662.146-.146.324-.378.486-.568.162-.189.216-.324.324-.54.108-.216.054-.405-.027-.567-.081-.162-.73-1.759-1.001-2.405-.265-.636-.534-.55-.73-.55l-.622-.011c-.216 0-.567.081-.865.405-.297.324-1.135 1.109-1.135 2.705 0 1.595 1.162 3.14 1.324 3.356.162.216 2.287 3.5 5.54 4.906.774.334 1.38.534 1.852.684.777.247 1.485.212 2.044.129.624-.093 1.919-.784 2.19-1.54.27-.757.27-1.405.189-1.54-.081-.135-.297-.216-.622-.378Z" />
       </svg>
     </a>
   );
 }
