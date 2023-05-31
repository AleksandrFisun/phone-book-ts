import styled from 'styled-components';
import { TfiEmail } from 'react-icons/tfi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1px;
  width: 300px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  &:focus,
  &:hover {
    border: 1px solid #b3b3b3;
  }
`;
export const User = styled(FiUser)`
  position: absolute;
  top: 50%;
  left: 0;
  margin-left: 10px;
  transform: translate(-0, -50%);
  color: #b3b3b3;
`;
export const Email = styled(TfiEmail)`
  position: absolute;
  top: 50%;
  left: 0;
  margin-left: 10px;
  transform: translate(-0, -50%);
  color: #b3b3b3;
`;
export const Password = styled(RiLockPasswordLine)`
  position: absolute;
  top: 50%;
  left: 0;
  margin-left: 10px;
  transform: translate(-0, -50%);
  color: #b3b3b3;
`;
export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  background-color: white;
  padding-left: 40px;
  &:focus,
  &:hover {
    outline: none;
  }
  &::placeholder {
        color: #b3b3b3;
`;
export const Label = styled.label`
  color: black;
  margin-bottom: 10px;
`;
