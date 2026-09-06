import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

const faqData = [
  {
    question: "What kinds of businesses do you work with?",
    answer:
      "All sizes, across a lot of industries: e-commerce, healthcare, finance, manufacturing, professional services, and more. Whether you're trying AI for the first time or scaling what you've already started, we shape the work around where you are.",
  },
  {
    question: "How do you figure out where AI actually helps?",
    answer:
      "We start with a readiness assessment, looking at your systems, your data, and how you work day to day. From there we build a roadmap that moves in stages, from a small pilot to full rollout, with an honest view of the return at each step.",
  },
  {
    question: "Will this work with the systems we already have?",
    answer:
      "Yes. A big part of what we do is making AI work alongside your existing tools. We connect scattered data sources, clean them up, and put the right governance in place, so anything we build has something solid to run on.",
  },
  {
    question: "Do you do strategy before building, or just build?",
    answer:
      "Strategy first, always. We'd rather tell you what's worth doing before you spend on building it. Sometimes that means starting small. Sometimes it means not building a thing yet. You get an honest answer either way.",
  },
  {
    question: "What exactly do you offer?",
    answer:
      "Five things: AI strategy, custom software, AI agents, chatbots, and data and intelligence. Underneath all of them sits the data engineering, dashboards, and analytics that make AI actually useful.",
  },
  {
    question: "How do you keep AI responsible?",
    answer:
      "We build for AI that's explainable, fair, and transparent, with proper data governance and security around it. We also work closely with AI governance partners, which keeps us honest about how this technology should and shouldn't be used.",
  },
  {
    question: "What makes AptInnova different from other AI consultancies?",
    answer:
      "AptInnova is built on four key principles:: (1) Practical: we deliver real-world AI solutions that drive tangible business outcomes, not theoretical concepts; (2) Human-centred: we design AI with people at the core, ensuring technology serves human needs; (3) Responsible: we champion ethical, transparent, and trustworthy AI practices; and (4) Collaborative: we partner closely with you, combining our expertise with your domain knowledge for the best results. Every engagement is customised, and we stay at the forefront of AI innovation to ensure your organisation remains competitive.",
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
            title={
              <>
                Questions we get{" "}
                <span style={{ color: "var(--color-warm)" }}>Asked First</span>
              </>
            }
            align="center"
          />
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <details className="faq-item" key={index}>
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
