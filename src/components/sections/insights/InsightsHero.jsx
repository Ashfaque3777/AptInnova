import { Link } from "react-router-dom";

import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import LLM from "../../../assets/images/home/LLM.webp";

const blogUrl =
  "https://ai.aptinnova.com/smart-strategies-for-large-language-models-llms-memory-expansion/";

function InsightsHero() {
  const headingRef = useScrollReveal();

  return (
    <section className="insights-hero">
      <PageContainer>
        <div className="insights-hero-heading reveal" ref={headingRef}>
          <SectionHeading title="Blogs" align="center" />
        </div>

        <article className="insight-card insights-hero-card">
          <Link to={blogUrl} className="insight-image-link">
            <div className="insight-image-wrapper">
              <img
                src={LLM}
                alt="Smart Strategies for Large Language Models (LLMs) Memory Expansion"
                className="insight-image insight-hero-image"
              />
            </div>
          </Link>

          <div className="insight-hero-content">
            <div>
              <Link
                to="https://ai.aptinnova.com/category/ai-practical-application/"
                className="insight-category-btn"
              >
                AI Practical Application
              </Link>
            </div>

            <Link to={blogUrl} className="insight-heading-link">
              <h3 className="insight-card-heading insight-hero-card-heading">
                Smart Strategies for Large Language Models (LLMs) Memory
                Expansion
              </h3>
            </Link>

            <div className="insight-meta">
              <div className="insight-avatar">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="18"
                  height="18"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <a href="/author/prabhat152gmail-com/" className="insight-author">
                AptInnova
              </a>
              <span className="insight-dot">&middot;</span>
              <span className="insight-date">May 18, 2025</span>
            </div>

            <p className="insight-card-description">
              Large Language Models have a limited &ldquo;context window&rdquo;
              (short-term memory) for any given prompt. By default,
            </p>

            <Link to={blogUrl} className="insight-continue-link">
              Continue reading
            </Link>
          </div>
        </article>
      </PageContainer>
    </section>
  );
}

export default InsightsHero;
