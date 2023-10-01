import styled from 'styled-components';
import { VscMenu } from 'react-icons/vsc';

export const HeaderContainer = styled.div`
  display: flex;
  height: 70px;
  justify-content: center;
  @media screen and (min-width: 430px) {
    display: flex;
    height: 110px;
    justify-content: center;
  }
  @media screen and (min-width: 710px) {
    display: flex;
    height: 110px;
    justify-content: space-between;
    padding: 0 50px;
  }
  @media screen and (min-width: 1005px) {
    display: flex;
    height: 110px;
    justify-content: space-between;
    padding: 0 110px;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 35px;
  height: 48px;
  margin-right: 0;
  @media screen and (min-width: 430px) {
    width: 50px;
    height: 72px;
    margin-right: 0;
  }
  @media screen and (min-width: 710px) {
    width: 59px;
    height: 81px;
    margin-right: 15px;
  }
`;

export const HeaderText = styled.p`
  display: none;
  @media screen and (min-width: 710px) {
    display: block;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 88.9%;
    color: #232323;
    width: 92px;
  }
  @media screen and (min-width: 1005px) {
    display: block;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 88.9%;
    color: #232323;
    width: 92px;
  }
`;

export const NavList = styled.ul`
  display: none;
  @media screen and (min-width: 430px) {
    display: flex;
    list-style: none;
    padding-inline-start: 10px;
  }
`;

export const NavItem = styled.li`
  display: none;

  @media screen and (min-width: 430px) {
    display: block;
    font-family: 'Didact Gothic', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #232323;
    margin-right: 10px;
    cursor: pointer;
    &:hover{
      text-decoration: underline 3px;
    }
  }
  @media screen and (min-width: 710px) {
    display: block;
    font-family: 'Didact Gothic', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #232323;
    margin-right: 15px;
    cursor: pointer;
    &:hover{
      text-decoration: underline 3px;
    }
  }
  @media screen and (min-width: 1005px) {
    display: block;
    font-family: 'Didact Gothic', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #232323;
    margin-right: 45px;
    cursor: pointer;

    &:hover{
      
      text-decoration: underline 3px;
    }
  }
`;

export const HeaderButton = styled.button`
  display: none;
  @media screen and (min-width: 430px) {
    display: block;
    width: 100px;
    height: 40px;
    border-radius: 30px;
    background-color: #5c3d2e;
    color: #ffffff;
    border: 0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #b99b8c;
    }
  }
  @media screen and (min-width: 710px) {
    display: block;
    width: 130px;
    height: 54px;
    border-radius: 30px;
    background-color: #5c3d2e;
    color: #ffffff;
    border: 0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #b99b8c;
    }
  }
  @media screen and (min-width: 1005px) {
    display: block;
    width: 138px;
    height: 54px;
    border-radius: 30px;
    background-color: #5c3d2e;
    color: #ffffff;
    border: 0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #b99b8c;
    }
  }
`;

export const BurgerMenu = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  @media screen and (min-width: 430px) {
    display: none;
  }
`;

export const MenuIcon = styled(VscMenu)`
  width: 20px;
  height: 27.5px;
  fill: #5e3f2f;
  cursor: pointer;
`;

export const SideMenu = styled.div`
  position: fixed;
  top: -100%; /* Скрываем меню сверху */
  left: 0;
  width: 100%;
  height: 374px;
  background-color: #fff;
  transition: top 1s ease;
  z-index: 999;
  border-radius: 0 0 15px 15px;
  border: 1px solid #5e3f2f;

  &.open {
    top: 0; /* Показывает меню */
  }
  @media screen and (min-width: 430px) {
    display: none;
  }
`;

export const SideNavItem = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #5E3F2F;
  padding: 24px 0;
  margin: 0;
  cursor: pointer;
  border-bottom: 1px solid #5E3F2F;

  &:hover{
    background-color: #5E3F2F;
    color:white;
  }
`;

export const SideNavButton = styled.button`
    width: calc(100% - 48px);
    height: 54px;
    border-radius: 30px;
    background-color: #5c3d2e;
    color: #ffffff;
    border: 0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 28px 24px;
    &:hover {
      background-color: #b99b8c;
    }
`