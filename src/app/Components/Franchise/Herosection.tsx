"use client";

// import React, { useState, useEffect } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import OfferingsDropdown from "../OfferingsDropdown";
import ExploreRoomsDropdown from "../ExploreRooms";
import NavMore from "../NavMore";
import router from "next/router";
import OverlapNavBar from "../OverlapNavBar";

// const FRANCHISE_OPTIONS = [
//   {
//     title: "FICO (Franchise Invested Company Operated)",
//     details: [
//       "Exclusively Tier 1/Metro cities",
//       "Projected ROI - 3x in 3 years",
//       "Investment  50-80 Lakhs",
//       "Minimum area - 2000 sq. ft."
//     ],
//     text: "Minimum effort, Maximum return"
//   },
//   {
//     title: "FOFO (Franchise Owned Franchise Operated)",
//     details: [
//       "Tier 2 cities",
//       "Projected ROI - 200% in 1 year",
//       "Investment from 18 Lakh",
//       "Minimum area - 800 sq. ft.",
//     ],
//     text: "Grow Your Empire!"
//   },
// Add more objects if you want more franchise cards
// ];


function handleClick() {
  router.push("/");
}

const Home: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const router = useRouter();

  // const scrollToForm = () => {
  //   if (typeof window !== 'undefined') {
  //     const formElement = document.getElementById('franchise-form');
  //     if (formElement) {
  //       formElement.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // };

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


  const handleGetEstimate = () => {
    router.push('/GetEstimate');
  };

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
     /* Hide all by default */
        .desktop-1280,
        .desktop-1920,
        .desktop-2560 {
          display: none !important;
        }

        /* 1280px layout for laptops and smaller desktops (>=1024px and <1440px) */
        @media (min-width: 1024px) and (max-width: 1439px) {
          .desktop-1280 {
            display: block !important;
          }
        }

        /* 1920px layout for large desktops (1440px–1920px) */
        @media (min-width: 1440px) and (max-width: 1920px) {
          .desktop-1920 {
            display: block !important;
          }
        }

        /* 2560px layout for extra large desktops (>1920px) */
        @media (min-width: 1921px) {
          .desktop-2560 {
            display: block !important;
          }
        }

         /* mobile layout for extra large desktops (>1920px) */
        @media (max-width: 1023px) {
          .mobile-1 {
            display: block !important;
          }
        }

      `}</style>


      {/* 2560 Version */}

      <div className="desktop-2560">
        <div
          className="w-[1400px] h-[900px] mx-auto rounded-3xl overflow-hidden bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('/kh.png')",
          }}
        >
          {/* Navbar */}
          <div className="flex items-center justify-between -mt-15">
            <div onClick={handleClick} className="cursor-pointer">
              <Image
                src="/redlogo.png"
                alt="HUB Interior Logo"
                width={220}
                height={100}
                className="w-[250px] h-full -mt-2 -ml-2"
              />
            </div>
            <div className="hidden md:flex items-center gap-12">
              {/* NAV BAR — unchanged */}
              <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[480px] h-[45px] justify-center items-center text-[18px] flex gap-12 manrope text-white tracking-widest ">
                <OfferingsDropdown textColor="text-white" />
                <ExploreRoomsDropdown textColor="text-white" />
                <NavMore textColor="text-white" />
              </div>

              {/* CTA — unchanged */}
              <button
                onClick={handleGetEstimate}
                className="relative bg-[#ef0101] mr-15 hover:bg-[#ebd457] text-white h-[45px] w-[270px] rounded-4xl manrope shadow-lg shadow-black/50 hover:shadow-2xl text-[18px] tracking-wide text-left pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
              >
                BOOK CONSULTATION

                <span className="absolute -top-4 right-1 w-[60px] h-[60px]">
                  <img src="/free.png" alt="Free" className="w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center wulkan-display-bold text-white text-[10px]">
                    FREE
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* Main Content & Form */}
          <div className="relative z-10 flex flex-col gap-10 md:flex-row justify-between px-8 md:px-20 w-full flex-1 py-10 md:py-0">
            {/* Left: Headline & intro */}
            <div className="flex-1 flex flex-col justify-center md:max-w-xl pt-10 md:pt-0">
              <h1 className="text-white  text-5xl lg:text-6xl wulkan-display-bold mt-70 mb-2 drop-shadow-lg text-nowrap -ml-5">
                Become a franchisee!
              </h1>
              <p className="text-2xl text-gray-100 mb-6 manrope-medium -ml-5">Future of smart investing</p>
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
                className={`w-full manrope py-2 rounded mt-4 transition flex items-center justify-center ${isSubmitting
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


      {/* 1920 Version */}

      <div className="desktop-1920">
        <div
          className="hidden md:block w-full max-w-[1920px] h-[950px] mx-auto rounded-3xl overflow-hidden bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('/kh.png')",
          }}
        >
          {/* Navbar */}
          <div className="flex items-center justify-between -mt-15">
            <div onClick={handleClick} className="cursor-pointer">
              <Image
                src="/redlogo.png"
                alt="HUB Interior Logo"
                width={250}
                height={100}
                className="w-[250px] h-full -mt-3 ml-2"
              />
            </div>

            <div className="hidden md:flex items-center gap-12">
              {/* NAV BAR — unchanged */}
              <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[480px] h-[45px] justify-center items-center text-[18px] flex gap-12 manrope text-white tracking-widest ">
                <OfferingsDropdown textColor="text-white" />
                <ExploreRoomsDropdown textColor="text-white" />
                <NavMore textColor="text-white" />
              </div>

              {/* CTA — unchanged */}
              <button
                onClick={handleGetEstimate}
                className="relative bg-[#ef0101] mr-15 hover:bg-[#ebd457] text-white h-[45px] w-[270px] rounded-4xl manrope shadow-lg shadow-black/50 hover:shadow-2xl text-[18px] tracking-wide text-left pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
              >
                BOOK CONSULTATION

                <span className="absolute -top-4 right-1 w-[60px] h-[60px]">
                  <img src="/free.png" alt="Free" className="w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center wulkan-display-bold text-white text-[10px]">
                    FREE
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* Main Content & Form */}
          <div className="relative z-10 flex flex-col gap-10 md:flex-row justify-between px-8 md:px-20 w-full flex-1 py-10 md:py-0">
            {/* Left: Headline & intro */}
            <div className="flex-1 flex flex-col justify-center md:max-w-xl pt-10 md:pt-0">
              <h1 className="text-white  text-5xl lg:text-6xl wulkan-display-bold mt-70 mb-2 drop-shadow-lg text-nowrap -ml-5">
                Become a franchisee!
              </h1>
              <p className="text-2xl text-gray-100 mb-6 manrope-medium -ml-5">Future of smart investing</p>
            </div>
          </div>


          {/* Right: Form */}
          <div id="franchise-form" className="md:w-[500px] h-[550px] w-full manrope-medium bg-black/60 rounded-xl shadow-lg px-7 py-8 -mt-80 ml-225 self-center">
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
                className={`w-full font-bold py-2 rounded mt-4 manrope transition flex items-center justify-center ${isSubmitting
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


      {/* 1280 Version */}
      <div className="desktop-1280 px-5">
        <div className="w-[1240px] h-[800px] rounded-3xl overflow-hidden bg-cover bg-center relative shadow-md"
          style={{ backgroundImage: "url('/kh.png')" }}>

          {/* Navbar */}
          <div className="flex items-center justify-between px-8">
            {/* Logo */}
            <div onClick={handleClick} className="cursor-pointer">
              <Image
                src="/redlogo.png"
                alt="HUB Interior Logo"
                width={230}
                height={250}
                className="w-[full] h-[full] -mt-12 -ml-8"
              />
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex -mt-12 items-center gap-12">


              {/* NAV BAR — unchanged */}
              <div className="bg-gradient-to-r from-transparent via-black/25 to-transparent backdrop-blur-md border-1 rounded-3xl w-[480px] h-[45px] justify-center items-center text-[18px] flex gap-12 manrope text-white tracking-widest ">
                <OfferingsDropdown textColor="text-white" />
                <ExploreRoomsDropdown textColor="text-white" />
                <NavMore textColor="text-white" />
              </div>

              {/* CTA — unchanged */}
              <button
                onClick={handleGetEstimate}
                className="relative bg-[#ef0101] mr-1 hover:bg-[#ebd457] text-white h-[45px] w-[270px] rounded-4xl manrope shadow-lg shadow-black/50 hover:shadow-2xl text-[18px] tracking-wide text-left pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60"
              >
                BOOK CONSULTATION

                <span className="absolute -top-4 right-1 w-[60px] h-[60px]">
                  <img src="/free.png" alt="Free" className="w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center wulkan-display-bold text-white text-[10px]">
                    FREE
                  </span>
                </span>
              </button>

            </div>
          </div>

          {/* Main Content & Form */}

          <div className="flex flex-col text-white text-left mt-75 pl-12 space-y-6 max-w-[950px]">
            <h1 className="w-[1200px] text-5xl lg:text-6xl wulkan-display-bold mb-3 drop-shadow-lg">
              Become a franchisee!
            </h1>

            <p className="w-[1200px] text-2xl manrope-medium mb-6 drop-shadow-lg">
              Future of smart investing
            </p>
          </div>

          {/* ✅ Right: Form (same structure, just visually smaller) */}
          <div
            id="franchise-form"
            className="md:w-[420px] h-[550px] w-full manrope-medium bg-black/60 rounded-3xl shadow-lg px-6 py-6 -mt-100 ml-190 self-center"
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
                className={`w-full font-bold py-2 rounded mt-4 manrope transition flex items-center justify-center ${isSubmitting
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
      </div>

      {/* Mobile version */}

      <div className="mobile-1 md:hidden w-full max-w-[425px] mx-auto mb-5 overflow-hidden">
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

          {/* text + cta */}
          <h2 className="manrope leading-tight">
            <div className="absolute top-40 text-white w-full px-3 mt-10">
              <div className="text-4xl wulkan-display-bold drop-shadow-lg w-[20px] text-nowrap mt-15 ml-3">
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
                className={`w-[180px] sm:w-[180px] h-[40px] rounded-full mt-6 manrope transition flex items-center justify-center ${isSubmitting
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

        <OverlapNavBar />

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