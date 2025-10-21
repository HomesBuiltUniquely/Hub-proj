
import Footer from "../Components/Home/Footer";
import BedroomHeroSimple from "../Components/Bedroom/Herosection";
import Section3 from "../Components/Bedroom/Section3";
import Section4 from "../Components/Bedroom/Section4";
import BedroomSection from "../Components/Bedroom/Ssection2";
import WardrobeCarousel from "../Components/Bedroom/WardrobeCarousel";



export default function Bedroom() {
    return (
        <div>
            <BedroomHeroSimple />
            <BedroomSection /> 
            <WardrobeCarousel />
            <Section3 />
          <Section4 />
           {/*    <Footer /> */}
        </div>
    )
}