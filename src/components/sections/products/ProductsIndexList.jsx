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
    tagline: "For banks and financial institutions",
    description:
      "Regulated AI operations for European banks. Cited regulatory answers, governed workflows, and a full audit trail, running inside the bank's own environment.",
    image: innovethic,
    path: "/products/innovethic/",
    linkText: "Explore InnoVethic",
  },
  {
    name: "ainsteins",
    tagline: "For schools, colleges, and universities",
    description:
      "AI-powered learning grounded in your institution's own curriculum. On-syllabus answers, a voice teachers keep, and every response traceable to its source.",
    image: ainsteins,
    path: "/products/ainsteins/",
    linkText: "Explore ainsteins",
  },
  {
    name: "A(i)MPACT Lab",
    tagline: "For research teams and innovation programs · In beta",
    description:
      "A safe sandbox for testing AI ideas before they go live, bringing AI, digital twins, and immersive prototyping into one place.",
    image: aimpactLab,
    path: "/products/aimpact-lab/",
    linkText: "Explore A(i)MPACT Lab",
  },
];

function ProductsIndexList() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="products-index-list section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={
              <>
                The Three{" "}
                <span style={{ color: "var(--color-warm)" }}>Products</span>
              </>
            }
            align="center"
          />
        </div>

        <div className="products-index-grid reveal" ref={gridRef}>
          {products.map((product) => (
            <article className="products-index-card" key={product.name}>
              <div className="products-index-card-image">
                <img
                  src={product.image}
                  alt={`${product.name} product visual`}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="products-index-card-body">
                <h3 className="products-index-card-name">{product.name}</h3>
                <p className="products-index-card-tagline">
                  {product.tagline}
                </p>
                <p className="products-index-card-description">
                  {product.description}
                </p>

                <Link
                  to={product.path}
                  className="products-index-card-link"
                  aria-label={`Explore ${product.name}`}
                >
                  {product.linkText}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default ProductsIndexList;