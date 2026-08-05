import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

const beliefs = [
  {
    title: "Client-Focus",
    description:
      "Your success is our priority. We achieve this by deeply understanding your unique challenges and co-creating solutions that deliver measurable results and lasting value.",
    icon: (
      <svg
        width="45"
        height="45"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Responsible AI",
    description:
      "Prioritizing explainable, fair, and transparent AI solutions that build trust and foster positive impact, all while operating with unwavering integrity in our partnerships.",
    icon: (
      <svg
        width="45"
        height="45"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description:
      "Upholding the highest standards in every aspect of our work, from initial consultation to solution deployment and ongoing support, ensuring quality and reliability.",
    icon: (
      <svg
        width="45"
        height="45"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Empowerment",
    description:
      "Enabling clients and our community with the knowledge, tools, and AI-driven capabilities needed to thrive, innovate, and achieve their full potential.",
    icon: (
      <svg
        width="45"
        height="45"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "Pioneering forward-thinking AI solutions by continuously exploring emerging technologies and creative approaches to solve complex problems and unlock new opportunities.",
    icon: (
      <svg
        width="45"
        height="45"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

function BeliefsSection() {
  const headingRef = useScrollReveal();

  return (
    <section className="section beliefs-section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading title="Our Values" align="center" />
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
