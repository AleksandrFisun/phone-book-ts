import { useState } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from 'redux/phoneBook/contactsOperations';
import { useContacts } from 'hooks';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { Input, Button, Form, WrapperLabelInput } from './FormContact.styled';

export const FormContact: React.FC = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const { item } = useContacts();
  let contactNameId = nanoid();
  let contactNumberId = nanoid();
  const filteredContacts = item?.filter(
    (contact: any) =>
      contact.name && contact.name.toLowerCase().includes(name.toLowerCase())
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (filteredContacts.length > 0) {
      return toast.warn(
        '💩 There is already a contact with that name. Correct the entered name!'
      );
    }
    dispatch(contactsOperations.createNewContact({ name, number }));
    toast.success(`💪 Contact (${name}) added successfully !`);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <h2>Phone Book</h2>
      <WrapperLabelInput>
        <label htmlFor={contactNameId}>Name</label>
        <Input
          onChange={onChange}
          value={name}
          type="text"
          name="name"
          id={contactNameId}
          placeholder="Aleksandr"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </WrapperLabelInput>
      <WrapperLabelInput>
        <label htmlFor={contactNumberId}>Number</label>
        <Input
          onChange={onChange}
          value={number}
          type="tel"
          name="number"
          id={contactNumberId}
          placeholder="+380956888227"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </WrapperLabelInput>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
