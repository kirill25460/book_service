import styled from 'styled-components';
import GearsImg from '../../images/gears2.png'

export const MainContainer = styled.div`
    background-image: url(${GearsImg});
    background-size: cover; /* Изображение будет масштабировано так, чтобы покрыть всю область фона */
    background-repeat: no-repeat; /* Запрет повторения изображения */
     background-attachment: fixed; /*Фиксация изображения, чтобы оно не двигалось при прокрутке */
    background-position: center center;
    width: auto;
    height: 730px;
    display:flex;
`;

export const MainText = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 66px;
  margin: 0;

  color: #ffffff;
`;

export const MainPic = styled.img`
width:880px;
height:773px;
`;