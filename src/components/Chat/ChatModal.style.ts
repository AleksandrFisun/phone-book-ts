import styled from 'styled-components';

export const ModalBасkdrор = styled.div<{ props: boolean }>`
  position: fixed;
  bottom: 0;
  right: 0;
  width: ${props => (props.props ? '35%' : '100%')};
  height: ${props => (props.props ? '40%' : '100%')};
`;

export const ModalContent = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #f2f3f5;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    Opx 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;
export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
