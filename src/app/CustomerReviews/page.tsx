import Footer from "../Components/AboutUs/Footer";
import { CustomerReview } from "../Components/CustomerReview/cus";
import ContactHeader from "../Components/CustomerReview/HeroSection";
import Section2 from "../Components/CustomerReview/Section2";


export default function CustomerReviewsPage() {
    return (
        <div>
            <ContactHeader />
            <Section2/>
            <CustomerReview/>
            <Footer />
        </div>
    );
    }