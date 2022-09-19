import React from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../../logo.svg";
import "./style.css";

function Header() {
  return (
    <header>
      <Link to="/">
        <img className="header-logo" src={logo} alt="Kasa" />
      </Link>

      <nav className="main-nav">
        <ul>
          <li>
            <NavLink className="header-link" to="/">
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink className="header-link" to="/a-propos">
              &Agrave; propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
