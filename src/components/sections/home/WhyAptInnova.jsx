import { Link } from "react-router-dom";

import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

const cards = [
  {
    title: "You get senior people",
    description:
      "Our team is small on purpose. The people who scope your project are the people who build it, so nothing gets lost passing between a salesperson and a junior developer.",
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
        <path d="M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.5-3 5.7V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.3C6.2 13.5 5 11.4 5 9a7 7 0 0 1 7-7z" />
        <path d="M9 22h6" />
        <path d="M12 17v5" />
      </svg>
    ),
  },
  {
    title: "One team, start to finish",
    description:
      "Design, web, mobile, backend, cloud, all in-house. You're not managing three vendors who blame each other when something breaks.",
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
        <path d="M3 4h7v6H3z" />
        <path d="M14 14h7v6h-7z" />
        <path d="M10 7h4" />
        <path d="M3 17h7" />
        <path d="M14 10v4" />
      </svg>
    ),
  },
  {
    title: "We stay after launch",
    description:
      "Launch is the start, not the finish. We monitor, patch, and keep improving as your business changes, on support plans that fit what you actually need.",
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20" />
        <path d="M12 12 2 6" />
        <path d="M12 12l10-6" />
        <path d="M12 12l10 6" />
        <path d="M12 12 2 18" />
      </svg>
    ),
  },
  {
    title: "You always know where things stand",
    description:
      "Regular updates, open channels, honest answers. If something slips, you hear it from us early, not at the deadline.",
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
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "We learn your business first",
    description:
      "Before we write code, we understand how you actually work and where the money is. That's why what we build tends to pay for itself.",
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
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "A track record you can check",
    description:
      "8+ years, 20+ projects, and clients who come back for the next one. The numbers on this page are real and measured.",
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
        <path d="M12 2l2.4 5.2 5.7.6-4.2 3.9 1.1 5.6L12 14.6 7 17.3l1.1-5.6L3.9 7.8l5.7-.6z" />
      </svg>
    ),
  },
];

function WhyAptInnova() {
  const headingRef = useScrollReveal();

  return (
    <section className="section section-background">
      <PageContainer>
        <div className="why-heading reveal" ref={headingRef}>
          <SectionHeading
            title={
              <>
                Why Choose{" "}
                <span style={{ color: "var(--color-warm)" }}>AptInnova</span>?
              </>
            }
            description="You work directly with the people building your software. No account managers, no handoffs, no junior team you never agreed to."
          />
        </div>

        <div className="why-cards-grid">
          {cards.map((card) => (
            <div className="why-card" key={card.title}>
              <div className="why-card-icon">{card.icon}</div>
              <h3 className="why-card-title">{card.title}</h3>
              <p className="why-card-description">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="why-link-wrapper">
          <Link to="/services/" className="why-services-link">
            Our Services in Detail
            <span aria-hidden="true">&nbsp;&rarr;</span>
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}

export default WhyAptInnova;
