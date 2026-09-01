import { Link } from "react-router-dom";

import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import strategy from "../../../assets/icons/strategy.svg";
import genAI from "../../../assets/icons/genAI.svg";
import agent from "../../../assets/icons/agent.svg";
import knowledge from "../../../assets/icons/knowledge.svg";
// import dataSol from "../../../assets/icons/dataSol.svg";
import BI from "../../../assets/icons/BI.svg";

import imgAIstrategy from "../../../assets/images/home/AIstrategyConsulting.webp";
import imgAppliedGenAI from "../../../assets/images/home/appliedGenerativeAI.webp";
import imgReadyToUse from "../../../assets/images/home/readyToUseAIagents.webp";
import imgKnowledge from "../../../assets/images/home/knowledgeAssistants.webp";
// import imgDataSol from "../../../assets/images/home/dataSolutions.webp";
import imgBI from "../../../assets/images/home/businessIntelligence.webp";

const services = [
  {
    image: imgAIstrategy,
    icon: strategy,
    title: "AI Strategy",
    description:
      "Not sure where AI actually helps? We assess where you are, map what's worth doing, and show you the ROI before you commit to building. You leave with a plan, not a sales pitch.",
  },
  {
    image: imgAppliedGenAI,
    icon: genAI,
    title: "Custom Software",
    description:
      "The web apps, mobile apps, and platforms your business runs on, built around how you actually work. Dashboards, portals, ERP, CRM, e-commerce, whatever the job needs, with intelligence built in from the start.",
  },
  {
    image: imgReadyToUse,
    icon: agent,
    title: "AI Agents",
    description:
      "Software that does the repetitive work your team shouldn't have to. Task and workflow agents that handle the busywork, deploy in days, and scale as you grow.",
  },
  {
    image: imgKnowledge,
    icon: knowledge,
    title: "Chatbots",
    description:
      "Assistants that actually know your business. They answer customer questions, surface internal knowledge, and guide people through your product, on every channel, around the clock.",
  },
  {
    image: imgBI,
    icon: BI,
    title: "Data & Intelligence",
    description:
      "The foundation underneath it all. We clean up your data, wire up dashboards, and build the forecasting that turns what you already have into decisions you can act on.",
  },
];

function ServicesSection() {
  const headingRef = useScrollReveal();

  return (
    <section className="section services-section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={
              <>
                Unlock Your Potential with{" "}
                <span style={{ color: "var(--color-warm)" }}>
                  Generative AI
                </span>
              </>
            }
            description="Five ways we put AI to work inside your business. Start with a plan, or start with a build. Either way, one senior team takes it end to end."
            align="center"
          />
        </div>

        <div className="services-cards-grid">
          {services.map((service) => (
            <article className="service-card-elevated" key={service.title}>
              <div className="service-card-image">
                <img src={service.image} alt="" aria-hidden="true" />
              </div>

              <div className="service-card-header">
                <div className="service-card-icon">
                  <img src={service.icon} alt="" aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
              </div>

              <p className="service-card-description">{service.description}</p>
            </article>
          ))}
        </div>

        <p className="services-section-note">
          Every build sits on solid data engineering, governance, and business
          intelligence, so the AI on top has something real to stand on.
        </p>

        <div className="services-section-link-wrapper">
          <Link to="/services/" className="services-section-link">
            Explore our services
            <span aria-hidden="true">&nbsp;&rarr;</span>
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}

export default ServicesSection;
