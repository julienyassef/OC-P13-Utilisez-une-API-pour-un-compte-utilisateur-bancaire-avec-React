
import {setAuthToken, signinSuccess} from '../action/authActions';

import { generateUserId } from '../utils/authUtils';

import { login, getUserProfile} from '../utils/apiService';


export const handleSignIn = async (email, password, dispatch) => {
  try {
    // Appel à la fonction de login du ApiService
    const response = await login(email, password);

    if (response.body.token) {
      const token = response.body.token;
      dispatch(setAuthToken(token));
      
      // Récupération des informations utilisateur avec le token
      const userData = await getUserProfile(token);

      // Création d'un identifiant pour l'utilisateur 
      const userId = generateUserId(userData.firstName, userData.lastName);

      // Dispatch une action pour mettre à jour le state avec les informations de l'utilisateur
      dispatch(signinSuccess({ ...userData, userId }));

      return true; // Connexion réussie
    } else {
      console.log('Aucun token dans la réponse');
      return false; // Connexion échouée
    }
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    return false; // Connexion échouée
  }
};