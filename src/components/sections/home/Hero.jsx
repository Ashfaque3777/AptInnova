import PageContainer from "../../layout/PageContainer.jsx";

import heroHome from "../../../assets/images/home/heroHome.webp";

function Hero() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroHome})` }}
    >
      <PageContainer>
        <div className="hero-grid">
          <div className="hero-content">
            <h1>
              Growing
              <br />
              <span style={{ color: 'var(--color-warm)' }}>Businesses</span>
              <br />
              with
              <br />
              AI-native
              <br />
              Software
            </h1>
          </div>

          <div className="hero-visual" />
        </div>
      </PageContainer>
    </section>
  );
}

export default Hero;
