import Estimateblog from "../Components/GetEstimate/Estimateblog";
import HeroSection from "../Components/GetEstimate/Herosection";
import MobileFormSection from "../Components/GetEstimate/MobileFormSection";
import BrandCarousel from "../Components/Home/BrandCarosel";
import Footer from "../Components/Home/Footer";

import { QAsection } from "../Components/Home/QAsection";
import Section1 from "../Components/Home/Section1";
import Section2 from "../Components/Home/Section2";
import Section3 from "../Components/Home/Section3";
import Section4 from "../Components/Home/Section4";
import Section5 from "../Components/Home/Section5";
import Section6 from "../Components/Home/Section6";
import Section7 from "../Components/Home/Section7";
import PopUpModal from "../Components/PopupModal";

export default function GetEstimate() {
  return (
    <div>
      <PopUpModal />
      <HeroSection/>
      <MobileFormSection/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <BrandCarousel/>
      <Estimateblog/>
      <QAsection/>
      <Footer/>
    </div>
  )
}