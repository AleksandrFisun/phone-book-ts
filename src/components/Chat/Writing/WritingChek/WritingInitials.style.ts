import styled from 'styled-components';

export const NewMessageIcon = styled.span`
  & svg {
    stroke: black;
    height: 60px;
    width: 60px;
    margin-bottom: 10px;
  }
`;
export const NewMessageWrapper = styled.div`
  height: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const NewMessageTitle = styled.h3`
  color: black;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`;
export const NewMessageText = styled.p`
  color: black;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`;
export const NewMessageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  border-radius: 4px;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
`;
export const NewMessageButtonIcon = styled.span`
  & svg {
    fill: white;
    margin-right: 5px;
  }
`;
export const NewMessageButtonText = styled.span`
  color: white;
`;
