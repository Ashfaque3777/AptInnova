import { Link } from "react-router-dom";

import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import AIstrategyConsultingImage from "../../../assets/images/home/AIstrategyConsulting.webp";
import LLMImage from "../../../assets/images/home/LLM.webp";

const insightsData = [
  {
    category: "Business",
    categoryLink: "https://ai.aptinnova.com/category/business/",
    image: AIstrategyConsultingImage,
    imageLink:
      "https://ai.aptinnova.com/clip-barriers-in-unlocking-ais-real-potential-in-financial-services/",
    heading: "CLIP : Barriers in unlocking AI\u2019s",
    headingLink:
      "https://ai.aptinnova.com/clip-barriers-in-unlocking-ais-real-potential-in-financial-services/",
    author: "AptInnova",
    authorLink: "/author/prabhat152gmail-com/",
    date: "May 18, 2025",
  },
  {
    category: "AI Practical Application",
    categoryLink: "https://ai.aptinnova.com/category/ai-practical-application/",
    image: LLMImage,
    imageLink:
      "https://ai.aptinnova.com/smart-strategies-for-large-language-models-llms-memory-expansion/",
    heading: "Smart Strategies for Large Language Models",
    headingLink:
      "https://ai.aptinnova.com/smart-strategies-for-large-language-models-llms-memory-expansion/",
    author: "AptInnova",
    authorLink: "/author/prabhat152gmail-com/",
    date: "May 18, 2025",
  },
];

function InsightsSection({ showHeading = true, showViewMore = true }) {
  const headingRef = useScrollReveal();

  return (
    <section className="insights-section">
      <PageContainer>
        {showHeading && (
          <div className="insights-heading-wrapper reveal" ref={headingRef}>
            <SectionHeading title="Gain Valuable Insights" align="center" />
          </div>
        )}

        <div className="insights-cards-grid">
          {insightsData.map((item, index) => (
            <article key={index} className="insight-card">
              <Link to={item.categoryLink} className="insight-category-btn">
                {item.category}
              </Link>

              <Link to={item.imageLink} className="insight-image-link">
                <div className="insight-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="insight-image"
                  />
                </div>
              </Link>

              <Link to={item.headingLink} className="insight-heading-link">
                <h3 className="insight-card-heading">{item.heading}</h3>
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
                <Link to={item.authorLink} className="insight-author">
                  {item.author}
                </Link>
                <span className="insight-dot">&middot;</span>
                <span className="insight-date">{item.date}</span>
              </div>
            </article>
          ))}
        </div>

        {showViewMore && (
          <div className="insights-link-wrapper">
            <Link to="/blog-insights/" className="insights-view-more">
              View more Articles &rarr;
            </Link>
          </div>
        )}
      </PageContainer>
    </section>
  );
}

export default InsightsSection;
