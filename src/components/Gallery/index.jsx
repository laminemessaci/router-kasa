import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import { PropertyAdvertisement } from '../../model/index.js';
import Thumbnail from './../thumbnail';

function Gallery({ advertisements, ...props }) {
  console.log(advertisements);
  return (
    <div className="gallery">
      <ul>
        {advertisements.map(({ id, cover, title, location }) => (
          <Thumbnail
            key={`thumbnail-${id}`}
            id={id}
            cover={cover}
            title={title}
            location={location}
          />
        ))}
      </ul>
    </div>
  );
}

Gallery.propTypes = {
  advertisements: PropTypes.arrayOf(PropTypes.instanceOf(PropertyAdvertisement))
    .isRequired,
};

export default Gallery;
