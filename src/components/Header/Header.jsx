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
  SideNavButton,
  StyldeLink,
} from './Header.styled';
import logo from '../../images/logo.png';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = event => {
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

  const toggleMenu = event => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <HeaderContainer>
      <Left>
        <BurgerMenu>
          <MenuIcon onClick={toggleMenu} />
        </BurgerMenu>
        <SideMenu ref={menuRef} className={isOpen ? 'open' : ''}>
          <StyldeLink to="/">
            <SideNavItem
              onClick={() =>
                setTimeout(() => {
                  scrollToSection('main');
                }, 10)
              }
            >
              Головна
            </SideNavItem>
          </StyldeLink>
          <StyldeLink to="/">
            <SideNavItem
              onClick={() =>
                setTimeout(() => {
                  scrollToSection('products');
                }, 10)
              }
            >
              Продукція та послуги
            </SideNavItem>
          </StyldeLink>
          <StyldeLink to="/">
            <SideNavItem
              onClick={() =>
                setTimeout(() => {
                  scrollToSection('news');
                }, 10)
              }
            >
              Новини
            </SideNavItem>
          </StyldeLink>
          <StyldeLink to="/">
            <SideNavItem
              onClick={() =>
                setTimeout(() => {
                  scrollToSection('contacts');
                }, 10)
              }
            >
              Контакти
            </SideNavItem>
          </StyldeLink>
          <StyldeLink to="/calc">
            <SideNavButton>Калькулятор</SideNavButton>
          </StyldeLink>
        </SideMenu>
        <StyldeLink to="/">
          <Logo src={logo} alt="Logo" />
        </StyldeLink>
        <HeaderText>Книжкова Майстерня</HeaderText>
      </Left>
      <Right>
        <NavList>
          <StyldeLink to="/">
            <NavItem
              onClick={() =>
                setTimeout(() => {
                  scrollToSection('products');
                }, 10)
              }
            >
              Продукція та послуги
            </NavItem>
          </StyldeLink>
          <StyldeLink to="/">
            <NavItem
              onClick={() =>
                setTimeout(() => {
                  scrollToSection('news');
                }, 10)
              }
            >
              Новини
            </NavItem>
          </StyldeLink>
          <StyldeLink to="/">
            <NavItem
              onClick={() =>
                setTimeout(() => {
                  scrollToSection('contacts');
                }, 10)
              }
            >
              Контакти
            </NavItem>
          </StyldeLink>
        </NavList>
        <StyldeLink to="/calc">
          <HeaderButton>Калькулятор</HeaderButton>
        </StyldeLink>
      </Right>
    </HeaderContainer>
  );
};

export default Header;
