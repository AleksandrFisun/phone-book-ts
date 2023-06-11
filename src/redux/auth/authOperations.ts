import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
const userRegistration = createAsyncThunk(
  'auth/registration',
  async (credentials: object, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
const userLogin = createAsyncThunk(
  'auth/login',
  async (credentials: object, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
const logout = createAsyncThunk(
  'auth/logout',
  async (credentials: object, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/logout', credentials);
      token.unset();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
const checkAuth = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  const state: any = thunkApi.getState();
  const persistedToken: string = state.auth.token;
  if (persistedToken === null) {
    return thunkApi.rejectWithValue('error');
  }
  token.set(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error: any) {}
});
const authOperations: any = {
  userRegistration,
  userLogin,
  logout,
  checkAuth,
};

export default authOperations;
