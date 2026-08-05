import PageContainer from "../../layout/PageContainer.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function ServicesHero() {
  const contentRef = useScrollReveal();

  return (
    <section className="services-hero section-large">
      <PageContainer>
        <div className="services-hero-content reveal" ref={contentRef}>
          <h1>Our Services</h1>

          <p className="services-hero-description">
            Discover AptInnova's suite of Generative AI products & services,
            designed to help your business innovate, automate, and grow. With a
            focus on innovation and a track record of success, Aptinnova is your
            trusted partner in navigating the complexities of the digital age.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}

export default ServicesHero;
