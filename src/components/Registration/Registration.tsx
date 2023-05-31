import RegistrationForm from 'components/Registration/RegistrationForm/RegistrationForm';
import { Section, FormWrapper } from './Registration.style';
const Registration: React.FC = () => {
  return (
    <Section>
      <FormWrapper>
        <RegistrationForm />
      </FormWrapper>
    </Section>
  );
};
export default Registration;
