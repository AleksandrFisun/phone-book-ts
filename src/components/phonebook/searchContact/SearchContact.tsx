import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks';
import { nanoid } from 'nanoid';
import { setFilter } from 'redux/phoneBook/contactsSlice';
import {
  InputSearchContact,
  WrapperSearchContact,
} from './SearchContact.style';

export const SearchContact: React.FC = () => {
  const dispatch = useDispatch();
  const idSerachContact = nanoid();
  const { filter } = useContacts();

  return (
    <>
      <WrapperSearchContact>
        <label htmlFor={idSerachContact}>Find contacts by name</label>
        <InputSearchContact
          onChange={e =>
            dispatch(setFilter(e.target.value.toLowerCase().trim()))
          }
          value={filter}
          type="text"
          id={idSerachContact}
          placeholder="Search contact"
        />
      </WrapperSearchContact>
    </>
  );
};
