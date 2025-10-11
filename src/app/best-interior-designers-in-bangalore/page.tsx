
import { HeroSection } from "../Components/LandingPage2/HeroSection";
import Section4 from "../Components/LandingPage2/Section4";
import Section2 from "../Components/LandingPage1/Section2";
import Section6 from "../Components/LandingPage1/Section6";
import Section7 from "../Components/LandingPage1/Section7";
import Section9 from "../Components/LandingPage1/Section9";
import BrandCarousel from "../Components/LandingPage1/Brand";
import { QAsection } from "../Components/LandingPage1/QASEC";
import Section3 from "../Components/Home/Section3";
import Section51 from "../Components/LandingPage2/Section51";
import Section52 from "../Components/LandingPage2/Section52";

export default function BestInteriorDesignersInBangalore(){
    return(
        <div>
            <HeroSection />
            {/* <Section1/> */}
            <Section51/>
            {/* <Section33/> */}
            <Section52/>
            <Section3/>
            <Section4/>
            <Section2/>
            <Section6/>
            <Section7/>
            <Section9/>
            <BrandCarousel/>
            <QAsection/>
        </div>
    )
}