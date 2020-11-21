// == Import npm
import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

// == Import Composants
import Header from 'src/components/Header';
import Navheader from 'src/components/Navheader';
import Footer from 'src/components/Footer';

// == Import Composants page

import Blog from 'src/components/Home/Blog';
import Css from 'src/components/Home/Css';
import Main from 'src/components/Home/Main';
import Moncv from 'src/components/Home/Moncv';
import Real from 'src/components/Home/Real';
import Tutos from 'src/components/Home/Tutos';
import Vuejs from 'src/components/Home/Vuejs';

import Error404 from 'src/components/Home/Error404';

import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />

    <Router>
      <main>
        <Navheader />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/realisations" component={Real} />
          <Route path="/css-4-life" component={Css} />
          <Route path="/tutos" component={Tutos} />
          <Route path="/vue-js" component={Vuejs} />
          <Route path="/cv-bien-oui-merci" component={Moncv} />
          <Route path="/blog" component={Blog} />
          <Route render={() => <Error404 />} />
        </Switch>
      </main>
    </Router>
    <Footer />
    <p className="app_p">Mentions Légales &copy; NeoCortex - 2020</p>
  </div>
);

// == Export
export default App;
