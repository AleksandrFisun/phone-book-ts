import { MessageList, Message, MessageItem } from './MessageChat.style';
const MessageChat = () => {
  return (
    <MessageList>
      <MessageItem>
        <Message>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum odio
          modi harum aut nemo consequuntur rerum ullam sunt velit voluptatum.
          Repudiandae rerum fuga tempore sit totam dolor quod explicabo?
          Consequatur?
        </Message>
      </MessageItem>
      <MessageItem>
        <Message>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          amet, quam nihil itaque provident, sit aspernatur autem soluta
          inventore, dicta consequuntur quaerat optio impedit labore eaque et
          eligendi repudiandae laboriosam.
        </Message>
      </MessageItem>
      <MessageItem>
        <Message>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          amet, quam nihil itaque provident, sit aspernatur autem soluta
          inventore, dicta consequuntur quaerat optio impedit labore eaque et
          eligendi repudiandae laboriosam.
        </Message>
      </MessageItem>
    </MessageList>
  );
};
export default MessageChat;
