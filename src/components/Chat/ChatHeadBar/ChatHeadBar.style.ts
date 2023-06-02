import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d0d1d9;
  background-color: rgb(242, 243, 245);
  padding: 15px 10px;
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;
export const Item = styled.li`
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  cursor: pointer;
  & svg {
    height: 20px;
    width: 20px;
  }
`;
export const Text = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin: 0;
  padding: 0;
  margin-right: 10px;
  color: black;
`;
