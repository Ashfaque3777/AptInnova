import SectionHeading from "../../ui/SectionHeading";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

const services = [
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
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M2 8h20" />
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
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <path d="M11 18h2" />
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
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
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
        <rect x="3" y="3" width="8" height="8" rx="2" />
        <path d="M7 11v4a2 2 0 0 0 2 2h4" />
        <rect x="13" y="13" width="8" height="8" rx="2" />
      </svg>
    ),
  },
  {
    title: "Content Management Systems",
    description:
      "Custom CMS and headless CMS integrations that allow non-technical teams to manage content independently.",
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
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
  },
  {
    title: "Custom Software Development",
    description:
      "Purpose-built software for workflow automation, industry-specific platforms and challenges that off-the-shelf products cannot address.",
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
        <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877L2.41 13.24a2.404 2.404 0 0 1-.707-1.704 2.402 2.402 0 0 1 .706-1.704l1.61-1.611a.98.98 0 0 1 .838-.276c.47.07.802.48.968.968a2.501 2.501 0 1 0 3.214-3.237c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.61A2.404 2.404 0 0 1 11.7 2.5c.667 0 1.292.26 1.705.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
      </svg>
    ),
  },
  {
    title: "API Development & Backend",
    description:
      "REST and GraphQL APIs, authentication systems and microservice architectures designed to scale.",
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
        <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
        <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
      </svg>
    ),
  },
  {
    title: "AI Integration",
    description:
      "Generative AI, automation and intelligent workflows integrated into existing software stacks.",
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
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        <path d="M20 3v4" />
        <path d="M22 5h-4" />
        <path d="M4 17v2" />
        <path d="M5 18H3" />
      </svg>
    ),
  },
];

function ServiceRow({ service, index }) {
  const rowRef = useScrollReveal();

  return (
    <li
      className={`software-service-row reveal reveal-delay-${(index % 6) + 1}`}
      ref={rowRef}
    >
      <span className="software-service-icon" aria-hidden="true">
        {service.icon}
      </span>

      <div className="software-service-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>

      <span className="software-service-index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
    </li>
  );
}

function SoftwareDevelopmentServices() {
  const headingRef = useScrollReveal();

  return (
    <section className="section software-services">
      <div className="page-container">
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={
              <>
                <span style={{ color: "var(--color-warm)" }}>
                  Technology Built
                </span>{" "}
                around your Business
              </>
            }
            align="center"
          />
        </div>

        <ul className="software-services-list">
          {services.map((service, index) => (
            <ServiceRow key={service.title} service={service} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SoftwareDevelopmentServices;
