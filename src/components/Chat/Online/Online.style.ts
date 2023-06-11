import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MessageList = styled.ul``;
export const InputFile = styled.input`
  display: none;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  & svg {
    width: 30px;
    height: 30px;
    fill: black;
  }
`;
export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  & svg {
    width: 30px;
    height: 30px;
    fill: #3b7be3;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 10px;
`;
