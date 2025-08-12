"use client";

import React, { useState } from "react";

const TABS = [
  { label: "Privacy Policy", value: "privacy" },
  { label: "Terms of Use", value: "terms" },
  { label: "Cancellation Policy", value: "cancellation" },
];

const getContent = (tab: string) => {
  switch (tab) {
    case "privacy":
      return (
        <div className="space-y-5 text-gray-700 text-base">
          <p>
            <span className="font-semibold">HomesUnderBudget.com</span> is a website owned by <span className="font-semibold">BRIGHTSPACE CREATIONS PRIVATE LIMITED</span>, a company incorporated under the Indian Companies Act, 1956. Specifically, wherever the term “HUB” or “Homes Under Budget” or “HomesUnderBudget.com” is used, it refers to Brightside Innotech LLP, along with its subsidiaries, controlled entities, affiliates, and related parties. Homes Under Budget provides the services through <span className="underline">www.HomesUnderBudget.com</span> (‘Website’ or ‘Site’).
          </p>
          <p>
            In addition, at Homes Under Budget, we are highly committed to the privacy of your data and information while also providing excellent service to all of our customers and visitors of the Website. Thus, we have prepared this Data Protection and Privacy Policy (“Policy”) to inform you of the privacy principles that govern this Website.
          </p>
          <p>
            Furthermore, unless restricted by applicable law, you agree that all your personal information collected by Homes Under Budget through the Website may be used as well as disclosed as set out in this Policy.
          </p>
          <p>
            Consequently, you are advised to read this Policy carefully. By accessing this content, you acknowledge that by utilizing the services provided by HomesUnderBudget.com, you agree to the collection and use of your data by HomesUnderBudget.com in addition to certain authorized third-party service providers in the manner provided in this Policy. If, however, you do not agree with this Policy, we kindly ask you not to use the Website.
          </p>
        </div>
      );
    case "terms":
      return (
        <div className="text-gray-700 text-base py-10 text-center">
          <em>Terms of Use content coming soon...</em>
        </div>
      );
    case "cancellation":
      return (
        <div className="text-gray-700 text-base py-10 text-center">
          <em>Cancellation Policy content coming soon...</em>
        </div>
      );
    default:
      return null;
  }
};

const LegalSection = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <section className="w-screen h-[600px] mx-auto my-12 bg-[#f1f2f6] p-6 md:p-10 rounded-2xl">
      {/* Tabs */}
      <div className="flex border border-blue-300 rounded-xl overflow-hidden max-w-2xl mx-auto mb-8">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            className={`flex-1 px-5 py-3 text-lg font-medium transition-colors
              ${activeTab === tab.value
                ? "bg-white text-black font-semibold border-blue-400 border-b-2"
                : "bg-blue-50 text-gray-500 hover:bg-blue-100"}
            `}
            onClick={() => setActiveTab(tab.value)}
            style={{
              border: "none",
              outline: "none"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Content */}
      <div className="mx-auto mt-20 md:px-6 w-[1000px] h-[600px]">{getContent(activeTab)}</div>
    </section>
  );
};

export default LegalSection;
