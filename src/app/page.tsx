import BrandCarousel from "./Components/Home/BrandCarosel";
import Footer from "./Components/Home/Footer";
import Herosection from "./Components/Home/Herosection";
import { QAsection } from "./Components/Home/QAsection";
import Section1 from "./Components/Home/Section1";
import Section2 from "./Components/Home/Section2";
import Section3 from "./Components/Home/Section3";
import Section4 from "./Components/Home/Section4";
import Section5 from "./Components/Home/Section5";
import Section6 from "./Components/Home/Section6";
import Section7 from "./Components/Home/Section7";



export default function Home() {
  return (
    <div>

      <Herosection/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <BrandCarousel/>
      <QAsection/>
      <Footer/>
    </div>
  )
}
