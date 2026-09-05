import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function IconCalendar() {
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
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
    </svg>
  );
}

function IconClipboardCheck() {
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
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  );
}

function IconAward() {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function IconUsers() {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const features = [
  {
    icon: <IconCalendar />,
    title: "Flexible format",
    description:
      "Run it as a workshop, a weekly course, or a flexible schedule that fits your calendar.",
  },
  {
    icon: <IconClipboardCheck />,
    title: "Real practice",
    description:
      "Short quizzes per module, practical assignments, and a capstone project in each paid tier.",
  },
  {
    icon: <IconAward />,
    title: "Certification that lasts",
    description:
      "A certificate for each tier, plus a portfolio project (on GitHub or LinkedIn) that outlasts the certificate and shows real capability.",
  },
  {
    icon: <IconUsers />,
    title: "Trainers who've done the work",
    description:
      "Industry-experienced trainers, mentored labs, and time to clear doubts, with recorded material for revision.",
  },
];

function AITrainingFormat() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="ait-format section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            eyebrow="How the training runs"
            title={
              <>
                Built to Fit Real{" "}
                <span style={{ color: "var(--color-warm)" }}>Schedules</span>
              </>
            }
            description="The program is designed to be practical, structured, and easy to fit into the way your people already work."
            align="center"
          />
        </div>

        <div className="ait-format-grid reveal" ref={gridRef}>
          {features.map((feature) => (
            <article className="ait-format-card" key={feature.title}>
              <div className="ait-format-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default AITrainingFormat;