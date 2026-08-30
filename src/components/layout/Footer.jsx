import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import PageContainer from "./PageContainer.jsx";

import footerLogoBlackbg from "../../assets/brand/footerLogoBlackbg.webp";

function Footer() {
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef(null);

  /* Close the Products dropdown when the user clicks/taps anywhere
     outside of it (or clicks the trigger again via the toggle handler). */
  useEffect(() => {
    if (!productsOpen) return undefined;

    function handleOutsideClick(event) {
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [productsOpen]);

  return (
    <footer className="site-footer">
      <PageContainer>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" aria-label="AptInnova home">
              <img
                src={footerLogoBlackbg}
                alt="AptInnova"
                className="footer-logo"
              />
            </Link>

            <p>
              Unlock the full potential of your data with our expert AI & Data
              solutions. Let us help you turn insights into action and drive
              smarter, data-driven decisions for your business success.
            </p>
          </div>

          <div
            className={`footer-links-row${productsOpen ? " footer-links-row--open" : ""}`}
          >
            <nav aria-label="Footer navigation" className="footer-links-column">
              <h2>Explore</h2>

              <div className="footer-links-horizontal">
                <Link to="/about/">About</Link>
                <Link to="/services/">Services</Link>
                <div className="nav-dropdown" ref={productsRef}>
                  <button
                    type="button"
                    className="nav-dropdown-trigger nav-dropdown-trigger--btn"
                    aria-haspopup="menu"
                    aria-expanded={productsOpen}
                    aria-controls="footer-products-menu"
                    onClick={() => setProductsOpen((prev) => !prev)}
                  >
                    Products
                  </button>
                  <div
                    id="footer-products-menu"
                    className={`nav-dropdown-menu${productsOpen ? " nav-dropdown-menu--open" : ""}`}
                    role="menu"
                    aria-label="Products"
                  >
                    <Link to="/products/innovethic/" role="menuitem">
                      InnoVethic
                    </Link>
                    <Link to="/products/aimpact-lab/" role="menuitem">
                      A(i)MPACT Lab
                    </Link>
                    <Link to="/products/ainsteins/" role="menuitem">
                      ainsteins
                    </Link>
                  </div>
                </div>
                <Link to="/caseStudy/">Case Study</Link>
              </div>
            </nav>

            <div className="footer-links-column">
              <h2>Connect</h2>

              <div className="footer-links-horizontal">
                <Link to="/contact/">Contact</Link>

                <a
                  href="https://www.linkedin.com/company/aptinnova/about/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>AptInnova © {new Date().getFullYear()}, All rights reserved.</p>

          <Link to="/privacy/">Privacy Policy</Link>
        </div>
      </PageContainer>
    </footer>
  );
}

export default Footer;
