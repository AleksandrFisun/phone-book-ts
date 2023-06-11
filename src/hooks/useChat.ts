import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from 'redux/store';

import {
  selectIsOpenModal,
  selectIsFullScreen,
  selectIsWritingMessage,
  selectIsItems,
  selectIsGetMessage,
  selectIsGetIdMessage,
} from 'redux/chat/chatSelectors';
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useChat = () => {
  const modalState = useAppSelector(selectIsOpenModal);
  const fullScreen = useAppSelector(selectIsFullScreen);
  const onWritingMessage = useAppSelector(selectIsWritingMessage);
  const items = useAppSelector(selectIsItems);
  const pendingMessage = useAppSelector(selectIsGetMessage);
  const getIdMessage = useAppSelector(selectIsGetIdMessage);

  return {
    modalState,
    fullScreen,
    onWritingMessage,
    items,
    pendingMessage,
    getIdMessage,
  };
};

// import { useAuth } from 'hooks';
// const { isRefreshing, isLoggedIn,user,onWritingMessage,editMessage } = useAuth();
