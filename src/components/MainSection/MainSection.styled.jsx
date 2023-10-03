import styled from 'styled-components';
import GearsImg from '../../images/gears2.png';

export const MainContainer = styled.div`overflow:hidden;
  background-image: url(${GearsImg});
  background-size: cover; /* Изображение будет масштабировано так, чтобы покрыть всю область фона */
  background-repeat: no-repeat; /* Запрет повторения изображения */
  background-attachment: fixed; /*Фиксация изображения, чтобы оно не двигалось при прокрутке */
  background-position: center center;
  width: auto;
  height: 730px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainLeft = styled.div`
margin-right:300px;

`;

export const MainText = styled.h2`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 66px;
  margin: 0;
width:574px;
  color: #ffffff;
`;

export const MainPar = styled.p`
margin: 0;
width:574px;
padding-top:25px;
padding-bottom:70px;
color: #AF9A91;
font-family: DM Sans;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 122.222% */
`;


export const MainButton = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  width: 255px;
  height: 66px;
  border-radius: 40px;
  border: 0;
  background-color: #fff;
  color: #5c3d2e;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;

`;

export const MainPic = styled.img`
  width: 755px;
  height: 731px;
`;


export const ParallaxPic = styled.img`position:absolute;`;