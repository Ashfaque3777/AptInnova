import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";
import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

const principles = [
  {
    title: "Practical",
    description:
      "We deliver real-world AI solutions that drive tangible business outcomes, not theoretical concepts.",
  },
  {
    title: "Human-centred",
    description:
      "We design AI with people at the core, ensuring technology serves human needs and enhances capabilities.",
  },
  {
    title: "Responsible",
    description:
      "We champion ethical, transparent, and trustworthy AI practices that build confidence and lasting impact.",
  },
  {
    title: "Collaborative",
    description:
      "We partner closely with you, combining our expertise with your domain knowledge for the best results.",
  },
];

function WhyWorkWithUs() {
  const headingRef = useScrollReveal();

  return (
    <section className="section wwu-section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title="Why Work with Us?"
            align="center"
          />
        </div>

        <div className="wwu-grid">
          {principles.map((principle) => (
            <article
              className="wwu-card"
              key={principle.title}
            >
              <h3 className="wwu-card-title">{principle.title}</h3>
              <p className="wwu-card-description">{principle.description}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default WhyWorkWithUs;
