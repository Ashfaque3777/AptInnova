import { Link } from "react-router-dom";

import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

const featuredWork = [
  {
    title: "Last-mile delivery, from zero to 500 in a month",
    story:
      "A logistics startup came to us with nothing but an idea. We built the whole stack: a customer app, a driver app, and a dispatch console with live tracking. They ran 500+ deliveries in month one, at a 45-minute average, with a 92% satisfaction score.",
    tag: "Logistics · Last-mile delivery",
  },
  {
    title: "Course sign-ups from two days to instant",
    story:
      "An EdTech company was drowning in Google Forms and spreadsheets. We replaced the lot with one platform: registration, payments, attendance, and automated certificates. Registration went from 48 hours to instant, and enrollments climbed 50%.",
    tag: "Education · EdTech",
  },
  {
    title: "60% fewer no-shows for a busy salon",
    story:
      "A premium salon was losing money to no-shows and double-bookings from a paper diary. We gave them online booking, automatic reminders, and a dashboard that shows what's actually happening. No-shows dropped 60% and double-bookings hit zero.",
    tag: "Beauty & wellness · Appointments",
  },
];

function FeaturedWorkCard({ work }) {
  return (
    <article className="featured-work-card">
      <h3>{work.title}</h3>
      <p className="featured-work-story">{work.story}</p>
      <p className="featured-work-tag">{work.tag}</p>
    </article>
  );
}

function FeaturedWork() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section featured-work-section">
      <PageContainer>
        <div className="reveal" ref={sectionRef}>
          <SectionHeading
            title={
              <>
                Real <span style={{ color: "var(--color-warm)" }}>work,</span>{" "}
                Real numbers
              </>
            }
            description="A few of the businesses we've built for. Names are anonymized where clients asked, but every number here is exactly what we measured."
            align="center"
          />
        </div>
      </PageContainer>

      <div
        className="featured-work-marquee"
        role="region"
        aria-label="Featured case studies"
      >
        <div className="featured-work-track">
          {[0, 1].map((copy) => (
            <div
              className="featured-work-group"
              key={copy}
              aria-hidden={copy === 1}
            >
              {featuredWork.map((work) => (
                <FeaturedWorkCard key={work.title} work={work} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="featured-work-link-wrapper">
        <Link to="/work/" className="featured-work-link">
          See all case studies
          <span aria-hidden="true">&nbsp;&rarr;</span>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedWork;
