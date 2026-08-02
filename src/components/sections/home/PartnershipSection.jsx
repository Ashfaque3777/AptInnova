import PageContainer from "../../layout/PageContainer.jsx";
import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function PartnershipSection() {
  const headingRef = useScrollReveal();
  const cardRef = useScrollReveal();

  return (
    <section className="partnership-section">
      <PageContainer>
        <h2 className="partnership-heading reveal" ref={headingRef}>
          Our Commitment to AIforAll Global
        </h2>

        <div className="partnership-card reveal" ref={cardRef}>
          <div className="partnership-card-a" aria-hidden="true">
            A
          </div>
          <div className="partnership-card-content">
            <p>
              ptInnova is proud partner of <b>Stichting AIforALL Global</b>, A
              dutch non-profit focusing on Human-Centred AI for smarter,
              greener, and healthier societies. Promoting inclusive
              participation, equitable opportunities, and advancing gender
              equality through AI-driven innovation ecosystems.
            </p>
          </div>
        </div>

        <div className="partnership-link-wrapper">
          <a
            href="https://aiforallglobal.org/"
            target="_blank"
            rel="noreferrer"
            className="partnership-link"
          >
            Visit AIforAll Global →
          </a>
        </div>
      </PageContainer>
    </section>
  );
}

export default PartnershipSection;
