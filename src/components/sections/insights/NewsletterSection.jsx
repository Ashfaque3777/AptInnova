import PageContainer from "../../layout/PageContainer.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function NewsletterSection() {
  const sectionRef = useScrollReveal();

  return (
    <section className="newsletter-section">
      <PageContainer>
        <div className="newsletter-card reveal" ref={sectionRef}>
          <h2 className="newsletter-heading">Get the Latest Updates</h2>

          <p className="newsletter-description">
            Subscribe to get our most-popular blogs and more top AI content to
            help you get started with AI in no time.
          </p>

          <p className="newsletter-note">Don't worry we don't spam.</p>
        </div>
      </PageContainer>
    </section>
  );
}

export default NewsletterSection;
