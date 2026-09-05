import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function IconLayers() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

const tiers = [
  {
    tier: "Tier 0",
    name: "Foundations",
    icon: <IconLayers />,
    description:
      "No prior knowledge needed. Builds real AI literacy and immediate everyday productivity, the skills anyone can use from day one.",
  },
  {
    tier: "Tier 1",
    name: "Applied",
    icon: <IconTarget />,
    description:
      "For people who want to put AI to work in their actual job. Practical, role-focused skills across areas like business and marketing, content and design, and operations and productivity.",
  },
  {
    tier: "Tier 2",
    name: "Builder",
    icon: <IconCode />,
    tag: "Opt-in",
    description:
      "The hands-on, technical track for people who want to build with AI. Opt-in, and it includes coding.",
  },
];

function AITrainingTiers() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const noteRef = useScrollReveal();

  return (
    <section className="ait-tiers section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={
              <>
                How it's{" "}
                <span style={{ color: "var(--color-warm)" }}>Built</span>{" "}
                
              </>
            }
            description="One universal core, then depth for whoever wants it everyone starts with the same foundation. From there, learners add the modules that fit their role and goals."
            align="center"
          />
        </div>

        <div className="ait-tiers-grid reveal" ref={gridRef}>
          {tiers.map((item) => (
            <article className="ait-tier-card" key={item.tier}>
              {item.tag && <span className="ait-tier-tag">{item.tag}</span>}

              <div className="ait-tier-icon" aria-hidden="true">
                {item.icon}
              </div>

              <p className="ait-tier-label">{item.tier}</p>
              <h3>{item.name}</h3>
              <p className="ait-tier-description">{item.description}</p>
            </article>
          ))}
        </div>

        <p className="ait-tiers-note reveal" ref={noteRef}>
          Every module stacks onto the last, so learners climb a clear ladder
          from literacy to building.
        </p>
      </PageContainer>
    </section>
  );
}

export default AITrainingTiers;