import { useChat } from 'hooks';
import WritingInitials from './WritingChek/WritingInitials';
import FormWriting from './FormWriting/FormWriting';
import { Wrapper } from './Writing.style';

const Writing = () => {
  const { onWritingMessage } = useChat();

  return (
    <>
      <Wrapper props={!onWritingMessage}>
        {!onWritingMessage && <WritingInitials />}
        {onWritingMessage && <FormWriting />}
      </Wrapper>
    </>
  );
};

export default Writing;
