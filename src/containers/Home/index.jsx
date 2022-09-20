import React from "react";
import Banner from "../../components/Banner";

import "./style.css";
const Home = () => {
  return (
    <div className="Home">
      <Banner
        imgSource="../assets/coast-landscape.jpeg"
        altText="Un paysage sauvage de bord de mer"
        title="Chez vous, partout et ailleurs"
      />
    </div>
  );
};

export default Home;
