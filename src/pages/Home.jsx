import Hero from "../components/sections/home/Hero.jsx";
import CTACard from "../components/sections/home/CTACard.jsx";
import ServicesSection from "../components/sections/home/ServicesSection.jsx";
import SoftwareDevelopmentPreview from "../components/sections/home/SoftwareDevelopmentPreview.jsx";
import ProductsSection from "../components/sections/home/ProductsSection.jsx";
import WhyAptInnova from "../components/sections/home/WhyAptInnova.jsx";
import PartnershipSection from "../components/sections/home/PartnershipSection.jsx";
import InsightsSection from "../components/sections/home/InsightsSection.jsx";
import ContactCTA from "../components/sections/home/ContactCTA.jsx";
import Topography from "../components/ui/Topography.jsx";
import { useEffect } from "react";

function Home() {
  /* Add a class to <body> so we can make its background transparent
     only while the home page is mounted. Remove on unmount. */
  useEffect(() => {
    document.body.classList.add("home-page");
    return () => document.body.classList.remove("home-page");
  }, []);

  return (
    <>
      {/* Fixed fullscreen background – sits behind everything */}
      <div className="topography-bg">
        <Topography
          lowColor="#0a0a1a"
          midColor="#1a0a3e"
          highColor="#3d1f8e"
          speed={0.35}
          morphAmount={3.0}
          morphSpeed={0.05}
          bands={2.0}
          thickness={0.01}
          scale={1.0}
          pixelSize={1.0}
          glow={0.5}
          colorMode="elevation"
          contrast={3.0}
          brightness={0.8}
          fillBands={false}
          opacity={1.0}
          grain={true}
          grainIntensity={0.05}
          mouseInteraction={true}
          mouseRadius={0.3}
          mouseStrength={0.4}
        />
      </div>

      <Hero />

      <CTACard />

      <ServicesSection />

      <SoftwareDevelopmentPreview />

      <ProductsSection />

      <WhyAptInnova />

      <PartnershipSection />

      <InsightsSection />

      <ContactCTA />
    </>
  );
}

export default Home;
