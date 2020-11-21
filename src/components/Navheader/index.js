import React from 'react';
import { Link } from 'react-router-dom';

import './navheader.scss';

const Navheader = () => (
  <nav className="navheader">
    <ul className="navheader_object">
      <li className="navheader_object-title">
        <Link to="/">Accueil</Link>
      </li>
      <li className="navheader_object-title">
        <Link to="/realisations">Réalisations Web</Link>
      </li>
      <li className="navheader_object-title">
        <Link to="/css-4-life">CSS</Link>
      </li>
      <li className="navheader_object-title">
        <Link to="/tutos">Tutos</Link>
      </li>
      <li className="navheader_object-title">
        <Link to="/vue-js">Vue JS</Link>
      </li>
      <li className="navheader_object-title">
        <Link to="/cv-bien-oui-merci">Mon CV</Link>
      </li>
      <li className="navheader_object-title">
        <Link to="/autres">Autres</Link>
      </li>
    </ul>
  </nav>
);

export default Navheader;
