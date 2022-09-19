import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import About from "../containers/About";

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
    </Routes>
  );
}

export default Navigation;
