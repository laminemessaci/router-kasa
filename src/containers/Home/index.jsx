import React from "react";
import Banner from "../../components/Banner";
import Carousel from "../../components/Carousel/index.jsx";
import { getAdvertisements } from "../../service/api.js";

import "./style.css";
const Home = () => {
  const data = getAdvertisements();
  console.log(data);
  const pictures = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-5.jpg",
  ];
  return (
    <div className="Home">
      <Banner
        imgSource="../assets/coast-landscape.jpeg"
        altText="Un paysage sauvage de bord de mer"
        title="Chez vous, partout et ailleurs"
      />
      <Carousel pictures={pictures} />
    </div>
  );
};

export default Home;
