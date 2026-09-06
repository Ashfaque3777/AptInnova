import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";
import Button from "../../ui/Button.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function AboutContactCTA() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section about-contact-cta reveal" ref={sectionRef}>
      <PageContainer>
        <SectionHeading
          title={
            <>
              <span style={{ color: "var(--color-warm)" }}>Let's Talk</span>{" "}
              about what you're Building
            </>
          }
          description="Whether you have a clear plan or just the start of an idea, we'd like to hear it. Tell us what you're dealing with and we'll come back quickly with honest next steps. No cost, no pressure."
          align="center"
        />

        <div className="about-contact-cta-content">
          <Button href="https://aptinnova.com/contact/">Start a project</Button>
        </div>
      </PageContainer>
    </section>
  );
}

export default AboutContactCTA;
