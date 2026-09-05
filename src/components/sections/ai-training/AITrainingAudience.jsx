import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";
import Button from "../../ui/Button.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function IconGraduationCap() {
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
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
      <path d="M22 10v6" />
    </svg>
  );
}

function IconBriefcase() {
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
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M12 12v3" />
      <path d="M9 12h6" />
    </svg>
  );
}

const audiences = [
  {
    id: "colleges",
    icon: <IconGraduationCap />,
    title: "Colleges",
    description:
      "Make every student AI-ready, whatever they're studying. Foundations for everyone, deeper technical tracks for those who want them, and real projects that give students something to show employers.",
    action: "Explore college programs",
  },
  {
    id: "companies",
    icon: <IconBriefcase />,
    title: "Companies",
    description:
      "Get your team genuinely productive with AI, not just aware of it. Training shaped around how your people actually work, from a single focused workshop to a full learning track.",
    action: "Explore corporate training",
  },
];

function AITrainingAudience() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="ait-audience section" id="who-its-for">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={
              <>
                Built for Two Kinds of{" "}
                <span style={{ color: "var(--color-warm)" }}>Organizations</span>
              </>
            }
            description="We run the program for two kinds of organizations, and the content flexes to fit each."
            align="center"
          />
        </div>

        <div className="ait-audience-grid reveal" ref={gridRef}>
          {audiences.map((audience) => (
            <article
              className="ait-audience-card"
              id={audience.id}
              key={audience.title}
            >
              <div className="ait-audience-icon" aria-hidden="true">
                {audience.icon}
              </div>
              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
              <div className="ait-audience-action">
                <Button to="/contact/" variant="primary">
                  {audience.action}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default AITrainingAudience;