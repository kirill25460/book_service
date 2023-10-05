import styled from 'styled-components';
import FonImg from '../../images/Rectangle.png';

export const MainContainer = styled.div`
  overflow: hidden;
  background-image: url(${FonImg});
  background-size: cover; /* Изображение будет масштабировано так, чтобы покрыть всю область фона */
  background-repeat: no-repeat; /* Запрет повторения изображения */
  background-attachment: fixed; /*Фиксация изображения, чтобы оно не двигалось при прокрутке */
  background-position: center center;
  width: auto;
  height: 393px;
  display: flex;

  @media screen and (min-width: 950px) {
    height: 730px;
    align-items: center;
    justify-content: center;
  }
`;

export const MainLeft = styled.div`
  margin-right: 350px;
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
  @media screen and (min-width: 950px) {
    font-weight: 700;
    font-size: 56px;
    line-height: 66px;

    width: 574px;

  }
`;

export const MainPar = styled.p`
  margin: 0;
  color: #af9a91;
  font-family: DM Sans;
  font-style: normal;
  font-size: 11px;
font-weight: 500;
line-height: 15px;
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
  @media screen and (min-width: 950px) {
    font-weight: 700;
    font-size: 18px;
    width: 255px;
    height: 66px;
  }
`;

export const MainPic = styled.img`
  width: 755px;
  height: 731px;
  margin-right: 120px;
  z-index: 2;
  position: relative;
`;

export const ParallaxPic = styled.img`
  position: absolute;
  z-index: 1;
`;
