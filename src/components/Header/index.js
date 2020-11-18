import React from 'react';

import Nav from './Nav';

import './header.scss';

const Header = () => (
  <div className="header">
    <h1 className="header_title">The Dev<span className="header_title-detail"> ' </span>Republic</h1>
    <Nav />
  </div>
);

export default Header;
