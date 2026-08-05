import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

/**
 * ProductSpotlight
 * Alternating two-column feature spotlight section.
 * Used for sections like "Innovation Sandbox", "Digital Twin", "XR".
 *
 * @param {string}   title        - Section heading.
 * @param {string}   description  - Optional section description.
 * @param {string[]} paragraphs   - Spotlight copy paragraphs.
 * @param {object[]} highlights   - Feature highlight items:
 *   [{ icon: <svg/>, title, description }]
 * @param {boolean}  reversed     - Flip the visual/content order.
 */
function ProductSpotlight({
  title,
  description,
  paragraphs = [],
  highlights = [],
  reversed = false,
}) {
  const headingRef = useScrollReveal();
  const contentRef = useScrollReveal();
  const highlightsRef = useScrollReveal();

  return (
    <section className="product-spotlight section">
      <PageContainer>
        <div
          className={`product-spotlight-grid${reversed ? " product-spotlight-grid--reversed" : ""}`}
        >
          <div className="product-spotlight-copy">
            <div ref={headingRef} className="reveal spotlight-title">
              <SectionHeading title={title} description={description} />
            </div>

            <div
              className="product-spotlight-paragraphs reveal reveal-delay-1"
              ref={contentRef}
            >
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <ul
            className="product-spotlight-highlights reveal reveal-delay-1"
            ref={highlightsRef}
          >
            {highlights.map((item) => (
              <li className="product-spotlight-highlight" key={item.title}>
                <div
                  className="product-spotlight-highlight-icon"
                  aria-hidden="true"
                >
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

export default ProductSpotlight;
