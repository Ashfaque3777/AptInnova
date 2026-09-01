import Hero from "../components/sections/home/Hero.jsx";
import CompanyStats from "../components/sections/about/CompanyStats.jsx";
import CTACard from "../components/sections/home/CTACard.jsx";
import ServicesSection from "../components/sections/home/ServicesSection.jsx";
import SoftwareDevelopmentPreview from "../components/sections/home/SoftwareDevelopmentPreview.jsx";
import FeaturedWork from "../components/sections/home/FeaturedWork.jsx";
import ProductsSection from "../components/sections/home/ProductsSection.jsx";
import WhyAptInnova from "../components/sections/home/WhyAptInnova.jsx";
import PartnershipSection from "../components/sections/home/PartnershipSection.jsx";
import InsightsSection from "../components/sections/home/InsightsSection.jsx";
import ContactCTA from "../components/sections/home/ContactCTA.jsx";

function Home() {
  return (
    <>
      <Hero />

      <CompanyStats />

      <CTACard />

      <ServicesSection />

      <SoftwareDevelopmentPreview />

      <FeaturedWork />

      <ProductsSection />

      <WhyAptInnova />

      <PartnershipSection />

      <InsightsSection />

      <ContactCTA />
    </>
  );
}

export default Home;
