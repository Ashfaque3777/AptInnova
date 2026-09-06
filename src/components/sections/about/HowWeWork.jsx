import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function HowWeWork() {
  const headingRef = useScrollReveal();

  const steps = [
    {
      title: "Practical over theoretical",
      description:
        "AI is useful when it solves a real problem in front of a real business. We build things that work in the day-to-day, not demos that impress in a meeting and gather dust after.",
    },
    {
      title: "People first",
      description: "Technology should serve the people using it. We design around how your team actually works, and we bring them along rather than dropping something on them.",
    },
    {
      title: "Responsible by default",
      description:
        "We build AI that's explainable, fair, and transparent, with proper data governance around it. We work closely with AI governance partners to stay honest about how this technology should be used.",
    },
    {
      title: "We do the work with you, not to you",
      description:
        "The best results come from combining what we know about building software with what you know about your business. That's a partnership, and we treat it like one.",
    },
  ];

  return (
    <section className="section how-we-work-section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={
              <>
                What{" "}
                <span style={{ color: "var(--color-warm)" }}>
                  We Believe
                </span>
              </>
            }
            align="center"
          />
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-step">
              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default HowWeWork;
