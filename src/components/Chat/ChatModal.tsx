import { createPortal } from 'react-dom';
import { useState } from 'react';
import {
  ModalBасkdrор,
  ModalContent,
  Wrapper,
  ChatBody,
} from 'components/Chat/ChatModal.style';
import Online from 'components/Chat/Online/Online';
import Writing from 'components/Chat/Writing/Writing';
import News from 'components/Chat/News/News';
import ChatBar from 'components/Chat/ChatBar/ChatBar';
import ChatHeadBar from 'components/Chat/ChatHeadBar/ChatHeadBar';
import { useChat } from 'hooks';
import TechnicalSupport from 'components/Chat/TechnicalSupport/TechnicalSupport';
const modalRoot = document.querySelector('#modal-root');

const Chat = () => {
  const [activeButton, setActiveButton] = useState('online');
  const { fullScreen } = useChat();

  const onButtonName = (e: React.ChangeEvent<HTMLFormElement>) => {
    const active = e.currentTarget.name;
    if (active) {
      setActiveButton(active);
    }
  };

  if (!modalRoot) {
    return modalRoot;
  }
  return createPortal(
    <>
      <ModalBасkdrор props={fullScreen}>
        <ModalContent>
          <Wrapper>
            <ChatBar onActiveButton={onButtonName} />
            <ChatBody props={fullScreen}>
              <ChatHeadBar nameChat={activeButton} />
              {activeButton === 'online' && <Online />}
              {activeButton === 'writing' && <Writing />}
              {activeButton === 'technical-support' && <TechnicalSupport />}
              {activeButton === 'news' && <News />}
            </ChatBody>
          </Wrapper>
        </ModalContent>
      </ModalBасkdrор>
    </>,
    modalRoot
  );
};
export default Chat;
