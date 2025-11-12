'use client';

import React, { useRef, useState } from 'react';


const CareersSection: React.FC = () => {
    const jobs = [
        'Interior Designer',
        'Project Manager',
        'Sales Executive',
        'Other'
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const fileRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string>("");

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName("");
        }
    }

    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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

            <div className="desktop-1440 min-h-full pt-24 mb-30">
                <h1 className="text-4xl manrope text-center">Current Openings</h1>
                <p className="text-xl text-center manrope-medium pt-4">
                    Become a part of high performing & collaborative team
                </p>

                {/* Job Listings */}
                <div className="mt-10 space-y-6">
                    {jobs.map((title, idx) => (
                        <div key={idx}>
                            {/* Job Row */}
                            <div
                                className="w-[700px] flex justify-between items-center py-8 mx-auto cursor-pointer"
                                onClick={() => toggleDropdown(idx)}
                            >
                                <div className="text-xl manrope-medium">{title}</div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''
                                        }`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </div>

                            <div className="w-[800px] border-t border-gray-300 mx-auto"></div>

                            {/* Dropdown Form */}
                            {openIndex === idx && (
                                <div className="flex justify-center manrope-medium items-start mt-6 ">
                                    <form
                                        className="bg-transparent p-4 w-full max-w-lg space-y-6"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            alert('Application submitted!');
                                        }}
                                    >
                                        {/* First Row */}
                                        <div className="flex flex-col md:flex-row gap-15 w-[800px] mb-10 -ml-40">
                                            <div className="flex-1">
                                                <label className="block text-gray-700 text-sm manrope mb-1">First Name*</label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                                    placeholder="Your First Name"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <label className="block text-gray-700 text-sm manrope mb-1">Last Name</label>
                                                <input
                                                    type="text"
                                                    className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                                    placeholder="Your Last Name"
                                                />
                                            </div>

                                            <div className="flex-1">
                                                <label className="block text-gray-700 text-sm manrope mb-1">Email*</label>
                                                <input
                                                    type="email"
                                                    required
                                                    className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                                    placeholder="Your Email"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <label className="block text-gray-700 text-sm manrope mb-1">Phone Number*</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    pattern="[0-9]{10,}"
                                                    className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                                    placeholder="Your Phone"
                                                />
                                            </div>
                                        </div>
                                        {/* 2nd Row */}
                                        {/* Position */}
                                        <div className='flex flex-col md:flex-row gap-5 w-[800px] -ml-40'>
                                            <label className="block text-gray-700 w-[270px] text-sm manrope mb-1">Position Applying For*</label>
                                            <select
                                                required
                                                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
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

                                            {/* Upload Resume */}

                                            <label className="block text-gray-700 text-sm manrope mb-1">Upload Resume</label>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() => fileRef.current?.click()}
                                                    className="bg-gray-200 px-6 text-nowrap py-2 rounded-md manrope-medium text-gray-800 hover:bg-gray-300 transition"
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

                                        {/* Apply Button */}
                                        <div className="flex justify-center pt-2">
                                            <button
                                                type="submit"
                                                className="px-8 py-2 rounded-md bg-red-600 text-white text-lg manrope hover:bg-red-700 transition"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    ))}
                </div>


            </div>

            {/* 1280 Version */}

            <div className="desktop-1280 min-h-full pt-24 mb-30">
                <h1 className="text-4xl manrope text-center">Current Openings</h1>
                <p className="text-xl text-center manrope-medium pt-4">
                    Become a part of high performing & collaborative team
                </p>

                {/* Job Listings */}
                <div className="mt-10 space-y-6">
                    {jobs.map((title, idx) => (
                        <div key={idx}>
                            {/* Job Row */}
                            <div
                                className="w-[700px] flex justify-between items-center py-8 mx-auto cursor-pointer"
                                onClick={() => toggleDropdown(idx)}
                            >
                                <div className="text-xl manrope-medium">{title}</div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''
                                        }`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </div>

                            <div className="w-[800px] border-t border-gray-300 mx-auto"></div>

                            {/* Dropdown Form */}
                            {openIndex === idx && (
                                <div className="flex justify-center manrope-medium items-start mt-6 ">
                                    <form
                                        className="bg-transparent p-4 w-full max-w-lg space-y-6"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            alert('Application submitted!');
                                        }}
                                    >
                                        {/* First Row */}
                                        <div className="flex flex-col md:flex-row gap-15 w-[800px] mb-10 -ml-40">
                                            <div className="flex-1">
                                                <label className="block text-gray-700 text-sm manrope mb-1">First Name*</label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                                    placeholder="Your First Name"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <label className="block text-gray-700 text-sm manrope mb-1">Last Name</label>
                                                <input
                                                    type="text"
                                                    className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                                    placeholder="Your Last Name"
                                                />
                                            </div>

                                            <div className="flex-1">
                                                <label className="block text-gray-700 text-sm manrope mb-1">Email*</label>
                                                <input
                                                    type="email"
                                                    required
                                                    className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                                    placeholder="Your Email"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <label className="block text-gray-700 text-sm manrope mb-1">Phone Number*</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    pattern="[0-9]{10,}"
                                                    className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                                    placeholder="Your Phone"
                                                />
                                            </div>
                                        </div>
                                        {/* 2nd Row */}
                                        {/* Position */}
                                        <div className='flex flex-col md:flex-row gap-5 w-[800px] -ml-40'>
                                            <label className="block text-gray-700 w-[270px] text-sm manrope mb-1">Position Applying For*</label>
                                            <select
                                                required
                                                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
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

                                            {/* Upload Resume */}

                                            <label className="block text-gray-700 text-sm manrope mb-1">Upload Resume</label>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() => fileRef.current?.click()}
                                                    className="bg-gray-200 px-6 text-nowrap py-2 rounded-md manrope-medium text-gray-800 hover:bg-gray-300 transition"
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

                                        {/* Apply Button */}
                                        <div className="flex justify-center pt-2">
                                            <button
                                                type="submit"
                                                className="px-8 py-2 rounded-md bg-red-600 text-white text-lg manrope hover:bg-red-700 transition"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    ))}
                </div>


            </div>


            {/* Mobile Version */}

            <div className="md:hidden w-full max-w-[425px] mx-auto  overflow-hidden">
                <div className="relative h-full w-full p-2">

                    <div className="mx-auto">
                        <div className="flex mr-1 items-start">
                            <div className="w-[2px] h-[40px] bg-amber-300 mb-6 ml-2"></div>
                            <h1 className="text-3xl text-nowrap manrope mb-5 ml-3 text-gray-800 w-[250px]">Current openings</h1>
                        </div>
                        <p className="text-gray-500 w-[250px] text-sm mb-4 ml-2 manrope-medium -mt-3">
                            Become a part of high performing & collaborative team
                        </p>
                    </div>

                </div>


                <div className="-mt-10 mb-15">
                    {jobs.map((title, idx) => (
                        <div key={idx}>
                            {/* Job Row */}
                            <div
                                className="max-w-[700px] w-full flex justify-between items-center py-6 mx-auto px-4 cursor-pointer"
                                onClick={() => toggleDropdown(idx)}
                            >
                                <div className="text-xl manrope-medium">{title}</div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""
                                        }`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </div>

                            <div className="w-full max-w-[800px] border-t border-gray-300 mx-auto"></div>

                            {/* Dropdown Form */}
                            {openIndex === idx && (
                                <div className="flex justify-center manrope-medium items-start mt-6 px-4">
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
                                                    className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                                                    placeholder="Your First Name"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <label className="block text-gray-700 text-sm manrope mb-1">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
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
                                                    className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
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
                                                    className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
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
                                                    className="w-full border rounded-md text-gray py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
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
                                        </div>

                                        {/* Apply Button */}
                                        <div className="flex justify-center pt-2">
                                            <button
                                                type="submit"
                                                className="px-7 py-1 rounded-3xl bg-red-600 text-white text-lg manrope hover:bg-red-700 transition"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    ))}
                </div>


            </div>
        </div>


    );
};

export default CareersSection;
