import { Helmet } from "react-helmet-async";

import ProductLayout from "../components/sections/products/ProductLayout.jsx";
import ProductIntro from "../components/sections/products/ProductIntro.jsx";
import ProductAudience from "../components/sections/products/ProductAudience.jsx";
import ProductCapabilities from "../components/sections/products/ProductCapabilities.jsx";
import ProductWorkflow from "../components/sections/products/ProductWorkflow.jsx";
import ProductCTA from "../components/sections/products/ProductCTA.jsx";
import ProductPagination from "../components/sections/products/ProductPagination.jsx";

import innovethicImage from "../assets/images/products/innovethic/InnoVethic.webp";

/* Small, consistent inline icon set (stroke style matches the site). */
function IconQuote() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 1.5 17V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2.5 2.5 0 0 1-2.5-2.5" />
      <path d="M14 19.5A2.5 2.5 0 0 1 11.5 17V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2.5a2.5 2.5 0 0 1-2.5-2.5" />
    </svg>
  );
}

function IconScale() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v18" />
      <path d="M8 21h8" />
      <path d="M6 7l-4 5h8z" />
      <path d="M18 7l-4 5h8z" />
      <path d="M4 7h16" />
    </svg>
  );
}

function IconFlow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <path d="M6.5 10v2a4 4 0 0 0 4 4h3.5" />
      <path d="M17.5 10V8" />
    </svg>
  );
}

function IconAudit() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

function IconServer() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <path d="M6 6h.01" />
      <path d="M6 18h.01" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const introHighlights = [
  {
    icon: <IconScale />,
    title: "Regulated AI operations",
    description:
      "Built for European banks where AI must operate inside strict regulatory boundaries, not around them.",
  },
  {
    icon: <IconQuote />,
    title: "Source-cited answers",
    description:
      "Responses reference named regulatory sources, so every answer can be checked back to EBA, ECB, DNB, AFM, FATF, BIS or IFRS.",
  },
  {
    icon: <IconFlow />,
    title: "Governed workflows",
    description:
      "Multi-step processes for credit review, audit response and regulatory reporting run under defined control points.",
  },
  {
    icon: <IconServer />,
    title: "Sovereign AI, built in Europe",
    description:
      "Operates inside the bank's approved environment rather than on a vendor's cloud, keeping data and control in-house.",
  },
];

const capabilities = [
  {
    icon: <IconQuote />,
    title: "Source-cited regulatory answers",
    description:
      "Ask in plain language and receive answers grounded in named sources across EBA, ECB, DNB, AFM, FATF, BIS and IFRS.",
  },
  {
    icon: <IconFlow />,
    title: "Governed multi-step workflows",
    description:
      "Run structured processes for credit review, audit response and regulatory reporting, each step clearly defined and controlled.",
  },
  {
    icon: <IconAudit />,
    title: "Audit trail on every step",
    description:
      "Every action is recorded, so the full journey from question to answer to decision can be reviewed and evidenced.",
  },
  {
    icon: <IconServer />,
    title: "Inside the bank's environment",
    description:
      "Designed for deployment in the bank's approved environment rather than a vendor's cloud, aligning with sovereignty expectations.",
  },
  {
    icon: <IconMapPin />,
    title: "Sovereign AI, built in Europe",
    description:
      "European-built and European-positioned, matching the regulatory context that banks operate in.",
  },
  {
    icon: <IconScale />,
    title: "Compliance-aware by design",
    description:
      "Reasoning is constrained to the regulatory sources the bank works with, supporting defensible AI operations.",
  },
];

const workflowSteps = [
  {
    title: "Ask a grounded question",
    description:
      "Risk, compliance and audit teams ask operational questions in plain language. InnoVethic retrieves from the bank's approved regulatory corpus.",
  },
  {
    title: "Receive source-cited answers",
    description:
      "Each answer cites the named regulatory source it relies on, so the reasoning can be checked and challenged by the responsible team.",
  },
  {
    title: "Run governed workflows",
    description:
      "For credit review, audit response or regulatory reporting, the work advances through defined, controlled multi-step workflows.",
  },
  {
    title: "Every step on the audit trail",
    description:
      "The full journey is recorded and evidencable, giving banks a complete audit trail for regulated AI operations.",
  },
];

const audienceItems = [
  "Compliance",
  "Risk",
  "AML",
  "Internal Audit",
  "CTO / CISO",
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
        title="InnoVethic"
        description="Regulated AI operations for European banks. Source-cited regulatory answers, governed multi-step workflows, and every step on the audit trail."
        heroImage={innovethicImage}
        actions={[
          {
            label: "Talk to our team",
            to: "/contact/",
          },
          {
            label: "Visit innovethic.com",
            href: "https://innovethic.com",
            variant: "secondary",
          },
        ]}
      >
        <ProductIntro
          title={
            <>
              What is{" "}
              <span style={{ color: "var(--color-warm)" }}>InnoVethic?</span>
            </>
          }
          paragraphs={[
            "InnoVethic is a regulated AI operations platform for European banks. It combines source-cited regulatory answers with governed multi-step workflows, so risk, finance, compliance and audit teams can work with AI inside a defensible operating model.",
            "Every answer points back to named regulatory sources, and every workflow step is recorded on the audit trail. The system is designed to run inside the bank's approved environment rather than on a vendor's cloud, reflecting a sovereign AI position built in Europe.",
          ]}
          highlights={introHighlights}
        />

        <ProductAudience
          title="Who is it for?"
          description={
            <>
              Built for{" "}
              <span style={{ color: "var(--color-warm)" }}>
                banks and financial institutions
              </span>{" "}
              where regulated AI operations matter, InnoVethic supports the
              teams accountable for keeping AI inside the rules.
            </>
          }
          audiences={audienceItems}
        />

        <ProductCapabilities
          title={
            <>
              Key{" "}
              <span style={{ color: "var(--color-warm)" }}>Capabilities</span>
            </>
          }
          description="The capabilities that make InnoVethic a fit for regulated AI operations in European banking."
          capabilities={capabilities}
        />

        <ProductWorkflow
          title={
            <>
              How it{" "}
              <span style={{ color: "var(--color-warm)" }}>Supports</span>{" "}
              Regulated AI
            </>
          }
          description="From a grounded question to a complete audit trail, every step is designed for accountability."
          steps={workflowSteps}
        />

        <ProductCTA
          title={
            <>
              Ready to see{" "}
              <span style={{ color: "var(--color-warm)" }}>
                InnoVethic in Action?
              </span>
            </>
          }
          description="Talk to our team about regulated AI operations for your institution, or explore more on the InnoVethic site."
          actions={[
            { label: "Contact us", to: "/contact/" },
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
