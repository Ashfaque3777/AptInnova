import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import { caseStudies } from "../../../data/work.js";

function CaseStudies() {
  const sectionRef = useScrollReveal();

  return (
    <section className="work-cases-section reveal" ref={sectionRef}>
      <PageContainer>
        <SectionHeading
          title={
            <>
              Selected{" "}
              <span style={{ color: "var(--color-warm)" }}>Case Studies</span>
            </>
          }
          description="The breadth of what we build, and the measurable impact it leaves behind."
          align="center"
        />

        <div className="work-cases-grid">
          {caseStudies.map((study) => (
            <article className="work-case-card" key={study.title}>
              <p className="work-case-tag">{study.industry}</p>

              <h3 className="work-case-title">{study.title}</h3>

              <p className="work-case-client">{study.client}</p>

              {study.metrics.length > 0 && (
                <p className="work-case-metrics">
                  {study.metrics.map((metric, i) => (
                    <span key={metric}>
                      {metric}
                      {i < study.metrics.length - 1 && (
                        <span className="work-case-metric-sep"> · </span>
                      )}
                    </span>
                  ))}
                </p>
              )}

              <p className="work-case-story">{study.story}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default CaseStudies;
