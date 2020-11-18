// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import NavLink from 'src/components/NavLink';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';

import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <NavLink />
    <Main />
    <Footer />
    <p className="app_p">Mentions Légales &copy; NeoCortex - 2020</p>
  </div>
);

// == Export
export default App;
