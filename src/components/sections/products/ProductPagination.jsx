import { Link } from "react-router-dom";

import PageContainer from "../../layout/PageContainer.jsx";
import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

/* Left arrow icon (stroke style matches the site). */
function IconArrowLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

/* Right arrow icon (stroke style matches the site). */
function IconArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/**
 * ProductPagination
 * Bottom navigation bar to move between product pages.
 *
 * @param {object|null} prev - Previous product: { name, path } or null.
 * @param {object|null} next - Next product: { name, path } or null.
 */
function ProductPagination({ prev = null, next = null }) {
  const sectionRef = useScrollReveal();

  return (
    <section className="product-pagination section reveal" ref={sectionRef}>
      <PageContainer>
        <div className="product-pagination-inner">
          {prev ? (
            <Link
              to={prev.path}
              className="product-pagination-link product-pagination-link--prev"
              aria-label={`Previous product: ${prev.name}`}
            >
              <span className="product-pagination-arrow" aria-hidden="true">
                <IconArrowLeft />
              </span>
              <span className="product-pagination-text">
                <span className="product-pagination-label">Previous product</span>
                <span className="product-pagination-name">{prev.name}</span>
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" className="product-pagination-spacer" />
          )}

          {next ? (
            <Link
              to={next.path}
              className="product-pagination-link product-pagination-link--next"
              aria-label={`Next product: ${next.name}`}
            >
              <span className="product-pagination-text">
                <span className="product-pagination-label">Next product</span>
                <span className="product-pagination-name">{next.name}</span>
              </span>
              <span className="product-pagination-arrow" aria-hidden="true">
                <IconArrowRight />
              </span>
            </Link>
          ) : (
            <span aria-hidden="true" className="product-pagination-spacer" />
          )}
        </div>
      </PageContainer>
    </section>
  );
}

export default ProductPagination;

