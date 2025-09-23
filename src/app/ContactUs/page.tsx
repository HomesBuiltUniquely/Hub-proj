import React from "react";
import ContactHeader from "../Components/Contactus/Herosection";
import HelpCenter from "../Components/Contactus/Helpcenter";
import Locations from "../Components/Contactus/Location";
import ContactSection from "../Components/Contactus/ContactSection";
import Footer from "../Components/Home/Footer";


const App: React.FC = () => (
  <div className="bg-gray-50 font-sans min-h-screen">
    <ContactHeader />
    <HelpCenter />
    <Locations />
    <ContactSection/>
    <Footer/>
  </div>
);

export default App;
