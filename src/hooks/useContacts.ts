import { useSelector } from 'react-redux';
import {
  selectIsItem,
  selectIsFilter,
  selectIsRefreshing,
} from 'redux/phoneBook/contactsSelectors';

export const useContacts = () => {
  const item = useSelector(selectIsItem);
  const isRefreshing = useSelector(selectIsRefreshing);
  const filter = useSelector(selectIsFilter);

  return {
    item,
    isRefreshing,
    filter,
  };
};
// import { useContacts } from 'hooks';
// const { item, isRefreshing,filter } = useContacts();
