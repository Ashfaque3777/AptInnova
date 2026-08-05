import PageContainer from "../../layout/PageContainer.jsx";

import imgStrategy from "../../../assets/images/services/strategy.webp";
import imgGenAI from "../../../assets/images/services/genAI.webp";
import imgAgent from "../../../assets/images/services/agent.webp";
import imgAssistant from "../../../assets/images/services/assistant.webp";
import imgSolutions from "../../../assets/images/services/solutions.webp";
import imgBI from "../../../assets/images/services/bi.webp";

const servicesData = [
  {
    heading: "AI Strategy Consulting",
    subtitle:
      "Navigate the complexities of AI adoption with expert strategic guidance.",
    image: imgStrategy,
    description:
      "Our AI Strategy Consulting services help you identify the right AI opportunities, develop a clear implementation roadmap, and ensure your AI initiatives align with your business goals for maximum impact.",
    offers: [
      "AI Readiness Assessment: Evaluate your current infrastructure, data capabilities, and business processes to determine AI suitability.",
      "Custom AI Implementation Roadmap: Develop a phased approach for AI adoption, from pilot projects to full-scale deployment.",
      "ROI Analysis & Business Case Development: Quantify the potential return on investment and build a compelling case for AI projects.",
      "Change Management & Training: Support your team through the transition with tailored training programs and change management strategies.",
    ],
  },
  {
    heading: "Applied Generative AI Solutions",
    subtitle:
      "Unlock transformative automation and creativity with custom Generative AI applications.",
    image: imgGenAI,
    description:
      "We specialize in developing and deploying bespoke Generative AI solutions that integrate seamlessly into your existing workflows and address your unique business challenges. Our focus is on practical applications that deliver measurable results.",
    offers: [
      "Automated Document Processing: Extract insights, summarize information, and automate data entry from various document types.",
      "Intelligent Content Generation: Create engaging marketing copy, product descriptions, reports, and other textual content at scale.",
      "Enhanced Customer Service: Develop AI-powered virtual assistants and chatbots for improved customer support and engagement.",
      "Custom Process Automation: Design and implement AI models to automate repetitive tasks, optimize workflows, and boost operational efficiency.",
    ],
  },
  {
    heading: "Ready to Use AI Agents",
    subtitle:
      "Deploy pre-built AI agents to automate specific tasks and workflows instantly.",
    image: imgAgent,
    description:
      "Our Ready to Use AI Agents are designed for quick integration and immediate impact, providing solutions for common business challenges without the need for extensive custom development.",
    offers: [
      "Task-Specific Virtual Agents: Agents for customer support, data entry, scheduling, and more.",
      "Industry-Focused Agents: Pre-trained agents for specific sectors like e-commerce, healthcare, or finance.",
      "Easy Customization: Options to tailor agent behavior and responses to your brand and needs.",
      "Scalable Deployment: Easily scale the number of agents based on demand.",
    ],
  },
  {
    heading: "Knowledge Assistants",
    subtitle:
      "Empower your users and team with intelligent, conversational AI assistants.",
    image: imgAssistant,
    description:
      "Our pre-built Knowledge Assistants and Chatbots provide instant access to information, answer frequently asked questions, and guide users through processes, enhancing engagement and efficiency.",
    offers: [
      "FAQ Chatbots: Automate responses to common customer and internal queries.",
      "Knowledge Base Assistants: Provide employees or customers with easy access to documentation, guides, and internal knowledge.",
      "Website & App Navigational Bots: Help users find information and navigate digital platforms.",
      "Multi-Channel Integration: Deployable on websites, messaging apps, and internal platforms.",
    ],
  },
  {
    heading: "Data Solutions",
    subtitle:
      "Leverage the full potential of your data with our comprehensive data management and analytics services.",
    image: imgSolutions,
    description:
      "A solid data foundation is crucial for successful AI implementation. We help you organize, clean, and analyze your data to uncover valuable insights and fuel your Generative AI models.",
    offers: [
      "Data Integration & Engineering: Consolidate data from disparate sources and build robust data pipelines.",
      "Data Quality Management: Ensure data accuracy, completeness, and consistency for reliable AI outputs.",
      "Advanced Analytics Pipeline: Develop and deploy analytics models to extract insights and predict future trends.",
      "Data Governance & Compliance: Establish frameworks for data security, privacy, and regulatory compliance.",
    ],
  },
  {
    heading: "Business Intelligence & Performance",
    subtitle:
      "Transform data into actionable intelligence for smarter, faster decision-making.",
    image: imgBI,
    description:
      "Our Business Intelligence services empower you with the tools and insights needed to monitor performance, identify opportunities, and drive strategic initiatives effectively.",
    offers: [
      "Custom Interactive Dashboards: Visualize key performance indicators (KPIs) and business metrics in real-time.",
      "Predictive Analytics & Forecasting: Utilize historical data and AI models to predict future outcomes and trends.",
      "Performance Metrics & KPI Tracking: Define and track critical metrics to measure progress against business objectives.",
      "Automated Reporting Solutions: Streamline reporting processes to save time and ensure timely access to information.",
    ],
  },
];

function ServicesList() {
  return (
    <section className="services-list-section">
      <PageContainer>
        <div className="services-list">
          {servicesData.map((service) => (
            <article className="service-card" key={service.heading}>
              <h2 className="service-card-heading">{service.heading}</h2>

              <p className="service-card-subtitle">{service.subtitle}</p>

              <div className="service-card-image">
                <img src={service.image} alt={service.heading} loading="lazy" />
              </div>

              <p className="service-card-description">{service.description}</p>

              <div className="offer-section">
                <h3>What we offer?</h3>
                <ul className="offer-list">
                  {service.offers.map((offer, index) => (
                    <li key={index}>{offer}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default ServicesList;
