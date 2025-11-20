
import ContactHeader from "../Components/Project/HeroSection";
import FeaturedProjectsAndEbook from "../Components/Project/Section2";
import Faq from "../Components/Project/FAQ";
import Footer from "../Components/Home/Footer";
import PopUpModal from "../Components/PopupModal";

export default function ProjectPage() {
  return (
    <div>
      <PopUpModal />
      <ContactHeader />
      <FeaturedProjectsAndEbook />
      <Faq />
      <Footer />
    </div>
  );
}