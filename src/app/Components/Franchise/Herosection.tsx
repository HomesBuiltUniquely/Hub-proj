"use client";

// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
import Link from "next/link";

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

  const handleMobileFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) return;

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const data = {
      name: `${firstName} ${lastName}`.trim(),
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
  // const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect for mobile carousel
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % 3); // Cycle through 3 images
  //   }, 4000); // Change slide every 4 seconds

  //   return () => clearInterval(interval);
  // }, []);

  // const mobileTexts = [
  //   "Become a Franchisee!"
  // ];

  return (
    <>
      <style jsx>{`
        /* Hide both by default */
        .desktop-1280,
        .desktop-1440 {
          display: none !important;
        }

        /* Show 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }

        /* Show 1440px layout for large desktops (>=1440px) */
        @media (min-width: 1440px) {
          .desktop-1440 {
            display: block !important;
          }
        }
      `}</style>

      <div className="desktop-1440">
        <div
          className="w-[1400px] h-[900px] mx-auto rounded-3xl overflow-hidden bg-cover bg-center relative"
          style={{ backgroundImage: "url('/kh.png')" }}
        >
          {/* Navbar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-0 z-20">
            <Image src="/redlogo.png" alt="HUB Interior Logo" width={250} height={150} className=" h-[250px] -mt-18 -ml-10" />

            <nav className="flex gap-8 items-center  -mt-8 mr-20 ">
              <OfferingsDropdown textColor="text-white" className="manrope" />
              <ExploreRoomsDropdown textColor="text-white" className="manrope" />
              <NavMore textColor="text-white" className="manrope" />
              <button className="bg-[#ddcdc1] text-black manrope-medium px-5 py-2 rounded-4xl ml-4 hover:bg-[#ef0101]">
                GET FREE ESTIMATE
              </button>
            </nav>



          </div>

          {/* Main Content & Form */}
          <div className="relative z-10 flex flex-col gap-10 md:flex-row justify-between px-8 md:px-20 w-full flex-1 py-10 md:py-0">
            {/* Left: Headline & intro */}
            <div className="flex-1 flex flex-col justify-center md:max-w-xl pt-10 md:pt-0">
              <h1 className="text-white text-4xl md:text-5xl manrope mt-123 mb-2 drop-shadow-lg">
                Become a Franchisee!
              </h1>
              <p className="text-2xl text-gray-100 mb-6 manrope-medium">Future of smart investing</p>
            </div>
          </div>


          {/* Right: Form */}
          <div id="franchise-form" className="md:w-[500px] h-[550px] w-full manrope-medium bg-black/60 rounded-xl shadow-lg px-7 py-8 -mt-100 ml-210 self-center">
            <div className="text-white text-2xl manrope-medium mb-5">Enter your details to get started</div>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="flex gap-3">
                <div className="">
                  <label className="pl-1 text-white "> Name*</label>
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
                className={`w-full font-bold py-2 rounded mt-4 transition flex items-center justify-center ${isSubmitting
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

        <div className="w-[1200px] manrope-medium text-center mx-auto mt-20 text-[18px]">
          HUB Interior is more than an interior brand; it&#39;s a movement redefining how homes are designed and delivered. Our exclusive 34-Day Fast Track Interior Service, we&#39;ve set new benchmarks in speed, quality, and design excellence. With our brand-backed business models and client-oriented products such as Homes Under Budget, Hubsolute, The Office (commercial interiors), and Homes & Merry, we bring innovation and trust to every space we create and products we deliver.
        </div>
        <div className="w-[1200px] manrope-medium text-center mx-auto mt-4 text-[18px]">Our mission, &#34;Homes Uniquely Built&#34;, reflects our commitment to crafting personalized spaces that inspire. As a partner, you gain the power of a proven business model, an ecosystem of high-performing brands, and the confidence that comes with a fast-growing market.</div>

        <div className="flex justify-center">
          <section className="w-full max-w-[1440px] h-[500px] mt-20">
            <h2 className="text-4xl manrope mb-4 text-center">Business Models</h2>

            {/* Flexbox keeps boxes centered for any count */}
            <div className="flex flex-wrap justify-center gap-[50px] mt-10">
              {FRANCHISE_OPTIONS.map((option, idx) => (
                <div
                  key={idx}
                  className="bg-[#ddcdc1] w-[400px] h-[350px] rounded-xl shadow-md p-6 flex flex-col justify-between border border-gray-100"
                >
                  <div>
                    <strong className="manrope-medium">{option.title}</strong>
                    <ul className="list-disc manrope-medium ml-6 mt-3 mb-4 text-gray-700 space-y-1">
                      {option.details.map((d, i) => (
                        <li key={i} className={d.includes('ROI') ? 'text-black' : ''}>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center text-lg manrope">
                    {option.text}
                  </div>
                  <button
                    onClick={scrollToForm}
                    className="bg-white text-black manrope-medium px-4 py-2 rounded-md mt-2 hover:bg-[#ef0101] transition-colors"
                  >
                    Know More
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>



      <div className="desktop-1280 px-3">
        <div className="w-[full] h-[800] mx-auto rounded-3xl  overflow-hidden relative bg-cover bg-center"
          style={{ backgroundImage: "url('/kh.png')" }}>

          {/* Navbar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-0 z-20">
            <Image
              src="/redlogo.png"
              alt="HUB Interior Logo"
              width={225}
              height={150}
              className="h-[225px] -mt-16 -ml-10"
            />

            <nav className="flex gap-8 items-center -mt-8 mr-20 ">
              <OfferingsDropdown textColor="text-white" className="manrope" />
              <ExploreRoomsDropdown textColor="text-white" className="manrope" />
              <NavMore textColor="text-white" className="manrope" />
              <button className="bg-[#ddcdc1] text-black manrope-medium px-5 py-2 rounded-4xl ml-4 hover:bg-[#ef0101]">
                GET FREE ESTIMATE
              </button>
            </nav>
          </div>

          {/* Main Content & Form */}
          <div className="relative z-10 flex flex-col gap-10 md:flex-row justify-between px-8 md:px-20 w-full flex-1 py-10 md:py-0">
            {/* Left: Headline & intro */}
            <div className="flex-1 flex flex-col justify-center md:max-w-xl pt-10 md:pt-0 -ml-5">
              <h1 className="text-white text-5xl  manrope mt-123 mb-2 text-nowrap drop-shadow-lg">
                Become a Franchisee!
              </h1>
              <p className="text-2xl text-gray-100 mb-6 manrope-medium">
                Future of smart investing
              </p>
            </div>
          </div>

          {/* ✅ Right: Form (same structure, just visually smaller) */}
          <div
            id="franchise-form"
            className="md:w-[420px] h-[550px] w-full manrope-medium bg-black/60 rounded-3xl shadow-lg px-6 py-6 -mt-110 ml-190 self-center"
          >
            <div className="text-white text-2xl manrope-medium mb-5">
              Enter your details to get started
            </div>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="flex gap-3">
                <div className="">
                  <label className="pl-1 text-white "> Name*</label>
                  <input
                    required
                    name="name"
                    placeholder=""
                    disabled={isSubmitting}
                    className="w-[380px] px-3 py-2 rounded border mt-4 bg-[#f2f2f6]/70 disabled:opacity-50 disabled:cursor-not-allowed"
                    type="text"
                  />
                </div>
                <div className=""></div>
              </div>

              <label className="pl-1 text-white">Email Id*</label>
              <input
                required
                name="email"
                placeholder=""
                disabled={isSubmitting}
                className="w-full px-3 py-2 rounded border mt-4 bg-[#f2f2f6]/70 disabled:opacity-50 disabled:cursor-not-allowed"
                type="email"
              />

              <label className="pl-1 text-white">Phone*</label>
              <input
                required
                name="phone"
                placeholder=""
                disabled={isSubmitting}
                className="w-full px-3 py-2 rounded border mt-4 bg-[#f2f2f6]/70 disabled:opacity-50 disabled:cursor-not-allowed"
                type="tel"
              />

              <label className="pl-1 text-white">City*</label>
              <input
                required
                name="city"
                placeholder=""
                disabled={isSubmitting}
                className="w-full px-3 py-2 mt-2 rounded border bg-[#f2f2f6]/70 disabled:opacity-50 disabled:cursor-not-allowed"
                type="text"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-2 rounded mt-4 transition flex items-center justify-center ${isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 
                     0 0 5.373 0 12h4zm2 5.291A7.962 
                     7.962 0 014 12H0c0 3.042 1.135 
                     5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>


        <div className="w-[1100px] manrope-medium text-center mx-auto mt-16 text-[17px]">
          HUB Interior is more than an interior brand; it&#39;s a movement redefining how homes are designed and delivered. Our exclusive 34-Day Fast Track Interior Service, we&#39;ve set new benchmarks in speed, quality, and design excellence. With our brand-backed business models and client-oriented products such as Homes Under Budget, Hubsolute, The Office (commercial interiors), and Homes & Merry, we bring innovation and trust to every space we create and products we deliver.
        </div>

        <div className="w-[1100px] manrope-medium text-center mx-auto mt-4 text-[17px]">
          Our mission, &#34;Homes Uniquely Built&#34;, reflects our commitment to crafting personalized spaces that inspire. As a partner, you gain the power of a proven business model, an ecosystem of high-performing brands, and the confidence that comes with a fast-growing market.
        </div>

        {/* Franchise Options Section */}
        <div className="flex justify-center">
          <section className="w-full max-w-[1280px] h-[480px] mt-16">
            <h2 className="text-3xl manrope mb-2 text-center">Business Models</h2>

            {/* grid centered dynamically */}
            <div className="flex flex-wrap manrope-medium justify-center gap-[40px] mt-8">
              {FRANCHISE_OPTIONS.map((option, idx) => (
                <div
                  key={idx}
                  className="bg-[#ddcdc1] w-[380px] h-[330px] rounded-xl manrope-medium text-nowrap shadow-md p-6 flex flex-col justify-between border border-gray-100"
                >
                  <div>
                    <strong className="manrope-medium">{option.title}</strong>
                    <ul className="list-disc ml-6 mt-3 mb-4 text-gray-700 space-y-1">
                      {option.details.map((d, i) => (
                        <li key={i} className={d.includes('ROI') ? 'text-black' : ''}>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center text-lg manrope">
                    {option.text}
                  </div>
                  <button
                    onClick={scrollToForm}
                    className="bg-white text-black manrope-medium px-4 py-2 rounded-md mt-2 hover:bg-[#ef0101] transition-colors"
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

      <div className="md:hidden w-full max-w-[425px] mx-auto mb-5 overflow-hidden">
        <div className="relative h-full w-full p-2">
          {/* Rounded image only */}
          <img src="https://urmwhawodjntegbbmnls.supabase.co/storage/v1/object/public/Hubinterior.img/INSMH.webp" alt="" />

          {/* top logo */}
          <div className="absolute top-2 -mt-5 -ml-1">
            <Image
              src="/redlogo.png"
              alt="HUB Interior Logo"
              width={90}
              height={25}
              className="cursor-pointer"
            />

          </div>

          {/* Hamburger Menu Button + Mobile Menu */}
          <div className="absolute top-5 right-1 z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black pr-6"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Mobile Navigation Menu */}
           {isMobileMenuOpen && (
                <div className="fixed top-0 right-0 w-64 h-140 bg-white/95 backdrop-blur-sm z-50 rounded-l-[25px] overflow-hidden shadow-lg">
                  <div className="p-4  relative">
                    {/* Close Button */}
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="absolute top-3 right-3 text-gray-600 p-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    {/* Navigation Items */}
                    <div className="space-y-4 mt-5">
                      <div>
                        <div>
                          <h3 className="text-base font-semibold text-gray-800 mb-2 manrope">
                            OFFERINGS
                          </h3>
                          <div className="space-y-2 pl-3"> {/* Increased spacing here */}
                            <Link href="/" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                              Full Home Interior
                            </Link>
                            <Link href="/" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                              Modular Interior
                            </Link>
                            <Link href="/" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                              Home Renovation
                            </Link>
                            <Link href="/" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                              Space Management
                            </Link>
                          </div>
                        </div>

                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-gray-800 mb-3 manrope">
                          EXPLORE ROOMS
                        </h3>
                        <div className="space-y-2 pl-3"> {/* increased vertical spacing */}
                          <Link href="/ModularKitchen" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                            Modular Kitchen
                          </Link>
                          <Link href="/Bedroom" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                            Bedroom
                          </Link>
                          <Link href="/LivingRoom" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                            Living Room
                          </Link>
                          <Link href="/LivingRoom" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                            Kids Room
                          </Link>
                        </div>


                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-gray-800 mb-3 manrope">
                          MORE
                        </h3>
                        <div className="space-y-2 pl-3"> {/* increased vertical spacing */}
                          <Link href="/AboutUs" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                            About Us
                          </Link>
                          <Link href="/Project" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                            Projects
                          </Link>
                          <Link href="/Blog" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                            Blog
                          </Link>
                          <Link href="/ContactUs" className="text-gray-600 manrope-medium hover:text-gray-800 block">
                            Contact Us
                          </Link>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>



          {/* text + cta */}
          <h2 className="manrope leading-tight">
            <div className="absolute top-40 text-white w-full px-3 mt-10">
              <div className="text-4xl manrope drop-shadow-lg w-[20px] text-nowrap mt-15 ml-3">
                Become a <div>Franchisee!</div>
              </div>
              <p className="manrope-medium w-[300px] shadow-lg  mt-2 ml-3">
                Future of smart investing
              </p>
            </div>
          </h2>
        </div>


        {/* Section2 */}
        <div className="h-auto w-full flex justify-center px-2">
          <div className="w-[360px] max-w-full h-auto border-2 border-[#DDCDC1] rounded-4xl mt-5 flex justify-center items-start p-4">
            <form onSubmit={handleMobileFormSubmit} className="w-full flex flex-col items-center">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                disabled={isSubmitting}
                className="w-full sm:w-[280px] h-[50px] rounded-full border-2 border-[#ddcdc1] mt-6 pl-4 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                disabled={isSubmitting}
                className="w-full sm:w-[280px] h-[50px] rounded-full border-2 border-[#ddcdc1] mt-4 pl-4 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                disabled={isSubmitting}
                className="w-full sm:w-[280px] h-[50px] rounded-full border-2 border-[#ddcdc1] mt-4 pl-4 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                disabled={isSubmitting}
                className="w-full sm:w-[280px] h-[50px] rounded-full border-2 border-[#ddcdc1] mt-4 pl-4 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <input
                type="text"
                name="city"
                placeholder="Preferred Location"
                required
                disabled={isSubmitting}
                className="w-full sm:w-[280px] h-[50px] rounded-full border-2 border-[#ddcdc1] mt-4 pl-4 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-[180px] sm:w-[180px] h-[40px] rounded-full mt-6 transition flex items-center justify-center ${isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed text-white'
                  : 'bg-[#ef0101] text-white hover:bg-red-700'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Join our network'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Section3 */}
        <div className="w-full mt-10 flex justify-center px-4 text-center">
          <p className="w-full max-w-[320px] sm:max-w-[360px] text-sm mx-auto">
            HUB Interior is more than an interior brand; it&#39;s a movement redefining how homes are designed and delivered. Our exclusive 34-Day Fast Track Interior Service, we&#39;ve set new benchmarks in speed, quality, and design excellence. With our brand-backed business models and client-oriented products such as Homes Under Budget, Hubsolute, The Office (commercial interiors), and Homes & Merry, we bring innovation and trust to every space we create and products we deliver.
          </p>
        </div>

      </div>




      {/* Section2 */}

      {/* <div className="h-auto ">
          <div className="w-[360px] h-[480px] border-2 border-[#DDCDC1] mx-auto mt-5 rounded-4xl">

            <form onSubmit={handleMobileFormSubmit} className="w-[300px] h-[50px] mx-auto justify-items-center">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                disabled={isSubmitting}
                className="w-[280px] h-[50px] rounded-full border-2 border-[#ddcdc1] mt-10 pl-4 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                disabled={isSubmitting}
                className="w-[280px] h-[50px] rounded-full border-2 border-[#ddcdc1] mt-5 pl-4 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                disabled={isSubmitting}
                className="w-[280px] h-[50px] rounded-full border-2 border-[#ddcdc1] mt-5 pl-4 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                disabled={isSubmitting}
                className="w-[280px] h-[50px] rounded-full border-2 border-[#ddcdc1] mt-5 pl-4 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <input
                type="text"
                name="city"
                placeholder="Preferred Location"
                required
                disabled={isSubmitting}
                className="w-[280px] h-[50px] rounded-full border-2 border-[#ddcdc1] mt-5 pl-4 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-[180px] h-[40px] rounded-full mt-8 transition flex items-center justify-center mx-auto ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : 'bg-[#ef0101] text-white hover:bg-red-700'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Join our network'
                )}
              </button>
            </form>

          </div>


        </div> */}

      {/* Section3 */}

      {/* <div className="w-auto mt-20 mx-auto text-center">

          <p className="w-[300px] text-sm mx-auto">HUB Interior is more than an interior brand; it&#39;s a movement redefining how homes are designed and delivered. Our exclusive 34-Day Fast Track Interior Service, we&#39;ve set new benchmarks in speed, quality, and design excellence. With our brand-backed business models and client-oriented products such as Homes Under Budget, Hubsolute, The Office (commercial interiors), and Homes & Merry, we bring innovation and trust to every space we create and products we deliver.</p>

        </div> */}



    </>
  );
};

export default Home;