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
          <h1>Our Story: From Idea to Impact</h1>

          <p className="about-hero-description">
            AptInnova was born from a shared vision: to make its powerful
            capabilities accessible to businesses ready to innovate and grow. We
            saw the potential for AI to revolutionize operations, not just for
            large corporations, but for agile enterprises looking for a
            competitive edge. Our journey is one of continuous learning, client
            collaboration, and a dedication to delivering practical, impactful
            AI solutions.
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
