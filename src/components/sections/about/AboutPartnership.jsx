import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";
import Button from "../../ui/Button.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import aiForAllImg from "../../../assets/images/about/AIforALL.webp";

function AboutPartnership() {
  const headingRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section className="about-partnership section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={
              <>
                <span style={{ color: "var(--color-warm)" }}>AIforAll</span>{" "}
                Global
              </>
            }
            description="Our work goes beyond client projects, through our partnership with AIforAll Global (AFA)."
            align="center"
          />
        </div>

        <div
          className="about-partnership-content-wrapper reveal reveal-delay-1"
          ref={contentRef}
        >
          <p>
            <b>
              <em>We train the next generation of AI talent.</em>
            </b>{" "}
            Together with AFA we run AI-readiness programs for colleges and
            companies, from everyday AI literacy up to hands-on building. It's
            how we help more people become genuinely capable with AI, not just
            aware of it.
          </p>

          <p>
            <b>
              <em>We bring AFA's products to market.</em>
            </b>{" "}
            As AFA's official industrialization partner, we take products
            incubated in their labs and make them ready for the real world:
            ready to deploy, adopt, and support. InnoVethic, ainsteins, and
            A(i)MPACT Lab all came through this route.
          </p>

          <p>
            <b>
              <em>We keep good company on governance.</em>
            </b>{" "}
            We work alongside AI governance organizations, including DefenLab
            and World AI Governance, whose work informs how we think about
            trust, safety, and accountability in everything we ship.
          </p>

          <Button href="https://aiforallglobal.org/">Learn more</Button>

          <div className="about-partnership-image">
            <img src={aiForAllImg} alt="AIforAll" />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default AboutPartnership;
