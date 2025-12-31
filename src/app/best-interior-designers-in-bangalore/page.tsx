import  HeroSectionsBest  from "../Components/LandingPage1/HeroSectionBest";
import Section1  from "../Components/LandingPage1/Section";
import Section3 from "../Components/LandingPage1/Section3";
import { Section4 } from "../Components/LandingPage1/Section4";
import Section6 from "../Components/LandingPage1/Section6"
import Section7 from "../Components/LandingPage1/Section7";
import Section8 from "../Components/LandingPage1/Section8";
import Section9 from "../Components/LandingPage1/Section9";
import BrandCarousel from "../Components/LandingPage1/Brand";
import { QAsection } from "../Components/LandingPage1/QASEC";
import CalculatorPageBest from "../Components/LandingPage1/CalculatorPageBest";
import Section33 from "../Components/LandingPage1/Caron";
import { Section10 } from "../Components/LandingPage1/Section10";


export default function BestInteriorDesignersInBangalore(){
    return(
    <div>
      <HeroSectionsBest />
      <Section1 />
      {/* <Section2 /> */}
      <Section3 />
      <Section33 />
      <Section10 />
      <Section4 />
      {/* <Section5 /> */}
      <Section6 />
      <CalculatorPageBest />
      <Section7 />
      <Section8 />
      <Section9 />
      <BrandCarousel />
      <QAsection />
            
        </div>
    )
}