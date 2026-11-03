import Footer from "../../Components/Home/Footer";
import PolicyHeroSimple from "../../Components/Policy/Herosection";
import HowsCrmMobilePrivacyNotice from "../../Components/Policy/HowsCrmMobilePrivacyNotice";

export default function HowsCrmMobilePrivacyPage() {
  return (
    <div>
      <PolicyHeroSimple />
      <section className="w-full mx-auto my-4 md:my-8 bg-[#f1f2f6] p-4 md:p-6 lg:p-10 rounded-xl md:rounded-2xl max-w-7xl">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-sm">
            <HowsCrmMobilePrivacyNotice />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
