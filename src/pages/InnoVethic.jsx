import { Helmet } from "react-helmet-async";

import ProductLayout from "../components/sections/products/ProductLayout.jsx";
import ProductAudience from "../components/sections/products/ProductAudience.jsx";
import ProductCapabilities from "../components/sections/products/ProductCapabilities.jsx";
import ProductWorkflow from "../components/sections/products/ProductWorkflow.jsx";
import ProductCTA from "../components/sections/products/ProductCTA.jsx";
import ProductPagination from "../components/sections/products/ProductPagination.jsx";

import innovethicImage from "../assets/images/products/innovethic/InnoVethic.webp";

/* Small, consistent inline icon set (stroke style matches the site). */
const workflowSteps = [
  {
    title: "Answers with sources",
    description:
      "Ask a regulatory question in plain language and get an answer that cites the specific source it came from, so the reasoning can be checked and challenged by the people accountable for it.",
  },
  {
    title: "Governed workflows",
    description:
      "Run multi-step processes like credit review, audit response, and regulatory reporting through defined, controlled steps, not a black box.",
  },
  {
    title: "A full audit trail",
    description:
      "Every action is recorded, so the whole path from question to answer to decision can be reviewed and evidenced later.",
  },
  {
    title: "Inside your environment",
    description:
      "InnoVethic is designed to run inside the bank's own approved environment rather than on an outside vendor's cloud, keeping data and control in-house.",
  },
];

const audienceItems = [
  "Risk Teams",
  "Compliance Teams",
  "Finance Teams",
  "Audit Teams",
];

const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "InnoVethic",
  description:
    "Regulated AI operations for European banks. Source-cited regulatory answers (EBA, ECB, DNB, AFM, FATF, BIS, IFRS) plus governed multi-step workflows (credit review, audit response, regulatory reporting), every step on the audit trail.",
  brand: {
    "@type": "Brand",
    name: "AptInnova",
  },
  category: "Regulated AI operations",
  audience: {
    "@type": "Audience",
    audienceType: "Banks and financial institutions",
  },
  url: "/products/innovethic/",
};

function InnoVethic() {
  return (
    <>
      <Helmet>
        <title>
          InnoVethic | Regulated AI Operations for European Banks | AptInnova
        </title>
        <meta
          name="description"
          content="InnoVethic delivers regulated AI operations for European banks: source-cited regulatory answers (EBA, ECB, DNB, AFM, FATF, BIS, IFRS), governed multi-step workflows, and every step on the audit trail. Sovereign AI, built in Europe."
        />
        <meta
          property="og:title"
          content="InnoVethic | Regulated AI Operations for European Banks"
        />
        <meta
          property="og:description"
          content="Source-cited regulatory answers, governed workflows, and a complete audit trail for European banking. Sovereign AI, built in Europe."
        />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="/products/innovethic/" />
        <meta property="og:image" content={innovethicImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="InnoVethic | Regulated AI Operations for European Banks"
        />
        <meta
          name="twitter:description"
          content="Source-cited regulatory answers, governed workflows, and a complete audit trail for European banking. Sovereign AI, built in Europe."
        />
        <script type="application/ld+json">
          {JSON.stringify(productStructuredData)}
        </script>
      </Helmet>

      <ProductLayout
        title={
          <>
            Regulated AI <span style={{ color: "var(--color-warm)" }}>for</span>{" "}
            European <span style={{ color: "var(--color-warm)" }}>Banks,</span>{" "}
            Built to work inside the Rules
          </>
        }
        description={
          <>
            AI that helps risk, compliance, and audit teams do their work,
            without stepping outside the regulatory lines they operate in.
            Sovereign, auditable, and built for European banking.{" "}
            <em>For banks and financial institutions.</em>
          </>
        }
        heroImage={innovethicImage}
        actions={[
          {
            label: "Talk to our team",
            href: "https://aptinnova.com/contact/",
          },
          {
            label: "Visit innovethic.com",
            href: "https://innovethic.com",
            variant: "secondary",
          },
        ]}
      >
        <ProductCapabilities
          title={
            <>
              The <span style={{ color: "var(--color-warm)" }}>Problem</span>
            </>
          }
          description={
            <>
              Banks want the productivity AI offers. What they can't accept is
              AI that gives unsourced answers, makes decisions no one can trace,
              or sends sensitive data to a vendor's cloud. In a regulated
              environment, "the model said so" is not an answer anyone can
              defend to a regulator.
            </>
          }
        />

        <ProductWorkflow
          title={
            <>
              What{" "}
              <span style={{ color: "var(--color-warm)" }}>
                InnoVethic does?
              </span>
            </>
          }
          description="InnoVethic gives banking teams AI they can actually stand behind. For banks and financial institutions."
          steps={workflowSteps}
        />

        <ProductAudience
          title={
            <>
              Who <span style={{ color: "var(--color-warm)" }}>it's for?</span>
            </>
          }
          description="Risk, compliance, finance, and audit teams at European banks and financial institutions, the people accountable for keeping AI inside the rules."
          audiences={audienceItems}
        />

        <ProductCTA
          title={
            <>
              <span style={{ color: "var(--color-warm)" }}>See InnoVethic</span>{" "}
              for your Institution
            </>
          }
          description="Talk to our team about what regulated AI operations could look like for your bank, or explore more on the InnoVethic site."
          actions={[
            {
              label: "Talk to our team",
              href: "https://aptinnova.com/contact/",
            },
            {
              label: "Visit innovethic.com",
              href: "https://innovethic.com",
              variant: "secondary",
            },
          ]}
        />

        <ProductPagination
          next={{ name: "A(i)MPACT Lab", path: "/products/aimpact-lab/" }}
        />
      </ProductLayout>
    </>
  );
}

export default InnoVethic;
