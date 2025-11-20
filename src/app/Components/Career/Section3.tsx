"use client"

import React, { useRef, useState } from "react";

const JoinUsPage: React.FC = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  }

  return (

    <div>

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

      <div className="desktop-1440 min-h-full flex items-start justify-center bg-[#f4f5f8] px-20 pt-24 pb-12 ml-3">
        {/* Left: Text and brochure */}

        <div className="flex flex-col justify-start flex-1 px-2 ml-20 ">
          <h1 className="text-5xl lg:text-6xl wulkan-display-bold  mb-3 leading-tight">
            Ready to<br />join us?
          </h1>
          <p className="text-gray-600 mb-2 manrope-medium">
            Fill out your details and let’s create beautiful spaces—together.
          </p>
          <a
            href="/trail.pdf"
            download
            className="underline text-sm manrope text-gray-700 hover:text-red-600 manrope"
          >
            Download Our Brochure
          </a>
        </div>

        {/* Right: Form */}
        <div className="flex-1 flex justify-center items-start ml-170 -mt-60">
          <form
            className="bg-transparent p-4 w-full max-w-lg space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Application submitted!');
            }}
          >
            {/* First Row */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 text-sm manrope mb-1">First Name*</label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-md py-2 px-3 manrope-medium focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Your First Name"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-sm manrope mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full border rounded-md py-2 manrope-medium px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Your Last Name"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 text-sm manrope mb-1">Email*</label>
                <input
                  type="email"
                  required
                  className="w-full border rounded-md py-2 px-3 manrope-medium focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-sm manrope mb-1">Phone Number*</label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10,}"
                  className="w-full border rounded-md py-2 px-3 manrope-medium focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Your Phone"
                />
              </div>
            </div>

            {/* Position */}
            <div>
              <label className="block text-gray-700 text-sm manrope mb-1">Position Applying For*</label>
              <select
                required
                className="w-full border rounded-md py-2 px-3 manrope-medium focus:outline-none focus:ring-2 focus:ring-red-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Position
                </option>
                <option value="designer">Interior Designer</option>
                <option value="pm">Project Manager</option>
                <option value="sales">Sales Executive</option>
                <option value="other">Other</option>
              </select>
            </div>


            {/* Upload Resume */}
            <div>
              <label className="block text-gray-700 text-sm manrope mb-2">Upload Resume</label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="bg-gray-200 px-4 py-2 rounded-md manrope-medium text-gray-800 hover:bg-gray-300 transition"
                >
                  Choose File
                </button>
                <span className="text-gray-600 text-sm truncate manrope-medium w-40">{fileName || "No file chosen"}</span>
              </div>
              <input
                ref={fileRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>




            {/* About */}
            <div>
              <label className="block text-gray-700 text-sm manrope mb-1">Tell Us About You</label>
              <textarea
                rows={4}
                className="w-full border rounded-md py-2 px-3 manrope-medium focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Share your story, skills, or portfolio link"
              />
            </div>

            {/* Apply Button */}
            <div className="flex justify-start pt-2">
              <button
                type="submit"
                className="px-8 py-2 rounded-md manrope bg-red-600 text-white text-lg font-semibold hover:bg-red-700 transition"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>



      {/* 1280 version */}


      <div className="desktop-1280 min-h-full flex items-start justify-center bg-[#f4f5f8] px-20 pt-24 pb-12">
        {/* Left: Text and brochure */}

        <div className="flex flex-col justify-start flex-1 px-2  ">
          <h1 className="text-5xl lg:text-6xl wulkan-display-bold  mb-3 leading-tight">
            Ready to<br />join us?
          </h1>
          <p className="text-gray-600 mb-2 manrope-medium">
            Fill out your details and let’s create beautiful spaces—together.
          </p>
          <a
            href="/trail.pdf"
            download
            className="underline text-sm manrope text-gray-700 hover:text-red-600 manrope"
          >
            Download Our Brochure
          </a>
        </div>

        {/* Right: Form */}
        <div className="flex-1 flex justify-center items-start ml-150 -mt-60">
          <form
            className="bg-transparent p-4 w-full max-w-lg space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Application submitted!');
            }}
          >
            {/* First Row */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 text-sm manrope mb-1">First Name*</label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-md py-2 px-3 manrope-medium focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Your First Name"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-sm manrope mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full border rounded-md py-2 manrope-medium px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Your Last Name"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 text-sm manrope mb-1">Email*</label>
                <input
                  type="email"
                  required
                  className="w-full border rounded-md py-2 px-3 manrope-medium focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-sm manrope mb-1">Phone Number*</label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10,}"
                  className="w-full border rounded-md py-2 px-3 manrope-medium focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Your Phone"
                />
              </div>
            </div>

            {/* Position */}
            <div>
              <label className="block text-gray-700 text-sm manrope mb-1">Position Applying For*</label>
              <select
                required
                className="w-full border rounded-md py-2 px-3 manrope-medium focus:outline-none focus:ring-2 focus:ring-red-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Position
                </option>
                <option value="designer">Interior Designer</option>
                <option value="pm">Project Manager</option>
                <option value="sales">Sales Executive</option>
                <option value="other">Other</option>
              </select>
            </div>


            {/* Upload Resume */}
            <div>
              <label className="block text-gray-700 text-sm manrope mb-2">Upload Resume</label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="bg-gray-200 px-4 py-2 rounded-md manrope-medium text-gray-800 hover:bg-gray-300 transition"
                >
                  Choose File
                </button>
                <span className="text-gray-600 text-sm truncate manrope-medium w-40">{fileName || "No file chosen"}</span>
              </div>
              <input
                ref={fileRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>




            {/* About */}
            <div>
              <label className="block text-gray-700 text-sm manrope mb-1">Tell Us About You</label>
              <textarea
                rows={4}
                className="w-full border rounded-md py-2 px-3 manrope-medium focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Share your story, skills, or portfolio link"
              />
            </div>

            {/* Apply Button */}
            <div className="flex justify-start pt-2">
              <button
                type="submit"
                className="px-8 py-2 rounded-md manrope bg-red-600 text-white text-lg font-semibold hover:bg-red-700 transition"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>


      {/* Mobile Version */}

      <div className="md:hidden w-full max-w-[425px] mx-auto  overflow-hidden">
        <div className="relative h-full w-full p-2">

          <div className="mx-auto ">
            <div className="flex mr-1 items-start">
              <div className="w-[2px] h-[78px] bg-amber-300 mb-3 ml-2"></div>
              <h1 className="text-3xl  manrope mb-5 ml-3 text-gray-800 w-[250px]">Ready to <div>join us?</div></h1>
            </div>
            <p className="text-gray-500 w-[275px] text-sm ml-4 manrope-medium mb-8">
              Fill out your destails and lets&#35;s create beautiful spaces-together
            </p>
          </div>

          <div className="flex justify-center manrope-medium items-start  rounded-3xl  border border-[#DDCDC1] mx-3 mb-5">
            <form
              className="bg-transparent p-4 w-full max-w-2xl space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Application submitted!");
              }}
            >
              {/* First Row */}
              <div className="flex flex-col md:flex-row md:gap-6 gap-4 mb-10">
                <div className="flex-1">
                  <label className="block text-gray-700 text-sm manrope mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border  border-[#DDCDC1]  rounded-3xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                    placeholder="Your First Name"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 text-sm manrope mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border  border-[#DDCDC1]  rounded-3xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                    placeholder="Your Last Name"
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col md:flex-row md:gap-6 gap-4">
                <div className="flex-1">
                  <label className="block text-gray-700 -mt-5 text-sm manrope mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border  border-[#DDCDC1]  rounded-3xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                    placeholder="Your Email"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 text-sm manrope mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10,}"
                    className="w-full border  border-[#DDCDC1]  rounded-3xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                    placeholder="Your Phone"
                  />
                </div>
              </div>

              {/* Position + Upload */}
              <div className="flex flex-col md:flex-row md:items-end md:gap-6 gap-4">
                <div className="flex-1">
                  <label className="block text-gray-700 text-sm manrope mb-1">
                    Position Applying For*
                  </label>
                  <select
                    required
                    className="w-full border  border-[#DDCDC1]  rounded-3xl text-gray py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Position
                    </option>
                    <option value="designer">Interior Designer</option>
                    <option value="pm">Project Manager</option>
                    <option value="sales">Sales Executive</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col flex-1">
                  <label className="block text-gray-700 text-sm manrope mb-2">
                    Upload Resume
                  </label>
                  <div className="flex items-center gap-3 flex-wrap">
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="bg-gray-200 px-6 py-2 rounded-md manrope-medium text-gray-800 hover:bg-gray-300 transition"
                    >
                      Choose File
                    </button>
                    <span className="text-gray-600 text-sm truncate manrope-medium max-w-[150px]">
                      {fileName || "No file chosen"}
                    </span>
                  </div>
                  <input
                    ref={fileRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>

                {/* About */}
                <div>
                  <label className="block text-gray-700 text-sm manrope mb-1">Tell Us About You</label>
                  <textarea
                    rows={4}
                    className="w-full border  border-[#DDCDC1]  rounded-2xl py-2 px-3 manrope-medium focus:outline-none focus:ring-2 focus:ring-red-400"
                    placeholder="Share your story, skills, or portfolio link"
                  />
                </div>


              </div>

              {/* Apply Button */}
              <div className="flex justify-start -mt-5 pt-2">
                <button
                  type="submit"
                  className="px-7 py-1 rounded-3xl bg-red-600 text-white text-lg manrope hover:bg-red-700 transition"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>

        </div>



      </div>

    </div>





  );
};

export default JoinUsPage;