import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery/index.jsx";
import { getAdvertisements } from "../../service/api.js";

import "./style.css";

const initialState = {
  isLoading: true,
  advertisements: {},
};

const Home = () => {
  const [state, setState] = useState(initialState);
  const { isLoading, advertisements } = state;

  async function fetchAdvertisement() {
    const advs = await getAdvertisements();

    setState({
      ...initialState,
      isLoading: false,
      advertisements: advs.advertisements,
    });
  }

  useEffect(() => {
    fetchAdvertisement();
  }, []);

  if (isLoading) {
    return (
      <>
        <ReactLoading
          type={"spinningBubbles"}
          color={"#ff6060"}
          className="Centred"
          width={200}
          height={200}
        />
      </>
    );
  }
  return (
    <div className="Home">
      <Banner
        imgSource="../assets/coast-landscape.jpeg"
        altText="Un paysage sauvage de bord de mer"
        title="Chez vous, partout et ailleurs"
      />
      {/* <Carousel pictures={pictures} /> */}
      <Gallery advertisements={advertisements} />
    </div>
  );
};

export default Home;
