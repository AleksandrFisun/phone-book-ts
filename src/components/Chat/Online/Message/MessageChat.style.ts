import styled from 'styled-components';

export const MessageList = styled.ul`
  overflow-y: scroll;
  margin: 0;
  padding: 10px 10px;
  height: 100%;
`;
export const MessageItem = styled.li`
  margin-bottom: 10px;
`;

export const Message = styled.span`
  color: black;
`;
export const MessageUserWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  margin-bottom: 6px;
  height: 40px;
`;
export const MessageUserImg = styled.img`
  width: 30px;
  height: 30px;
`;
export const MessageUserName = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-left: 10px;
`;
export const MessageMore = styled.button`
  position: relative;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  cursor: pointer;
  height: 100%;
  padding: 10px 10px;
`;
export const MessageListMore = styled.ul`
  display: none;
  position: static;
  flex-direction: column;
  background-color: rgb(235, 236, 245);
  ${MessageMore}:hover &,${MessageMore}:active & {
    display: flex;
  }
`;
export const MessageItemMore = styled.li`
  color: black;
  margin-bottom: 2px;

  &:hover {
    color: rgb(59, 123, 227);
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
