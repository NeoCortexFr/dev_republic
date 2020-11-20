// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import Navheader from 'src/components/Navheader';
import Main from 'src/components/Main';
import Real from 'src/components/Home/Real';
import Css from 'src/components/Home/Css';
import Tutos from 'src/components/Home/Tutos';
import Vuejs from 'src/components/Home/Vuejs';
import Moncv from 'src/components/Home/Moncv';
import Others from 'src/components/Home/Others';
import Footer from 'src/components/Footer';

import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Navheader />
    <Route
      path="/"
      exact
    >
      <Main />
    </Route>
    <Route path="/realisations">
      <Real />
    </Route>
    <Route>
      <Css />
    </Route>
    <Route>
      <Tutos />
    </Route>
    <Route>
      <Vuejs />
    </Route>
    <Route>
      <Moncv />
    </Route>
    <Route>
      <Others />
    </Route>
    <Footer />
    <p className="app_p">Mentions Légales &copy; NeoCortex - 2020</p>
  </div>
);

// == Export
export default App;
