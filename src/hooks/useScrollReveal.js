import { useEffect, useRef } from "react";

/**
 * Custom hook that applies a "reveal--visible" class to elements
 * when they scroll into the viewport, creating a slide-up animation.
 *
 * @param {object} options
 * @param {number} options.threshold - Intersection threshold (0-1), default 0.1
 * @param {string} options.rootMargin - Margin around the root, default "0px 0px -50px 0px"
 * @returns {React.RefObject} ref - Attach this ref to the element you want to animate
 */
export function useScrollReveal({
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal--visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
