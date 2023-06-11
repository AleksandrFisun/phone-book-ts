import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import contactsSlice from './phoneBook/contactsSlice';
import chatSlice from './chat/chatSlice';

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

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const phoneBookPersistConfig = {
  key: 'phoneBook',
  storage,
  whitelist: ['token'],
};

const chatPersistConfig = {
  key: 'chat',
  storage,
  blacklist: ['isModal', 'fullScreen', 'writingMessage', 'getIdMessage'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    phonebook: persistReducer(phoneBookPersistConfig, contactsSlice),
    chat: persistReducer(chatPersistConfig, chatSlice),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export let persistor = persistStore(store);
