import { setAuthToken, signinSuccess, setRememberMe } from '../store/action/authActions';
import { login, getUserProfile } from '../utils/apiService';


export const handleSignIn = async (username, password, rememberMe, dispatch) => {
  // console.log('Valeur de Remember Me reçue dans handleSignIn :', rememberMe);

  try {
    // Appel à la fonction de login du ApiService
    const loginResponse = await login(username, password);

    if (loginResponse.status === 200) {

      
      const token = loginResponse.body.token;
   
      // Récupérer les informations utilisateur avec le token
      const userData = await getUserProfile(token);

      if (userData.status === 200) {

        dispatch(setRememberMe(rememberMe));

        dispatch(setAuthToken(token));

        // Dispatch une action pour mettre à jour le state avec les informations de l'utilisateur
        dispatch(signinSuccess({ ...userData }));

        return true
      } else {
        console.log('token non valide')
        return false;
      }
    } else {
      console.log('Statut de réponse non-200');
      return false; // Connexion échouée
    }
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    return false; // Connexion échouée
  }
};
