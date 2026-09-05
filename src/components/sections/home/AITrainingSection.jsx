import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import Button from "../../ui/Button.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

const programs = [
  {
    title: "For colleges",
    description:
      "Make every student AI-ready. Modular courses from foundations to job-ready, technical skills, with real projects and certificates that mean something to employers.",
    action: "Explore college programs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10 12 5 2 10l10 5 10-5z" />
        <path d="M6 12.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
        <path d="M22 10v6" />
      </svg>
    ),
  },
  {
    title: "For companies",
    description:
      "Get your team productive with AI, fast. Practical training shaped around how your people actually work, from a single workshop to a full learning track.",
    action: "Explore corporate training",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M12 12v3" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
];

function AITrainingSection() {
  const headingRef = useScrollReveal();

  return (
    <section className="section section-background ai-training-section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={
              <>
                AI Training, built with{" "}
                <span style={{ color: "var(--color-warm)" }}>AIforALL</span>{" "}
                Global
              </>
            }
            description="Beyond building software, we help teams and students learn to use AI well. Our AI-Readiness Program runs from everyday AI literacy up to hands-on building, delivered with our partner AI for ALL Global."
            align="center"
          />
        </div>

        <div className="ai-training-grid">
          {programs.map((program) => (
            <article className="ai-training-card" key={program.title}>
              <div className="ai-training-icon">{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <div className="ai-training-action">
                <Button href="https://aptinnova.com/contact/" variant="primary">
                  {program.action}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default AITrainingSection;
