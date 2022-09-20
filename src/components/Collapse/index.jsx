import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

function Collapse({ title, textArray, ...rest }) {
  const [isOpen, setIsOpen] = useState(true);
  const collapseIcon = `fas fa-chevron-${isOpen ? "up" : "down"}`;
  return (
    <section className={`collapse${isOpen ? " is-open" : " is-close"}`}>
      <h2 className="collapse__title" onClick={() => console.log("clicked")}>
        <span>{title}</span>
        <span className={collapseIcon}></span>
      </h2>

      <ul className={`collapse__text ${isOpen ? "is-open" : "is-close"}`}>
        {textArray.map((item, index) => (
          <li key={`item-${index}`}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  textArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Collapse;
