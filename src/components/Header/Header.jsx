import {
  HeaderContainer,
  Logo,
  HeaderText,
  Left,
  Right,
  NavList,
  NavItem,
  HeaderButton,
} from './Header.styled';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <HeaderContainer>
      <Left>
        <Logo src={logo} alt="Logo" />
        <HeaderText>Книжкова Майстерня</HeaderText>
      </Left>
      <Right>
          <NavList>
            <NavItem>Продукція та послуги</NavItem>
            <NavItem>Новини</NavItem>
            <NavItem>Контакти</NavItem>
          </NavList>
          <HeaderButton>Калькулятор</HeaderButton>
      </Right>
    </HeaderContainer>
  );
};

export default Header;
