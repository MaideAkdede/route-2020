# ROUTE
> Intérêt de route : On ne recharge pas les pages, même si ça donne l'impression que si.
> [Courte vidéo YT sur React Router - 2018 - Dev Ed](https://youtu.be/Law7wfdg_ls)
***
# Table des matières :
1. [Création du projet](#étape-de-création-du-projet)

  [Étape 0](#étape-0), [Étape 1](#étape-1), [Étape 2](#étape-2), [Étape 3](#étape-3), [Étape 4](#étape-4), [Étape 5](#étape-5)

2. Route

  1. [Exemple aperçu d'un route](#route)
  2. [Link](#)

***
# Étape de création du projet

## Étape - 0

1. `npx create-react-app my-app`
2. `cd my-app`
3. `yarn start`

## Étape - 1

Aller sur ce lien  [React Router Quick Start](https://reactrouter.com/web/guides/quick-start)

lancer cette commande dans le root (la racine) du dossier:

 `npm install react-router-dom`

## Étape - 2

Créez un composant, nouveau fichier, nommé [Home.jsx](./src/Home.jsx) dans le dossier [src](./src).

## Étape - 3

Dans [index.js](./src/index.js), importez le composant Home qu'on vient de créer :

``` Javascript
import Home from './Home';
```

dans ce même fichier, remplacer : `<App />`  par `<Home />`

## Étape - 4

Supprimez les lignes 3, 4, 5, & 14, 15, 16, 17 (ne servent plus à rien ici) :

``` Javascript
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

## Étape - 5

Si l'affiche ne fonctionne pas, supprimez [App.js](./src/App.js) du dossier [src](./src).

***

# Route

## Aperçu : exemple

```  Javascript
<Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/users">
        <Users />
    </Route>
    <Route path="/">
     <Home />
    </Route>
</Switch>
```

## Import React

Importer `react` pour ensuite créer la balise `react.fragment`:

``` Javascript
import React from 'react'
<React.Fragment></React.Fragment>
```

OU, importer la balise `Fragment` en la **destructurant** lors de l'import :

```Javascript
import React, {Fragment} from 'react'
<Fragment></Fragment>
```

### Import Destructuré du Router

De la librairie `react-router-dom`, en faisant un *import déstructuré*, on import `BrowserRouter`, `Link`, `Route` & `Switch` :

``` Javascript
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
```


### 1. `<Link></Link>`

Au lieu d'utiliser des balises anchors `<a></a>` on va utiliser la balise `Link` qu'on a importé plus haut.

Cette balise remplace la balise `<a>` mais elle a besoin d'un contexte pour évoluer donc il faut l'entourer des balises `<BrowserRouter>` (en dehors du `<Fragment>`).

Dans cette balise `<Link></Link>` on doit ajouter l'attribut :
`to={/contact}` qui va permet de changer l'URL mais il ne se passera rien car il faudra ajouter le route aussi.

```Javascript
<Link to="/contact">
  Contact
</Link>
```


### 2. `<Route/>`

Créer la balise `<Route/>` dans laquelle on ajoutera les attributs :

- `path="/page"`
- `component={Page}`

La balise `Route` peut s'écrire de deux façons :

Version plus ancienne, en une seule ligne, balises simples,

```Javascript
<Route path="/contact" component={Contact} />
```

Nouvelle version, en double balises,

```Javascript
<Router path="/Contact">
  <h1>Contact</h1>
</Router>
```

Si l'url est égal à "page" (dans cet exemple-ci) alors afficher le composant Page qu'on aura préalablement importé dans le fichier :

``` Javascript
import Page from "./Page"
```


### 3. `<Switch><Switch/>`


Le `<Switch>` devra être placé autour des `<Route>`

Switch va servir a analyser les composants et les données afin de **s'arrêter** dès que les données correspondents à ce qu'il recherche et évite ainsi d'afficher tous les composants d'un coups.
