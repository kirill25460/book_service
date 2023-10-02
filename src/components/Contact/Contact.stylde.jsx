import styled from 'styled-components';
import bg from '../../images/form_bg.png';

export const ContactContainer = styled.div`
  background-image: url(${bg});
  background-size: cover; /* Изображение будет масштабировано так, чтобы покрыть всю область фона */
  background-repeat: no-repeat; /* Запрет повторения изображения */
  /* background-attachment: fixed; Фиксация изображения, чтобы оно не двигалось при прокрутке */
  background-position: center center;
  height: 928px;
  display: flex;
`;

export const Left = styled.div`
  margin-left: 110px;
  margin-top: 135px;
`;

export const Right = styled.div`

`;

export const FormContainer = styled.form`
  width: 618px;
  height: 682px;
  background-color: #e5d3c8;
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FormSmallContainer = styled.div`
    width: 256px;
`;

export const FormSmallText = styled.p`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #5c3d2e;
`;

export const FormSmallInput = styled.input`

`;
