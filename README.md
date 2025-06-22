# Morpho

Ce projet utilise **Vite** et **React** pour afficher les pages de l'application.

## Scripts disponibles

- `npm run dev` démarre le serveur de développement.
- `npm run build` génère la version de production dans `dist`.
- `npm run preview` lance un serveur local pour prévisualiser la build.

L'installation des dépendances requiert `npm install`.

## Déploiement GitHub Pages

Le fichier `vite.config.js` définit `base: '/Morpho/'` afin que les chemins
fonctionnent correctement sur GitHub Pages. Après `npm run build`, publiez le
contenu du dossier `dist` sur votre dépôt pour éviter les erreurs 404.
