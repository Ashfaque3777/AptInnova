import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import Button from "../../ui/Button.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import iconStrategy from "../../../assets/icons/strategy.svg";
import iconGenAI from "../../../assets/icons/genAI.svg";
import iconAgent from "../../../assets/icons/agent.svg";
import iconKnowledge from "../../../assets/icons/knowledge.svg";
import iconDataSol from "../../../assets/icons/dataSol.svg";
import iconBI from "../../../assets/icons/BI.svg";

const overviewServices = [
  { number: "01", title: "Discovery", icon: iconStrategy },
  { number: "02", title: "Design", icon: iconGenAI },
  { number: "03", title: "Build", icon: iconAgent },
  { number: "04", title: "Test", icon: iconKnowledge },
  { number: "05", title: "Launch", icon: iconDataSol },
  { number: "06", title: "Support", icon: iconBI },
];

function ServicesOverview() {
  const headingRef = useScrollReveal();

  return (
    <section className="services-overview-section section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={
              <>
                A{" "}
                <span style={{ color: "var(--color-warm)" }}>
                  Clear Process,
                </span>{" "}
                Start to Finish
              </>
            }
            description="Every project runs through the same six phases, from the first conversation to long after launch. You always know what's happening and what's next."
            align="center"
          />
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

        <div className="services-overview-cta">
          <Button to="/work/">See how we work in detail</Button>
        </div>
      </PageContainer>
    </section>
  );
}

export default ServicesOverview;
