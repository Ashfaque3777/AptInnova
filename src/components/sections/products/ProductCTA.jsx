import PageContainer from "../../layout/PageContainer.jsx";
import Button from "../../ui/Button.jsx";
import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

/**
 * ProductCTA
 * Closing call-to-action for product pages.
 *
 * @param {string}   title   - CTA heading.
 * @param {string}   description - Supporting line.
 * @param {object[]} actions - CTA buttons: [{ label, to?, href?, variant? }]
 */
function ProductCTA({ title, description, actions = [] }) {
  const sectionRef = useScrollReveal();

  return (
    <section className="product-cta section reveal" ref={sectionRef}>
      <PageContainer>
        <div className="product-cta-content">
          <h2>{title}</h2>

          {description && <p>{description}</p>}

          {actions.length > 0 && (
            <div className="product-cta-actions">
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
      </PageContainer>
    </section>
  );
}

export default ProductCTA;

