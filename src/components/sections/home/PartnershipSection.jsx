import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function PartnershipSection() {
  const headingRef = useScrollReveal();
  const cardRef = useScrollReveal();

  return (
    <section className="partnership-section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={
              <>
                The <span style={{ color: "var(--color-warm)" }}>Company</span>{" "}
                we Keep
              </>
            }
            description="We work closely with organizations shaping how AI gets built and governed. It's how we stay honest about the technology, and how our clients benefit from more than just us."
            align="center"
          />
        </div>

        <div className="partnership-card reveal" ref={cardRef}>
          <div className="partnership-row">
            <div className="partnership-card-letter" aria-hidden="true">
              A
            </div>
            <div className="partnership-card-content">
              <p>
                <b>
                  <em>IforAll Global</em>
                </b>{" "}
                is our partner in both training and products. We deliver
                AI-readiness programs together, and we bring the products
                incubated in their labs to market.
              </p>
            </div>
          </div>

          <div className="partnership-row partnership-row-indent-1">
            <div className="partnership-card-letter" aria-hidden="true">
              D
            </div>
            <div className="partnership-card-content">
              <p>
                <b>
                  <em>efenLab</em>
                </b>{" "}
                is an AI governance company we work alongside, keeping our
                thinking sharp on how AI should be built responsibly.
              </p>
            </div>
          </div>

          <div className="partnership-row partnership-row-indent-2">
            <div className="partnership-card-letter" aria-hidden="true">
              W
            </div>
            <div className="partnership-card-content">
              <p>
                <b>
                  <em>orld AI Governance</em>
                </b>{" "}
                is a nonprofit advancing responsible AI worldwide. Their work
                informs how we approach trust, safety, and accountability in
                what we ship.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="partnership-link-wrapper">
          <a
            href="https://aiforallglobal.org/"
            target="_blank"
            rel="noreferrer"
            className="partnership-link"
          >
            Visit AIforAll Global →
          </a>
        </div> */}
      </PageContainer>
    </section>
  );
}

export default PartnershipSection;
