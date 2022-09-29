import React from "react";

import "./style.css";

function Tag({ tag }) {
  return (
    <span className="Advertisement__tag" key={`tag-${tag}`}>
      {tag}
    </span>
  );
}

export default Tag;
