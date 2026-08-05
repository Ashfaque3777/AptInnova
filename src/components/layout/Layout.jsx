import { Outlet } from "react-router-dom";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import ScrollToTop from "../ui/ScrollToTop.jsx";

function Layout() {
  return (
    <>
      <Header />

      <main id="main-content">
        <Outlet />
      </main>

      <Footer />

      <ScrollToTop />
    </>
  );
}

export default Layout;
