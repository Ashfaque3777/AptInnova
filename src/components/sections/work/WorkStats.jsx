import PageContainer from "../../layout/PageContainer.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import { stats } from "../../../data/work.js";

function WorkStats() {
  const sectionRef = useScrollReveal();

  return (
    <section className="work-stats-section" aria-label="Work statistics">
      <PageContainer>
        <div className="work-stats-strip reveal" ref={sectionRef}>
          {stats.map((stat) => (
            <div className="work-stat" key={stat.label}>
              <span className="work-stat-value">{stat.value}</span>
              <span className="work-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default WorkStats;
