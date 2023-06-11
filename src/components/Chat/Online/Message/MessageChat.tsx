import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useChat, useAuth } from 'hooks';
import chatOperations from 'redux/chat/chatOperations';
import { CiCircleMore } from 'react-icons/ci';
import { PropsMessage } from 'components/Interface/Interface';

import {
  MessageList,
  Message,
  MessageItem,
  MessageUserWrapper,
  MessageUserImg,
  MessageUserName,
  MessageMore,
  MessageListMore,
  MessageItemMore,
} from './MessageChat.style';

const MessageChat: React.FC<PropsMessage> = ({
  onDeleteMessage,
  onEditMessage,
}) => {
  const dispatch = useDispatch();
  const { items } = useChat();
  const {
    user: { name },
  } = useAuth();

  const messameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(chatOperations.getAllMessage());
  }, [dispatch]);

  useEffect(() => {
    messameRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [items]);

  if (!name) {
    return name;
  }

  return (
    <MessageList>
      {items &&
        items.map(({ id, avatar, userName, message }) => {
          let newDoc: any = new DOMParser()
            .parseFromString(message, 'text/html')
            .getElementsByTagName('*')[2];
          function createMarkup() {
            return { __html: `${newDoc.innerHTML}` };
          }

          return (
            <MessageItem key={id}>
              <MessageUserWrapper>
                <MessageUserImg src={avatar} alt={userName} />
                <MessageUserName>{userName}</MessageUserName>
                {userName === name && (
                  <MessageMore>
                    <CiCircleMore />
                    <MessageListMore>
                      <MessageItemMore
                        id={id}
                        onClick={() => onEditMessage(id)}
                      >
                        Edit
                      </MessageItemMore>
                      <MessageItemMore
                        id={id}
                        onClick={() => onDeleteMessage(id)}
                      >
                        Delete
                      </MessageItemMore>
                    </MessageListMore>
                  </MessageMore>
                )}
              </MessageUserWrapper>

              {newDoc !== undefined ? (
                <Message dangerouslySetInnerHTML={createMarkup()} />
              ) : (
                message
              )}

              <div ref={messameRef}></div>
            </MessageItem>
          );
        })}
    </MessageList>
  );
};

export default MessageChat;
