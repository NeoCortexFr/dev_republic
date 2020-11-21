import React from 'react';

import './main.scss';

const Main = () => (
  <div className="main">
    <div className="main_p">
      <h2 className="main_p-h">Pourquoi le web ?</h2>
      <p className="main_p-h-p">
        <p>Et surtout, Pourquoi le dév front....
          Très simple ! J'ai suivi une formation 3dsmax au CGI Training d'Hornu.<br />
          Et le visuel compte plus à mes yeux que les database.<br />
          Bien sûr, c'est nécessaire, mais ce côté artistique à renforcé
          mon envie de me tourner vers le Front.
          Et on ajoute l'intéractivité, et me voilà du côté <span>obscur</span> front-end
          du développement web.
        </p>
        <p>
          Mes premières tentatives de dév web, pour mettre en ligne les images
          produites par ce merveilleux (mais cher) logiciel, m'ont values des tests
          avec un wysiwyg (what you see is what you get), qui donne un code quasi fonctionnel
          mais tellement pas beau...
          Puis vient le moment d'apprendre tout seul... qui n'a pas été une réussite.
          J'ai fini par comprendre qu'il me fallait un mentor, ou tout du moins un guide.
        </p>
      </p>
    </div>
    <div className="main_p">
      <img
        src="
        https://img-0.journaldunet.com/5u7BtnsSau9ozI-i_w9DLpo8dNY=/1280x/smart/37bb29883db94c988d8701b42ed00ee2/ccmcms-jdn/2034247.jpg"
        alt="logo du web"
        width="350px"
        className="main-img"
      />
    </div>
    <div className="main_p">
      <img
        src="
        https://oclock.io/images/common/logo-full.svg?v=2bd12253"
        alt="ecole oclock"
        width="350px"
      />
    </div>
    <div className="main_p">
      <h2 className="main_p-h">Pourquoi O'Clock ?</h2>
      <p className="main_p-h-p">
        Très simple également. La recherche de mentor guide toussa...<br />
        J'ai cherché sur le net les formations dispos. Et il y en a plein !<br />
        Puis est apparue l'école O'Clock. Et j'ai tout de suite accroché au ton légèrement décallé,
        les citations, le concept du téléprésentiel...<br />
        C'est comme si je parlais avec un pote. Et quand ça accroche comme ça,
        on hésite pas !<br />
        Lisez la section blog pour plus de détails !
      </p>
    </div>
  </div>
);

export default Main;
