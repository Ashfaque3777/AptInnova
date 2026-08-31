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
                Our Mission{" "}
                <span style={{ color: "var(--color-warm)" }}>&</span> Vision
              </>
            }
            align="center"
          />
        </div>

        <div className="mission-vision-grid">
          {/* Card 1: Mission */}
          <div
            className="mission-vision-card reveal reveal-delay-1"
            ref={card1Ref}
          >
            <div className="mission-vision-image">
              <img src={missionImg} alt="Mission" />
            </div>
            <p className="mission-vision-text">
              <strong>Mission:</strong> To empower businesses with cutting-edge,
              practical Applied Generative AI solutions and strategic guidance,
              driving efficiency and transformative growth.
            </p>
          </div>

          {/* Card 2: Vision */}
          <div
            className="mission-vision-card reveal reveal-delay-2"
            ref={card2Ref}
          >
            <p className="mission-vision-text">
              <strong>Vision:</strong> To be a leading catalyst in the
              widespread adoption of Generative AI, fostering a future where
              intelligent automation is integral to every thriving business.
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
