import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import iconStrategy from "../../../assets/icons/strategy.svg";
import iconGenAI from "../../../assets/icons/genAI.svg";
import iconAgent from "../../../assets/icons/agent.svg";
import iconKnowledge from "../../../assets/icons/knowledge.svg";
import iconDataSol from "../../../assets/icons/dataSol.svg";
import iconBI from "../../../assets/icons/BI.svg";

const overviewServices = [
  { number: "01", title: "Strategy", icon: iconStrategy },
  { number: "02", title: "Custom AI", icon: iconGenAI },
  { number: "03", title: "AI Agents", icon: iconAgent },
  { number: "04", title: "Knowledge Assistants", icon: iconKnowledge },
  { number: "05", title: "Data Solutions", icon: iconDataSol },
  { number: "06", title: "Business Intelligence", icon: iconBI },
];

function ServicesOverview() {
  const headingRef = useScrollReveal();

  return (
    <section className="services-overview-section section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading title="What we Help with?" align="center" />
        </div>

        <div className="services-overview-grid">
          {overviewServices.map((service) => (
            <article className="services-overview-card" key={service.title}>
              <span className="services-overview-number">{service.number}</span>

              <div className="services-overview-card-content">
                <div className="services-overview-icon">
                  <img src={service.icon} alt="" aria-hidden="true" />
                </div>
                <h3 className="services-overview-title">{service.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default ServicesOverview;
