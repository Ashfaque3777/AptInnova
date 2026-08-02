import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";
import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

/**
 * ProductIntro
 * "What is X?" section: a self-contained definition plus positioning highlights.
 *
 * @param {string}   title        - Section heading (e.g. "What is InnoVethic?").
 * @param {string[]} paragraphs   - Definition paragraphs.
 * @param {object[]} highlights   - Positioning highlight items:
 *   [{ icon: <svg/>, title, description }]
 */
function ProductIntro({title, paragraphs = [], highlights = [] }) {
  const headingRef = useScrollReveal();
  const highlightsRef = useScrollReveal();

  return (
    <section className="product-intro section">
      <PageContainer>
        <div className="product-intro-grid">
          <div className="product-intro-copy">
            <div ref={headingRef} className="reveal intro-title">
              <SectionHeading title={title} />
            </div>

            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <ul className="product-intro-highlights reveal" ref={highlightsRef}>
            {highlights.map((item) => (
              <li className="product-intro-highlight" key={item.title}>
                <div className="product-intro-highlight-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </PageContainer>
    </section>
  );
}

export default ProductIntro;

