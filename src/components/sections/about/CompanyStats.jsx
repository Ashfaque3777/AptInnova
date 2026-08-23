import PageContainer from "../../layout/PageContainer.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

const stats = [
  { value: "8+", label: "Years" },
  { value: "20+", label: "Projects" },
  { value: "7+", label: "Industries" },
  { value: "5–10", label: "Dedicated Professionals" },
];

function StatCard({ value, label, delayClass }) {
  const ref = useScrollReveal();

  return (
    <div className={`company-stat reveal ${delayClass}`} ref={ref}>
      <span className="company-stat-value">{value}</span>
      <span className="company-stat-label">{label}</span>
    </div>
  );
}

function CompanyStats() {
  return (
    <section className="company-stats-section" aria-label="Company statistics">
      <PageContainer>
        <div className="company-stats-strip">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delayClass={`reveal-delay-${index + 1}`}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default CompanyStats;
