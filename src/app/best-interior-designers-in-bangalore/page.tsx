import Section1 from "../Components/LandingPage2/Section";
import { HeroSection } from "../Components/LandingPage2/HeroSection";
import Section33 from "../Components/LandingPage2/Section3";
import Section4 from "../Components/LandingPage2/Section4";
import Section2 from "../Components/LandingPage1/Section2";
import Section6 from "../Components/LandingPage1/Section6";
import Section7 from "../Components/LandingPage1/Section7";
import Section9 from "../Components/LandingPage1/Section9";
import BrandCarousel from "../Components/LandingPage1/Brand";
import { QAsection } from "../Components/LandingPage1/QASEC";
import CalculatorPage from "../Components/LandingPage1/CalculatorPage";

export default function BestInteriorDesignersInBangalore(){
    return(
        <div>
            <HeroSection />
            <Section1/>
            <Section33/>
            <Section4/>
            <Section2/>
            <Section6/>
            <CalculatorPage/>
            <Section7/>
            <Section9/>
            <BrandCarousel/>
            <QAsection/>
        </div>
    )
}