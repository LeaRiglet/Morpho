# Morpho 🚀

Morpho est une plateforme qui met en relation les propriétaires d'imprimantes 3D et les personnes souhaitant faire imprimer leurs modèles à proximité. L'objectif est de proposer des objets uniques, personnalisés et produits localement, tout en permettant aux possesseurs de machines de rentabiliser leur équipement. ✨

> **Remarque** : ce projet est un prototype personnel sans vocation commerciale.

Si vous disposez d'une imprimante 3D que vous n'utilisez pas souvent, c'est l'occasion de rentabiliser votre matériel en imprimant pour les autres et en expédiant vos créations directement chez eux.

## Installation et démarrage

1. Clonez le dépôt sur votre machine.
2. Exécutez `npm install` pour installer les dépendances.
3. Lancez `npm run dev` puis ouvrez [http://localhost:5173/Morpho](http://localhost:5173/Morpho) pour accéder à l'application.

## Pages et routes

- `/` – **Accueil** avec présentation du projet, exemples de produits et le composant `ROIChart`.
- `/products` – **Produits** listant les articles imprimés disponibles.
- `/devenir-imprimeur` – **Devenir imprimeur** pour proposer sa machine et remplir le formulaire partenaire.
- `/contact` – **Contact** offrant un lien direct vers GitHub et les coordonnées principales.
- `/tos` – **Conditions d'utilisation** rappelant le caractère expérimental du site.

Les routes sont gérées dans `App.jsx` via React Router et sont préfixées par `/Morpho` lors du déploiement sur GitHub Pages.

## Composants principaux

- `Navbar` – barre de navigation située en haut de page.
- `Footer` – pied de page avec lien vers les conditions d'utilisation.
- `ROIChart` – graphique interactif utilisé sur la page d'accueil.

## Scripts disponibles

- `npm run dev` démarre le serveur de développement.
- `npm run build` génère la version de production dans `dist`.
- `npm run preview` lance un serveur local pour prévisualiser la build.

L'installation des dépendances requiert `npm install`.

## Déploiement GitHub Pages

Le fichier `vite.config.js` définit `base: '/Morpho/'` afin que les chemins fonctionnent correctement sur GitHub Pages. Après `npm run build`, publiez le contenu du dossier `dist` sur votre dépôt pour éviter les erreurs 404.

## Lancer le projet en local

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/LeaRiglet/Morpho.git
   cd Morpho
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```

Une fois le serveur lancé, ouvrez `http://localhost:5173` pour voir l'application.

## Contribuer

Les contributions sont bienvenues ! N'hésitez pas à ouvrir une issue ou proposer une pull request.
