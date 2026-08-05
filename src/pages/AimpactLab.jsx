import { Helmet } from "react-helmet-async";

import ProductLayout from "../components/sections/products/ProductLayout.jsx";
import ProductIntro from "../components/sections/products/ProductIntro.jsx";
import ProductSpotlight from "../components/sections/products/ProductSpotlight.jsx";
import ProductVideo from "../components/sections/products/ProductVideo.jsx";
import ProductCTA from "../components/sections/products/ProductCTA.jsx";
import ProductPagination from "../components/sections/products/ProductPagination.jsx";

import aimpactLabImage from "../assets/images/products/aimpact-lab/aimpactLab.webp";
import impactLabVideo from "../assets/media/impact-lab.mp4";

/* Small, consistent inline icon set (stroke style matches the site). */
function IconSandbox() {
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
      <rect x="2" y="9" width="20" height="12" rx="2" />
      <path d="M5 9V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
      <path d="M8 13h.01" />
      <path d="M12 13h.01" />
      <path d="M16 13h.01" />
    </svg>
  );
}

function IconTwin() {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05" />
      <path d="M12 22.08V12" />
    </svg>
  );
}

function IconXR() {
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
      <path d="M3 7h18a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-.78-.38L14 15.5h-4l-2.72 2.12a1 1 0 0 1-.78.38H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" />
      <path d="M7.5 12h.01" />
      <path d="M11.5 12h.01" />
    </svg>
  );
}

function IconFlask() {
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
      <path d="M10 2v6L4.5 17a2.5 2.5 0 0 0 2.2 3.7h10.6a2.5 2.5 0 0 0 2.2-3.7L14 8V2" />
      <path d="M8.5 2h7" />
      <path d="M7 16h10" />
    </svg>
  );
}

