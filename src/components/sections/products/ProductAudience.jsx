import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";
import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

/**
 * ProductAudience
 * "Who is it for?" section: audience cards from the source material.
 *
 * @param {string}   title      - Section heading.
 * @param {string}   description- Optional section description.
 * @param {string[]} audiences  - List of audience labels (e.g. "Compliance").
 */
function ProductAudience({title, description, audiences = [] }) {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="product-audience section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={title}
            description={description}
            align="center"
          />
        </div>

        <div className="product-audience-grid reveal" ref={gridRef}>
          {audiences.map((audience, index) => (
            <article className="product-audience-card" key={audience}>
              <span className="product-audience-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{audience}</h3>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default ProductAudience;

