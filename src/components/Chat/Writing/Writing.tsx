import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useChat } from 'hooks';
import { LuMailOpen } from 'react-icons/lu';
import { TfiPencil } from 'react-icons/tfi';
import { writingMissage } from 'redux/chat/chatSlice';
import {
  Wrapper,
  NewMessageWrapper,
  NewMessageTitle,
  NewMessageIcon,
  NewMessageText,
  NewMessageButton,
  NewMessageButtonIcon,
  NewMessageButtonText,
} from './Writing.style';

const Writing = () => {
  const dispatch = useDispatch();
  const { onWritingMessage } = useChat();
  const writingInputMessageId = nanoid();
  const writingInputNumberId = nanoid();

  return (
    <>
      <Wrapper>
        {!onWritingMessage && (
          <NewMessageWrapper>
            <NewMessageIcon>
              <LuMailOpen />
            </NewMessageIcon>
            <NewMessageTitle>
              Ви поки не отримали жодної письмової відповіді
            </NewMessageTitle>
            <NewMessageText>
              Письмові консультації від експерта Системи Expertus Кадри.
            </NewMessageText>
            <NewMessageButton
              type="button"
              onClick={() => dispatch(writingMissage())}
            >
              <NewMessageButtonIcon>
                <TfiPencil />
              </NewMessageButtonIcon>
              <NewMessageButtonText>Поставити запитання</NewMessageButtonText>
            </NewMessageButton>
          </NewMessageWrapper>
        )}
        {onWritingMessage && (
          <form action="">
            <div>
              <div>
                <label htmlFor={writingInputMessageId}>
                  Поставте запитання експерту системи
                </label>
                <button
                  type="button"
                  onClick={() => dispatch(writingMissage())}
                >
                  Скасувати
                </button>
              </div>
              <input type="text" id={writingInputMessageId} />
            </div>
            <div>
              <label htmlFor={writingInputNumberId}></label>
              <input type="phone" id={writingInputNumberId} />
              <button type="submit">Надіслати</button>
            </div>
          </form>
        )}
      </Wrapper>
    </>
  );
};

export default Writing;
