import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";
import Button from "../../ui/Button.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function ContactCTA() {
  const sectionRef = useScrollReveal();

  return (
    <section className="contact-cta-section reveal" ref={sectionRef}>
      <PageContainer>
        <div className="contact-cta-content">
          <div>
            <SectionHeading
              title={
                <>
                  <span style={{ color: "var(--color-warm)" }}>Tell us</span>{" "}
                  what you're building?
                </>
              }
              description="Whether you've got a clear spec or just a rough idea, we'll help you shape it. Send us what you have and we'll come back quickly with a clear plan and honest next steps. No cost, no pressure."
              align="center"
            />
          </div>

          <div className="contact-cta-actions">
            <Button href="https://aptinnova.com/contact/" variant="primary">
              Start a project
            </Button>

            <p className="contact-cta-email">
              Prefer email?{" "}
              <a href="mailto:hello@aptinnova.com">hello@aptinnova.com</a>
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default ContactCTA;
