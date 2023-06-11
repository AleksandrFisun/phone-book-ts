import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { writingMissage } from 'redux/chat/chatSlice';
import { useAuth } from 'hooks';
import chatOperations from 'redux/chat/chatOperations';
import {
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
} from './FormWriting.style';

const FormWriting = () => {
  const [write, setWrite] = useState('');
  const [number, setNumber] = useState('');
  const {
    user: { name, email },
  } = useAuth();
  const dispatch = useDispatch();

  const writingInputMessageId = nanoid();
  const writingInputNumberId = nanoid();

  const SubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const credentials = {
      service_id: 'service_sfko66o',
      template_id: 'template_zf44a5d',
      user_id: 'K9ETKvRpvnry0KdKT',
      template_params: {
        username: name,
        email: email,
        phoneNumber: number,
        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...',
        message: write,
      },
    };
    chatOperations.supportWriting(credentials);
    setWrite('');
    setNumber('');
  };

  return (
    <>
      <NewMessageForm onSubmit={SubmitForm}>
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
            onChange={e => setWrite(e.target.value)}
            value={write}
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
                value={number}
                onChange={e => setNumber(() => e.target.value)}
                type="tel"
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
    </>
  );
};
export default FormWriting;
