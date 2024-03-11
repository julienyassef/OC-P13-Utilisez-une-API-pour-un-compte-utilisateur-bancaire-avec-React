

export const signinRequest = (email, password) => {
  return {
    type: 'SIGNIN_REQUEST',
    payload: { email, password },
  };
};

export const signinSuccess = (userData) => {
  return {
    type: 'SIGNIN_SUCCESS',
    payload: userData,
  };
};

export const signinError = (error) => {
  return {
    type: 'SIGNIN_ERROR',
    payload: error,
  };
};

export const setAuthToken = (token) => ({
  type: 'SET_AUTH_TOKEN',
  payload: token,
});

export const signOut = () => ({
  type: 'SIGN_OUT',
});

export const updateUserProfile = (firstName, lastName) => ({
  type: 'UPDATE_USER_PROFILE',
  payload: { firstName, lastName },
});
