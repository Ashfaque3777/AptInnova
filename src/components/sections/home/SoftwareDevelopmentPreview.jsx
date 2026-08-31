import { Link } from "react-router-dom";

import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

const cards = [
  {
    title: "Custom Web Applications",
    description:
      "Bespoke web platforms, internal dashboards, customer portals and SaaS products built for performance and scalability.",
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
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="m9 13-2 2 2 2" />
        <path d="m15 13 2 2-2 2" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform applications for iOS and Android with offline support, push notifications, real-time tracking and backend integration.",
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
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
        <path d="M9 2h6" />
      </svg>
    ),
  },
  {
    title: "E-Commerce Solutions",
    description:
      "End-to-end online stores covering product catalogues, secure payments, order management and logistics.",
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
        <circle cx="9" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
  {
    title: "ERP & CRM Systems",
    description:
      "Centralized platforms that automate operations, unify data and provide real-time visibility into business performance.",
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
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.22.53.71.91 1.28 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "DevOps & Cloud Engineering",
    description:
      "Automated pipelines, infrastructure as code and reliable cloud deployments that keep your software fast, secure and always available.",
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
        <path d="M17.5 19a4.5 4.5 0 1 0-.9-8.9 6 6 0 0 0-11.6 1.9A4 4 0 0 0 6 19z" />
        <path d="M22 19a2 2 0 1 0-4 0" />
        <path d="M18 22v-.5" />
      </svg>
    ),
  },
];

function SoftwareDevelopmentPreview() {
  const headingRef = useScrollReveal();

  return (
    <section className="section software-dev-section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={
              <>
                <span style={{ color: "var(--color-warm)" }}>
                  Custom Software
                </span>{" "}
                that Moves your Business Forward
              </>
            }
            description="From customer-facing apps to internal platforms, we design, build and scale software tailored to the way you work. Our teams combine modern technology stacks with proven delivery practices to ship reliable products faster."
            align="center"
          />
        </div>

        <div className="software-dev-orbit">
          <div className="software-dev-orbit-circle" aria-hidden="true" />

          <div className="software-dev-orbit-center" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m8 8-4 4 4 4" />
              <path d="m16 8 4 4-4 4" />
            </svg>
          </div>

          <div className="software-dev-ring">
            {cards.map((card, index) => (
              <article
                className={`software-dev-card software-dev-card--${index + 1}`}
                key={card.title}
              >
                <div className="software-dev-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="software-dev-link-wrapper">
          <Link to="/services/" className="software-dev-link">
            View all software development services
            <span aria-hidden="true">&nbsp;&rarr;</span>
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}

export default SoftwareDevelopmentPreview;
