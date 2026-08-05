import ServicesHero from "../components/sections/services/ServicesHero.jsx";
import ServicesOverview from "../components/sections/services/ServicesOverview.jsx";
import ServicesList from "../components/sections/services/ServicesList.jsx";
import WhyWorkWithUs from "../components/sections/services/WhyWorkWithUs.jsx";
import ServicesFAQ from "../components/sections/services/ServicesFAQ.jsx";
import ContactCTA from "../components/sections/services/ServicesContactCTA.jsx";

function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <ServicesList />
      <WhyWorkWithUs />
      <ServicesFAQ />
      <ContactCTA />
    </>
  );
}

export default Services;
