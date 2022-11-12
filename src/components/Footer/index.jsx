import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../../logo-white.svg';

import './style.css';

const Footer = () => {
  return (
    <footer>
      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
        <img src={logoWhite} alt="Kasa" />
      </Link>

      <p>&copy; 2022 Kasa. Tous droits réservés</p>
    </footer>
  );
};

export default Footer;
