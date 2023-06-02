import { createSlice } from '@reduxjs/toolkit';
// import contactsOperations from './chatOperations';
import { ChatInitialState } from 'components/Interface/Interface';

const initialState: ChatInitialState = {
  isModal: true,
  fullScreen: true,
  writingMessage: false,
};
const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    closeModal(state): any {
      state.isModal = false;
    },
    onScreen(state): any {
      state.fullScreen = !state.fullScreen;
    },
    writingMissage(state): any {
      state.writingMessage = !state.writingMessage;
    },
  },
});

export const { closeModal, onScreen, writingMissage } = chatSlice.actions;
export default chatSlice.reducer;
