// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import Navheader from 'src/components/Navheader';
import Main from 'src/components/Home/Main';
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
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/realisations">
        <Real />
      </Route>
      <Route path="/css">
        <Css />
      </Route>
      <Route path="/mes-tutos">
        <Tutos />
      </Route>
      <Route path="vue-js">
        <Vuejs />
      </Route>
      <Route path="mon-cv">
        <Moncv />
      </Route>
      <Route path="others">
        <Others />
      </Route>
    </Switch>
    <Footer />
    <p className="app_p">Mentions Légales &copy; NeoCortex - 2020</p>
  </div>
);

// == Export
export default App;
