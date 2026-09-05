import PageContainer from "../../layout/PageContainer.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function LegalHero({ eyebrow, title, description, updated }) {
  const ref = useScrollReveal();

  return (
    <section className="legal-hero">
      <PageContainer>
        <div className="legal-hero-content reveal" ref={ref}>
          <p className="legal-eyebrow">{eyebrow}</p>

          <h1>{title}</h1>

          {description && <p className="legal-description">{description}</p>}

          <p className="legal-updated">Last updated: {updated}</p>
        </div>
      </PageContainer>
    </section>
  );
}

export default LegalHero;