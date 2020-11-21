import React from 'react';

import './error404.scss';

const Error404 = () => (
  <div className="error404">
    <div className="error404_content">
      <h2 className="error404_content-title">Erreur 404</h2>
      <p><img src="https://media.giphy.com/media/biKilc2r3kGOyXNiDq/giphy.gif" alt="erreur 404" /></p>
      <p className="error404_content-p">Cette page n'existe pas encore</p>
    </div>
  </div>
);

export default Error404;
