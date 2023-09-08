import axios from 'axios';

// l'idée c'est de créer une instance d'axios préconfigurée que l'on pourra
// utiliser partout dans notre code

// on crée une instance avec une URL de base, on aura juste à compléter l'URL au
// besoin, lorsqu'on effectuera des requêtes ex : axiosInstance.get('/.....')
// fera une requete sur ...
const axiosInstance = axios.create({
  // J'importe la variable d'environnement REACT_APP_SERVER_URL qui contient
  // l'URL du serveur.Elle est situé dans le fichier .env à la racine du projet
  // Attention sur VITE, il faut utiliser import.meta.env
  // et non process.env et mettre VITE devant le nom de la variable et non REACT_APP
  withCredentials: true,
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export default axiosInstance;
