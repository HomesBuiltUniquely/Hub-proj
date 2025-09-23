"use client";

import React, { useState } from "react";

const TABS = [
  { label: "Privacy Policy", value: "privacy" },
  { label: "What Information is collected from you?", value: "information-collected" },
  { label: "Cancellation Policy", value: "cancellation" },
  { label: "Information Usage", value: "information-usage" },
  { label: "Information Security", value: "security" },
  { label: "Disputes", value: "disputes" },
  { label: "Privacy – Our Commitment", value: "commitment" },
  { label: "What is covered in this Policy?", value: "covered" },
  { label: "Who collects the information?", value: "collects" },
  { label: "Information Sharing and Disclosures", value: "disclosures" },
  { label: "Policy Compliance", value: "compliance" },
  { label: "Your Choices", value: "choices" },

];

const getContent = (tab: string) => {
  switch (tab) {
    case "privacy":
      return (
        <div className="space-y-4 md:space-y-5 text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            <span className="font-semibold">Hubinterior.com</span> is a website owned by <span className="font-semibold">BRIGHTSPACE CREATIONS PRIVATE LIMITED</span>, a company incorporated under the Indian Companies Act, 1956. Specifically, wherever the term "HUB" or "HUB interior" or "hubinterior.com" is used, it refers to Brightside Innotech LLP, along with its subsidiaries, controlled entities, affiliates, and related parties. HUB interior provides the services through <span className="underline">www.hubinterior.com</span> ('Website' or 'Site').
          </p>
          <p>
            In addition, at Hub Interior, we are highly committed to the privacy of your data and information while also providing excellent service to all of our customers and visitors of the Website. Thus, we have prepared this Data Protection and Privacy Policy ("Policy") to inform you of the privacy principles that govern this Website.
          </p>
          <p>
            Furthermore, unless restricted by applicable law, you agree that all your personal information collected by HUB interior through the Website may be used as well as disclosed as set out in this Policy.
          </p>
          <p>
            Consequently, you are advised to read this Policy carefully. By accessing this content, you acknowledge that by utilizing the services provided by hubinterior.com, you agree to the collection and use of your data by hubinterior.com in addition to certain authorized third-party service providers in the manner provided in this Policy. If, however, you do not agree with this Policy, we kindly ask you not to use the Website.
          </p>
        </div>
      );
    case "cancellation":
      return (
        <div className="text-gray-700 text-sm md:text-base leading-relaxed">

          <ol className="list-decimal pl-4 md:pl-6">
            <li className="manrope mt-8 md:mt-20">CANCELLATION POLICY: 0% – 10% Stage
            <ul className="list-disc pl-5 pt-4 ">
              <li className="manrope">Full Refund within 7 Days
                <ul className="list-disc pl-5 manrope-medium">
                <li>A complete refund is possible within 7 days of booking only if no site Measuremen (D1) or design discussion has taken place.</li>
                <li>If D1 or any design discussions have occurred, no refund, even within 7 days.</li>
                </ul>
              </li>
             
              <li className="manrope pt-4">Zero Refund after 7 Days
              <ul className="list-disc pl-5 manrope-medium">
              <li>Post 7 days from booking, no refund is applicable, irrespective of whether site visit or design discussion has occurred.</li>
              <li>This 7-day period is considered the locking period.</li>
              </ul>
              </li>

              <li className="manrope pt-4 ">Point of Contact (POC)
                <ul className="list-disc pl-5 manrope-medium">
                <li>Within 7 Days: Sales Head</li>
                <li>After 7 Days: Design Manager / Design Lead / Territory Design Manager (DM / DL / TDM)</li>
                </ul>
              </li>

              <li className="manrope pt-4">Booking Token (Less than 10%)
                <ul className="list-disc pl-5 manrope-medium">
              <li>If a token amount less than 10% is paid:
                <ul className="list-disc pl-5 manrope-medium">
                <li>Refund is possible only within 2 months of payment.</li>
                  <li>No services will be initiated until the full 10% booking amount is paid.</li>
                  <li>If 10% is not completed within 2 months, the token will be auto- cancelled.</li>
                </ul>
              </li>
              </ul>
              </li> 

            </ul>
            </li>


            <li className="manrope mt-10">CANCELLATION POLICY: 0% – 10% Stage
             <p className="pt-4 manrope-medium">Once 10% booking is paid, no refund is applicable in general. However, options vary based on progress status:</p>
            <ul className="list-disc pl-5 pt-4">
              <li className="manrope">Scenario 1: Design Discussion ongoing &/or Site Visit Done (D1)
                <ul className="list-disc pl-5 manrope-medium">
                <li>25% of the paid amount will be retained as service charges.</li>
                <li>The remaining 75% can be used to purchase from our Hubstore.</li>
                <li>Connect with your DMS to place an order.</li>
                </ul>
              </li>
             
              <li className="manrope pt-4">Scenario 2: All Designs Finalized, Then Cancelled

              <ul className="list-disc pl-5 manrope-medium">
              <li>75% of the paid amount will be retained.</li>
              <li>25% balance can be utilized at our Hubstore.</li>
              <li>Connect with your DMS to place an order.</li>
              <li>All final design files will be shared with the customer.</li>
              </ul>
              </li>

              <li className="manrope pt-4">Scenario 3: Project to Be Bifurcated into Phases
                <ul className="list-disc pl-5 manrope-medium">
                <li>The minimum value of each phase should be ₹3,00,000.</li>
                <li>Discounts will be revised to 20% for both phases.</li>
                <li>The initial 10% paid will be considered against the total project value (Phase 1 + Phase 2), no adjustment allowed toward Phase 1 alone.</li>
                <li>The next 40% payment must be on the revised value of Phase 1.</li>
                </ul>
              </li>
              
              <li className="manrope pt-4">Scenario 4: Post Production (Before the last 40% payment)
                <ul className="list-disc pl-5 manrope-medium">
                <li>No cancellation or refund is possible at this stage.</li>
                <li>Ensure full clarity on scope, shades, and approvals before production is initiated.</li>
                </ul>
              </li>

            </ul>
            </li>




            <li className="manrope mt-10">CANCELLATION POLICY  – Other Terms

            <ul className="list-disc pl-5 pt-6 ">
                <li className="manrope-medium">Neither of us may terminate this engagement. However, HUB may delay or cease to provide the Services in case the Price payable remains unpaid or is delayed; in which case, HUB shall have no obligation to refund the amounts already paid by you. </li>
                <li className="pt-6 manrope-medium">After agreeing to these Terms and Conditions, in case you seek to not avail of the Services, you will forfeit all the amounts already paid by you to HUB and also be liable to pay the balance of the Price agreed to be paid to HUB, as due compensation for the losses that will be suffered by HUB in such an eventuality and not as penalty. </li>
                <li className="pt-6 manrope-medium">Refund Timeline: Any applicable refund will be processed only after project handover and within 21 working days from the finance team’s confirmation to customer via email.</li>

              </ul>


            </li>
            
          </ol>

        </div>
      );
    case "information-collected":
      return (
        <div className="text-gray-700 text-sm md:text-base py-3 md:py-5 mt-6 md:mt-10 leading-relaxed">
          <h1 className="text-xl md:text-2xl manrope mb-4">Profile Information</h1>
          <p className="manrope-medium pt-4">HUB interior collects the details provided by you on registration (email address, name, password, phone number, address and some profile details and interests) together with information we learn about you from your use of our service and your visits to our Site. We also collect information about the transactions you undertake including details of payments and type of cards used. We will not collect and store information related to your credit cards such as number, expiry date and CVV number.</p>
          <p className="manrope-medium pt-4">We may collect additional information in connection with your participation in any promotions or competitions offered by us and information you provide when giving us feedback or completing profile forms. We also monitor customer traffic patterns and Site use, which enables us to improve the service we provide. We will collect only such information as is necessary and relevant to us to provide you with the services available on the Site.</p>
          <p className="manrope-medium">You can terminate your account at any time. However, your information may remain stored in archive on our servers even after the deletion or the termination of your account.</p>
          <h1 className="text-xl md:text-2xl manrope pt-4 mb-4">Anonymous Information</h1>
          <div className="manrope-medium pt-4"> In addition to the information that you explicitly provide during your interactions on the Site, we will automatically receive and collect certain anonymous information in standard usage logs through our Web server, including computer-identification information obtained from "cookies" sent to your browser from:
          </div>
          <ol className="list-decimal pl-6 md:pl-10 pt-4 space-y-2">
            <li>web server cookie stored on your hard drive</li>
            <li>an IP address, assigned to the computer which you use</li>
            <li>the domain server through which you access our service</li>
            <li>the type of computer you’re using</li>
            <li>the type of web browser you’re using</li>
          </ol>
        </div>
      );
    case "information-usage":
      return (
        <div className="text-gray-700 text-sm md:text-base py-3 md:py-5 leading-relaxed">
          <h1 className="text-xl md:text-2xl manrope mb-4">Information Usage</h1>
          <div className="manrope-medium pt-5">We use your personal information to allow it to process your registration, to process any orders that you may make for any products or services displayed on the Website, provide you with improved services, contact you when it is needed by telephone, facsimile and e-mail, and to advise you of products and services which may be of interest to you, inviting you to be a participant or a respondent to an online event that is hosted on Hubointerior.com. Further, the relevant information is used by HUB interior to</div>
         <ul className="list-disc pl-6 md:pl-10 pt-5 space-y-2">
          <li>provide you with statements of your account;</li>
          <li>to communicate with you on any matter relating to the conduct of your account; and</li>
          <li>to communicate the details of any orders / processing of any orders placed by you relating to products displayed on the Website.</li>
         </ul>
         <div className="manrope-medium pt-5">HUB interior may also use aggregate information and statistics for the purposes of monitoring website usage in order to help us develop the Website, our products and services and may provide such Aggregate information to third parties on an aggregate basis. These statistics will not include information that can be used to identify any individual customer.</div>
         <div className="manrope-medium pt-5">HUB interior may organize contests and surveys and the information collected during these events may be used by HUB interior to improve your overall customer experience. The information will only be shared with third parties on an aggregate basis.</div>
         <div className="manrope-medium pt-5">[For the purposes of this Policy, “Aggregate information” shall mean and include information that is recorded about users and collected into groups so that it no longer reflects or references an individually identifiable user. Such information does not identify you individually.]</div>
         <div className="manrope-medium pt-5">Personal data collected by the Website may be transferred to other sites of HUB interior where it is necessary to meet the purpose for which you have submitted the information. By submitting data on this Website, you are providing explicit consent to transmission of data collected on the Website.</div>
         <div className="manrope-medium pt-5">We use anonymous information like traffic and other data to provide us with information to recognize the access privileges to our Site, track your participation in any of the events, providing you with better content and advertisements, help diagnose the problems with our Site and for the purposes detailed in the Policy.</div>
        </div>
      );
    case "security":
      return (
        <div className="text-gray-700 text-base py-5 mt-20 ">
          <h1 className="text-2xl manrope">Information Security</h1>
          <div className="manrope-medium pt-5">We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, as well as physical security measures to guard against unauthorized access to systems where we store personal data. We restrict access to personal information to HUB interior employees, contractors and agents who need to know that information in order to operate, develop or improve our services. These individuals are bound by confidentiality obligations and may be subject to discipline, including termination and criminal prosecution, if they fail to meet these obligations.</div>
          <div className="manrope-medium pt-5">Although we endeavour to safeguard the confidentiality of your personally identifiable information, transmissions made by means of the Internet cannot be made absolutely secure. By using this Site, you agree that we will have no liability for disclosure of your information due to errors in transmission or unauthorized acts of third parties.</div>
          <div className="manrope-medium pt-5">You further agree that you are solely responsible and liable for, and shall indemnify HUB interior against any and all costs, expenses, damages, fees, etc. that HUB interior may incur or suffer due to any personal information or other materials that you post, upload, submit, and otherwise make available on the Website, including areas of the Website that are available to the public. We have no control over and cannot protect personal information that you disclose in public areas of the Website. If you disclose your personal information in public areas, it may be collected and used by third parties, without our or your knowledge. You should also understand that by displaying your information or photographs on the Website and the internet, for the intention of showing the information / those photographs to your friends, family, acquaintances, clients, business partners, and others, that you directly intended to see the photographs, you are relinquishing certain traditional privacy rights, wherein anyone with access to the internet has the potential ability to view your information / photographs. If you do not wish to relinquish these traditional privacy rights, do not share your information / photographs.</div>
        </div>
      );
    case "disputes":
      return (
        <div className="text-gray-700 text-base py-5 text-center">
          <h1 className="text-2xl manrope">Disputes</h1>
          <div className="manrope-medium pt-5">Any dispute, controversy or claim directly or indirectly caused by, arising out of or relating to this Policy will be governed by the laws of India and will be referred to confidential, mandatory and binding arbitration in Bengaluru, India. The arbitration will be conducted on an expedited basis before a single arbitrator appointed by HUB interior in accordance with the provisions of the Indian Arbitration and Conciliation Act, 1996. The arbitrator’s award shall be substantiated in writing and will be final and binding on you and HUB interior. Subject to the above, you agree to submit yourself to the exclusive jurisdiction of the Courts in Bengaluru, India.</div>
        </div>
      );
    case "commitment":
      return (
        <div className="text-gray-700 text-base py-5 text-center">
          <h1 className="text-2xl manrope">Privacy – Our Commitment</h1>
          <div className="manrope-medium pt-5">At HUB interior, we are extremely committed to protect your privacy. We would like you to feel confident about us, use our services freely and recommend our services to your friends and family.</div>
          <div className="manrope-medium pt-5">We guarantee that we will not rent and sell your personal information to third parties (except as stated in this Policy) without your consent. In the day to day operations, we will provide your information to our partners who will assist in providing our services. Your comfort, trust and confidence are of paramount importance to us.</div>
        </div>
      );
    case "covered":
      return (
        <div className="text-gray-700 text-base py-10 text-center">
         <h1 className="text-2xl manrope ">What is covered in this Policy?</h1>
         <div className="manrope-medium pt-5 text-center">This Policy covers how HUB interior treats personal information that HUB interior collects and receives, including information related to your past use of the Website products and services.</div>
         <div className="manrope-medium pt-5 text-center">When you register for our service, we would require your personal information that is personally identifiable like your name, address, email address, or phone number, and other information that is not otherwise publicly available and is essentially required for registering and receiving services from us.</div>
         <div className="manrope-medium pt-5 text-center">HUB interior is not responsible for any acts, deeds or things done or committed by any person not being directly employed by HUB interior. In addition, certain Hubinterior.com associated/partner companies have their own privacy statements which can be viewed by clicking on their respective links.</div>
        </div>
      );
    case "collects":
      return (
        <div className="text-gray-700 text-base py-10 text-center">
          <h1 className="text-2xl manrope ">Who collects the information?</h1>
          <div className="manrope-medium pt-5 text-center">We collect personal information about you as part of the registration process, which is voluntary. Other means of collecting personal information is through some contests, online events, surveys etc.</div>
          <div className="manrope-medium pt-5 text-center">We collect anonymous information like traffic information and hardware information when you visit our Site.</div>
          <div className="manrope-medium pt-5 text-center">Our advertisers and partners may collect their own anonymous information through their own cookies for which we are not responsible for.</div>
          <div className="manrope-medium pt-5 text-center">HUB interior understands the importance of protecting children’s privacy, especially in an online environment. Our sites are not intentionally designed for or directed at children 18 years of age or younger. It is our policy never to knowingly collect or maintain information about anyone under the age of 18.</div>
        </div>
      );
    case "disclosures":
      return (
        <div className="text-gray-700 text-base py-5 ">
         <h1 className="text-2xl manrope text-center">Information Sharing and Disclosures</h1>
         <div className="manrope text-xl pt-5 text-left">Profile Information </div>
         <div className="manrope-medium pt-5 ">We do not rent, sell or share your personal information to third parties –</div>
         <ul className="list-disc pl-10 pt-5">
          <li>Unless we have permission from you,</li>
          <li>Unless we have to provide products and services that are requested by you,</li>
          <li>Unless we have to help investigate, prevent or take action regarding unlawful and illegal activities, suspected fraud, potential threat to the safety or security of any person or organization or property or asset or rights of the Website from unauthorized use or misuse of the Website, violations of Hubinterior.com terms and conditions or to defend against legal claims/proceedings</li>
          <li>Unless upon occurrence of special circumstances detailed hereunder –</li>
          <ol className="list-decimal pl-10">
            <li>to respond to subpoenas, court orders, judicial proceedings, or other legal processes;</li>
            <li>to enforce the terms of the Website User Terms and Conditions or the terms of this Policy;</li>
          </ol>
          <li>to respond to claims that any photo, text, or other material violates the rights of third parties; or</li>
          <ol className="list-decimal pl-10">
            <li className="manrope-medium">to protect the rights, property, or personal safety of HUB interior, its users, or the general public.</li>
          </ol>
         </ul>
         <div className="manrope-medium pt-5">We provide certain required personal and contact information to our subsidiaries, affiliated companies or other trusted business partners for the purpose of providing the required service on our behalf. We require that these parties agree to process such information based on our instructions and in compliance with this Policy and any other appropriate confidentiality and security measures.</div>
         <div className="manrope-medium pt-5">If Hubi nterior becomes involved in a merger, acquisition, or any form of sale of some or all of its assets, we will inform you through e-mail before personal information is transferred and that may become subject to a different privacy policy.</div>
         <div className="manrope-medium pt-5">We may share with third parties certain pieces of Aggregate information.</div>
        </div>
      );
    case "compliance":
      return (
        <div className="text-gray-700 text-base py-5">
          <h1 className="text-2xl manrope text-center">Policy Compliance</h1>
          <div className="manrope-medium pt-5 text-center">Hubinterior.com regularly reviews its compliance with this Policy. Please feel free to direct any questions or concerns regarding this Policy or Hubinterior.com’s treatment of personal information by contacting us through this Website or by e-mailing to us at homesunderbudget@gmail.com. When we receive complaints at this address, it is Hubinterior.com’s policy to contact the complaining user regarding his or her concerns. We will cooperate with the appropriate regulatory authorities to resolve any complaints regarding the transfer of personal data that cannot be resolved between Hubinterior.com and an individual.</div>
        </div>
      );
    case "choices":
      return (
        <div className="text-gray-700 text-base py-10 text-center">
          <h1 className="text-2xl manrope text-center">Your Choices</h1>
          <div className="manrope-medium pt-5">By submitting your information, you consent to the use of that information as set out in this Policy. We welcome your views on this Website and the Policy. However, submitting personally identifiable information is entirely voluntary. You are not required to register with us in order to browse our Site. Please note that we offer some services only to visitors who do register.</div>
          <div className="manrope-medium pt-5">At any point in time, you can correct and make changes to your personal information by accessing your information in My Account section of the Site.</div>
          <div className="manrope-medium pt-5">You may change your interests at any time and may opt-in or opt-out of any marketing / promotional / newsletters mailings. Hubinterior.com reserves the right to send you certain service related communication, considered to be a part of your Hubinterior.com account without offering you the facility to opt-out. You may update your information and change your account settings at any time.</div>
          <div className="manrope-medium pt-5">If we plan to use your personally identifiable information for any commercial purposes, we will notify you at the time we collect that information and allow you to opt-out of having your information used for those purposes.</div>
        </div>
      );
    default:
      return null;
  }
};

const LegalSection = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <section className="w-full mx-auto my-4 md:my-8 bg-[#f1f2f6] p-4 md:p-6 lg:p-10 rounded-xl md:rounded-2xl">
      {/* Tabs */}
      <div className="w-full max-w-7xl mx-auto mb-6 md:mb-8">
        {/* Desktop Tabs - Horizontal Scroll */}
        <div className="hidden md:block">
          <div className="flex border border-blue-300 rounded-xl overflow-x-auto overflow-y-hidden">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                className={`flex-shrink-0 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors min-w-fit
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
        </div>
        
        {/* Mobile Tabs - Enhanced Dropdown */}
        <div className="md:hidden">
          <div className="relative">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full p-4 border-2 border-blue-300 rounded-xl bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none text-base"
            >
              {TABS.map((tab) => (
                <option key={tab.value} value={tab.value}>
                  {tab.label}
                </option>
              ))}
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="mx-auto max-w-4xl">
        <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-sm">
          {getContent(activeTab)}
        </div>
      </div>
    </section>
  );
};

export default LegalSection;
