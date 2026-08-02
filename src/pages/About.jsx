import AboutHero from "../components/sections/about/AboutHero.jsx";
import MissionVision from "../components/sections/about/MissionVision.jsx";
import CompanyStory from "../components/sections/about/CompanyStory.jsx";
import BeliefsSection from "../components/sections/about/BeliefsSection.jsx";
import AboutPartnership from "../components/sections/about/AboutPartnership.jsx";
import HowWeWork from "../components/sections/about/HowWeWork.jsx";
import AboutContactCTA from "../components/sections/about/AboutContactCTA.jsx";

function About() {
  return (
    <>
      <AboutHero />

      <MissionVision />

      <BeliefsSection />

      <CompanyStory />

      <AboutPartnership />

      <HowWeWork />

      <AboutContactCTA />
    </>
  );
}

export default About;
