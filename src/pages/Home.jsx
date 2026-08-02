import Hero from "../components/sections/home/Hero.jsx";
import CTACard from "../components/sections/home/CTACard.jsx";
import ServicesSection from "../components/sections/home/ServicesSection.jsx";
import WhyAptInnova from "../components/sections/home/WhyAptInnova.jsx";
import PartnershipSection from "../components/sections/home/PartnershipSection.jsx";
import ProductsSection from "../components/sections/home/ProductsSection.jsx";
import InsightsSection from "../components/sections/home/InsightsSection.jsx";
import ContactCTA from "../components/sections/home/ContactCTA.jsx";

function Home() {
  return (
    <>
      <Hero />

      <CTACard />

      <ServicesSection />

      <WhyAptInnova />

      <PartnershipSection />

      <ProductsSection />

      <InsightsSection />

      <ContactCTA />
    </>
  );
}

export default Home;
