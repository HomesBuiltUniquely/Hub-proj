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
    );
};

export default CareersSection;
