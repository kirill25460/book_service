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

export const Right = styled.div``;

export const FormContainer = styled.form`
  width: 538px;
  height: 537px;
  padding: 65px 40px 80px 40px;
  background-color: #e5d3c8;
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FormSmallContainer = styled.div``;
export const FormBigContainer = styled.div``;

export const FormText = styled.p`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #5c3d2e;
  margin-top: 0;
  margin-bottom: 12px;
`;

export const FormSmallInput = styled.input`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #ab9284;

  width: 232px;
  height: 72px;
  border-radius: 50px;
  border: none;
  padding-left: 24px;

  &:focus {
    outline: none;
  }
`;

export const FormBigInput = styled.input`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #ab9284;

  width: 512px;
  height: 142px;
  border-radius: 20px;
  border: none;
  padding-left: 24px;

  margin-bottom: 32px;

  &:focus {
    outline: none;
  }
`;
