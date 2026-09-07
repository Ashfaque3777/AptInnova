import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function ProductsIndexMeaning() {
  const headingRef = useScrollReveal();
  const copyRef = useScrollReveal();

  return (
    <section className="product-intro section products-index-meaning">
      <PageContainer>
        <div className="product-intro-grid">
          <div className="product-intro-copy">
            <div ref={headingRef} className="reveal intro-title">
              <SectionHeading
                title={
                  <>
                    What{" "}
                    <span style={{ color: "var(--color-warm)" }}>
                      "brought to market"
                    </span>{" "}
                    means
                  </>
                }
              />
            </div>
          </div>

          <div className="product-intro-copy">
            <p ref={copyRef} className="reveal">
              AIforAll Global incubates ambitious AI products in its labs. As
              AFA's official industrialization partner, we take them the rest of
              the way: hardening them, making them ready to deploy, adopt, and
              support, and getting them into the hands of the organizations that
              need them. It's a different job from building software for a
              client, and it's one we're built for.
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default ProductsIndexMeaning;