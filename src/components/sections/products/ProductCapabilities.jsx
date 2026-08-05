import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

/**
 * ProductCapabilities
 * "Key capabilities" section: capability cards with icons.
 *
 * @param {string}   title        - Section heading.
 * @param {string}   description  - Optional section description.
 * @param {object[]} capabilities - Capability items:
 *   [{ icon: <svg/>, title, description }]
 */
function ProductCapabilities({ title, description, capabilities = [] }) {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="product-capabilities section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={title}
            description={description}
            align="center"
          />
        </div>

        <div className="product-capabilities-grid reveal" ref={gridRef}>
          {capabilities.map((capability) => (
            <article className="product-capability-card" key={capability.title}>
              <div className="product-capability-icon" aria-hidden="true">
                {capability.icon}
              </div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default ProductCapabilities;
