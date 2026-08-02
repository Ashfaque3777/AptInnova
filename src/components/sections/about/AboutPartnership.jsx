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
          <SectionHeading title="AIforAll" align="center" />
        </div>

        <div className="about-partnership-content-wrapper reveal reveal-delay-1" ref={contentRef}>
          <p>
            AptInnova is the proud Partner of <b>Stichting AIforAll Global</b>,
            a dutch non-profit initiative focusing on Human-Centered AI.
          </p>

          <p>
            This reflects our deep commitment to: Democratizing AI knowledge.
            Building a vibrant network of AI learners and professionals. <br />
            Nurturing future talent and promoting ethical AI. Our community
            involvement enriches our perspective and reinforces our mission to
            make a positive impact.
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
