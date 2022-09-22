import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./style.css";


const Thumbnail = ({ id, cover, title, location, ...props }) => {
  return (
    <Link
      className="thumbnail-wrapper"
      to={`/location/${id}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <article className="thumbnail">
        <img
          className="thumbnail__cover"
          src={cover}
          alt={`Une location située en ${location}`}
        />

        <div className="thumbnail__filter"></div>

        <h2 className="thumbnail__title">{title}</h2>
      </article>
    </Link>
  );
};

Thumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
};

export default Thumbnail;
