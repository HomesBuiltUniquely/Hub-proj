import HeroSections from "../LandingPage1/HeroSection";

export default function RenovationHeroSection() {
  return (
    <HeroSections
      submitApiUrl="/api/contact"
      redirectOnHttpOkOnly={true}
    />
  );
}

