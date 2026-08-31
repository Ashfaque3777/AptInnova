import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

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
                  Ready to{" "}
                  <span style={{ color: "var(--color-warm)" }}>Transform</span>{" "}
                  Your Business?
                </>
              }
              description="Boost your Market competitiveness and Business Performance with Applied Generative AI & Data-Driven Insights – Talk to Our Experts!"
              align="center"
            />
          </div>

          <div className="contact-cta-form">
            <input
              type="email"
              placeholder="Your email address"
              className="contact-cta-input"
            />
            <button type="submit" className="contact-cta-submit">
              Submit
            </button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default ContactCTA;
