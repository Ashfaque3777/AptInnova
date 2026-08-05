import PageContainer from "../../layout/PageContainer.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function ContactCTA() {
  const sectionRef = useScrollReveal();

  return (
    <section className="contact-cta-section reveal" ref={sectionRef}>
      <PageContainer>
        <div className="contact-cta-content">
          <h2>Ready to Transform Your Business?</h2>

          <p>
            Boost your Market cometitiveness and Business Performance with
            Applied Generative AI & Data-Driven Insights – Talk to Our Experts!
          </p>

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
