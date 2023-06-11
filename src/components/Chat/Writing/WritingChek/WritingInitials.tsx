import { useDispatch } from 'react-redux';
import { writingMissage } from 'redux/chat/chatSlice';
import {
  NewMessageWrapper,
  NewMessageTitle,
  NewMessageIcon,
  NewMessageText,
  NewMessageButton,
  NewMessageButtonIcon,
  NewMessageButtonText,
} from './WritingInitials.style';
import { LuMailOpen } from 'react-icons/lu';
import { TfiPencil } from 'react-icons/tfi';
const WritingInitials = () => {
  const dispatch = useDispatch();
  return (
    <>
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
    </>
  );
};
export default WritingInitials;
