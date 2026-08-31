import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function HowWeWork() {
  const headingRef = useScrollReveal();

  const steps = [
    {
      number: "01",
      title: "Understand",
      description:
        "We start with the problem, the context, and the opportunity.",
    },
    {
      number: "02",
      title: "Explore",
      description: "We identify where AI can create meaningful value.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "We develop practical solutions that fit the real environment.",
    },
    {
      number: "04",
      title: "Improve",
      description:
        "We learn from implementation and continue to refine the solution.",
    },
  ];

  return (
    <section className="section how-we-work-section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={
              <>
                From Opportunity to{" "}
                <span style={{ color: "var(--color-warm)" }}>
                  Implementation
                </span>
              </>
            }
            align="center"
          />
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-step" key={step.number}>
              <span>{step.number}</span>

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
