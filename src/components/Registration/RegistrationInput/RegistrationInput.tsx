import { nanoid } from 'nanoid';
import { PropsRegister } from 'components/Interface/Interface';
import {
  InputWrapper,
  InputContainer,
  Input,
  Label,
  User,
  Email,
  Password,
} from './RegistrationInput.style';

const RegistartionInput: React.FC<PropsRegister> = ({
  onChanges,
  name,
  email,
  password,
}) => {
  let contactNameId = nanoid();
  let contactEmailId = nanoid();
  let contactPasswordId = nanoid();

  return (
    <>
      <InputWrapper>
        <Label htmlFor={contactNameId}>Name</Label>
        <InputContainer>
          <User />
          <Input
            type="text"
            name="name"
            onChange={onChanges()}
            value={name}
            id={contactNameId}
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputContainer>
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor={contactEmailId}>Email</Label>
        <InputContainer>
          <Email />
          <Input
            type="email"
            name="email"
            onChange={onChanges()}
            value={email}
            id={contactEmailId}
            placeholder="Email address"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
        </InputContainer>
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor={contactPasswordId}>Password</Label>
        <InputContainer>
          <Password />
          <Input
            type="password"
            name="password"
            onChange={onChanges()}
            value={password}
            id={contactPasswordId}
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
        </InputContainer>
      </InputWrapper>
    </>
  );
};
export default RegistartionInput;
