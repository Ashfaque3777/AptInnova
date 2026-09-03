import PageContainer from "../../layout/PageContainer.jsx";

function Hero() {
  return (
    <section className="hero-section">
      <video
        className="hero-video-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/WhatsApp Video 2026-09-03 at 20.35.05.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay" />
      <PageContainer>
        <div className="hero-grid">
          <div className="hero-content">
            <h1>
              Powering
              <br />
              Businesses
              <br />
              with
              <br />
              Generative
              <br />
              AI
            </h1>
          </div>

          <div className="hero-visual" />
        </div>
      </PageContainer>
    </section>
  );
}

export default Hero;
