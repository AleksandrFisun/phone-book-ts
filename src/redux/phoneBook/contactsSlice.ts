import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';

const initialState = {
  item: [],
  filter: '',
  getIsFetchAnswer: false,
};
const contactsSlice: any = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    setFilter(state: any, action: any) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [contactsOperations.getAllContacts.pending](state: any) {
      state.getIsFetchAnswer = true;
    },
    [contactsOperations.getAllContacts.fulfilled](state: any, action: any) {
      state.item = action.payload;
      state.getIsFetchAnswer = false;
    },
    [contactsOperations.getAllContacts.rejected](state: any) {
      state.getIsFetchAnswer = false;
    },
    //
    [contactsOperations.createNewContact.pending](state: any) {
      state.getIsFetchAnswer = true;
    },
    [contactsOperations.createNewContact.fulfilled](state: any, action: any) {
      state.item = [action.payload, ...state.item];
      state.getIsFetchAnswer = false;
    },
    [contactsOperations.createNewContact.rejected](state: any) {
      state.getIsFetchAnswer = false;
    },
    //
    [contactsOperations.deleteContact.pending](state: any) {
      state.getIsFetchAnswer = true;
    },
    [contactsOperations.deleteContact.fulfilled](state: any, action: any) {
      state.item = state.item.filter(
        (contact: any) => contact.id !== action.payload.id
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
