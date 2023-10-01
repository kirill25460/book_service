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
  SideNavItem,
  SideNavButton
} from './Header.styled';
import logo from '../../images/logo.png';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); 

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false); 
    }
  };

  useEffect(() => {

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Left>
        <BurgerMenu>
          <MenuIcon onClick={toggleMenu} />
        </BurgerMenu>
        <SideMenu ref={menuRef} className={isOpen ? 'open' : ''}>
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
