import { Helmet } from "react-helmet-async";

import ProductsIndexHero from "../components/sections/products/ProductsIndexHero.jsx";
import ProductsIndexMeaning from "../components/sections/products/ProductsIndexMeaning.jsx";
import ProductsIndexList from "../components/sections/products/ProductsIndexList.jsx";
import ProductCTA from "../components/sections/products/ProductCTA.jsx";

function Products() {
  return (
    <>
      <Helmet>
        <title>Products | AptInnova</title>
        <meta
          name="description"
          content="Three products incubated at AI for ALL Global and made ready for the real world by AptInnova: InnoVethic, ainsteins, and A(i)MPACT Lab. Each is live and in use today."
        />
        <meta
          property="og:title"
          content="Products we've brought to market"
        />
        <meta
          property="og:description"
          content="Three products, incubated at AI for ALL Global and made ready for the real world by AptInnova. Each solves a hard problem for a specific kind of organization."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/products/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Products we've brought to market"
        />
        <meta
          name="twitter:description"
          content="InnoVethic, ainsteins, and A(i)MPACT Lab: three products incubated at AI for ALL Global and made ready for the real world by AptInnova."
        />
      </Helmet>

      <ProductsIndexHero />

      <ProductsIndexMeaning />

      <ProductsIndexList />

      <ProductCTA
        title={
          <>
            <span style={{ color: "var(--color-warm)" }}>Not sure</span> if one
            of these fits?
          </>
        }
        description="Tell us about your organization and what you're trying to do. We'll tell you honestly whether one of these is the right fit, or whether something custom makes more sense."
        actions={[
          { label: "Get in touch", href: "https://aptinnova.com/contact/" },
        ]}
      />
    </>
  );
}

export default Products;