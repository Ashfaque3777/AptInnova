import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";
import Button from "../../ui/Button.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

const contactHighlights = [
  {
    title: "Start with clarity",
    description:
      "A focused AI readiness assessment shows exactly where value can be unlocked first.",
  },
  {
    title: "Built around your business",
    description:
      "Every solution is tailored to your goals, systems, and pace of adoption.",
  },
  {
    title: "A partner for the long run",
    description:
      "From strategy to deployment and beyond, we stay alongside you at every step.",
  },
];

function ServicesContactCTA() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section services-contact-cta reveal" ref={sectionRef}>
      <PageContainer>
        <SectionHeading
          title={
            <>
              <span style={{ color: "var(--color-warm)" }}>Let's Build</span>{" "}
              What's Next for Your Business
            </>
          }
          description="You have seen what is possible. Now let's make it real for your organisation."
          align="center"
        />

        <div className="services-contact-cta-content">
          <ul className="services-contact-cta-highlights">
            {contactHighlights.map((item) => (
              <li className="services-contact-cta-highlight" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>

          <div className="services-contact-cta-actions">
            <Button href="https://aptinnova.com/contact/" variant="primary">
              Contact Us
            </Button>
            <Button href="https://aptinnova.com/contact/" variant="secondary">
              Request a Consultation
            </Button>
          </div>

          <p className="services-contact-cta-note">
            No pressure, No jargon. Just a clear conversation about what AI can
            do for your business.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}

export default ServicesContactCTA;
