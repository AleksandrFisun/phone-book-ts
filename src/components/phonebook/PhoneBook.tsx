import { Section, Wrapper } from './PhoneBook.style';
import { FormContact } from './formContact/FormContact';
import { SearchContact } from './searchContact/SearchContact';
import { ListContact } from './listContact/ListContact';

const PhoneBook: React.FC = () => {
  return (
    <>
      <Section>
        <Wrapper>
          <FormContact />
          <SearchContact />
          <ListContact />
        </Wrapper>
      </Section>
    </>
  );
};
export default PhoneBook;
