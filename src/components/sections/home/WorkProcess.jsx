import {Link} from "react-router-dom";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dig into your business, your users, and the real problem. You get a written plan and a roadmap.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes and prototypes we refine with you, until it's right before we build it.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Short sprints with regular demos, so you see progress every couple of weeks, not at the end.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "We check everything the way real users will use it: functionality, speed, and security.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We handle the go-live, the setup, and the monitoring, with no downtime and no drama.",
  },
  {
    number: "06",
    title: "Support",
    description:
      "We stay on after launch. Fixes, updates, and new features as your business grows.",
  },
];

function StepCard({ step, index }) {
  return (
    <article className={`how-step how-step-${index + 1}`}>
      <div className="how-step-number">
        <span>{step.number}</span>
      </div>

      <div className="how-step-content">
        <h3>{step.title}</h3>

        <p>{step.description}</p>
      </div>
    </article>
  );
}

export default function HowWeWork() {
  return (
    <section className="how-we-work" id="how-we-work">
      <div className="how-we-work-container">
        {/* Section Header */}
        <div className="how-we-work-header">
          <div className="how-we-work-heading-row">
            <h2>
              From First Conversation
              <br />
              to <em>Lasting Impact</em>
            </h2>

            <p>
              Six phases, from first conversation to long after launch. You
              always know what's happening and what's next.
            </p>
          </div>
        </div>

        {/* Roadmap */}
        <div className="roadmap">
          {/* SVG Road */}
          <svg
            className="roadmap-svg"
            viewBox="0 0 1200 1450"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Main road */}
            <path
              className="roadmap-road"
              d="
                M 600 20
                L 600 160
                C 600 220, 380 220, 380 300
                C 380 380, 820 380, 820 460
                C 820 540, 380 540, 380 620
                C 380 700, 820 700, 820 780
                C 820 860, 380 860, 380 940
                C 380 1020, 820 1020, 820 1100
                C 820 1180, 600 1180, 600 1240
                L 600 1430
              "
            />

            {/* Dashed center line */}
            <path
              className="roadmap-road-line"
              d="
                M 600 20
                L 600 160
                C 600 220, 380 220, 380 300
                C 380 380, 820 380, 820 460
                C 820 540, 380 540, 380 620
                C 380 700, 820 700, 820 780
                C 820 860, 380 860, 380 940
                C 380 1020, 820 1020, 820 1100
                C 820 1180, 600 1180, 600 1240
                L 600 1430
              "
            />
          </svg>

          {/* Start */}
          <div className="roadmap-start">
            <span>START</span>
          </div>

          {/* Steps */}
          <div className="roadmap-steps">
            {processSteps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>

          {/* End */}
          <div className="roadmap-end">
            <div className="roadmap-end-dot"></div>

            <span>
              CONTINUOUS
              <br />
              GROWTH
            </span>
          </div>
        </div>
      </div>

      <div className="work-process-link-wrapper">
        <Link to="/work/" className="work-process-link">
          See how we work in detail
          <span aria-hidden="true">&nbsp;&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
