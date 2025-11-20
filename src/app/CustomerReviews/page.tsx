import Footer from "../Components/Home/Footer";
import { CustomerReview } from "../Components/CustomerReview/cus";
import ContactHeader from "../Components/CustomerReview/HeroSection";
import Section2 from "../Components/CustomerReview/Section2";
import PopUpModal from "../Components/PopupModal";


export default function CustomerReviewsPage() {
    return (
        <div>
            <PopUpModal />
            <ContactHeader />
            <Section2 />
            <CustomerReview />
            <Footer />
        </div>
    );
}