export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;

export const selectUser = (state: any) => state.auth.user;

export const selectIsRefreshing = (state: any) => state.auth.getIsFetchAnswer;

export const selectIsToken = (state: any) => state.auth.token;
