import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import expertiseImg from "../../../assets/images/about/ourExpertise.webp";

function CompanyStory() {
  const headingRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section className="section story">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title="Our Expertise: Practical AI, Real Results"
            align="center"
          />
        </div>

        <div
          className="expertise-layout reveal reveal-delay-1"
          ref={contentRef}
        >
          <div className="expertise-content">
            <p>
              The AptInnova team is a blend of seasoned AI strategists,
              engineers, and data scientists. Our strength lies in translating
              complex Generative AI potential into tangible business value.
            </p>

            <p>
              We operate with a lean core team, augmented by intelligent virtual
              staff powered by AI, ensuring agility and efficiency. This allows
              us to remain committed to staying at the forefront of AI, ensuring
              our clients benefit from the most advanced yet practical solutions
              tailored to their unique needs.
            </p>
          </div>

          <div className="expertise-image">
            <img src={expertiseImg} alt="Our Expertise" />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default CompanyStory;
