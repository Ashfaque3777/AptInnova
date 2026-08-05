import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import strategy from "../../../assets/icons/strategy.svg";
import genAI from "../../../assets/icons/genAI.svg";
import agent from "../../../assets/icons/agent.svg";
import knowledge from "../../../assets/icons/knowledge.svg";
import dataSol from "../../../assets/icons/dataSol.svg";
import BI from "../../../assets/icons/BI.svg";

import imgAIstrategy from "../../../assets/images/home/AIstrategyConsulting.webp";
import imgAppliedGenAI from "../../../assets/images/home/appliedGenerativeAI.webp";
import imgReadyToUse from "../../../assets/images/home/readyToUseAIagents.webp";
import imgKnowledge from "../../../assets/images/home/knowledgeAssistants.webp";
import imgDataSol from "../../../assets/images/home/dataSolutions.webp";
import imgBI from "../../../assets/images/home/businessIntelligence.webp";

const services = [
  {
    image: imgAIstrategy,
    icon: strategy,
    title: "AI Strategy Consulting",
    description: `Strategic Guidance for AI Implementation
• Clear Roadmap
• Maximize ROI
• Future-Proof`,
  },
  {
    image: imgAppliedGenAI,
    icon: genAI,
    title: "Applied Generative AI",
    description: `Custom AI for Business Automation
• Boost Efficiency
• Reduce Costs
• Innovate Faster`,
  },
  {
    image: imgReadyToUse,
    icon: agent,
    title: "Ready to Use AI Agents",
    description: `Pre-built Task & Workflow Automation
• Rapid Deployment
• Cost-Effective
• Scalable Solutions`,
  },
  {
    image: imgKnowledge,
    icon: knowledge,
    title: "Knowledge Assistants",
    description: `Intelligent Chatbots & Info Access
• 24/7 Support
• Enhanced Engagement
• Streamlined Info`,
  },
  {
    image: imgDataSol,
    icon: dataSol,
    title: "Data Solutions",
    description: `Data Management & Data Engineering
• Actionable Insights
• Informed Decisions
• Data-Driven Growth`,
  },
  {
    image: imgBI,
    icon: BI,
    title: "Business Intelligence",
    description: `Data-Driven Decision Making & Performance
• Custom Dashboards
• Predictive Analytics
• Track KPIs`,
  },
];

function ServicesSection() {
  const headingRef = useScrollReveal();

  return (
    <section className="section services-section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title="Unlock Your Potential with Generative AI"
            description="Is your business ready to leverage the power of Generative AI? At AptInnova, we specialize in creating custom AI solutions that deliver real-world results. From automating complex processes to generating novel content and providing strategic AI guidance, we are your partners in innovation."
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
      </PageContainer>
    </section>
  );
}

export default ServicesSection;
