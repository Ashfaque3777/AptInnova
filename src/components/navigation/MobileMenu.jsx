import { Link } from "react-router-dom";
import { useState } from "react";

import ThemeToggle from "./ThemeToggle.jsx";

/**
 * MobileMenu
 * Slide-down / overlay navigation shown on small screens only.
 * Provides a stacked, touch-friendly menu with a Products submenu.
 * Hidden on desktop via CSS (.mobile-menu and .menu-toggle are
 * display:none above the mobile breakpoint).
 */
function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setProductsOpen(false);
  };

  return (
    <>
      {/* Hamburger toggle button */}
      <button
        type="button"
        className={`menu-toggle${open ? " menu-toggle--open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="menu-toggle-bar" />
        <span className="menu-toggle-bar" />
        <span className="menu-toggle-bar" />
      </button>

      {/* Mobile navigation panel */}
      <div
        id="mobile-menu-panel"
        className={`mobile-menu${open ? " mobile-menu--open" : ""}`}
      >
        <nav className="mobile-menu-nav" aria-label="Mobile navigation">
          <Link to="/about/" className="mobile-menu-link" onClick={closeMenu}>
            About
          </Link>
          <Link
            to="/services/"
            className="mobile-menu-link"
            onClick={closeMenu}
          >
            Services
          </Link>

          {/* Products submenu */}
          <div className="mobile-menu-group">
            <button
              type="button"
              className="mobile-menu-link mobile-menu-toggle"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen((prev) => !prev)}
            >
              Products
              <span className="mobile-menu-chevron" aria-hidden="true" />
            </button>

            <div
              className={`mobile-menu-submenu${productsOpen ? " mobile-menu-submenu--open" : ""}`}
            >
              <Link
                to="/products/innovethic/"
                className="mobile-menu-link mobile-menu-link--sub"
                onClick={closeMenu}
              >
                InnoVethic
              </Link>
              <Link
                to="/products/aimpact-lab/"
                className="mobile-menu-link mobile-menu-link--sub"
                onClick={closeMenu}
              >
                A(i)MPACT Lab
              </Link>
              <Link
                to="/products/ainsteins/"
                className="mobile-menu-link mobile-menu-link--sub"
                onClick={closeMenu}
              >
                ainsteins
              </Link>
            </div>
          </div>

          <Link
            to="/blog-insights/"
            className="mobile-menu-link"
            onClick={closeMenu}
          >
            Insights
          </Link>

          <a href="https://aptinnova.com/contact/" className="mobile-menu-link" onClick={closeMenu}>
            Contact
          </a>

          <div className="mobile-menu-footer">
            <span className="mobile-menu-theme-label">Theme</span>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </>
  );
}

export default MobileMenu;
