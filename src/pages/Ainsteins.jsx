import { Helmet } from "react-helmet-async";

import ProductLayout from "../components/sections/products/ProductLayout.jsx";
import ProductIntro from "../components/sections/products/ProductIntro.jsx";
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

const introHighlights = [
  {
    icon: <IconPlug />,
    title: "Grounded in your curriculum",
    description:
      "ainsteins works from the material your institution has curated and approved, so answers stay aligned with what's actually being taught.",
  },
  {
    icon: <IconBooks />,
    title: "Aware of who's asking",
    description:
      "The assistant adapts to the person using it, so students, teachers, and staff each get responses matched to their role and needs.",
  },
  {
    icon: <IconChat />,
    title: "Traceable answers",
    description:
      "Every response points back to the curriculum source it came from, so answers can be checked and trusted.",
  },
  {
    icon: <IconQuote />,
    title: "Ready to adopt",
    description:
      "ainsteins is built to be adopted without a heavy custom build, so institutions can get going without a long engineering project.",
  },
];

const audienceItems = ["Students", "Educators", "Academic institutions"];

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
            AI-powered Learning, Grounded in your own{" "}
            <span style={{ color: "var(--color-warm)" }}>Curriculum</span>
          </>
        }
        description={
          <>
            An AI learning assistant that works from your institution's own
            approved material, so students learn with focus, teachers keep their
            voice, and your institution keeps its edge.{" "}
            <em>For schools, colleges, and universities.</em>
          </>
        }
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
        <ProductCapabilities
          title={
            <>
              The <span style={{ color: "var(--color-warm)" }}>Problem</span>
            </>
          }
          description="General AI tools will answer anything, which is exactly the problem in education. Students get off-syllabus answers, teachers lose control of what's being taught, and no one can tell where an answer actually came from. Learning drifts away from the curriculum the institution has carefully built."
        />

        <ProductIntro
          title={
            <>
              What{" "}
              <span style={{ color: "var(--color-warm)" }}>
                ainsteins does?
              </span>
            </>
          }
          highlights={introHighlights}
        />

        <ProductAudience
          title={
            <>
              Who <span style={{ color: "var(--color-warm)" }}>it's for?</span>
            </>
          }
          description="Students, educators, and academic institutions that want the benefits of AI-powered learning without letting it pull students off course."
          audiences={audienceItems}
        />

        <ProductCTA
          title={
            <>
              <span style={{ color: "var(--color-warm)" }}>
                Bring ainsteins
              </span>{" "}
              to your Institution?
            </>
          }
          description="Talk to our team about AI-powered learning on your own curriculum, or explore more on the ainsteins site."
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
        />

        <ProductPagination
          prev={{ name: "A(i)MPACT Lab", path: "/products/aimpact-lab/" }}
        />
      </ProductLayout>
    </>
  );
}

export default Ainsteins;
