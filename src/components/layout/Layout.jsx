import { Outlet } from "react-router-dom";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import ScrollToTop from "../ui/ScrollToTop.jsx";
// import Topography from "../ui/Topography.jsx";

function Layout() {
  return (
    <>
      {/* Fixed fullscreen Topography background – sits behind all pages */}
      {/* <div className="topography-bg">
        <Topography
          lowColor="#0a0a1a"
          midColor="#1a0a3e"
          highColor="#3d1f8e"
          speed={0.35}
          morphAmount={3.0}
          morphSpeed={0.05}
          bands={2.0}
          thickness={0.01}
          scale={1.0}
          pixelSize={1.0}
          glow={0.5}
          colorMode="elevation"
          contrast={3.0}
          brightness={0.8}
          fillBands={false}
          opacity={1.0}
          grain={true}
          grainIntensity={0.05}
          mouseInteraction={true}
          mouseRadius={0.3}
          mouseStrength={0.4}
        />
      </div> */}

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
