import React from 'react';
import { NavLink } from 'react-router-dom';

import './navheader.scss';

const Navheader = () => (
  <nav className="navheader">
    <NavLink
      className="navheader_object"
      to="/"
      exact
    >
      <h6 className="navheader_object-title">Accueil</h6>
    </NavLink>
    <NavLink
      className="navheader_object"
      to="/realisations"
      exact
    >
      <h6 className="navheader_object-title">réalisations</h6>
    </NavLink>
    <NavLink
      className="navheader_object"
      to="/css"
    >
      <h6 className="navheader_object-title">Css</h6>
    </NavLink>
    <NavLink
      className="navheader_object"
      to="/tutorials"
    >
      <h6 className="navheader_object-title">Tutos</h6>
    </NavLink>
    <NavLink
      className="navheader_object"
      to="/vue-js"
    >
      <h6 className="navheader_object-title">Vue JS</h6>
    </NavLink>
    <NavLink
      className="navheader_object"
      to="/cv-bien-oui-merci"
    >
      <h6 className="navheader_object-title">Mon CV</h6>
    </NavLink>
    <NavLink
      className="navheader_object"
      to="/other"
    >
      <h6 className="navheader_object-title">Trucs en vrac</h6>
    </NavLink>
  </nav>
);

export default Navheader;

/*
<nav className="nav">
    <NavLink
      className="nav-item"
      to="/"
      activeClassName="nav-item-active"
      exact
    >
      Accueil
    </NavLink>
    */
