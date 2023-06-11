import { createSlice } from '@reduxjs/toolkit';
import chatOperations from './chatOperations';
import { ChatInitialState } from 'components/Interface/Interface';

const initialState: ChatInitialState = {
  items: [],
  getIdMessage: '',
  isModal: true,
  fullScreen: true,
  writingMessage: false,
  getIsMessage: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    closeModal(state) {
      state.isModal = false;
    },
    onScreen(state) {
      state.fullScreen = !state.fullScreen;
    },
    writingMissage(state) {
      state.writingMessage = !state.writingMessage;
    },
  },
  extraReducers: builder => {
    builder.addCase(chatOperations.getAllMessage.pending, state => {
      state.getIsMessage = true;
    });
    builder.addCase(chatOperations.getAllMessage.fulfilled, (state, action) => {
      state.items = action.payload;
      state.getIsMessage = false;
    });
    builder.addCase(chatOperations.getAllMessage.rejected, state => {
      state.getIsMessage = false;
    });
    //
    builder.addCase(chatOperations.postMessage.pending, state => {
      state.getIsMessage = true;
    });
    builder.addCase(chatOperations.postMessage.fulfilled, state => {
      state.getIsMessage = false;
    });
    builder.addCase(chatOperations.postMessage.rejected, state => {
      state.getIsMessage = false;
    });
    //
    builder.addCase(chatOperations.getIdEdMessage.pending, state => {
      state.getIsMessage = true;
    });
    builder.addCase(
      chatOperations.getIdEdMessage.fulfilled,
      (state, action) => {
        state.getIdMessage = action.payload;
        state.getIsMessage = false;
      }
    );
    builder.addCase(chatOperations.getIdEdMessage.rejected, state => {
      state.getIsMessage = false;
    });
    //
    builder.addCase(chatOperations.editMessage.pending, state => {
      state.getIsMessage = true;
    });
    builder.addCase(chatOperations.editMessage.fulfilled, state => {
      state.getIdMessage = '';
      state.getIsMessage = false;
    });
    builder.addCase(chatOperations.editMessage.rejected, state => {
      state.getIsMessage = false;
    });
    //
  },
});

export const { closeModal, onScreen, writingMissage } = chatSlice.actions;
export default chatSlice.reducer;
