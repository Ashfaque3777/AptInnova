import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import missionImg from "../../../assets/images/about/mission.webp";
import visionImg from "../../../assets/images/about/vision.webp";

function MissionVision() {
  const headingRef = useScrollReveal();
  const card1Ref = useScrollReveal();
  const card2Ref = useScrollReveal();

  return (
    <section className="section mission-vision-section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={
              <>
                Who <span style={{ color: "var(--color-warm)" }}>We Are</span>
              </>
            }
            align="center"
          />
        </div>

        <div className="mission-vision-grid">
          {/* Card 1*/}
          <div
            className="mission-vision-card reveal reveal-delay-1"
            ref={card1Ref}
          >
            <div className="mission-vision-image">
              <img src={missionImg} alt="Mission" />
            </div>
            <p className="mission-vision-text">
              We're a small, senior team, and that's on purpose. When you work
              with us, you work directly with the people building your software,
              not a salesperson who hands you off and a rotating cast of juniors
              you never agreed to.
            </p>
          </div>

          {/* Card 2*/}
          <div
            className="mission-vision-card reveal reveal-delay-2"
            ref={card2Ref}
          >
            <p className="mission-vision-text">
              A lean team means we move fast, stay close to the work, and keep
              the quality high. We handle design, web, backend, mobile, and
              cloud in-house, so you're dealing with one team that owns the
              whole thing, not three vendors pointing fingers when something
              breaks.
            </p>
            <div className="mission-vision-image">
              <img src={visionImg} alt="Vision" />
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default MissionVision;
