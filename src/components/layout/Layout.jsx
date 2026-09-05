import { Outlet } from "react-router-dom";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import ScrollToTop from "../ui/ScrollToTop.jsx";
import Topography from "../ui/Topography.jsx";
import { useTheme } from "../../hooks/useTheme.js";

function Layout() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* Fixed fullscreen Topography background – sits behind all pages */}
      <div className="topography-bg">
        <Topography
          lowColor={isDark ? "#0a0a1a" : "#e8e0f7"}
          midColor={isDark ? "#1a0a3e" : "#c4b5e3"}
          highColor={isDark ? "#3d1f8e" : "#9b7dd4"}
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
          brightness={isDark ? 0.8 : 1.0}
          fillBands={false}
          opacity={isDark ? 1.0 : 0.6}
          grain={true}
          grainIntensity={0.05}
          mouseInteraction={true}
          mouseRadius={0.3}
          mouseStrength={0.4}
        />
      </div>

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
