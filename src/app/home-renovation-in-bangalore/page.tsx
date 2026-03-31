import RenovationHeroSection from "../Components/Renovation/HeroSection";
import Section1 from "../Components/LandingPage1/Section";
import Section3 from "../Components/LandingPage1/Section3";
import { Section4 } from "../Components/LandingPage1/Section4";
import { Section10 } from "../Components/LandingPage1/Section10";
import Section6 from "../Components/LandingPage1/Section6";
import Section7 from "../Components/LandingPage1/Section7";
import Section8 from "../Components/LandingPage1/Section8";
import Section9 from "../Components/LandingPage1/Section9";
import BrandCarousel from "../Components/LandingPage1/Brand";
import { QAsection } from "../Components/LandingPage1/QASEC";
import CalculatorPage from "../Components/LandingPage1/CalculatorPage";
import Section33 from "../Components/LandingPage1/Caron";

export default function HomeRenovationInBangalore() {
  return (
    <div>
      <RenovationHeroSection />
      <Section1 />
      <Section3 />
      <Section33 />
      <Section10 />
      <Section4 />
      <Section6 />
      <CalculatorPage />
      <Section7 />
      <Section8 />
      <Section9 />
      <BrandCarousel />
      <QAsection />
    </div>
  );
}
