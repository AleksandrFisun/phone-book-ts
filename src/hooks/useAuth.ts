import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from 'redux/store';

import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsToken,
} from 'redux/auth/authSelectors';
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAuth = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const user = useAppSelector(selectUser);
  const token = useAppSelector(selectIsToken);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    token,
  };
};
// import { useAuth } from 'hooks';
// const { isRefreshing, isLoggedIn,user } = useAuth();
