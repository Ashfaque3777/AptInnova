import PageContainer from "../components/layout/PageContainer.jsx";

import { useScrollReveal } from "../hooks/useScrollReveal.js";

import LegalHero from "../components/sections/legal/LegalHero.jsx";
import LegalSection from "../components/sections/legal/LegalSection.jsx";

function Privacy() {
  const bodyRef = useScrollReveal();

  return (
    <>
      <LegalHero
        eyebrow="Legal"
        title={
          <>
            Privacy <span style={{ color: "var(--color-warm)" }}>Policy</span>
          </>
        }
        description="AptInnova respects your privacy. This page explains what personal information we collect through this website, how we use it, and the choices you have."
        updated="5 September 2026"
      />

      <section className="section legal-body reveal" ref={bodyRef}>
        <PageContainer>
          <div className="legal-content">
            <LegalSection title="What we collect">
              <p>
                When you submit a form on this site, we collect the details you
                provide: your name, email address, company (if you share it),
                and the content of your message.
              </p>
              <p>
                We also collect limited technical data about how the site is
                used, such as pages visited and approximate location, through
                standard analytics and cookies. This is described in the next
                section.
              </p>
            </LegalSection>

            <LegalSection title="How we use it">
              <p>
                We use the information you share with us to respond to your
                enquiries, to plan and deliver the services you ask about, and
                to improve this website and our communication.
              </p>
              <p>
                We do not sell personal data. We never have, and we never will.
              </p>
            </LegalSection>

            <LegalSection title="Cookies and analytics">
              <p>
                This website uses analytics tools to understand how visitors use
                the site, so we can improve it. These tools may place cookies on
                your device that collect non-identifying information about your
                browser, device, and browsing behaviour.
              </p>
              <p>
                You can block or delete cookies through your browser settings,
                and you can opt out of analytics tracking where the tools we use
                offer that option. Blocking cookies will not stop you from using
                this website.
              </p>
            </LegalSection>

            <LegalSection title="Data sharing">
              <p>
                We share personal data only with the service providers we rely
                on to run the site and serve our clients. That includes our
                email provider, website hosting provider, and analytics
                provider. These providers receive only the data they need to do
                their job, and we do not authorise them to use it for anything
                else.
              </p>
              <p>
                We do not share personal data with anyone for marketing
                purposes.
              </p>
            </LegalSection>

            <LegalSection title="Data storage and security">
              <p>
                Your data is stored on secure servers operated by our hosting
                provider, protected with industry-standard safeguards such as
                encrypted connections and restricted access.
              </p>
              <p>
                Access to personal data is limited to the people at AptInnova
                who need it to respond to you and to deliver our services.
              </p>
            </LegalSection>

            <LegalSection title="Data retention">
              <p>
                We keep enquiry data only for as long as we need it to handle
                your request and to follow up, which is generally up to 24
                months after our last contact. When we no longer need it, we
                delete or anonymise it securely.
              </p>
            </LegalSection>

            <LegalSection title="Your rights">
              <p>
                If you are based in the EU or EEA, the GDPR gives you rights
                over your personal data. You can ask us to:
              </p>
              <ul>
                <li>give you a copy of the personal data we hold about you,</li>
                <li>correct anything that is inaccurate or incomplete,</li>
                <li>delete your personal data,</li>
                <li>restrict or object to how we process it, and</li>
                <li>move your data to another provider where it applies.</li>
              </ul>
              <p>
                To exercise any of these rights, email us at{" "}
                <a href="mailto:hello@aptinnova.com">hello@aptinnova.com</a>. We
                will respond within one month, as required by law.
              </p>
            </LegalSection>

            <LegalSection title="International transfers">
              <p>
                AptInnova operates in India and works with clients in Europe.
                This means personal data may be processed in India and in the
                EU. Where data moves between regions, we rely on recognised
                safeguards, such as the European Commission's standard
                contractual clauses, to keep it protected.
              </p>
            </LegalSection>

            <LegalSection title="Contact for privacy questions">
              <p>
                If you have any question about this policy or about how we
                handle your personal data, email us at{" "}
                <a href="mailto:hello@aptinnova.com">hello@aptinnova.com</a>.
              </p>
              <p className="legal-note">
                This policy was last updated on 5 September 2026.
              </p>
            </LegalSection>
          </div>
        </PageContainer>
      </section>
    </>
  );
}

export default Privacy;
