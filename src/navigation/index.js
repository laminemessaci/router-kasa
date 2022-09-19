import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../containers/Home/index.jsx";

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Navigation;
