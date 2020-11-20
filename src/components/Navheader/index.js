import React from 'react';
// import { NavLink } from 'react-router-dom';

import './navheader.scss';

const Navheader = () => (
  <nav className="navheader">

    <div className="navheader_object">
      <h6 className="navheader_object-title">Accueil</h6>
    </div>
    <div className="navheader_object">
      <h6 className="navheader_object-title">réalisations</h6>
    </div>
    <div className="navheader_object">
      <h6 className="navheader_object-title">Css</h6>
    </div>
    <div className="navheader_object">
      <h6 className="navheader_object-title">Tutos</h6>
    </div>
    <div className="navheader_object">
      <h6 className="navheader_object-title">Vue JS</h6>
    </div>
    <div className="navheader_object">
      <h6 className="navheader_object-title">Mon CV</h6>
    </div>
    <div className="navheader_object">
      <h6 className="navheader_object-title">Trucs en vrac</h6>
    </div>
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
