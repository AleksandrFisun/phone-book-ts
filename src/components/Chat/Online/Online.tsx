import { nanoid } from 'nanoid';
import { MdOutlineAttachFile, MdSend } from 'react-icons/md';
import MessageChat from './Message/MessageChat';
import { InputFile, Label, Form, Wrapper, Button, Input } from './Online.style';
const Online = () => {
  let chatInputId = nanoid();
  return (
    <>
      <MessageChat />
      <Wrapper>
        <Form action="">
          <Input type="text" placeholder="Повідомлення" />
          <Label htmlFor={chatInputId}>
            <MdOutlineAttachFile />
          </Label>
          <InputFile type="file" id={chatInputId} />

          <Button type="submit">
            <MdSend />
          </Button>
        </Form>
      </Wrapper>
    </>
  );
};

export default Online;
