import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnRouteChange() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default ScrollToTopOnRouteChange;
