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
    title: "For banks and financial institutions",
    description:
      "AI for European banks that has to work inside the rules, not around them. It answers regulatory questions with cited sources, runs credit and audit workflows step by step, and keeps a full trail of everything. Built to run inside the bank's own environment.",
    image: innovethic,
    path: "/products/innovethic/",
    linkText: "Learn more about InnoVethic →",
  },
  {
    name: "A(i)MPACT Lab",
    badge: "BETA",
    title: "For research teams and innovation programs",
    description:
      "A safe sandbox for testing AI ideas before they go live. It brings AI, digital twins, and immersive prototyping into one space, so teams can try, break, and refine things without real-world risk.",
    image: aimpactLab,
    path: "/products/aimpact-lab/",
    linkText: "Learn more about A(i)MPACT Lab →",
    reversed: true,
  },
  {
    name: "ainsteins",
    badge: "PILOT",
    title: "For schools, colleges, and universities",
    description:
      "An AI learning assistant grounded in your institution's own curriculum. Students get answers that stay on-syllabus, teachers keep their voice, and every response points back to the source it came from.",
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
                <span style={{ color: "var(--color-warm)" }}>Products</span>{" "}
                we've brought to Market
              </>
            }
            description="These three products were incubated at AI for ALL Global. As AFA's official industrialization partner, we take products like these from incubation to market: making them ready to deploy, adopt, and support in the real world. All three are live and in use today."
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
