import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";
import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

/**
 * ProductVideo
 * Video demonstration section for product pages.
 *
 * @param {string}   title      - Section heading.
 * @param {string}   description- Optional section description.
 * @param {string}   src        - Video source URL/path.
 * @param {string}   poster     - Poster image shown before playback.
 * @param {string}   label      - Accessible label for the video.
 */
function ProductVideo({  title, description, src, poster, label }) {
  const headingRef = useScrollReveal();
  const videoRef = useScrollReveal();

  return (
    <section className="product-video-section section">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            title={title}
            description={description}
            align="center"
          />
        </div>

        <div className="product-video reveal reveal-delay-1" ref={videoRef}>
          <video
            controls
            preload="none"
            poster={poster}
            aria-label={label || title}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </PageContainer>
    </section>
  );
}

export default ProductVideo;
