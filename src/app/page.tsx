import BrandCarousel from "./Components/Home/BrandCarosel";
import CalculatorPage from "./Components/Home/CalculatorPage";
import Footer from "./Components/Home/Footer";
import Herosection from "./Components/Home/Herosection";
import OfferBanner from "./Components/Home/offerbanner";
import { QAsection } from "./Components/Home/QAsection";
import Section1 from "./Components/Home/Section1";
import Section2 from "./Components/Home/Section2";
import Section3 from "./Components/Home/Section3";
import Section4 from "./Components/Home/Section4";
import Section5 from "./Components/Home/Section5";
import Section6 from "./Components/Home/Section6";
import Section7 from "./Components/Home/Section7";
import PopUpModal from "./Components/PopupModal";



export default function Home() {
  return (
    <div>
      <PopUpModal />
      <Herosection />
      <Section1 />
      <OfferBanner />
      <Section2 />
      <Section3 />
      <CalculatorPage />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <BrandCarousel />
      <QAsection />
      <Footer />
    </div>
  )
}
