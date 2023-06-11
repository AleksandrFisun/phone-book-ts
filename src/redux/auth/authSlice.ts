import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';
import { AuthInitialState } from 'components/Interface/Interface';

const initialState: AuthInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  getIsFetchAnswer: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(
      authOperations.userRegistration.pending,
      (state: AuthInitialState) => {
        state.getIsFetchAnswer = true;
      }
    );
    builder.addCase(
      authOperations.userRegistration.fulfilled,
      (state: AuthInitialState, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.getIsFetchAnswer = false;
      }
    );
    builder.addCase(
      authOperations.userRegistration.rejected,
      (state: AuthInitialState) => {
        state.isLoggedIn = false;
        state.getIsFetchAnswer = false;
      }
    );
    //
    builder.addCase(
      authOperations.userLogin.pending,
      (state: AuthInitialState) => {
        state.getIsFetchAnswer = true;
      }
    );
    builder.addCase(
      authOperations.userLogin.fulfilled,
      (state: AuthInitialState, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.getIsFetchAnswer = false;
      }
    );
    builder.addCase(
      authOperations.userLogin.rejected,
      (state: AuthInitialState) => {
        state.isLoggedIn = false;
        state.getIsFetchAnswer = false;
      }
    );
    //

    builder.addCase(
      authOperations.logout.pending,
      (state: AuthInitialState) => {
        state.getIsFetchAnswer = true;
      }
    );
    builder.addCase(
      authOperations.logout.fulfilled,
      (state: AuthInitialState) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.getIsFetchAnswer = false;
      }
    );
    builder.addCase(
      authOperations.logout.rejected,
      (state: AuthInitialState) => {
        state.getIsFetchAnswer = false;
      }
    );
    //
    builder.addCase(
      authOperations.checkAuth.pending,
      (state: AuthInitialState) => {
        state.getIsFetchAnswer = true;
      }
    );
    builder.addCase(
      authOperations.checkAuth.fulfilled,
      (state: AuthInitialState, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.getIsFetchAnswer = false;
      }
    );
    builder.addCase(
      authOperations.checkAuth.rejected,
      (state: AuthInitialState) => {
        state.getIsFetchAnswer = false;
      }
    );
  },
});

export default authSlice.reducer;
