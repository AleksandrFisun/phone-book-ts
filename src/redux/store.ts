import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import contactsSlice from './phoneBook/contactsSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig: any = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const phoneBookPersistConfig: any = {
  key: 'phoneBook',
  storage,
  whitelist: ['token'],
};

export const store: any = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    phonebook: persistReducer(phoneBookPersistConfig, contactsSlice),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
