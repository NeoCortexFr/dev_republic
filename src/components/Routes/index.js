import React from 'react';

const Routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>, // page en cours
    main: () => <h2>Home</h2>,
  },
  {
    path: '/realisations',
    sidebar: () => <div>Réalisations!</div>,
    main: () => <h2>Réalisations</h2>,
  },
  {
    path: '/code-css',
    sidebar: () => <div>Css!</div>,
    main: () => <h2>Css</h2>,
  },
  {
    path: '/mes-tutos',
    sidebar: () => <div>Mes Tutos</div>,
    main: () => <h2>Mes Tutos</h2>,
  },
  {
    path: '/vue_js',
    sidebar: () => <div>Vue JS</div>,
    main: () => <h2>Vue JS</h2>,
  },
  {
    path: '/cv-bien-oui-merci',
    sidebar: () => <div>Mon CV</div>,
    main: () => <h2>Mon CV</h2>,
  },
  {
    path: '/autres-trucs',
    sidebar: () => <div>Autres</div>,
    main: () => <h2>Autres</h2>,
  },
];

export default Routes;
