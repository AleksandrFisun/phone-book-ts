import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from 'redux/store';

import {
  selectIsOpenModal,
  selectIsFullScreen,
  selectIsWritingMessage,
} from 'redux/chat/chatSelectors';
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useChat = () => {
  const modalState = useAppSelector(selectIsOpenModal);
  const fullScreen = useAppSelector(selectIsFullScreen);
  const onWritingMessage = useAppSelector(selectIsWritingMessage);

  return {
    modalState,
    fullScreen,
    onWritingMessage,
  };
};

// import { useAuth } from 'hooks';
// const { isRefreshing, isLoggedIn,user,onWritingMessage } = useAuth();
