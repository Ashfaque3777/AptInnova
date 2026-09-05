import PageContainer from "../../layout/PageContainer.jsx";
import Button from "../../ui/Button.jsx";

import { useScrollReveal } from "../../../hooks/useScrollReveal.js";

function AITrainingBuilder() {
  const contentRef = useScrollReveal();

  return (
    <section className="ait-builder section">
      <PageContainer>
        <div className="ait-builder-panel reveal" ref={contentRef}>
          <h2>Build your program</h2>

          <p className="ait-builder-description">
            Not sure what the right mix is? You don't have to guess. We help you
            configure a program around your people, your goals, and your
            calendar, whether that's a free foundations workshop for a whole
            cohort or a full builder track for a smaller group.
          </p>

          <div className="ait-builder-actions">
            <Button to="/contact/">Talk to us about a program</Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default AITrainingBuilder;