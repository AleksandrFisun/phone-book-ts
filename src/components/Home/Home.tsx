import { Section, Wrapper, Text } from './Home.style';
const Home: React.FC = () => {
  return (
    <Section>
      <Wrapper>
        <Text>
          Welcome to the "Air Contact" application!<br></br> <br></br>We are
          delighted to welcome you to our user-friendly and intuitive web
          application. "Contacts Book" will help you efficiently manage your
          contacts and keep important information in one place.<br></br>
          <br></br> Create new contacts, store their names, phone numbers, email
          addresses, and other useful details. You'll be able to easily find the
          desired contact, use various filters and categories for convenient
          sorting and searching.<br></br>
          <br></br> We are confident that "Contacts Book" will become your
          reliable tool for organizing and storing all your contacts. If you
          have any questions or need assistance, our support team is always
          ready to help you.<br></br>
          <br></br> We hope you will enjoy using our application. Wishing you
          success and productive time with the "Air Contact"!<br></br>
          <br></br> Best regards, The "Air Contact" Team
        </Text>
      </Wrapper>
    </Section>
  );
};
export default Home;
