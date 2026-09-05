import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import aptInnovaLogo from "../../../assets/brand/aptInnovaLogo.webp";

function CTACard() {
  const sectionRef = useScrollReveal();
  const cardRef = useScrollReveal();

  return (
    <section className="cta-card-section reveal" ref={sectionRef}>
      <div className="page-container">
        <div className="cta-card reveal reveal-delay-1" ref={cardRef}>
          <div className="cta-card-left">
            <div className="cta-card-icon">
              <img src={aptInnovaLogo} alt="AptInnova" />
            </div>

            <div className="cta-card-text">
              <h3>Start Your Digital Journey</h3>
              <p>Get in touch with our experts today</p>
            </div>
          </div>

          <div className="cta-card-link">
            <a href="https://aptinnova.com/contact/">
              Contact Us
              <span aria-hidden="true">&nbsp;&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTACard;
