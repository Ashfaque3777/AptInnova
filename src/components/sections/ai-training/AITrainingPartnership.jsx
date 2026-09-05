import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";
import Button from "../../ui/Button.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import afaLogo from "../../../assets/brand/afaLogo.png";

function AITrainingPartnership() {
  const contentRef = useScrollReveal();

  return (
    <section className="ait-partnership section">
      <PageContainer>
        <div className="ait-partnership-panel reveal" ref={contentRef}>
          <SectionHeading
            title={
              <>
                Delivered with{" "}
                <span style={{ color: "var(--color-warm)" }}>
                  AIforAll Global
                </span>
              </>
            }
            description="We deliver this program with AI for ALL Global, a nonprofit working to open access to AI education. It's part of how we help more people become genuinely capable with AI, not just aware of it."
            align="center"
          />

          <div className="ait-partnership-actions">
            <Button
              href="https://aiforallglobal.org/"
              variant="primary"
            >
              Learn about AIforAll Global
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default AITrainingPartnership;