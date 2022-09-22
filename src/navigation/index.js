import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import About from "../containers/About";
import Advertisements from "../containers/Advertisements";

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Accueil" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/location/:id" element={<Advertisements />} />
    </Routes>
  );
}

export default Navigation;
