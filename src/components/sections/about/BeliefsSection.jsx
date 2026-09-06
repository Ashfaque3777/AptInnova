import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

const beliefs = [
  {
    title: "Discovery",
    description:
      "We spend the first stretch listening, to founders, to the people who'll use the thing every day, to whoever knows where the real bottleneck is. We map how your business works today and where the friction lives. You come out of it with a written requirements document and a phased roadmap you can plan and budget around.",
    icon: "01",
  },
  {
    title: "Design",
    description:
      "We start with rough wireframes to agree on structure, then move to clickable prototypes, then to high-fidelity mockups. Every round is a working session, not a big reveal. You steer, we shape it, and nothing gets built until the design is right.",
    icon: "02",
  },
  {
    title: "Build",
    description:
      "We work in short sprints with a demo at the end of each one, so you see real progress every couple of weeks instead of waiting until the end. Code reviews, version control, and automated pipelines keep the quality steady and make sure nothing depends on one person's memory.",
    icon: "03",
  },
  {
    title: "Test",
    description:
      "We test the way real people will actually use the software: the common paths, the edge cases, the moments things break. That covers functionality, performance, and security, checked before anything reaches your users.",
    icon: "04",
  },
  {
    title: "Launch",
    description:
      "We handle the go-live end to end: server setup, migration, and monitoring, with a zero-downtime approach so your business doesn't stop while we ship. If something needs rolling back, we can do it cleanly.",
    icon: "05",
  },
  {
    title: "Support",
    description:
      "Launch is the beginning of the relationship, not the end. We monitor, fix, patch, and keep improving as your business changes, on support plans sized to what you actually need. Most clients stay with us long after the first project ships.",
    icon: "06",
  },
];

function BeliefsSection() {
  const headingRef = useScrollReveal();

  return (
    <section className="section beliefs-section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={
              <>
                How <span style={{ color: "var(--color-warm)" }}>We Work</span>
              </>
            }
            description="Every project runs through the same six phases. The shape stays the same whether we're building a single app or a full platform. What changes is the depth. Here's what each phase actually involves."
            align="center"
          />
        </div>

        <div className="beliefs-grid">
          {beliefs.map((belief, index) => (
            <article className="belief-card" key={index}>
              <div className="belief-card-header">
                <div className="belief-card-icon">{belief.icon}</div>
                <svg
                  className="belief-card-arrow"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>

              <h3 className="belief-card-title">{belief.title}</h3>

              <p className="belief-card-description">{belief.description}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default BeliefsSection;
