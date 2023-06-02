import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Searchbar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: rgba(0, 0, 0, 0.85);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const LogotypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogotyImg = styled.img`
  width: 60px;
  height: 60px;
`;
export const LogotypeText = styled.span`
  font-family: 'Pacifico', cursive;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
`;
export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  align-items: center;
  list-style: none;
  padding: 0;
  width: 100%;
`;
export const NavItem = styled.li`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;
export const Link = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 23px;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  &.active {
    color: #2e2d2d;
    background-color: #c6ede6;
  }
`;
export const UserProfile = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 4px;
  border: 1px solid #1e1e1e;
  padding: 16px;
`;
export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const UserImg = styled.img`
  width: 30px;
  height: 30px;
  padding: 6px;
  margin-right: 10px;
`;
export const ButtonLogOut = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 23px;
  text-transform: uppercase;
  text-decoration: none;

  border: 1px solid #2e2d2d;
  border-radius: 4px;
  background-color: #2e2d2d;
  color: #c6ede6;
  cursor: pointer;
  transition-duration: 0.25s;
  &:hover,
  &:focus {
    border: 1px solid #c6ede6;
    background-color: #c6ede6;
    color: #2e2d2d;
    box-shadow: inset 0 0 0 1px #2e2d2d;
  }
`;
export const UserText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
`;
