import PageContainer from "../../layout/PageContainer.jsx";
import Button from "../../ui/Button.jsx";

import aiTrainingHeroBackgroundVideo from "../../../assets/media/aiTrainingHeroBackgroundVideo.mp4";

function AITrainingHero() {
  return (
    <section className="ait-hero">
      <video className="hero-video-bg" autoPlay loop muted playsInline>
        <source src={aiTrainingHeroBackgroundVideo} type="video/mp4" />
      </video>
      <div className="hero-video-overlay" />
      <PageContainer>
        <div className="ait-hero-content">
          <p className="ait-hero-badge">AI-Readiness Program</p>

          <h1>
            Get your People{" "}
            <span style={{ color: "var(--color-warm)" }}>AI-ready</span>
          </h1>

          <p className="ait-hero-description">
            Practical AI training for colleges and companies, built with
            AIforAll Global. It runs from everyday AI literacy all the way to
            hands-on building, and you can shape it around the people you're
            training and the time you have.
          </p>

          <div className="ait-hero-actions">
            <Button to="/contact/" variant="primary">
              Explore for colleges
            </Button>
            <Button to="/contact/" variant="secondary">
              Explore for companies
            </Button>
          </div>
          <div className="hero-visual" />
        </div>
      </PageContainer>
    </section>
  );
}

export default AITrainingHero;
