import PageContainer from "../../layout/PageContainer.jsx";
import Button from "../../ui/Button.jsx";
import heroBackgroundVideo from "../../../assets/media/heroBackgroundVideo.mp4";

function Hero() {
  return (
    <section className="hero-section">
      <video className="hero-video-bg" autoPlay loop muted playsInline>
        <source
          src={heroBackgroundVideo}
          type="video/mp4"
        />
      </video>
      <div className="hero-video-overlay" />
      <PageContainer>
        <div className="hero-grid">
          <div className="hero-content">
            <h1>
              We build{" "}
              <span style={{ color: "var(--color-warm)" }}>
                AI-native Software
              </span>{" "}
              for Growing Businesses
            </h1>

            <p className="hero-description">
              Custom software, AI agents, and chatbots that turn everyday
              operations into something your team can actually run on. Built
              end-to-end, in-house, by senior people who stay after launch.
            </p>

            <div className="hero-actions">
              <Button to="/contact/" variant="primary">
                Start a project
              </Button>
              <Button to="/work/" variant="secondary">
                See our work
              </Button>
            </div>
          </div>

          <div className="hero-visual" />
        </div>
      </PageContainer>
    </section>
  );
}

export default Hero;
