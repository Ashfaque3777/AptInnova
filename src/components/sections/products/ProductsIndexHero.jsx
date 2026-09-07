import PageContainer from "../../layout/PageContainer.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function ProductsIndexHero() {
  const contentRef = useScrollReveal();

  return (
    <section className="product-hero products-index-hero">
      <PageContainer>
        <div className="products-index-hero-inner reveal" ref={contentRef}>
          <span className="product-hero-badge">Products</span>

          <h1>
            Products we've{" "}
            <span style={{ color: "var(--color-warm)" }}>
              brought to Market
            </span>
          </h1>

          <p className="products-index-hero-description">
            Three products, incubated at AIforAll Global and made ready for
            the real world by us. Each one solves a hard problem for a specific
            kind of organization, and each one is live and in use today.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}

export default ProductsIndexHero;
