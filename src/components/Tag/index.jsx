import React from "react";
import { PropTypes } from "prop-types";

import "./style.css";

function Tag({ tag }) {
  return (
    <span className="Advertisement__tag" key={`tag-${tag}`}>
      {tag}
    </span>
  );
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};
export default Tag;
