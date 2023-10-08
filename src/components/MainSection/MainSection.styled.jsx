import styled from 'styled-components';
import FonImg from '../../images/Rectangle.png';
import MobBg from '../../images/mob-main-bg.png'
export const MainContainer = styled.div`
  overflow: hidden;
  background-image: url(${MobBg});
  background-size: cover; /* Изображение будет масштабировано так, чтобы покрыть всю область фона */
  background-repeat: no-repeat; /* Запрет повторения изображения */
  background-attachment: fixed; /*Фиксация изображения, чтобы оно не двигалось при прокрутке */
  background-position: center center;
  width: auto;
  height: 393px;


  @media screen and (min-width: 950px) {
    background-image: url(${FonImg});
    height: 730px;
   
  }
`;

export const MainLeft = styled.div`
padding-left:15px;
@media screen and (min-width: 430px){padding-left:50px;}
@media screen and (min-width: 950px) {
  padding-right: 300px;
  padding-left:200px;
}

`;
export const Main = styled.div`
display: flex;
@media screen and (min-width: 950px) {
align-items: center;
justify-content: center;}`;


export const ParallaxContainer = styled.div`
width:0;

@media screen and (min-width: 950px) {

  width: 100%;
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
  width:165px;

  color: #af9a91;
  font-family: DM Sans;
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
box-shadow: 4px 4px 31px #ff8956;
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
  @media screen and (min-width: 950px) {
    font-weight: 700;
    font-size: 18px;
    width: 255px;
    height: 66px;
  }
`;

export const MainPic = styled.img`
display:none;
@media screen and (min-width: 950px) {
  display: block;
  width: 755px;
  height: 731px;
  margin-right: 120px;
  z-index: 2;
  position: relative;
}
 
`;

export const MainMobPic = styled.img`

position: absolute;
right: 0;
top:80px;
width: 245px;
height: 383px;
@media screen and (min-width: 430px){
  right: 0;
  top:120px;

}
@media screen and (min-width: 950px) {
  display: none;
}
`;

export const ParallaxPic = styled.img`
display: none;
  @media screen and (min-width: 950px) {
    position: absolute;
    display:inline-block;
  z-index: 1;
  }
`;
