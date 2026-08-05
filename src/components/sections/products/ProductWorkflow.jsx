import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

/**
 * ProductWorkflow
 * "How it supports X" section: numbered process steps.
 *
 * @param {string}   title      - Section heading.
 * @param {string}   description- Optional section description.
 * @param {object[]} steps      - Ordered workflow steps:
 *   [{ title, description }]
 */
function ProductWorkflow({ title, description, steps = [] }) {
  const headingRef = useScrollReveal();
  const listRef = useScrollReveal();

  return (
    <section className="product-workflow section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={title}
            description={description}
            align="center"
          />
        </div>

        <div className="product-workflow-list reveal" ref={listRef}>
          {steps.map((step, index) => (
            <article className="product-workflow-step" key={step.title}>
              <span className="product-workflow-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default ProductWorkflow;
