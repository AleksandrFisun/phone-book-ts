export const selectIsOpenModal = (state: { chat: { isModal: boolean } }) =>
  state.chat.isModal;
export const selectIsFullScreen = (state: { chat: { fullScreen: boolean } }) =>
  state.chat.fullScreen;
export const selectIsWritingMessage = (state: {
  chat: { writingMessage: boolean };
}) => state.chat.writingMessage;

export const selectIsItems = (state: { chat: { items: [] } }) =>
  state.chat.items;

export const selectIsGetMessage = (state: {
  chat: { getIsMessage: boolean };
}) => state.chat.getIsMessage;

export const selectIsGetIdMessage = (state: {
  chat: { getIdMessage: string };
}) => state.chat.getIdMessage;
