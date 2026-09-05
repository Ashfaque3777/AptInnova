import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import PageContainer from "./PageContainer.jsx";

import footerLogoBlackbg from "../../assets/brand/footerLogoBlackbg.webp";
import afaLogo from "../../assets/brand/afaLogo.png";

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
                <NavLink to="/about/">About</NavLink>
                <NavLink to="/services/">Services</NavLink>

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
                <NavLink to="/work/">Work</NavLink>
              </div>

              <div className="footer-links-horizontal">
                <NavLink to="/training/">AI Training</NavLink>
                <NavLink to="/blog-insights/">Insights</NavLink>
              </div>
            </nav>

            <div>
              <a
                href="https://www.aiforall.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={afaLogo}
                  alt="AIforALL Global partner"
                  className="footer-partner-badge"
                />
              </a>
            </div>

            <div className="footer-links-column">
              <h2>Connect</h2>

              <div className="footer-links-horizontal">
                <a href="https://aptinnova.com/contact/">Contact</a>

                <a
                  href="https://www.linkedin.com/company/aptinnova/about/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="footer-links-horizontal">
                <a href="mailto:hello@aptinnova.com">hello@aptinnova.com</a>

                <a
                  href="https://www.aptinnova.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.aptinnova.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AptInnova, All rights reserved.</p>

          <div className="footer-legal-links">
            <Link to="/privacy/">Privacy Policy</Link>
            <Link to="/terms/">Terms of Service</Link>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}

export default Footer;
