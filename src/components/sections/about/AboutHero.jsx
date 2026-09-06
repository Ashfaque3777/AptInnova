import PageContainer from "../../layout/PageContainer.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import heroAbout1 from "../../../assets/images/about/heroAbout-1.webp";
import heroAbout2 from "../../../assets/images/about/heroAbout-2.webp";

function AboutHero() {
  const headingRef = useScrollReveal();

  return (
    <section className="about-hero section-large">
      <PageContainer>
        <div className="about-hero-content reveal" ref={headingRef}>
          <h1>
            Software that makes your{" "}
            <span style={{ color: "var(--color-warm)" }}>Business Better,</span>{" "}
            and the AI that helps it Think
          </h1>

          <p className="about-hero-description">
            We're AptInnova. We build the software growing businesses run on, with AI built in from the start. We've been doing it for over eight years, and most of our clients come back for the next project.
          </p>

          <div className="about-hero-images">
            <div className="about-hero-image-wrapper">
              <img
                src={heroAbout1}
                alt="AptInnova journey - innovation and collaboration"
                loading="lazy"
              />
            </div>
            <div className="about-hero-image-wrapper">
              <img
                src={heroAbout2}
                alt="AptInnova team - driving AI impact"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default AboutHero;
