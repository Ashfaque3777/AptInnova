import PageContainer from "../../layout/PageContainer.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function ServicesHero() {
  const contentRef = useScrollReveal();

  return (
    <section className="services-hero section-large">
      <PageContainer>
        <div className="services-hero-content reveal" ref={contentRef}>
          <h1>
            What <span style={{ color: "var(--color-warm)" }}>We Build</span>
          </h1>

          <p className="services-hero-description">
            Five ways we put AI to work inside your business, from a first plan
            to a running system. One senior team takes it end to end, so you're
            never handed off and never left guessing.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}

export default ServicesHero;
