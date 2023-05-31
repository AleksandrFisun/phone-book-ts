import PropTypes from 'prop-types';
import { useContacts } from 'hooks';
import contactsOperations from 'redux/phoneBook/contactsOperations';
import { useDispatch } from 'react-redux';
import { PropsItemContacts } from 'components/Interface/Interface';
import {
  Item,
  Span,
  ButtonDel,
  ButtonWrapper,
  ContactContent,
} from './itemContact.styled';

const ItemContact: React.FC<PropsItemContacts> = ({ name, number, id }) => {
  const { isRefreshing } = useContacts();
  const dispatch = useDispatch();

  return (
    <>
      <Item>
        <ContactContent id={id}>
          <Span>{name}</Span>
        </ContactContent>
        <ContactContent>
          <Span>{number}</Span>
        </ContactContent>
        <ContactContent>
          <ButtonDel
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
            disabled={isRefreshing}
          >
            <ButtonWrapper>
              <span>Delete</span>
            </ButtonWrapper>
          </ButtonDel>
        </ContactContent>
      </Item>
    </>
  );
};
export default ItemContact;
ItemContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
