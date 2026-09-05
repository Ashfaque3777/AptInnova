import { Routes, Route } from "react-router-dom";

import ScrollToTopOnRouteChange from "./components/ui/ScrollToTopOnRouteChange.jsx";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import InnoVethic from "./pages/InnoVethic.jsx";
import Ainsteins from "./pages/Ainsteins.jsx";
import AimpactLab from "./pages/AimpactLab.jsx";
import Insights from "./pages/Insights.jsx";
import Contact from "./pages/Contact.jsx";
import Work from "./pages/Work.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";

function App() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/services/" element={<Services />} />
          <Route path="/products/innovethic/" element={<InnoVethic />} />
          <Route path="/products/ainsteins/" element={<Ainsteins />} />
          <Route path="/products/aimpact-lab/" element={<AimpactLab />} />
          <Route path="/blog-insights/" element={<Insights />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/work/" element={<Work />} />
          <Route path="/privacy/" element={<Privacy />} />
          <Route path="/terms/" element={<Terms />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
