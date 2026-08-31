import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

const process = [
  {
    number: "01",
    title: "Discovery & Requirements",
    description:
      "In-depth sessions to understand your business, users and goals. Produces a requirements document and project roadmap.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Wireframes, prototypes and high-fidelity mockups are iterated with your feedback until the design is right.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Agile sprints with regular demos, code reviews, version control and CI/CD pipelines.",
  },
  {
    number: "04",
    title: "Quality Assurance & Testing",
    description:
      "Automated and manual testing across functional, performance and security dimensions.",
  },
  {
    number: "05",
    title: "Deployment & Launch",
    description:
      "Server setup, SSL, database migration and go-live monitoring with zero-downtime strategies.",
  },
  {
    number: "06",
    title: "Ongoing Support & Maintenance",
    description:
      "Bug fixes, performance monitoring, security patches and feature enhancements with flexible support plans.",
  },
];

function ProcessCard({ step }) {
  return (
    <article className="process-card">
      <span className="process-card-number">{step.number}</span>

      <h3 className="process-card-title">{step.title}</h3>
      <p className="process-card-description">{step.description}</p>
    </article>
  );
}

function DevelopmentProcess() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="section development-process">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={
              <>
                A{" "}
                <span style={{ color: "var(--color-warm)" }}>
                  Structured Process,
                </span>{" "}
                without Unnecessary Friction
              </>
            }
            align="center"
          />
        </div>

        <div ref={gridRef} className="development-process-grid reveal">
          {process.map((step) => (
            <ProcessCard key={step.number} step={step} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default DevelopmentProcess;
