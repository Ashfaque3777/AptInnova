import { Link } from "react-router-dom";

import PageContainer from "./PageContainer.jsx";
import footerLogoBlackbg from "../../assets/brand/footerLogoBlackbg.webp";

function Footer() {
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

          <div className="footer-links-row">
            <nav aria-label="Footer navigation" className="footer-links-column">
              <h2>Explore</h2>

              <div className="footer-links-horizontal">
                <Link to="/about/">About</Link>
                <Link to="/services/">Services</Link>
                <div className="nav-dropdown">
                  <Link className="nav-dropdown-trigger">
                    Products
                  </Link>
                  <div
                    className="nav-dropdown-menu"
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
              </div>
            </nav>

            <div className="footer-links-column">
              <h2>Connect</h2>

              <div className="footer-links-horizontal">
                <a href="/contact/">Contact</a>

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
