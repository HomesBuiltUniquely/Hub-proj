
import Footer from "../Components/AboutUs/Footer";
import ModularKitchen from "../Components/ModularKitchen/Herosection";
import KitchenBlogSection from "../Components/ModularKitchen/KitchenBlogSection";
import ModularKitchenShowcase from "../Components/ModularKitchen/ModularKitchenShowcase";
import Section2 from "../Components/ModularKitchen/Section2";

export default function InteriorDesignersInBangalore() {
  return (
    <div>
      <ModularKitchen />
      <Section2/>
      <ModularKitchenShowcase/>
      <KitchenBlogSection/>
      <Footer/>
    </div>
  )
}