import InsightsHero from "../components/sections/insights/InsightsHero.jsx";
import InsightsSection from "../components/sections/home/InsightsSection.jsx";
import NewsletterSection from "../components/sections/insights/NewsletterSection.jsx";

function Insights() {
  return (
    <>
      <InsightsHero />
      <InsightsSection showHeading={false} showViewMore={false} />
      <NewsletterSection />
    </>
  );
}
export default Insights;
