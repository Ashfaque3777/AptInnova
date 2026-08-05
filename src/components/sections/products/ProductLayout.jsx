import PageContainer from "../../layout/PageContainer.jsx";
import Button from "../../ui/Button.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

/**
 * ProductLayout
 * Hero section for product pages (InnoVethic, ainsteins, A(i)MPACT Lab).
 *
 * @param {string}  title        - Product name / main H1.
 * @param {string}  description  - One-line positioning statement.
 * @param {string}  heroImage    - Product visual.
 * @param {object[]} actions     - Array of CTA buttons:
 *   [{ label, to?, href?, variant? }]
 * @param {ReactNode} children   - Additional sections rendered below the hero.
 */
function ProductLayout({
  title,
  description,
  heroImage,
  actions = [],
  children,
}) {
  const contentRef = useScrollReveal();
  const imageRef = useScrollReveal();

  return (
    <>
      <section className="product-hero">
        <PageContainer>
          <div className="product-hero-grid">
            <div className="product-hero-copy reveal" ref={contentRef}>
              <h1>{title}</h1>

              {description && (
                <p className="product-description">{description}</p>
              )}

              {actions.length > 0 && (
                <div className="product-hero-actions">
                  {actions.map((action) => (
                    <Button
                      key={action.label}
                      to={action.to}
                      href={action.href}
                      variant={action.variant || "primary"}
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            <div
              className="product-hero-image reveal reveal-delay-1"
              ref={imageRef}
            >
              <img
                src={heroImage}
                alt={title}
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </PageContainer>
      </section>

      {children}
    </>
  );
}

export default ProductLayout;
