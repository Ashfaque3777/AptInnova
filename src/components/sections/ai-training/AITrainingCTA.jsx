import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";
import Button from "../../ui/Button.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function AITrainingCTA() {
  const contentRef = useScrollReveal();

  return (
    <section className="ait-cta section">
      <PageContainer>
        <div className="ait-cta-content reveal" ref={contentRef}>
          <SectionHeading
            title={
              <>
                <span style={{ color: "var(--color-warm)" }}>Ready</span> to
                make your People AI-ready
              </>
            }
            description="Tell us who you're training and what you want them to walk away
            with. We'll help you build the right program."
            align="center"
          />

          <div className="ait-cta-actions">
            <Button href="#colleges" variant="primary">
              Explore for colleges
            </Button>
            <Button href="#companies" variant="secondary">
              Explore for companies
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default AITrainingCTA;
