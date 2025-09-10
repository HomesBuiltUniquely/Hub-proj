import React from "react";

const ContactSection: React.FC = () => (
  <div className="bg-gray-100  h-[750px] pb-8">
    {/* Top Section: Headline + Form */}
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8 pt-12 px-4">
      {/* Left: Heading and subtext */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
          Still Have<br />A Question ?<br />Lets Talk
        </h1>
      </div>
      {/* Right: Form */}
      <form className="md:w-1/2 bg-transparent space-y-4">
        <div className="flex gap-4">
          <input
            className="w-1/2 rounded-md px-3 py-2 bg-white border border-gray-200"
            placeholder="First Name*"
            required
          />
          <input
            className="w-1/2 rounded-md px-3 py-2 bg-white border border-gray-200"
            placeholder="Last Name"
          />
        </div>
        <div className="flex gap-4">
          <input
            className="w-1/2 rounded-md px-3 py-2 bg-white border border-gray-200"
            placeholder="Email*"
            type="email"
            required
          />
          <input
            className="w-1/2 rounded-md px-3 py-2 bg-white border border-gray-200"
            placeholder="Phone Number*"
            type="tel"
            required
          />
        </div>
        <textarea
          className="w-full rounded-md px-3 py-2 bg-white border border-gray-200 h-28 resize-none"
          placeholder="Tell Us More"
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white text-lg rounded-full px-8 py-2 font-semibold transition"
        >
          Submit
        </button>
      </form>
    </div>

    {/* Bottom Section: Office and Social */}
    <div className="max-w-6xl mx-auto mt-20 bg-[#DDCDC1] rounded-3xl px-8 py-10 flex flex-col md:flex-row justify-between items-start gap-8">
      {/* Corporate Office */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6">Corporate Office</h2>
        <div className="flex items-start space-x-3 mb-4 text-white/80">
          <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 21V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14m8-14v2a2 2 0 1 1-4 0V5" />
          </svg>
          <span>1st Floor, 6th Cross Rd, 1st Stage, HBR Layout 4th Block, HBR Layout, Bengaluru, Karnataka 560044</span>
        </div>
        <div className="flex items-start space-x-3 mb-4 text-white/80">
          <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/>
          </svg>
          <span>hello@hubinterior.com</span>
        </div>
        <div className="flex items-start space-x-3 text-white/80">
          <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M22 17.92V21a1 1 0 0 1-1.11 1A19.8 19.8 0 0 1 3 4.11 1 1 0 0 1 4 3h3.09A1 1 0 0 1 8 4a16 16 0 0 0 .66 2.3 1 1 0 0 1-.25 1L6.13 8.27a16 16 0 0 0 6.58 6.58l1-1.28a1 1 0 0 1 1-.26A16 16 0 0 0 20 19a1 1 0 0 1 .92 1z"/>
          </svg>
          <span>+91 889 889 1117 / 889 889 2223</span>
        </div>
      </div>
      {/* Social Links */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6">Follow Us For Daily Design Drama</h2>
        <div className="flex space-x-7 text-white/80 text-3xl">
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i>in</a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i> <span className="ml-1">𝕀</span></a>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i>f</a>
          <a href="#" aria-label="X"><i className="fab fa-x-twitter"></i>X</a>
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;
