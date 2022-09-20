import React from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../../logo.svg";
import "./style.css";

function Header() {
  const navStyle = ({ isActive }) => {
    console.log(isActive);
    return {
      textDecoration: !isActive && "none",
      // borderBottom: isActive && "3px solid  #FF6060",
    };
  };

  return (
    <header>
      <Link to="/">
        <img className="header-logo" src={logo} alt="Kasa" />
      </Link>

      <nav className="main-nav">
        <ul>
          <li>
            <NavLink
              className={(navInfo) =>
                navInfo.isActive ? "header-link active-link" : "header-link"
              }
              style={navStyle}
              to="/Accueil"
            >
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink
              className={(navInfo) =>
                navInfo.isActive ? "header-link active-link" : "header-link"
              }
              to="/a-propos"
            >
              &Agrave; propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
