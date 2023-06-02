import { NavigateChat, Button, List, ItemTop } from './ChatBar.style';
import {
  MdOutlineMessage,
  MdOutlineNewspaper,
  MdAttachEmail,
} from 'react-icons/md';
import { LuListChecks } from 'react-icons/lu';
import { BiSupport } from 'react-icons/bi';
const ChatBar: React.FC<any> = ({ onActiveButton }) => {
  return (
    <>
      <NavigateChat>
        <List>
          <ItemTop>
            <Button onClick={onActiveButton} name="online">
              <MdOutlineMessage /> <span>Онлайн</span>
            </Button>
          </ItemTop>
          <ItemTop>
            <Button onClick={onActiveButton} name="writing">
              <MdAttachEmail /> <span>Письмово</span>
            </Button>
          </ItemTop>
          <ItemTop>
            <Button onClick={onActiveButton} name="technical-support">
              <BiSupport />
              <span>Техпідтримка</span>
            </Button>
          </ItemTop>
          <ItemTop>
            <Button onClick={onActiveButton} name="news">
              <MdOutlineNewspaper />
              <span>Новини</span>
            </Button>
          </ItemTop>
        </List>
        <List>
          <li>
            <Button>
              <LuListChecks />
            </Button>
          </li>
          <li>
            <Button>
              <span>Правила роботи експертів</span>
            </Button>
          </li>
        </List>
      </NavigateChat>
    </>
  );
};

export default ChatBar;
