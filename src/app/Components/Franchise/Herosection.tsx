"use client";

// pages/index.tsx

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";

const FRANCHISE_OPTIONS = [
  {
    title: "FICO (Franchise Invested Company Operated)",
    details: [
      "Exclusively Tier 1/Metro cities",
      "Projected ROI - 3x in 3 years",
      "Investment  50-80 Lakhs",
      "Minimum area - 2000 sq. ft."
    ],
    text: "Minimum effort, Maximum return"
  },
  {
    title: "FOFO (Franchise Owned Franchise Operated)",
    details: [
      "Tier 2 cities",
      "Projected ROI - 200% in 1 year",
      "Investment from 18 Lakh",
      "Minimum area - 800 sq. ft.",
    ],
     text: "Grow Your Empire!"
  },
  // Add more objects if you want more franchise cards
];

const Home: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const router = useRouter();

  const scrollToForm = () => {
    if (typeof window !== 'undefined') {
      const formElement = document.getElementById('franchise-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      city: formData.get('city') as string,
    };

    try {
      const response = await fetch('/api/franchise-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (result.success) {
        // Redirect to thank you page
        router.push('/thank-you-franchisee');
      } else {
        alert('There was an error submitting your inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect for mobile carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3); // Cycle through 3 images
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);
  
  const mobileTexts = [
    "Become a Franchisee!"
  ];

  return (
    
  <div>
  <div className="hidden md:block min-h-screen bg-[#f1f2f6] w-[1400px] h-auto mx-auto">
    {/* Hero Section with navbar, text, form, background image */}
    <div
      className="
        relative flex flex-col
        w-full
        h-[900px]
        min-h-[600px]
        md:min-h-[700px]
        overflow-hidden
        rounded-3xl
        "
      style={{
        backgroundImage: "url('/kh.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute"></div>

      {/* Navbar */}
      <header className="relative z-30 flex justify-between items-center px-8 py-6 -mt-18 ">
         <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={150} className=" h-[250px] -mt-7 -ml-10" />
        <nav className="flex gap-8 items-center mt-4 mr-20 ">
        <OfferingsDropdown textColor="text-white" className="" />
        <ExploreRoomsDropdown textColor="text-white" className="" />
        <NavMore textColor="text-white" className="" />
          <button className="bg-[#ddcdc1] text-black font-semibold px-5 py-2 rounded-4xl ml-4 hover:bg-[#ef0101]">
            GET FREE ESTIMATE
          </button>
        </nav>
      </header>

      {/* Main Content & Form */}
      <div className="relative z-10 flex flex-col gap-10 md:flex-row justify-between px-8 md:px-20 w-full flex-1 py-10 md:py-0">
        {/* Left: Headline & intro */}
        <div className="flex-1 flex flex-col justify-center md:max-w-xl pt-10 md:pt-0">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
             Become a Franchisee!
          </h1>
          <p className="text-2xl text-gray-100 mb-6">
          Future of smart investing
          </p>
        </div>

        {/* Right: Form */}
        <div id="franchise-form" className="md:w-[500px] h-[550px] w-full bg-black/60 rounded-xl shadow-lg px-7 py-8 self-center">
        <div className="text-white text-2xl mb-5">Enter Your Details To Get Started</div>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="flex gap-3">
              <div className="">
              <label className="pl-1 text-white"> Name*</label>
              <input
                required
                name="name"
                placeholder=""
                disabled={isSubmitting}
                className="w-[440px] px-4 py-2 rounded border mt-4 bg-[#f2f2f6]/70 disabled:opacity-50 disabled:cursor-not-allowed"
                type="text"
              />
              </div>
              <div className="">
              </div>
            </div>
            <label className="pl-1 text-white">Email Id*</label>
            <input
              required
              name="email"
              placeholder=""
              disabled={isSubmitting}
              className="w-full px-4 py-2 rounded border mt-4 bg-[#f2f2f6]/70 disabled:opacity-50 disabled:cursor-not-allowed"
              type="email"
            />
            <label className="pl-1 text-white">Phone*</label>
            <input
              required
              name="phone"
              placeholder=""
              disabled={isSubmitting}
              className="w-full px-4 py-2 rounded border mt-4 bg-[#f2f2f6]/70 disabled:opacity-50 disabled:cursor-not-allowed"
              type="tel"
            />
            <label className="pl-1 text-white">City*</label>
            <input
              required
              name="city"
              placeholder=""
              disabled={isSubmitting}
              className="w-full px-4 py-2 mt-2 rounded border bg-[#f2f2f6]/70 disabled:opacity-50 disabled:cursor-not-allowed"
              type="text"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-bold py-2 rounded mt-4 transition flex items-center justify-center ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>

    <div className="w-[1200px] text-center mx-auto mt-20 text-[18px]">
    HUB Interior is more than an interior brand; it&#39;s a movement redefining how homes are designed and delivered. Our exclusive 34-Day Fast Track Interior Service, we&#39;ve set new benchmarks in speed, quality, and design excellence. With our brand-backed business models and client-oriented products such as Homes Under Budget, Hubsolute, The Office (commercial interiors), and Homes & Merry, we bring innovation and trust to every space we create and products we deliver.
    </div>
    <div className="w-[1200px] text-center mx-auto mt-4 text-[18px]">Our mission, &#34;Homes Uniquely Built&#34;, reflects our commitment to crafting personalized spaces that inspire. As a partner, you gain the power of a proven business model, an ecosystem of high-performing brands, and the confidence that comes with a fast-growing market.</div>

    {/* Franchise Options Section */}
    <div className="flex ">
    <section className="w-screen h-[500px] mt-20">
      <h2 className="text-4xl font-bold mb-2 pl-135">Business Models</h2>
      <div className="grid md:grid-cols-3 gap-50 ml-70 mt-10">
        {FRANCHISE_OPTIONS.map((option, idx) => (
          <div
            key={idx}
            className="bg-[#ddcdc1] w-[400px] h-[350px] rounded-xl shadow-md p-6 flex flex-col justify-between border border-gray-100 mt-2"
          >
            <div className="">
              <strong className="font-semibold">{option.title}</strong>
              <ul className="list-disc ml-6 mt-3 mb-4 text-gray-700 space-y-1">
                {option.details.map((d, i) => (
                  <li key={i} className={d.includes("ROI") ? "text-black " : ""}>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center text-lg manrope-medium">
              {option.text}
            </div>
            <button 
              onClick={scrollToForm}
              className="bg-white text-black font-semibold px-4 py-2 rounded-md mt-2 hover:bg-[#ef0101] transition-colors"
            >
              Know More
            </button>
          </div>
        ))}
      </div>
    </section>
    </div>
  </div>



          {/* Mobile version */}
      <div className="block md:hidden">
      <div>
           <div className="w-auto h-[610px] relative bg-gray-100 rounded-[35px] overflow-hidden mx-auto">
             {/* Mobile Header */}
             <div className="relative z-20 flex items-center justify-between p-4">
               <img src="/redlogo.png" className="w-[135px] h-[140px] pb-6 -mt-8 pr-14 "></img>
               
               {/* Hamburger Menu Button */}
               <button 
                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                 className="text-white pr-10 mb-10"
               >
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                 </svg>
               </button>
             </div>

             {/* Mobile Navigation Menu */}
             {isMobileMenuOpen && (
               <div className="absolute top-0 right-0 w-80 h-full bg-white/95 backdrop-blur-sm z-30 rounded-[35px] overflow-hidden">
                 <div className="p-6 pt-20">
                   {/* Close Button */}
                   <button 
                     onClick={() => setIsMobileMenuOpen(false)}
                     className="absolute top-4 right-4 text-gray-600 p-2"
                   >
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                     </svg>
                   </button>

                   {/* Navigation Items */}
                   <div className="space-y-6">
                     <div>
                       <h3 className="text-lg font-semibold text-gray-800 mb-3 manrope">OFFERINGS</h3>
                       <div className="space-y-2 pl-4">
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Full Home Interior</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Modular Interior</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Home Renovation</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Space Management</p>
                       </div>
                     </div>

                     <div>
                       <h3 className="text-lg font-semibold text-gray-800 mb-3 manrope">EXPLORE ROOMS</h3>
                       <div className="space-y-2 pl-4">
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Modular Kitchen</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Bedroom</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Living Room</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Kids Room</p>
                       </div>
                     </div>

                     <div>
                       <h3 className="text-lg font-semibold text-gray-800 mb-3 manrope">MORE</h3>
                       <div className="space-y-2 pl-4">
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">About Us</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Projects</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Blog</p>
                         <p className="text-gray-600 manrope-medium cursor-pointer hover:text-gray-800">Contact</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             )}
             
             <img className="w-full h-[600px] rounded-4xl relative -mt-40" src={`/hh1${currentSlide + 1}.png`} />
             <div className="-mt-60 w-[350px] text-left text-4xl font-semibold text-white ml-10 wulkan-display-bold absolute">{mobileTexts[currentSlide]}</div>
             <button className="bg-[#ddcdc1] text-black px-4 py-2 rounded-4xl -mt-12 ml-10 manrope-medium absolute">Explore Models</button>
           </div>
          </div>

          {/* Section2 */}

            <div className="h-auto ">
              <div className="w-[320px] h-[480px] border-2 border-[#DDCDC1] mx-auto mt-5 rounded-4xl">

                <div className="w-[280px] h-[50px] mx-auto">
                  <input type="text" placeholder="First Name" className=" w-[280px] h-[50px] rounded-full border-2 border-[#ddcdc1] mt-10 pl-4 " />
                  <input type="text" placeholder="Last Name" className=" w-[280px] h-[50px] rounded-full border-2 border-[#ddcdc1] mt-5 pl-4 " />
                  <input type="text" placeholder="Email" className=" w-[280px] h-[50px] rounded-full border-2 border-[#ddcdc1] mt-5 pl-4 " />
                  <input type="text" placeholder="Phone" className=" w-[280px] h-[50px] rounded-full border-2 border-[#ddcdc1] mt-5 pl-4 " />
                  <input type="text" placeholder="Preffered Location" className=" w-[280px] h-[50px] rounded-full border-2 border-[#ddcdc1] mt-5 pl-4 " />
                  <button className="bg-[#ef0101] text-white w-[180px] h-[40px] rounded-full mt-8">Join our network</button>
                </div>

              </div>
              

            </div>

            {/* Section3 */}

            <div className="w-auto mt-20 mx-auto text-center">

            <p className="w-[300px] text-sm mx-auto">HUB Interior is more than an interior brand; it&#39;s a movement redefining how homes are designed and delivered. Our exclusive 34-Day Fast Track Interior Service, we&#39;ve set new benchmarks in speed, quality, and design excellence. With our brand-backed business models and client-oriented products such as Homes Under Budget, Hubsolute, The Office (commercial interiors), and Homes & Merry, we bring innovation and trust to every space we create and products we deliver.</p>

            </div>

      </div>
  </div>
  );
};

export default Home;
