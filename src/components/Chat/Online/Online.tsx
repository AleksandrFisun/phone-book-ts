import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { MdOutlineAttachFile, MdSend } from 'react-icons/md';
import MessageChat from './Message/MessageChat';
import { useAuth, useChat } from 'hooks';
import { EditorTim } from './EditorTim/EditorTim';
import chatOperations from 'redux/chat/chatOperations';
import { InputFile, Label, Form, Wrapper, Button } from './Online.style';

const Online: React.FC = () => {
  const {
    user: { name },
  } = useAuth();
  const { getIdMessage } = useChat();
  const [messageChat, setMessageChat] = useState(``);
  const [idMessage, setIdMessage] = useState(``);
  const dispatch = useDispatch();
  let chatInputId = nanoid();

  useEffect(() => {
    setMessageChat(getIdMessage);
  }, [getIdMessage]);

  const onSubmitMessage = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (messageChat.length === 0) {
      return toast.warn(
        '💩 You have not written anything, the message cannot be empty!'
      );
    }
    if (idMessage.length !== 0) {
      dispatch(
        chatOperations.editMessage({
          id: idMessage,
          message: ` <span id=${name}>${messageChat}</span> `,
        })
      );
      setIdMessage('');
      setMessageChat('');
      setTimeout(() => dispatch(chatOperations.getAllMessage()), 2000);
      return;
    }
    dispatch(
      chatOperations.postMessage({
        userName: name,
        message: ` <span id=${name}>${messageChat}</span> `,
      })
    );
    setMessageChat('');
    setTimeout(() => dispatch(chatOperations.getAllMessage()), 2000);
  };

  const onDeleteMessage = (id: string) => {
    dispatch(chatOperations.deleteMessage(id));
    setTimeout(() => dispatch(chatOperations.getAllMessage()), 2000);
  };

  const onEditMessage = (id: string) => {
    setIdMessage(id);
    dispatch(chatOperations.getIdEdMessage(id));
  };

  const onChangeInput = (value: any) => {
    setMessageChat(value);
  };

  return (
    <>
      <MessageChat
        onEditMessage={onEditMessage}
        onDeleteMessage={onDeleteMessage}
      />
      <Wrapper>
        <Form onSubmit={onSubmitMessage}>
          <EditorTim editor={onChangeInput} value={messageChat} />

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
