import AboutHero from "../components/sections/about/AboutHero.jsx";
import CompanyStory from "../components/sections/about/CompanyStory.jsx";
import CompanyStats from "../components/sections/about/CompanyStats.jsx";
import MissionVision from "../components/sections/about/MissionVision.jsx";
import BeliefsSection from "../components/sections/about/BeliefsSection.jsx";
import HowWeWork from "../components/sections/about/HowWeWork.jsx";
import AboutPartnership from "../components/sections/about/AboutPartnership.jsx";
import AboutContactCTA from "../components/sections/about/AboutContactCTA.jsx";

function About() {
  return (
    <>
      <AboutHero />

      <CompanyStory />

      <CompanyStats />

      <MissionVision />

      <BeliefsSection />

      <HowWeWork />

      <AboutPartnership />

      <AboutContactCTA />
    </>
  );
}

export default About;
