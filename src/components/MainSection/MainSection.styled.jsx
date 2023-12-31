import styled from 'styled-components';
import FonImg from '../../images/Rectangle.png';
import MobBg from '../../images/mob-main-bg.png';


import { NavLink } from 'react-router-dom';
export const MainContainer = styled.div`
  overflow: hidden;
  background-image: url(${MobBg});
  background-size: cover; /* Изображение будет масштабировано так, чтобы покрыть всю область фона */
  background-repeat: no-repeat; /* Запрет повторения изображения */
  background-attachment: fixed; /*Фиксация изображения, чтобы оно не двигалось при прокрутке */
  background-position: center center;
  width: auto;
  height: 393px;
  position: relative;

  @media screen and (min-width: 950px) {
    background-image: url(${FonImg});
    height: 730px;
  }
`;

export const MainLeft = styled.div`
  padding-left: 15px;
  @media screen and (min-width: 430px) {
    padding-left: 50px;
  }
  @media screen and (min-width: 950px) {
    position: absolute;
    left: 10px;
  }
  @media screen and (min-width: 1440px) {
    position: relative;
  }
  @media screen and (min-width: 1830px) {
    padding-right: 250px;
  }
`;
export const Main = styled.div`
  display: none;
  @media screen and (min-width: 950px) {
    display: inline-block;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.4s ease-out;
  }
`;

export const MainText = styled.h2`
  font-family: 'Raleway';
  margin: 0;
  font-style: normal;
  width: 236px;
  color: #ffffff;
  font-size: 37px;
  font-weight: 800;
  line-height: 40.5px;
  padding-top: 25px;
  @media screen and (min-width: 950px) {
    font-weight: 700;
    font-size: 56px;
    line-height: 66px;

    width: 574px;
  }
`;

export const MainPar = styled.p`
  margin: 0;
  width: 165px;

  color: #af9a91;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-size: 11px;
  font-weight: 500;
  line-height: 15px;
  padding-top: 10px;
  padding-bottom: 25px;
  @media screen and (min-width: 950px) {
    width: 574px;
    padding-top: 25px;
    padding-bottom: 70px;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
  }
`;

export const MainButton = styled.button`
  display: flex;
  z-index: 2;
  width: 131px;
  height: 34px;
  
  position: relative;
  font-size: 9px;
  font-weight: 500;
  line-height: 18px;
  border-radius: 40px;
  border: 0;
  background-color: #fff;
  color: #5c3d2e;
  font-family: 'Raleway';
  align-items: center;
  justify-content: center;
  font-style: normal;
  cursor: pointer;

  &:hover{
    transition: box-shadow 0.5s ease;
    box-shadow: 4px 4px 31px #ff8956;
  }
  @media screen and (min-width: 950px) {
    font-weight: 700;
    font-size: 18px;
    width: 255px;
    height: 66px;
  }
`;


export const MainPic = styled.img`
  display: none;
  @media screen and (min-width: 950px) {
    display: block;
    width: 815px;
    height: 735px;
    margin-left: 400px;
    z-index: 5;
    
  }
  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`;

export const MainMobPic = styled.img`
  position: absolute;
  right: 0;

  width: 260px;
  height: 390px;
  @media screen and (min-width: 950px) {
    display: none;
  }
`;
export const Shadow = styled.img`
position: absolute;
width:350px;
right:0;
 height: auto;
@media screen and (min-width: 1024px) {
width:1000px;
}
@media screen and (min-width: 1921px) {
  display:none;
}
`;

export const MainShadow = styled.img`
  position: absolute;
  display:none;
  // width: 350px;
  // height: auto;
  //  right: -60px;
  //  @media screen and (min-width: 1024px) {
  //   width: 950px;
  //   right: 0;
  // }
   @media screen and (min-width: 1921px) {
    width: 1250px;
    display:block;
   right:250px;
  }
`;


export const Wrap = styled.div`
  display: flex;
  @media screen and (min-width: 950px) {
    align-items: center;
    justify-content: center;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;
