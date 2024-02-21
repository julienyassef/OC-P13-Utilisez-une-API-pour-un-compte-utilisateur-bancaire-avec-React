// Fonction pour récupérer les informations de l'utilisateur du backend
export const fetchUserData = async (token) => {
    // try {
    //   const userDataResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
    //     method: "GET",
    //     headers: {
    //       "Authorization": `Bearer ${token}`,
    //     },
    //   });
  
    //   if (userDataResponse.ok) {
    //     const userData = await userDataResponse.json();
    //     return { firstName: userData.firstName, lastName: userData.lastName };
    //   } else {
    //     console.log('Échec de la récupération des informations de l\'utilisateur');
    //     return {};
    //   }
    // } catch (error) {
    //   console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
    //   return {};
    // }
    return { firstName: "Tony", lastName: "Stark" };
  };
  
  
  // Fonction pour générer un identifiant pour l'utilisateur 
 export function generateUserId(firstName, lastName, token) {
    // Extraire la première lettre du prénom et du nom
    const userId = `${firstName.substring(0, 1)}${lastName.substring(0, 1)}`;

    return userId;
}
