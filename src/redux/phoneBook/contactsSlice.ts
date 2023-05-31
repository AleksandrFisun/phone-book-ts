import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';
import { ContactsInitialState } from 'components/Interface/Interface';

const initialState: ContactsInitialState = {
  item: [],
  filter: '',
  getIsFetchAnswer: false,
};
const contactsSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    setFilter(state, { payload }): void {
      state.filter = payload;
    },
  },
  extraReducers: {
    [contactsOperations.getAllContacts.pending](state) {
      state.getIsFetchAnswer = true;
    },
    [contactsOperations.getAllContacts.fulfilled](state, { payload }) {
      state.item = payload;
      state.getIsFetchAnswer = false;
    },
    [contactsOperations.getAllContacts.rejected](state) {
      state.getIsFetchAnswer = false;
    },
    //
    [contactsOperations.createNewContact.pending](state) {
      state.getIsFetchAnswer = true;
    },
    [contactsOperations.createNewContact.fulfilled](state: any, { payload }) {
      state.item = [payload, ...state.item];
      state.getIsFetchAnswer = false;
    },
    [contactsOperations.createNewContact.rejected](state) {
      state.getIsFetchAnswer = false;
    },
    //
    [contactsOperations.deleteContact.pending](state) {
      state.getIsFetchAnswer = true;
    },
    [contactsOperations.deleteContact.fulfilled](state: any, { payload }: any) {
      state.item = state.item.filter(
        (contact: any) => contact.id !== payload.id
      );
      state.getIsFetchAnswer = false;
    },
    [contactsOperations.deleteContact.rejected](state: any) {
      state.getIsFetchAnswer = false;
    },
  },
});
export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
