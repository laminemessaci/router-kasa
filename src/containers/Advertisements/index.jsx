import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/index.jsx";
import Collapse from "../../components/Collapse/index.jsx";
import { useParams } from "react-router";
import ReactLoading from "react-loading";

import "./style.css";
import { getAdvertisements } from "../../service/api.js";
import Tag from "../../components/Tag/index.jsx";
import Page404 from "../Page404/index.jsx";

const initialState = {
  isLoading: true,
  advertisement: {},
};
function Advertisements() {
  const [state, setState] = useState(initialState);
  const { isLoading, advertisement } = state;
  const { id } = useParams();

  // console.log(state);

  const ratingScale = [1, 2, 3, 4, 5];
  async function fetchAdvertisement() {
    const advs = await getAdvertisements();
    const advertisementToDisplay = advs.findById(id);
    setState({
      ...initialState,
      isLoading: false,
      advertisement: advertisementToDisplay,
    });
  }

  useEffect(() => {
    fetchAdvertisement();
  }, []);

  if (!advertisement) {
    return <Page404 />;
  }
  if (isLoading) {
    return (
      <>
        <ReactLoading
          width={200}
          height={200}
          type={"spinningBubbles"}
          color={"#ff6060"}
          className="Centred"
        />
      </>
    );
  }
  return (
    <main className="Advertisement">
      <Carousel pictures={advertisement.pictures} />

      <section>
        <header className="Advertisement__header">
          <div className="Advertisement__summary-box">
            <h1 className="Advertisement__title">{advertisement.title}</h1>

            <h2 className="Advertisement__location">
              {advertisement.location}
            </h2>

            <div className="Advertisement__tags-box">
              {/* {advertisement.tags.map((tag) => (
                <span className="Advertisement__tag" key={`tag-${tag}`}>
                  {tag}
                </span>
              ))} */}

              {advertisement.tags.map((tag) => (
                <Tag tag={tag} key={`tag-${tag}`} />
              ))}
            </div>
          </div>

          <div className="Advertisement__aside-box">
            <div className="Advertisement__host-box">
              <p className="Advertisement__host-name">
                {advertisement.host.name}
              </p>

              <img
                className="Advertisement__host-picture"
                src={advertisement.host.picture}
                alt={advertisement.host.name}
              />
            </div>

            <div className="Advertisement__rating">
              {ratingScale.map((scale) => (
                <i
                  className={`fas fa-star${
                    scale <= advertisement.rating ? " colored" : ""
                  }`}
                  key={`star-${scale}`}
                ></i>
              ))}
            </div>
          </div>
        </header>

        <div className="Advertisement__collapses-box">
          <div className="Advertisement__collapse">
            <Collapse
              title="Description"
              textArray={[advertisement.description]}
            />
          </div>

          <div className="Advertisement__collapse">
            <Collapse
              title="Êquipements"
              textArray={advertisement.equipments}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Advertisements;
