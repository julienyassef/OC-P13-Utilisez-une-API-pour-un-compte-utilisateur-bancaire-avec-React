
import {setAuthToken, signinSuccess} from '../action/authActions';

import { fetchUserData } from '../utils/authUtils';
import { generateUserId } from '../utils/authUtils';


export const handleSignIn = async (username, password, dispatch) => {
  try {
    const data = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    });

    if (data.ok) {
      // console.log('Requête réussie');

      if (data.status === 200) {
        const response = await data.json();

        if (response.body.token) {
          const token = response.body.token;
          // console.log('Token obtenu:', token);

          dispatch(setAuthToken(token));
         
          // Récupérer les autres informations de l'utilisateur avec le token
          const userData = await fetchUserData(token);
          // console.log('Informations utilisateur:', userData);
    
          // Créer un identifiant pour l'utilisateur 
          const userId = generateUserId(userData.firstName, userData.lastName);
          // console.log("id:", userId)

          // Dispatch une action pour mettre à jour le state avec les informations de l'utilisateur
          dispatch(signinSuccess({ ...userData, userId }));
          

          return true; // Connexion réussie
        } else {
          console.log('Aucun token dans la réponse');
          return false; // Connexion échouée
        }
      } else {
        console.log('Statut de réponse non-200');
        return false; // Connexion échouée
      }
    } else {
      console.log('Échec de la requête');
      return false; // Connexion échouée
    }
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    return false; // Connexion échouée
  }
};
