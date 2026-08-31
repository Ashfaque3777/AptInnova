import PageContainer from "../../layout/PageContainer.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import heroContact from "../../../assets/images/contact/heroContact.webp";

function ContactHero() {
  const sectionRef = useScrollReveal();

  return (
    <section className="contact-hero">
      <PageContainer>
        <div className="contact-hero-reveal reveal" ref={sectionRef}>
          <div className="contact-hero-content">
            <h1>
              Let's Get in{" "}
              <span style={{ color: "var(--color-warm)" }}>Touch</span>
            </h1>

            <p className="contact-hero-description">
              Ready to harness the power of data, AI, and digital innovation?
              Fill out the form below, and our experts will be in touch to
              discuss how we can help your business thrive.
            </p>
          </div>

          <div className="contact-hero-card">
            <div className="contact-hero-image">
              <img
                src={heroContact}
                alt="AptInnova contact - get in touch"
                loading="lazy"
              />
            </div>

            <div className="contact-hero-card-content">
              <p className="contact-hero-card-intro">
                Have a question or feedback? Fill out the form below, and we'll
                get back to you as soon as possible.
              </p>

              <form
                className="contact-hero-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="contact-hero-form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    className="contact-hero-field"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="contact-hero-field"
                    required
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="contact-hero-field"
                />

                <textarea
                  name="message"
                  placeholder="Your message..."
                  className="contact-hero-field contact-hero-textarea"
                  rows="5"
                ></textarea>

                <button type="submit" className="contact-hero-submit">
                  Submit
                </button>
              </form>

              <p className="contact-hero-email-note">
                Or drop us a message via{" "}
                <span className="contact-hero-email-link">email</span>.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default ContactHero;
