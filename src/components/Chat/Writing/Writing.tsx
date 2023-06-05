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
  NewMessageHeadWrapp,
  NewMessageHeadLabel,
  NewMessageForm,
  NewMessageBodyForm,
  NewMessageHeadButton,
  NewMessageBodyText,
  NewMessageFooterForm,
  NewMessageFooterWrapperInput,
  NewMessageFooterLabel,
  NewMessageFooterInput,
  NewMessageFooterInputCode,
  NewMessageFooterContainInput,
  NewMessageFooterButton,
} from './Writing.style';

const Writing = () => {
  const dispatch = useDispatch();
  const { onWritingMessage } = useChat();
  const writingInputMessageId = nanoid();
  const writingInputNumberId = nanoid();

  return (
    <>
      <Wrapper props={!onWritingMessage}>
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
          <NewMessageForm action="">
            <NewMessageBodyForm>
              <NewMessageHeadWrapp>
                <NewMessageHeadLabel htmlFor={writingInputMessageId}>
                  Поставте запитання експерту системи
                </NewMessageHeadLabel>
                <NewMessageHeadButton
                  type="button"
                  onClick={() => dispatch(writingMissage())}
                >
                  Скасувати
                </NewMessageHeadButton>
              </NewMessageHeadWrapp>
              <NewMessageBodyText
                placeholder="Ведiть текст"
                id={writingInputMessageId}
              />
            </NewMessageBodyForm>
            <NewMessageFooterForm>
              <NewMessageFooterWrapperInput>
                <NewMessageFooterLabel htmlFor={writingInputNumberId}>
                  Телефон
                </NewMessageFooterLabel>
                <NewMessageFooterContainInput>
                  <NewMessageFooterInput
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    id={writingInputNumberId}
                  />
                  <NewMessageFooterInputCode>+380</NewMessageFooterInputCode>
                </NewMessageFooterContainInput>
              </NewMessageFooterWrapperInput>
              <NewMessageFooterButton type="submit">
                Надіслати
              </NewMessageFooterButton>
            </NewMessageFooterForm>
          </NewMessageForm>
        )}
      </Wrapper>
    </>
  );
};

export default Writing;
