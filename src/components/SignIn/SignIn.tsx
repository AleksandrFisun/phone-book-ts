import SignInForm from 'components/SignIn/SignInForm/SignInFrom';
import { Section, FormWrapper } from './SignIn.style';
const SignIn: React.FC = () => {
  return (
    <Section>
      <FormWrapper>
        <SignInForm />
      </FormWrapper>
    </Section>
  );
};
export default SignIn;
