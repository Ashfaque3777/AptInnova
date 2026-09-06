import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

import expertiseImg from "../../../assets/images/about/ourExpertise.webp";

function CompanyStory() {
  const headingRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section className="section story">
      <PageContainer>
        <div ref={headingRef} className="reveal">
          <SectionHeading
            className="story-heading"
            title={
              <>
                Our <span style={{ color: "var(--color-warm)" }}>Story</span>
              </>
            }
            align="center"
          />
        </div>

        <div
          className="expertise-layout reveal reveal-delay-1"
          ref={contentRef}
        >
          <div className="expertise-content">
            <p>
              We started AptInnova because good software was still out of reach
              for most businesses that needed it. The tools that could actually
              change how a company works were built for large enterprises with
              large budgets, while everyone else made do with spreadsheets,
              disconnected apps, and workarounds.
            </p>

            <p>
              We set out to close that gap. Over eight years we've built web and
              mobile apps, custom platforms, and complete systems for businesses
              across manufacturing, retail, logistics, education, healthcare,
              and more. Some were startups launching their first product. Others
              were established businesses replacing workflows they'd outgrown
              years ago.
            </p>

            <p>
              What ties the work together is simple: we build software that fits
              the business, and now, with AI as part of how we build, that
              software can do more than it ever could before.
            </p>
          </div>

          <div className="expertise-image">
            <img src={expertiseImg} alt="Our Expertise" />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default CompanyStory;
