import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from 'redux/store';

import {
  selectIsItem,
  selectIsFilter,
  selectIsRefreshing,
} from 'redux/phoneBook/contactsSelectors';
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useContacts = () => {
  const item = useAppSelector(selectIsItem);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const filter = useAppSelector(selectIsFilter);

  return {
    item,
    isRefreshing,
    filter,
  };
};
// import { useContacts } from 'hooks';
// const { item, isRefreshing,filter } = useContacts();
