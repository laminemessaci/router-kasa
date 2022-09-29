import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Page4004() {
  return (
    <main className="Error404">
      <p className="Error404__status-code">404</p>

      <p className="Error404__text">
        Oups ! La page que vous demandez n'existe pas.
      </p>

      <Link className="Error404__link-to-home" to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}

export default Page4004;
