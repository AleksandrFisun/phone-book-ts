import styled from 'styled-components';

// export const ModalBасkdrор = styled.div<{ props: boolean }>`
//   position: fixed;
//   bottom: 0;
//   right: 0;
//   width: ${props => (props.props ? '35%' : '100%')};
//   height: ${props => (props.props ? '40%' : '100%')};
// `;

export const Wrapper = styled.div<{ props: boolean }>`
  height: 100%;
  background: ${props => (props.props ? 'white' : '#f5f3f2')}
  }
`;
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
export const NewMessageForm = styled.form`
  margin-top: 20px;
  height: 50%;
`;
export const NewMessageHeadWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(87, 86, 86, 0.3);
`;
export const NewMessageBodyForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100%;
  border-bottom: 1px solid rgba(87, 86, 86, 1);
  margin-bottom: 20px;
`;
export const NewMessageHeadLabel = styled.label`
  color: black;
`;
export const NewMessageHeadButton = styled.button`
  font-weight: bold;
  background: none;
  border: none;
  color: #3b7be3;
  cursor: pointer;
`;
export const NewMessageBodyText = styled.textarea`
  height: 100%;
  resize: none;
  border: none;
  padding: 10px 20px;
  outline: none;
`;
export const NewMessageFooterForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;
export const NewMessageFooterWrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const NewMessageFooterContainInput = styled.div`
  position: relative;
  display: flex;
`;
export const NewMessageFooterInput = styled.input`
  font-size: 12px;
  outline: none;
  border: none;
  height: 20px;
  padding: 0 0 0 32px;
`;
export const NewMessageFooterInputCode = styled.span`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-0%, -50%);
  font-size: 12px;
  color: black;
`;
export const NewMessageFooterLabel = styled.label`
  font-size: 12px;
  margin-bottom: 5px;
  color: black;
`;
export const NewMessageFooterButton = styled.button`
  font-size: 14px;
  height: 24px;
  padding: 0 6px;
  background-color: rgb(59, 123, 227);
  color: white;
  margin-right: 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
