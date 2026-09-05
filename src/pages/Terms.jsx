import PageContainer from "../components/layout/PageContainer.jsx";

import { useScrollReveal } from "../hooks/useScrollReveal.js";

import LegalHero from "../components/sections/legal/LegalHero.jsx";
import LegalSection from "../components/sections/legal/LegalSection.jsx";

function Terms() {
  const bodyRef = useScrollReveal();

  return (
    <>
      <LegalHero
        eyebrow="Legal"
        title={
          <>
            <span style={{ color: "var(--color-warm)" }}>Terms </span>of Service
          </>
        }
        description="These terms govern your use of the AptInnova website. By accessing or using this site, you agree to them."
        updated="5 September 2026"
      />

      <section className="section legal-body reveal" ref={bodyRef}>
        <PageContainer>
          <div className="legal-content">
            <LegalSection title="Use of the site">
              <p>
                You may use this website for lawful purposes only. You agree not
                to misuse the site, for example by attempting to gain
                unauthorised access, uploading harmful content, or using it to
                harass or mislead others.
              </p>
            </LegalSection>

            <LegalSection title="Intellectual property">
              <p>
                The AptInnova name, logo, and all content on this website,
                including text, images, and graphics, belong to AptInnova or its
                partners and are protected by copyright and other applicable
                laws. You may view and share this content in the normal course
                of browsing, but you may not reproduce or republish it for
                commercial use without our written permission.
              </p>
            </LegalSection>

            <LegalSection title="Client work">
              <p>
                This website describes the kind of work we do, but every project
                engagement is governed by a separate signed agreement with the
                client. Those agreements, not these terms, define the scope,
                deliverables, and terms of any project we take on.
              </p>
            </LegalSection>

            <LegalSection title="Disclaimers">
              <p>
                This website is provided "as is" and "as available". We do not
                warrant that the site will be uninterrupted or error-free, or
                that its general content is complete or up to date. General
                content on the site is for information only and is not a
                guarantee of any particular outcome.
              </p>
            </LegalSection>

            <LegalSection title="Limitation of liability">
              <p>
                To the maximum extent permitted by law, AptInnova is not liable
                for any indirect, incidental, or consequential loss or damage
                arising from your use of this website or its content.
              </p>
            </LegalSection>

            <LegalSection title="Links to third-party sites">
              <p>
                The site contains links to external websites, including our
                product sites and partner organisations such as AI for ALL
                Global. We are not responsible for the content, privacy
                practices, or availability of any external site, and we
                encourage you to review their own terms and policies.
              </p>
            </LegalSection>

            <LegalSection title="Governing law and jurisdiction">
              <p>
                These terms are governed by the laws of India, and any dispute
                arising from them is subject to the exclusive jurisdiction of
                the courts in India.
              </p>
              <p>
                For visitors in the EU or EEA, the protections of the GDPR apply
                to any personal data we process about you, as described in our
                Privacy Policy.
              </p>
            </LegalSection>

            <LegalSection title="Changes to these terms">
              <p>
                We may update these terms from time to time. The current version
                always appears on this page with its effective date, and
                continued use of the site after changes are posted means you
                accept the updated terms.
              </p>
            </LegalSection>

            <LegalSection title="Contact">
              <p>
                If you have any question about these terms, email us at{" "}
                <a href="mailto:hello@aptinnova.com">hello@aptinnova.com</a>.
              </p>
              <p className="legal-note">
                These terms were last updated on 5 September 2026.
              </p>
            </LegalSection>
          </div>
        </PageContainer>
      </section>
    </>
  );
}

export default Terms;
