import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import Facilities from "./pages/Facilities";
import QualityPolicy from "./pages/QualityPolicy";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="board-of-directors" element={<BoardOfDirectors />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="quality-policy" element={<QualityPolicy />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
