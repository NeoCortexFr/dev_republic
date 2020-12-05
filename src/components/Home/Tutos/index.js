import React from 'react';

import './tutos.scss';

const Tutos = () => (
  <div className="tutos">
    <h2 className="tutos_title">Mes Tutoriaux</h2>
    <article className="tutos_article-flex">
      <h2 className="tutos_articles-flex-title">FlexBox</h2>
      <p className="tutos_articles-flex-content">
        Non, ne part pas tout de suite !
        Je vais tenter cette technique comme je l'ai comprise, avec mes mots.
      </p>
      <p className="tutos_articles-flex-content">
        Imaginons un site où on veut afficher des boutons par liens, comme ceux présent dans
        le header de ce site.
        On peut bien sur remplacer les boutons par tout autre chose,
        articles, listes ordonnées, images, tout ce qui te passe par la tête.
      </p>
      <p className="tutos_articles-flex-content">
        Voici 5 boutons, d'une largeur suffisante pour l'exemple.
        Bien entendu, le design reste à l'appréciation de chacun! <br />
        <button type="button" className="button">Bouton 1</button>
        <button type="button" className="button">Bouton 2</button>
        <button type="button" className="button">Bouton 3</button>
        <button type="button" className="button">Bouton 4</button>
        <button type="button" className="button">Bouton 5</button>
      </p>
      <p className="tutos_articles-flex-content">
        Voici le code de départ:
      </p>
      <pre className="code">
        &lt;button type="button" className="button"&gt;Bouton 1&lt;/button&gt;
      </pre>
      <pre className="code">
        &lt;button type="button" className="button"&gt;Bouton 2&lt;/button&gt;
      </pre>
      <pre className="code">
        &lt;button type="button" className="button"&gt;Bouton 3&lt;/button&gt;
      </pre>
      <pre className="code">
        &lt;button type="button" className="button"&gt;Bouton 4&lt;/button&gt;
      </pre>
      <pre className="code">
        &lt;button type="button" className="button"&gt;Bouton 5&lt;/button&gt;
      </pre>
      <p className="tutos_articles-flex-content">
        Vu que les boutons sont collé, il serait sympa de les écarter un peu, qu'ils prennent toute
        la largeur, et pourquoi pas les mettre à la verticale.
        Comme le dit très clairement la doc de <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS Trick, </a>
        il faut envelopper ce qu'on souhaite mettre en page avec Flexbox, entourons donc
        tout ça dans un container (le nom des class reste libre !):
      </p>
      <pre className="code">
        &lt;div class="container"&gt;
      </pre>
      <pre className="code">
        &lt;button type="button" class="button"&gt;Bouton 1&lt;/button&gt;
      </pre>
      <pre className="code">
        &lt;button type="button" class="button"&gt;Bouton 2&lt;/button&gt;
      </pre>
      <pre className="code">
        &lt;button type="button" class="button"&gt;Bouton 3&lt;/button&gt;
      </pre>
      <pre className="code">
        &lt;button type="button" class="button"&gt;Bouton 4&lt;/button&gt;
      </pre>
      <pre className="code">
        &lt;button type="button" class="button"&gt;Bouton 5&lt;/button&gt;
      </pre>
      <pre className="code">
        &lt;/div&gt;
      </pre>
      <p className="tutos_articles-flex-content">
        Coté html, on peut laisser comme ça.
        Voyons maintenant ce qu'on peut en faire en CSS:
      </p>
      <pre className="code_css">
        .container {'{'} <br />
        display: flex;  <br />
        {'}'} <br />
      </pre>
      Ici on indique au container que l'on souhaite lui appliquer Flexbox, pour
      pouvoir modifier la disposition des boutons.
      <p className="tutos_articles-flex-content">
        Voilà ce que ça donne:
        <div className="container">
          <button type="button" className="button">Bouton 1</button>
          <button type="button" className="button">Bouton 2</button>
          <button type="button" className="button">Bouton 3</button>
          <button type="button" className="button">Bouton 4</button>
          <button type="button" className="button">Bouton 5</button>
        </div>
        Bon, c'est pas ce qu'on voulait, mais au moins ça réagit ! Bonne nouvelle !
        Oui, il n'y a pas de petites victoires ! Continuons ensemble:
      </p>
      <p className="tutos_articles-flex-content">
        On va rajouter une propriété pour les ecarter et que ça prenne toute la largeur:
        Le justify-content, avec l propriété space-around, qui comme son nom l'indique,
        permet de mettre de l'espace autour de chacun des éléments à l'interieur du container!
        Oui, à partir de maintenant, on agit sur les éléments interieurs, tous en même temps !
      </p>
      <pre className="code_css">
        .container {'{'} <br />
        display: flex;  <br />
        justify-content: space-around; <br />
        {'}'} <br />
      </pre>
      <p className="tutos_articles-flex-content">
        <div className="container_two">
          <button type="button" className="button">Bouton 1</button>
          <button type="button" className="button">Bouton 2</button>
          <button type="button" className="button">Bouton 3</button>
          <button type="button" className="button">Bouton 4</button>
          <button type="button" className="button">Bouton 5</button>
        </div>
      </p>
      <p className="tutos_articles-flex-content">
        Pas mal ! Essayons le space-between (Pour les non anglophones,
        l'espace entre les éléments à l'interieur du container)
      </p>
      <pre className="code_css">
        .container {'{'} <br />
        display: flex;  <br />
        justify-content: space-between; <br />
        {'}'} <br />
      </pre>
      <p className="tutos_articles-flex-content">
        <div className="container_three">
          <button type="button" className="button">Bouton 1</button>
          <button type="button" className="button">Bouton 2</button>
          <button type="button" className="button">Bouton 3</button>
          <button type="button" className="button">Bouton 4</button>
          <button type="button" className="button">Bouton 5</button>
        </div>
      </p>
      <p className="tutos_articles-flex-content">
        Essayer de modifier la taille de la fenêtre, l'écart reste toujours identique
        entre les boutons, de façon proportionnelle. Là est le coté pratique de Flexbox,
        et ça va aider pour le responsive.
      </p>
      <p className="tutos_articles-flex-content">
        Essayons de les mettre à la verticale.
        Pour ça, utilisons flex direction, avec l'attribut column. Pense à
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Css Tricks.</a>
      </p>
      <p className="tutos_articles-flex-content">
        D'ailleurs, toute la colonne de gauche indique les propriété applicable au container,
        qui agiront sur les éléments à l'interieur de ce même container.
      </p>
      <pre className="code_css">
        .container {'{'} <br />
        display: flex;  <br />
        justify-content: space-between; <br />
        flex-direction: column
        {'}'} <br />
      </pre>
      <p className="tutos_articles-flex-content">
        Et comme par magie:
      </p>
      <p className="tutos_articles-flex-content">
        <div className="container_four">
          <button type="button" className="button">Bouton 1</button>
          <button type="button" className="button">Bouton 2</button>
          <button type="button" className="button">Bouton 3</button>
          <button type="button" className="button">Bouton 4</button>
          <button type="button" className="button">Bouton 5</button>
        </div>
      </p>
      <p className="tutos_articles-flex-content">
        Pour les besoins de la démo, j'ai ajouter une hauteur définie sur le container.
        Et on voit bien le between entre chaque boutons.
      </p>
      <p className="tutos_articles-flex-content">
        Comme Flexbox utilise tout l'espace, les boutons prennent la largeur.
        Modifions ça ! Utilisons un width, avec 100px comme valeur (arbitraire...).
        Et un margin auto pour les centrer sur la page:
      </p>
      <pre className="code_css">
        .container {'{'} <br />
        display: flex;  <br />
        justify-content: space-between; <br />
        flex-direction: column <br />
        margin: auto; <br />
        height: 200px; <br />
        width: 100px; <br />
        {'}'} <br />
      </pre>
      <p className="tutos_articles-flex-content">
        <div className="container_five">
          <button type="button" className="button">Bouton 1</button>
          <button type="button" className="button">Bouton 2</button>
          <button type="button" className="button">Bouton 3</button>
          <button type="button" className="button">Bouton 4</button>
          <button type="button" className="button">Bouton 5</button>
        </div>
      </p>
    </article>
  </div>
);

export default Tutos;
