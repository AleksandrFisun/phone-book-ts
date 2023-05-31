import { useState } from 'react';
import RegistartionInput from '../RegistrationInput/RegistrationInput';
import { Form, NavigateLink, Button } from './RegistrationForm.style';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

const RegistrationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmitFormReg = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authOperations.userRegistration({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
    }
  };
  return (
    <>
      <h2>Registartion</h2>
      <Form onSubmit={onSubmitFormReg}>
        <div>
          <RegistartionInput
            onChanges={changeInput}
            name={name}
            email={email}
            password={password}
          />
        </div>
        <Button type="submit">Registration</Button>
      </Form>
      <div>
        <span>Already registered? Go to</span>
        <NavigateLink to="/sign-in">Sign In</NavigateLink>
      </div>
    </>
  );
};
export default RegistrationForm;
