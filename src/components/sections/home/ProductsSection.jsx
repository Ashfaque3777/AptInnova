import { Link } from "react-router-dom";

import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import innovethic from "../../../assets/images/products/innovethic/InnoVethic.webp";
import aimpactLab from "../../../assets/images/products/aimpact-lab/aimpactLab.webp";
import ainsteins from "../../../assets/images/products/ainsteins/ainsteins.webp";

const products = [
  {
    name: "InnoVethic",
    badge: "PILOT",
    title: "Sovereign AI for European banking",
    description:
      "A knowledge assistant built around how risk, finance, compliance, and audit teams actually work. Department-aware, role-calibrated, scope-bounded, and operating inside the bank's approved environment, not on a vendor's cloud. Designed for the agentic ambition most internal builds stop short of.",
    image: innovethic,
    path: "/products/innovethic/",
    linkText: "Learn more about InnoVethic →",
  },
  {
    name: "A(i)MPACT Lab",
    badge: "BETA",
    title: "Sandbox environment for sector-grounded AI experimentation",
    description:
      "AI, Digital Twin, and XR prototyping and simulation environment for testing solutions before real-world deployment. Ventures can validate, iterate, and stress-test ideas with collaborators across sectors.",
    image: aimpactLab,
    path: "/products/aimpact-lab/",
    linkText: "Learn more about A(i)MPACT Lab →",
    reversed: true,
  },
  {
    name: "ainsteins",
    badge: "BETA",
    title: "AI-powered learning, grounded in your institution's curriculum",
    description:
      "AI-powered learning on your own curriculum, so students learn with focus, teachers keep their voice, and your institution keeps its edge.",
    image: ainsteins,
    path: "/products/ainsteins/",
    linkText: "Learn more about ainsteins →",
  },
];

function ProductsSection() {
  const headingRef = useScrollReveal();

  return (
    <section className="section products-section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={
              <>
                Applied{" "}
                <span style={{ color: "var(--color-warm)" }}>AI Solutions</span>{" "}
                for different kinds of Challenges
              </>
            }
            align="center"
          />
        </div>

        <div className="products-list">
          {products.map((product) => (
            <article className="product-layout" key={product.name}>
              <div className="product-layout-left">
                <h2 className="product-layout-heading">{product.name}</h2>
              </div>

              <div
                className={`product-layout-body${product.reversed ? " product-layout-body--reversed" : ""}`}
              >
                <div className="product-layout-image">
                  <img
                    src={product.image}
                    alt={`${product.name} product visual`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="product-layout-content">
                  <span className="product-badge">{product.badge}</span>
                  <h3 className="product-layout-title">{product.title}</h3>
                  <p className="product-layout-description">
                    {product.description}
                  </p>
                  <Link to={product.path} className="product-layout-link">
                    {product.linkText}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default ProductsSection;
