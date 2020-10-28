# `Notes`
Aller sur ce lien  [React Router Quick Start](https://reactrouter.com/web/guides/quick-start) 

# Étape - 1

lancer cette commande dans le root (la racine) du dossier:
    
     `npm install react-router-dom`

# Étape - 2

Créez un composant [Home.jsx](./src/Home.jsx) dans le dossier [src](./src).

# Étape - 3

Dans [index.js](./src/index.js), importez le composant Home qu'on vient de créer :

    `import Home from './Home';`
    
    dans ce même fichier, remplacer `<App />`  par `<Home />`

# Étape - 4
 
Supprimez les lignes 3, 4, 5, & 14, 15, 16, 17 (ne servent plus à rien ici) :
 
    `import './index.css';
     import App from './App';
     import reportWebVitals from './reportWebVitals';
     // If you want to start measuring performance in your app, pass a function
     // to log results (for example: reportWebVitals(console.log))
     // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
     reportWebVitals();` 
    
# Étape - 5 
Si l'affiche ne fonctionne pas, supprimez [App.js](./src/App.js) du dossier [src](./src).