function IconShield() {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconLayers() {
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
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function IconGlobe() {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

const introHighlights = [
  {
    icon: <IconSandbox />,
    title: "Sovereign sandbox",
    description:
      "A contained environment for sector-grounded AI experimentation, owned and controlled by the institutions that use it.",
  },
  {
    icon: <IconFlask />,
    title: "Validate, iterate, stress-test",
    description:
      "Ideas are prototyped and pressure-tested before real-world deployment, so teams learn in the sandbox first.",
  },
  {
    icon: <IconShield />,
    title: "Built for collaboration",
    description:
      "Cohorts, partner institutions, and community programmes can come together to experiment and validate together.",
  },
  {
    icon: <IconLayers />,
    title: "Currently in Beta",
    description:
      "A(i)MPACT Lab is in Beta and available on demand while its capabilities are validated with early partners.",
  },
];

const sandboxHighlights = [
  {
    icon: <IconSandbox />,
    title: "Sector-grounded experimentation",
    description:
      "Experiments are anchored in the sector context of the teams using the sandbox, so validation is meaningful.",
  },
  {
    icon: <IconFlask />,
    title: "Prototype before deployment",
    description:
      "Innovators prototype and iterate inside the sandbox before exposing ideas to real-world environments.",
  },
  {
    icon: <IconShield />,
    title: "Controlled innovation space",
    description:
      "A sovereign space where AI ideas can be explored without leaving the institution's approved boundaries.",
  },
];

const twinHighlights = [
  {
    icon: <IconTwin />,
    title: "Simulate real-world systems",
    description:
      "Digital Twin modelling lets teams represent and simulate systems before making changes in the real world.",
  },
  {
    icon: <IconLayers />,
    title: "Validate in a virtual replica",
    description:
      "Ideas are tested against a virtual counterpart, making it safer to iterate and stress-test concepts.",
  },
  {
    icon: <IconGlobe />,
    title: "Grounded in sector reality",
    description:
      "Digital Twin work stays grounded in the sector's own context, keeping experimentation relevant and practical.",
  },
];

const xrHighlights = [
  {
    icon: <IconXR />,
    title: "XR prototyping",
    description:
      "Extended reality prototyping brings ideas into spatial, immersive formats inside the sandbox.",
  },
  {
    icon: <IconFlask />,
    title: "Test interactions early",
    description:
      "Teams can experience and stress-test ideas in XR before committing to real-world deployment.",
  },
  {
    icon: <IconLayers />,
    title: "One space for experimentation",
    description:
      "AI, Digital Twin, and XR prototyping sit together in one environment, enabling richer experiments.",
  },
];

const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "A(i)MPACT Lab",
  description:
    "A sovereign sandbox environment for sector-grounded AI experimentation. Brings AI, Digital Twin, and XR prototyping into one space so innovators can validate, iterate, and stress-test ideas before real-world deployment. Currently in Beta, available on demand.",
  brand: {
    "@type": "Brand",
    name: "AptInnova",
  },
  category: "AI experimentation sandbox",
  audience: {
    "@type": "Audience",
    audienceType: "Cohorts, partner institutions, and community programmes",
  },
  url: "https://aptinnova.com/products/aimpact-lab/",
};

function AimpactLab() {
  return (
    <>
      <Helmet>
        <title>
          A(i)MPACT Lab | Sovereign AI Experimentation Sandbox | AptInnova
        </title>
        <meta
          name="description"
          content="A(i)MPACT Lab is a sovereign sandbox for sector-grounded AI experimentation. Brings AI, Digital Twin, and XR prototyping into one space to validate, iterate, and stress-test ideas before real-world deployment. Currently in Beta."
        />
        <meta
          property="og:title"
          content="A(i)MPACT Lab | Sovereign AI Experimentation Sandbox"
        />
        <meta
          property="og:description"
          content="A sovereign sandbox for sector-grounded AI experimentation. AI, Digital Twin, and XR prototyping in one space. Currently in Beta, available on demand."
        />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="/products/aimpact-lab/" />
        <meta property="og:image" content={aimpactLabImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="A(i)MPACT Lab | Sovereign AI Experimentation Sandbox"
        />
        <meta
          name="twitter:description"
          content="A sovereign sandbox for sector-grounded AI experimentation. AI, Digital Twin, and XR prototyping in one space."
        />
        <script type="application/ld+json">
          {JSON.stringify(productStructuredData)}
        </script>
      </Helmet>

      <ProductLayout
        title="A(i)MPACT Lab"
        description="A sovereign sandbox environment for sector-grounded AI experimentation. AI, Digital Twin, and XR prototyping in one space to validate, iterate, and stress-test ideas before real-world deployment."
        heroImage={aimpactLabImage}
        actions={[
          { label: "Request access", to: "/contact/" },
          {
            label: "Visit AIforAll Global",
            href: "https://aiforallglobal.org/incubation-factory",
            variant: "secondary",
          },
        ]}
      >
        <ProductIntro
          title="What is A(i)MPACT Lab?"
          paragraphs={[
            "A(i)MPACT Lab is a sovereign sandbox environment for sector-grounded AI experimentation. It brings AI, Digital Twin, and XR prototyping into one space so innovators can validate, iterate, and stress-test ideas before real-world deployment.",
            "Currently in Beta and available on demand, A(i)MPACT Lab serves cohorts, partner institutions, and community programmes looking for a controlled place to experiment with applied AI.",
          ]}
          highlights={introHighlights}
        />

        <ProductSpotlight
          title="Innovation Sandbox"
          paragraphs={[
            "A(i)MPACT Lab provides a sovereign sandbox where sector-grounded AI ideas can be validated before they reach the real world.",
            "Teams prototype, iterate, and stress-test in a controlled space, learning what works before committing to deployment.",
          ]}
          highlights={sandboxHighlights}
        />

        <ProductSpotlight
          title="Digital Twin"
          reversed
          paragraphs={[
            "Digital Twin modelling is part of the A(i)MPACT Lab environment, letting teams represent and simulate systems before making changes.",
            "By testing against a virtual counterpart, innovators can validate ideas with far less risk and refine them iteratively.",
          ]}
          highlights={twinHighlights}
        />

        <ProductSpotlight
          title="XR"
          paragraphs={[
            "XR prototyping brings experiments into immersive, spatial formats within the sandbox.",
            "Combined with AI and Digital Twin, XR gives innovators a fuller way to experience, test, and stress-test ideas before real-world deployment.",
          ]}
          highlights={xrHighlights}
        />

        <ProductVideo
          title="See A(i)MPACT Lab in Action"
          description="A short demonstration of the A(i)MPACT Lab environment."
          src={impactLabVideo}
          poster={aimpactLabImage}
          label="A(i)MPACT Lab demonstration video"
        />

        <ProductCTA
          title="Ready to Experiment in the Sandbox?"
          description="A(i)MPACT Lab is in Beta and available on demand. Talk to our team or explore the Incubation Factory at AIforAll Global."
          actions={[
            {
              label: "Request access",
              to: "/contact/",
            },
            {
              label: "Visit Incubation Factory",
              href: "https://aiforallglobal.org/incubation-factory",
              variant: "secondary",
            },
          ]}
        />

        <ProductPagination
          prev={{ name: "InnoVethic", path: "/products/innovethic/" }}
          next={{ name: "ainsteins", path: "/products/ainsteins/" }}
        />
      </ProductLayout>
    </>
  );
}

export default AimpactLab;
