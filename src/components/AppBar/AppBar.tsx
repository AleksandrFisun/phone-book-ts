import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import {
  Searchbar,
  Link,
  Nav,
  NavList,
  NavItem,
  LogotypeWrapper,
  LogotypeText,
  LogotyImg,
  UserProfile,
  UserImg,
  ButtonLogOut,
  UserInfoWrapper,
  UserText,
} from 'components/AppBar/AppBar.style';

const AppBar = () => {
  const { isLoggedIn, user } = useAuth();

  const dispatch = useDispatch();

  return (
    <>
      <Searchbar>
        <LogotypeWrapper>
          <LogotyImg
            src="https://img.icons8.com/clouds/100/phone-book.png"
            alt="Logotype phone book"
          />
          <LogotypeText>Air Contact</LogotypeText>
        </LogotypeWrapper>
        <Nav>
          <NavList>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            {isLoggedIn ? (
              <>
                <NavItem>
                  <Link to="/phone-book">Phone Book</Link>
                </NavItem>
                <NavItem>
                  <UserProfile>
                    <UserInfoWrapper>
                      <UserImg
                        src="https://img.icons8.com/stickers/100/human-head.png"
                        alt=""
                      />
                      <UserText>{user.name}</UserText>
                    </UserInfoWrapper>
                    <ButtonLogOut
                      onClick={() => dispatch(authOperations.logout())}
                    >
                      log out
                    </ButtonLogOut>
                  </UserProfile>
                </NavItem>
              </>
            ) : (
              <NavItem>
                <Link to="/sign-in">Sign in</Link>
              </NavItem>
            )}
          </NavList>
        </Nav>
      </Searchbar>
    </>
  );
};
export default AppBar;
