import {
  AuthUser,
  AuthToken,
  AuthIsLoggedIn,
  AuthGetIsFetchAnswer,
} from 'components/Interface/Interface';

export const selectIsLoggedIn = (state: AuthIsLoggedIn) =>
  state.auth.isLoggedIn;

export const selectUser = (state: AuthUser) => state.auth.user;

export const selectIsRefreshing = (state: AuthGetIsFetchAnswer) =>
  state.auth.getIsFetchAnswer;

export const selectIsToken = (state: AuthToken) => state.auth.token;
