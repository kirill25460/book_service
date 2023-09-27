import {
  HeaderContainer,
  Logo,
  HeaderText,
  Left,
  Right,
  NavList,
  NavItem,
  HeaderButton,
  BurgerMenu,
  MenuIcon,
  SideMenu,
  CloseBtn,
  SideNavItem,
  SideNavButton
} from './Header.styled';
import logo from '../../images/logo.png';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <HeaderContainer>
      <Left>
        <BurgerMenu>
          <MenuIcon onClick={toggleMenu} />
        </BurgerMenu>
        <SideMenu className={isOpen ? 'open' : ''}>
          <CloseBtn onClick={toggleMenu} />
          <SideNavItem>Головна</SideNavItem>
          <SideNavItem>Продукція та послуги</SideNavItem>
          <SideNavItem>Новини</SideNavItem>
          <SideNavItem>Контакти</SideNavItem>
          <SideNavButton>Калькулятор</SideNavButton>
        </SideMenu>
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
