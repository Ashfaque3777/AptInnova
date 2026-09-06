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
              Not sure which of these{" "}
              <span style={{ color: "var(--color-warm)" }}>you need?</span>{" "}
            </>
          }
          description="That's normal, and it's exactly what the first conversation is for. Tell us what's slowing your business down and we'll point you to the right starting place. No cost, no pressure."
          align="center"
        />

        <div className="services-contact-cta-content">
          <div className="services-contact-cta-actions">
            <Button href="https://aptinnova.com/contact/">
              Start a project
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default ServicesContactCTA;
