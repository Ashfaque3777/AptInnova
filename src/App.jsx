import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import InnoVethic from "./pages/InnoVethic.jsx";
import Ainsteins from "./pages/Ainsteins.jsx";
import AimpactLab from "./pages/AimpactLab.jsx";
import Layout from "./components/layout/Layout.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/products/innovethic/" element={<InnoVethic />} />
        <Route path="/products/ainsteins/" element={<Ainsteins />} />
        <Route path="/products/aimpact-lab/" element={<AimpactLab />} />
      </Route>
    </Routes>
  );
}

export default App;
