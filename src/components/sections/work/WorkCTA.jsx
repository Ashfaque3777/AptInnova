import PageContainer from "../../layout/PageContainer.jsx";
import SectionHeading from "../../ui/SectionHeading.jsx";
import Button from "../../ui/Button.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function WorkCTA() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section work-cta-section reveal" ref={sectionRef}>
      <PageContainer>
        <SectionHeading
          title={
            <>
              Want <span style={{ color: "var(--color-warm)" }}>Results</span>{" "}
              like these?
            </>
          }
          description="Tell us what your business is dealing with. We'll show you what's possible and come back quickly with a clear plan. No cost, no pressure."
          align="center"
        />

        <div className="work-cta-content">
          <Button href="https://aptinnova.com/contact/">Start a project</Button>
        </div>
      </PageContainer>
    </section>
  );
}

export default WorkCTA;
