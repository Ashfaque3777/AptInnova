import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import { testimonials } from "../../../data/work.js";

function TestimonialsSection() {
  const sectionRef = useScrollReveal();

  return (
    <section className="work-testimonials-section section-background">
      <PageContainer>
        <SectionHeading
          title="What our Clients say"
          align="center"
        />

        <div className="work-testimonials-grid reveal" ref={sectionRef}>
          {testimonials.map((item) => (
            <figure className="work-testimonial-card" key={item.author}>
              <span className="work-testimonial-quote" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <span className="work-testimonial-author">{item.author}</span>
                <span className="work-testimonial-role">{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default TestimonialsSection;
