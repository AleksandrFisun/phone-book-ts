import styled from 'styled-components';

export const NavigateChat = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  border-right: 1px solid #d0d1d9;
  background-color: #ebecf5;
  padding: 10px 0;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
`;
export const ItemTop = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  & svg {
    width: 20px;
    height: 20px;
    margin-bottom: 5px;
  }
`;
