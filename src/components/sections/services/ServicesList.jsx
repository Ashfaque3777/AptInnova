import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import imgStrategy from "../../../assets/images/services/strategy.webp";
import imgGenAI from "../../../assets/images/services/genAI.webp";
import imgAgent from "../../../assets/images/services/agent.webp";
import imgAssistant from "../../../assets/images/services/assistant.webp";
import imgSolutions from "../../../assets/images/services/solutions.webp";
// import imgBI from "../../../assets/images/services/bi.webp";

const servicesData = [
  {
    heading: "AI Strategy",
    subtitle:
      "Best for: teams who know AI matters but aren't sure where to start.",
    image: imgStrategy,
    description:
      "Not sure where AI actually fits? Start here. We look at how your business runs today, find the places where AI would genuinely help, and tell you honestly what's worth doing and what isn't. You get a clear roadmap and a real sense of the return before you spend anything on building.",
    offers: [
      "A readiness assessment of your systems, data, and workflows",
      "A prioritized roadmap, from quick wins to bigger bets",
      "An honest ROI view, so the business case stands on its own",
      "Help bringing your team along, not just the technology",
    ],
  },
  {
    heading: "Custom Software",
    subtitle:
      "Best for: businesses whose real work doesn't fit the tools they're forced to use.",
    image: imgGenAI,
    description:
      "The software your business actually runs on, built around the way you work instead of forcing you to work around it. Web apps, mobile apps, internal tools, customer platforms, whatever the job needs, with AI built in from the start rather than bolted on later.",
    offers: [
      "Web applications: dashboards, portals, and SaaS products built for real use",
      "Mobile apps: native and cross-platform for iOS and Android, with offline and real-time built in",
      "E-commerce: storefronts, catalogs, payments, and logistics for B2C and B2B",
      "ERP and CRM systems: one platform that unifies sales, operations, and finance",
      "Content management: custom and headless CMS so your team publishes without waiting on developers",
      "APIs and backend: REST and GraphQL, authentication, and architecture that scales",
      "AI integration: add AI to the software you already run, including systems we didn't build",
    ],
  },
  {
    heading: "AI Agents",
    subtitle:
      "Best for: teams losing hours to repetitive, rules-based busywork.",
    image: imgAgent,
    description:
      "Software that takes the repetitive work off your team's plate. Agents handle the tasks people shouldn't have to, from data entry to routing to following up, so your staff spends their time on the work that actually needs a human. Most deploy in days, and they scale as you grow.",
    offers: [
      "Task-specific agents for the jobs that eat your team's hours",
      "Agents tuned to your industry and your way of working",
      "Simple customization as your needs change",
      "Room to scale up without starting over",
    ],
  },
  {
    heading: "Chatbots",
    subtitle:
      "Best for: businesses answering the same questions over and over, day and night.",
    image: imgAssistant,
    description:
      "Assistants that actually know your business, not generic bots reading from a script. They answer customer questions, help your staff find internal information, and guide people through your product or service. They work across your website, your apps, and your messaging channels, around the clock.",
    offers: [
      "Customer-facing bots that handle the common questions instantly",
      "Internal assistants that surface company knowledge on demand",
      "Navigation help that guides users to what they need",
      "One assistant across web, app, and messaging channels",
    ],
  },
  {
    heading: "Data & Intelligence",
    subtitle:
      "Best for: businesses sitting on data they can't yet use.",
    image: imgSolutions,
    description:
      "The foundation everything else stands on. Before AI can help, your data has to be clean, connected, and trustworthy. We sort that out, then build the dashboards and forecasting that turn the information you already have into decisions you can act on.",
    offers: [
      "Data integration and engineering, pulling scattered sources into one place",
      "Data quality and governance you can rely on",
      "Dashboards that show what's actually happening in the business",
      "Predictive analytics and forecasting to see what's coming",
    ],
  },
];

function ServicesList() {
  return (
    <section className="services-list-section">
      <PageContainer>
        <SectionHeading
          title={
            <>
              The{" "}
              <span style={{ color: "var(--color-warm)" }}>Five Services</span>
            </>
          }
          align="center"
        />
        <div className="services-list">
          {servicesData.map((service) => (
            <article className="service-card" key={service.heading}>
              <h2 className="service-card-heading">{service.heading}</h2>

              <p className="service-card-subtitle"><em>{service.subtitle}</em></p>

              <div className="service-card-image">
                <img src={service.image} alt={service.heading} loading="lazy" />
              </div>

              <p className="service-card-description">{service.description}</p>

              <div className="offer-section">
                <h3>What you get?</h3>
                <ul className="offer-list">
                  {service.offers.map((offer, index) => (
                    <li key={index}>{offer}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default ServicesList;
