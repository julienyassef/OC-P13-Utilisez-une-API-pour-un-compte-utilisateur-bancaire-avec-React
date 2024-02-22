import { setAuthToken, signinSuccess } from '../action/authActions';
import { generateUserId } from '../utils/authUtils';
import { login, getUserProfile } from '../utils/apiService';

export const handleSignIn = async (username, password, dispatch) => {
  try {
    // Appel à la fonction de login du ApiService
    const loginResponse = await login(username, password);

    if (loginResponse.ok) {
      // Vérifier si la requête est réussie
      const jsonResponse = await loginResponse.json();

      if (loginResponse.status === 200) {
        // Si le statut est 200, la connexion a réussi
        if (jsonResponse.body.token) {
          // Si un token est présent dans la réponse
          const token = jsonResponse.body.token;
          dispatch(setAuthToken(token));

          // Récupérer les informations utilisateur avec le token
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
