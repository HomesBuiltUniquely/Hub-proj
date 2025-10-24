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
    <div className="min-h-auto flex items-center bg-gray-100">
      {/* Left: Text and brochure */}
      <div className="hidden lg:flex flex-col justify-center flex-1 px-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Ready to<br />join us?
        </h1>
        <p className="text-gray-600 mb-8">
          Fill out your details and let’s create beautiful spaces—together.
        </p>
        <a
          href="/trail.pdf"
          download
          className="underline text-sm text-gray-700 hover:text-red-600 font-medium"
        >
          Download Our Brochure
        </a>
      </div>

      {/* Right: Form */}
      <div className="flex-1 flex justify-center py-10">
        <form
          className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission here
            alert("Application submitted!");
          }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-semibold mb-1">First Name*</label>
              <input
                type="text"
                required
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your First Name"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-semibold mb-1">Last Name</label>
              <input
                type="text"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your Last Name"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-semibold mb-1">Email*</label>
              <input
                type="email"
                required
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your Email"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-semibold mb-1">Phone Number*</label>
              <input
                type="tel"
                required
                pattern="[0-9]{10,}"
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your Phone"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Position Applying For*</label>
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
          </div>
          {/* Upload Resume */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Upload Resume</label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="bg-gray-200 px-4 py-2 rounded-md text-gray-800 hover:bg-gray-300 transition"
              >
                Choose File
              </button>
              <span className="text-gray-600 text-sm truncate w-40">{fileName || "No file chosen"}</span>
            </div>
            <input
              ref={fileRef}
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Tell Us About You</label>
            <textarea
              rows={4}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Share your story, skills, or portfolio link"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-red-600 text-white text-lg font-bold hover:bg-red-700 shadow transition"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinUsPage;
