import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom:30px;
  min-height: 400px;
  min-width: 300px;
  padding: 10px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

}
`;

export const Button = styled.button`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 23px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  padding: 4px 16px;
  border-radius: 4px;

  border: 1px solid #2e2d2d;
  background-color: #2e2d2d;
  color: #c6ede6;
  cursor: pointer;
  transition-duration: 0.25s;
  &:disabled {
    opacity: 0;
  }
  &:hover,
  &:focus,
  &:active {
    color: #c6ede6;
    box-shadow: inset 0 0 0 1px #c6ede6;
  }
`;
export const NavigateLink = styled(NavLink)`
  margin-left: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 23px;
  text-transform: uppercase;
  background-color: #c6ede6;
  text-decoration: none;
  padding: 8px 16px;

  border: 1px solid #2e2d2d;
  border-radius: 4px;
  background-color: #2e2d2d;
  color: #c6ede6;
  cursor: pointer;
  transition-duration: 0.25s;
  &:disabled {
    opacity: 0;
  }
  &:hover,
  &:focus,
  &:active {
    border: 1px solid #c6ede6;
    background-color: #c6ede6;
    color: #2e2d2d;
    box-shadow: inset 0 0 0 1px #2e2d2d;
  }
`;
