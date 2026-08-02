import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";
import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

const faqData = [
  {
    question: "What types of organisations does AptInnova work with?",
    answer:
      "AptInnova partners with organisations of all sizes and across a wide range of industries — including e-commerce, healthcare, finance, manufacturing, and professional services. Whether you are a startup exploring AI for the first time or an established enterprise scaling your AI capabilities, our services are tailored to meet your unique business needs and maturity level.",
  },
  {
    question: "How do you identify AI opportunities?",
    answer:
      "We follow a structured approach starting with an AI Readiness Assessment, where we evaluate your current infrastructure, data capabilities, and business processes to determine AI suitability. From there, we develop a custom AI Implementation Roadmap with a phased approach — from pilot projects to full-scale deployment — and quantify the potential return on investment through detailed ROI Analysis & Business Case Development.",
  },
  {
    question: "Can AI solutions integrate with existing systems?",
    answer:
      "Yes. A core part of our service is ensuring seamless integration with your current technology stack. Our Data Solutions practice specialises in Data Integration & Engineering — consolidating data from disparate sources and building robust data pipelines. We also focus on Data Quality Management to ensure accuracy and consistency, and establish Data Governance & Compliance frameworks so your AI solutions work reliably within your existing infrastructure.",
  },
  {
    question: "Do you provide AI strategy before implementation?",
    answer:
      "Absolutely. Strategy comes first. Our AI Strategy Consulting service begins with an AI Readiness Assessment and a Custom AI Implementation Roadmap. We help you align AI initiatives with your business goals, develop a phased adoption plan, and build a compelling business case with quantified ROI projections. This strategic foundation ensures that every implementation step is purposeful and delivers measurable impact.",
  },
  {
    question: "What specific AI services does AptInnova offer?",
    answer:
      "We offer six core services: (1) AI Strategy Consulting — readiness assessments, roadmaps, and change management; (2) Applied Generative AI Solutions — custom document processing, content generation, and automation; (3) Ready to Use AI Agents — pre-built task-specific and industry-focused agents; (4) Knowledge Assistants — FAQ chatbots, knowledge base assistants, and navigational bots; (5) Data Solutions — data integration, quality management, analytics pipelines, and governance; and (6) Business Intelligence & Performance — custom dashboards, predictive analytics, KPI tracking, and automated reporting.",
  },
  {
    question: "How do you ensure AI solutions are responsible and ethical?",
    answer:
      "Responsible AI is a core principle at AptInnova. We prioritise explainable, fair, and transparent AI solutions that build trust and foster positive impact. Our approach includes establishing data governance frameworks for security and regulatory compliance, designing with human-centred principles, and operating with unwavering integrity in every partnership. We believe ethical AI is not just a checkbox — it is fundamental to lasting value.",
  },
  {
    question: "What makes AptInnova different from other AI consultancies?",
    answer:
      "AptInnova is built on four key principles: Practical — we deliver real-world AI solutions that drive tangible business outcomes, not theoretical concepts; Human-centred — we design AI with people at the core, ensuring technology serves human needs; Responsible — we champion ethical, transparent, and trustworthy AI practices; and Collaborative — we partner closely with you, combining our expertise with your domain knowledge for the best results. Every engagement is customised, and we stay at the forefront of AI innovation to ensure your organisation remains competitive.",
  },
];

function generateFAQStructuredData() {
  const mainEntity = faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}

function ServicesFAQ() {
  const headingRef = useScrollReveal();

  const structuredData = generateFAQStructuredData();

  return (
    <section className="section faq-section">
      <PageContainer>
        {/* JSON-LD Structured Data for AI-search readiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />

        <div ref={headingRef} className="reveal">
          <SectionHeading
            title="Frequently Asked Questions"
            description="Quick answers to common questions about our AI services, approach, and how we can help your organisation."
            align="center"
          />
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <details
              className="faq-item"
              key={index}
            >
              <summary className="faq-question">
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default ServicesFAQ;

