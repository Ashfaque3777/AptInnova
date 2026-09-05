import { Helmet } from "react-helmet-async";

import ProductLayout from "../components/sections/products/ProductLayout.jsx";
import ProductIntro from "../components/sections/products/ProductIntro.jsx";
import ProductWorkflow from "../components/sections/products/ProductWorkflow.jsx";
import ProductAudience from "../components/sections/products/ProductAudience.jsx";
import ProductCapabilities from "../components/sections/products/ProductCapabilities.jsx";
import ProductCTA from "../components/sections/products/ProductCTA.jsx";
import ProductPagination from "../components/sections/products/ProductPagination.jsx";

import ainsteinsImage from "../assets/images/products/ainsteins/ainsteins.webp";

/* Small, consistent inline icon set (stroke style matches the site). */
function IconPlug() {
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
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8z" />
    </svg>
  );
}

function IconBooks() {
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
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function IconChat() {
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
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

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

function IconTarget() {
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
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconInstitution() {
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
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-4h6v4" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
      <path d="M9 13h.01" />
      <path d="M15 13h.01" />
    </svg>
  );
}

const introHighlights = [
  {
    icon: <IconPlug />,
    title: "Plug-and-play",
    description:
      "A ready-to-use AI knowledge assistant that institutions can adopt without heavy custom builds.",
  },
  {
    icon: <IconBooks />,
    title: "Curated curriculum corpora",
    description:
      "AI answers are grounded in the institution's own curated curriculum, keeping learning on track.",
  },
  {
    icon: <IconChat />,
    title: "Persona-aware chat",
    description:
      "Conversation adapts to the user's role, so students, teachers, and institutions each get relevant help.",
  },
  {
    icon: <IconQuote />,
    title: "Source-cited answers",
    description:
      "Every answer points back to the curriculum source it draws from, keeping responses verifiable.",
  },
];

const workflowSteps = [
  {
    title: "Start with your curriculum",
    description:
      "ainsteins runs on curated curriculum corpora from the institution, so answers stay grounded in the material students actually study.",
  },
  {
    title: "Chat with a persona-aware assistant",
    description:
      "Users interact in plain language and the assistant adapts to their role and context across the institution.",
  },
  {
    title: "Receive source-cited answers",
    description:
      "Responses reference the curriculum sources they rely on, so answers can be traced and verified.",
  },
  {
    title: "Learn with focus",
    description:
      "Students stay on the institution's curriculum, teachers keep their voice, and the institution keeps its edge.",
  },
];

const audienceItems = ["Students", "Educators", "Academic institutions"];

const capabilities = [
  {
    icon: <IconPlug />,
    title: "Plug-and-play deployment",
    description:
      "A ready-to-use knowledge assistant designed for institutions to adopt without a custom build.",
  },
  {
    icon: <IconBooks />,
    title: "Curated curriculum corpora",
    description:
      "The assistant works from the institution's own curated curriculum material, keeping answers aligned with what is taught.",
  },
  {
    icon: <IconChat />,
    title: "Persona-aware chat",
    description:
      "Conversation adapts to the user's role, giving students, educators, and institutions responses matched to their needs.",
  },
  {
    icon: <IconQuote />,
    title: "Source-cited answers",
    description:
      "Answers reference the curriculum sources they come from, making responses transparent and verifiable.",
  },
  {
    icon: <IconTarget />,
    title: "Learning with focus",
    description:
      "Students learn on their own curriculum with fewer distractions, keeping study aligned with course goals.",
  },
  {
    icon: <IconInstitution />,
    title: "Built for institutions",
    description:
      "Designed for students, teachers, and academic institutions, so the whole institution benefits from one assistant.",
  },
];

const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "ainsteins",
  description:
    "Plug-and-play AI knowledge assistant for institutions. Curated curriculum corpora, persona-aware chat, and source-cited answers.",
  brand: {
    "@type": "Brand",
    name: "AptInnova",
  },
  category: "AI knowledge assistant",
  audience: {
    "@type": "Audience",
    audienceType: "Students, educators, and academic institutions",
  },
  url: "/products/ainsteins/",
};

function Ainsteins() {
  return (
    <>
      <Helmet>
        <title>
          ainsteins | Plug-and-Play AI Knowledge Assistant | AptInnova
        </title>
        <meta
          name="description"
          content="ainsteins is a plug-and-play AI knowledge assistant for institutions. Curated curriculum corpora, persona-aware chat, and source-cited answers help students learn with focus and teachers keep their voice."
        />
        <meta
          property="og:title"
          content="ainsteins | Plug-and-Play AI Knowledge Assistant"
        />
        <meta
          property="og:description"
          content="AI-powered learning on your own curriculum, with persona-aware chat and source-cited answers. Built for students, educators, and academic institutions."
        />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="/products/ainsteins/" />
        <meta property="og:image" content={ainsteinsImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ainsteins | Plug-and-Play AI Knowledge Assistant"
        />
        <meta
          name="twitter:description"
          content="AI-powered learning on your own curriculum, with persona-aware chat and source-cited answers."
        />
        <script type="application/ld+json">
          {JSON.stringify(productStructuredData)}
        </script>
      </Helmet>

      <ProductLayout
        title={
          <>
            ainste<span style={{ color: "var(--color-warm)" }}>i</span>ns
          </>
        }
        description="Plug-and-play AI knowledge assistant for institutions. Curated curriculum corpora, persona-aware chat, and source-cited answers for learning that stays grounded in your curriculum."
        heroImage={ainsteinsImage}
        actions={[
          {
            label: "Talk to our team",
            href: "https://aptinnova.com/contact/",
          },
          {
            label: "Visit ainsteins.com",
            href: "https://ainsteins.com",
            variant: "secondary",
          },
        ]}
      >
        <ProductIntro
          title={
            <>
              What is{" "}
              <span style={{ color: "var(--color-warm)" }}>ainsteins?</span>
            </>
          }
          paragraphs={[
            "ainsteins is a plug-and-play AI knowledge assistant built for institutions. It combines curated curriculum corpora, persona-aware chat, and source-cited answers so students learn with focus, teachers keep their voice, and the institution keeps its edge.",
            "Learning is grounded in the institution's own curriculum. Instead of open-ended answers, users get responses that reference the material the institution has curated and approved.",
          ]}
          highlights={introHighlights}
        />

        <ProductWorkflow
          title={
            <>
              How it <span style={{ color: "var(--color-warm)" }}>Works?</span>
            </>
          }
          description="From curated curriculum to source-cited answers, every step keeps learning grounded and focused."
          steps={workflowSteps}
        />

        <ProductAudience
          title={
            <>
              Who <span style={{ color: "var(--color-warm)" }}>Benefits?</span>
            </>
          }
          description="ainsteins is built for the people at the heart of every academic institution."
          audiences={audienceItems}
        />

        <ProductCapabilities
          title={
            <>
              Key{" "}
              <span style={{ color: "var(--color-warm)" }}>Capabilities</span>
            </>
          }
          description="The capabilities that make ainsteins a fit for curriculum-grounded learning."
          capabilities={capabilities}
        />

        <ProductCTA
          title={
            <>
              Ready to{" "}
              <span style={{ color: "var(--color-warm)" }}>
                bring ainsteins to your
              </span>{" "}
              Institution?
            </>
          }
          description="Talk to our team about AI-powered learning on your curriculum, or explore more on the ainsteins site."
          actions={[
            { label: "Contact us", href: "https://aptinnova.com/contact/" },
            {
              label: "Visit ainsteins.com",
              href: "https://ainsteins.com",
              variant: "secondary",
            },
          ]}
        />

        <ProductPagination
          prev={{ name: "A(i)MPACT Lab", path: "/products/aimpact-lab/" }}
        />
      </ProductLayout>
    </>
  );
}

export default Ainsteins;
