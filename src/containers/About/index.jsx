import React from "react";
import { ABOUT_CONTENTS } from "../../constants";
import Banner from "../../components/Banner/index.jsx";
import Collapse from "../../components/Collapse/index.jsx";

import "./style.css";

const About = () => {
  return (
    <main className="About">
      <Banner
        imgSource="../assets/mountain-landscape.jpeg"
        altText="Un paysage de montagne"
      />

      <h1 className="sr-only">Les valeurs de Kasa</h1>

      <div className="collapses-box">
        {ABOUT_CONTENTS.map(({ title, text }) => (
          <Collapse key={`about-${title}`} title={title} textArray={[text]} />
        ))}
      </div>
    </main>
  );
};

export default About;
