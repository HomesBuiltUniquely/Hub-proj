

import Footer from "../Components/Home/Footer";
import ModularKitchen from "../Components/ModularKitchen/Herosection";
import KitchenBlogSection from "../Components/ModularKitchen/KitchenBlogSection";
import Section1 from "../Components/ModularKitchen/Section1";
import Section2 from "../Components/ModularKitchen/Section2";
import PopUpModal from "../Components/PopupModal";

export default function InteriorDesignersInBangalore() {
  return (
    <div>
      <PopUpModal />
      <ModularKitchen />
      <Section1 />
      <Section2 />
      <KitchenBlogSection />
      <Footer />
    </div>
  )
}