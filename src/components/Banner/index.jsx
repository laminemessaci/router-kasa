import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Banner = (props) => {
  const { imgSource, altText, title } = props;
  return (
    <div className="hero-banner">
      <img src={imgSource} alt={altText} />
      <h1>{title}</h1>
    </div>
  );
};

Banner.propTypes = {
  imgSource: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Banner;
