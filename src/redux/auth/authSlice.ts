import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState: any = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  getIsFetchAnswer: false,
};
const authSlice: any = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: {
    [authOperations.userRegistration.pending](state: any) {
      state.getIsFetchAnswer = true;
    },
    [authOperations.userRegistration.fulfilled](state: any, action: any) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.getIsFetchAnswer = false;
    },
    [authOperations.userRegistration.rejected](state: any) {
      state.isLoggedIn = false;
      state.getIsFetchAnswer = false;
    },
    //
    [authOperations.userLogin.pending](state: any) {
      state.getIsFetchAnswer = true;
    },
    [authOperations.userLogin.fulfilled](state: any, action: any) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.getIsFetchAnswer = false;
    },
    [authOperations.userLogin.rejected](state: any) {
      state.isLoggedIn = false;
      state.getIsFetchAnswer = false;
    },
    //
    [authOperations.logout.pending](state: any) {
      state.getIsFetchAnswer = true;
    },
    [authOperations.logout.fulfilled](state: any) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.getIsFetchAnswer = false;
    },
    [authOperations.logout.rejected](state: any) {
      state.getIsFetchAnswer = false;
    },
    //
    [authOperations.checkAuth.pending](state: any) {
      state.getIsFetchAnswer = true;
    },
    [authOperations.checkAuth.fulfilled](state: any, action: any) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.getIsFetchAnswer = false;
    },
    [authOperations.checkAuth.rejected](state: any) {
      state.getIsFetchAnswer = false;
    },
  },
});

export default authSlice.reducer;
