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
  extraReducers: builder => {
    builder.addCase(contactsOperations.getAllContacts.pending, state => {
      state.getIsFetchAnswer = true;
    });
    builder.addCase(
      contactsOperations.getAllContacts.fulfilled,
      (state, { payload }) => {
        state.item = payload;
        state.getIsFetchAnswer = false;
      }
    );
    builder.addCase(contactsOperations.getAllContacts.rejected, state => {
      state.getIsFetchAnswer = false;
    });
    //
    builder.addCase(contactsOperations.createNewContact.pending, state => {
      state.getIsFetchAnswer = true;
    });
    builder.addCase(
      contactsOperations.createNewContact.fulfilled,
      (state: any, { payload }: any) => {
        state.item = [payload, ...state.item];
        state.getIsFetchAnswer = false;
      }
    );
    builder.addCase(contactsOperations.createNewContact.rejected, state => {
      state.getIsFetchAnswer = false;
    });
    //
    builder.addCase(contactsOperations.deleteContact.pending, state => {
      state.getIsFetchAnswer = true;
    });
    builder.addCase(
      contactsOperations.deleteContact.fulfilled,
      (state: any, { payload }: any) => {
        state.item = state.item.filter(
          (contact: any) => contact.id !== payload.id
        );
        state.getIsFetchAnswer = false;
      }
    );
    builder.addCase(contactsOperations.deleteContact.rejected, state => {
      state.getIsFetchAnswer = false;
    });
  },
});
export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
