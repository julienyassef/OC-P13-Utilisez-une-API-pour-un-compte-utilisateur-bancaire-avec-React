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
