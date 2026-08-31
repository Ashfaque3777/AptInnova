import PageContainer from "../../layout/PageContainer.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function WorkHero() {
  const contentRef = useScrollReveal();

  return (
    <section className="work-hero">
      <PageContainer>
        <div className="work-hero-content reveal" ref={contentRef}>
          <h1>
            Real <span style={{ color: "var(--color-warm)" }}>work,</span> Real
            numbers
          </h1>

          <p className="work-hero-description">
            A selection of what we've built, across industries and business
            sizes. Client names are anonymized where they asked us to keep them
            private. Every number on this page is exactly what we measured, and
            we're happy to share client details on request.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}

export default WorkHero;
