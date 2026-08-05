import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";
import Button from "../../ui/Button.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function AboutContactCTA() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section about-contact-cta reveal" ref={sectionRef}>
      <PageContainer>
        <SectionHeading title="Partner with Us" align="center" />

        <div className="about-contact-cta-content">
          <p>Ready to explore how AptInnova can accelerate your AI journey?</p>

          <Button to="/contact/">Contact Us</Button>
        </div>
      </PageContainer>
    </section>
  );
}

export default AboutContactCTA;
