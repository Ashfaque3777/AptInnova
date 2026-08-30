import { Link } from "react-router-dom";

import PageContainer from "./PageContainer.jsx";
import ThemeToggle from "../navigation/ThemeToggle.jsx";
import MobileMenu from "../navigation/MobileMenu.jsx";

import { useScrollDirection } from "../../hooks/useScrollDirection.js";

import headerLogoBlackbg from "../../assets/brand/headerLogoBlackbg.webp";
import headerLogoWhitebg from "../../assets/brand/headerLogoWhitebg.webp";

function Header() {
  const isHeaderVisible = useScrollDirection();

  return (
    <header
      className={`site-header${isHeaderVisible ? "" : " site-header--hidden"}`}
    >
      <PageContainer>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link to="/" className="site-logo" aria-label="AptInnova home">
            <img
              src={headerLogoWhitebg}
              alt="AptInnova"
              className="header-logo-light-theme"
            />
            <img
              src={headerLogoBlackbg}
              alt="AptInnova"
              className="header-logo-dark-theme"
            />
          </Link>

          <div className="desktop-nav">
            <Link to="/about/">About</Link>
            <Link to="/services/">Services</Link>
            <div className="nav-dropdown">
              <Link className="nav-dropdown-trigger">Products</Link>
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
            <Link to="/work/">Work</Link>
          </div>

          <div className="nav-actions">
            <ThemeToggle />

            <Link to="/contact/" className="header-cta">
              Talk to us
            </Link>

            <MobileMenu />
          </div>
        </nav>
      </PageContainer>
    </header>
  );
}

export default Header;
