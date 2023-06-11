import { BiSearchAlt2, BiExitFullscreen } from 'react-icons/bi';
import { Wrapper, List, Text, Item, Button } from './ChatHeadBar.style';
import { closeModal, onScreen } from 'redux/chat/chatSlice';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import chatOperations from 'redux/chat/chatOperations';
const ChatHeadBar: React.FC<any> = ({ nameChat }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Wrapper>
        <Text>
          {nameChat === 'online' && 'Онлайн-помічник'}
          {nameChat === 'writing' && 'Письмові відповіді'}
          {nameChat === 'technical-support' && 'Техпідтримка'}
          {nameChat === 'news' && 'Новини'}
        </Text>
        <List>
          <Item>
            <Button onClick={() => dispatch(chatOperations.getAllMessage())}>
              <BiSearchAlt2 />
            </Button>
          </Item>
          <Item>
            <Button onClick={() => dispatch(onScreen())}>
              <BiExitFullscreen />
            </Button>
          </Item>
          <Item>
            <Button onClick={() => dispatch(closeModal())}>
              <RxCross2 />
            </Button>
          </Item>
        </List>
      </Wrapper>
    </>
  );
};
export default ChatHeadBar;
