import { createSelector } from 'reselect';

export const selectUserToken = createSelector(
  state => state.auth.token,
  token => token
);

export const selectUserFirstName = createSelector(
  state => state.auth.firstName,
  firstName => firstName
);

export const selectUserLastName = createSelector(
  state => state.auth.lastName,
  lastName => lastName
);

export const selectUserId = createSelector(
  state => state.auth.id,
  id => id
);

export const selectUserError = createSelector(
  state => state.auth.error,
  error => error
);

export const selectUserIsConnected = createSelector(
  state => !!state.auth.token, // Convertit la valeur de token en un booléen (true si le token existe, false sinon)
  isConnected => isConnected
);
