import React from 'react';
import { Link } from 'react-router-dom';

import './navfooter.scss';

const Navfooter = () => (
  <nav className="navfooter">
    <ul className="navfooter_object">
      <li className="navfooter_object-title">
        <Link to="/instagram">Instagram</Link>
      </li>
      <li className="navfooter_object-title">
        <Link to="/linkedIn">LinkedIn</Link>
      </li>
      <li className="navfooter_object-title">
        <Link to="/github">GitHub</Link>
      </li>
      <li className="navfooter_object-title">
        <Link to="/apotheose">Apothéose</Link>
      </li>
      <li className="navfooter_object-title">
        <Link to="/oclock">O'Clock</Link>
      </li>
    </ul>
  </nav>
);

export default Navfooter;
