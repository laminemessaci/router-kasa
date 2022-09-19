import React from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header/index.jsx";
import "./style.css";
const Home = () => {
  return (
    <div className="Home">
      <Header  />
      <Banner
        imgSource="../assets/coast-landscape.jpeg"
        altText="Un paysage sauvage de bord de mer"
        title="Chez vous, partout et ailleurs"
      />
    </div>
  );
};

export default Home;
