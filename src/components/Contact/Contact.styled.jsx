import styled from 'styled-components';
import bg from '../../images/form_bg.png';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import { BsTelephone, BsGeoAlt } from 'react-icons/bs';

export const ContactContainer = styled.div`
  height: 1285px;
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  background-color: #2c2322;
  align-items: center;
  position: relative;
  @media screen and (min-width: 950px) {
    background-image: url(${bg});
    background-size: cover; /* Изображение будет масштабировано так, чтобы покрыть всю область фона */
    background-repeat: no-repeat; /* Запрет повторения изображения */
    background-attachment: fixed; /*Фиксация изображения, чтобы оно не двигалось при прокрутке */
    background-position: center center;
    height: 928px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: start;
  }
  @media screen and (min-width: 1365px) {
    background-image: url(${bg});
    background-size: cover; /* Изображение будет масштабировано так, чтобы покрыть всю область фона */
    background-repeat: no-repeat; /* Запрет повторения изображения */
    background-attachment: fixed; /*Фиксация изображения, чтобы оно не двигалось при прокрутке */
    background-position: center center;
    height: 928px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: start;
  }
`;

export const Left = styled.div`
  margin-left: 0;
  margin-top: 0;
  @media screen and (min-width: 950px) {
    margin-left: 60px;
    margin-top: 50px;
  }
  @media screen and (min-width: 1080px) {
    margin-left: 40px;
    margin-top: 135px;
  }
  @media screen and (min-width: 1365px) {
    margin-left: 110px;
    margin-top: 135px;
  }
`;

export const Right = styled.div`
  text-align: center;
  margin-top: 58px;
  margin-right: 0;
  @media screen and (min-width: 950px) {
    text-align: left;
    margin-top: 60px;
    margin-right: 40px;
    width: 479px;
  }
  @media screen and (min-width: 1080px) {
    margin-top: 135px;
    margin-right: 40px;
    width: 479px;
  }
  @media screen and (min-width: 1365px) {
    margin-top: 135px;
    margin-right: 130px;
    width: 479px;
  }
`;

export const FormContainer = styled.form`
  position: relative;
  z-index: 2;
  width: 302px;
  height: 802px;
  padding: 30px 20px 30px 20px;
  background-color: #e5d3c8;
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: 0;
  margin-bottom: 60px;
  @media screen and (min-width: 670px) {
    position: relative;
    z-index: 2;
    width: 600px;
    height: 700px;
    padding: 30px 20px 30px 20px;
    background-color: #e5d3c8;
    border-radius: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-right: 0;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 950px) {
    position: relative;
    z-index: 2;
    width: 300px;
    height: 750px;
    padding: 30px 20px 30px 20px;
    background-color: #e5d3c8;
    border-radius: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: 0;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1080px) {
    width: 460px;
    height: 537px;
    padding: 65px 20px 80px 20px;
    background-color: #e5d3c8;
    border-radius: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: 0;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1365px) {
    width: 538px;
    height: 537px;
    padding: 65px 40px 80px 40px;
    background-color: #e5d3c8;
    border-radius: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: 0;
    margin-bottom: 0;
  }
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
  font-family: 'DM Sans', sans-serif !important;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #ab9284;

  width: 282px;
  height: 60px;
  border-radius: 50px;
  border: none;
  padding-left: 24px;

  margin-bottom: 24px;

  &:focus {
    outline: none;
  }
  @media screen and (min-width: 670px) {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #ab9284;

    width: 200px;
    height: 60px;
    border-radius: 50px;
    border: none;
    padding-left: 24px;

    margin-bottom: 24px;

    &:focus {
      outline: none;
    }
  }
  @media screen and (min-width: 950px) {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #ab9284;

    width: 240px;
    height: 60px;
    border-radius: 50px;
    border: none;
    padding-left: 24px;

    margin-bottom: 24px;

    &:focus {
      outline: none;
    }
  }
  @media screen and (min-width: 1080px) {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #ab9284;

    width: 200px;
    height: 72px;
    border-radius: 50px;
    border: none;
    padding-left: 24px;

    margin-bottom: 0;
    &:focus {
      outline: none;
    }
  }

  @media screen and (min-width: 1365px) {
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

    margin-bottom: 0;

    &:focus {
      outline: none;
    }
  }
`;

export const FormBigInput = styled.textarea`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ab9284;
  resize: none;

  width: 312px;
  height: 112px;
  border-radius: 20px;
  border: none;
  padding-left: 10px;
  padding-top: 30px;
  margin-bottom: 32px;

  &:focus {
    outline: none;
  }
  @media screen and (min-width: 670px) {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #ab9284;

    width: 500px;
    height: 112px;
    border-radius: 20px;
    border: none;
    padding-left: 10px;
    padding-top: 30px;
    resize: none;

    margin-bottom: 32px;

    &:focus {
      outline: none;
    }
  }

  @media screen and (min-width: 950px) {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #ab9284;

    width: 300px;
    height: 112px;
    border-radius: 20px;
    border: none;
    padding-left: 10px;
    padding-top: 30px;
    resize: none;

    margin-bottom: 32px;

    &:focus {
      outline: none;
    }
  }
  @media screen and (min-width: 1080px) {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #ab9284;

    width: 430px;
    height: 112px;
    border-radius: 20px;
    border: none;
    padding-left: 24px;
    padding-top: 30px;
    resize: none;

    margin-bottom: 32px;

    &:focus {
      outline: none;
    }
  }
  @media screen and (min-width: 1365px) {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #ab9284;

    width: 512px;
    height: 112px;
    border-radius: 20px;
    border: none;
    padding-left: 24px;
    padding-top: 30px;
    resize: none;

    margin-bottom: 32px;

    &:focus {
      outline: none;
    }
  }
`;

export const FormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 189px;
  height: 66px;
  border-radius: 40px;
  border: 0;
  background-color: #5c3d2e;
  color: #fff;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  cursor: pointer;

  &:hover {
    transition: background-color 0.5s ease; /* Применяем переход для background-color */
    background-color: #cc805a;
  }
`;

export const Arrow = styled(FiArrowRight)`
  width: 24px;
  height: 24px;
  margin-left: 8px;
  color: #fff;
`;

export const RightSmallText = styled.p`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  font-variant: small-caps;
  color: #ff8956;
  margin: 0 0 8px 0;
`;

export const RightMainTitle = styled.p`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 50px;
  color: #ffffff;
  margin: 0 0 16px 0;
  @media screen and (min-width: 950px) {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 50px;
    color: #ffffff;
    margin: 0 0 16px 0;
  }
`;

export const RightSubTitle = styled.p`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #ab9284;
  margin: 0 0 35px 0;
  @media screen and (min-width: 950px) {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #ab9284;
    margin: 0 0 35px 0;
  }
`;

export const RightContactLink = styled.a`
  display: flex;
  align-items: center;
  font-family: 'DM Sans', sans-serif !important;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #ab9284;
  cursor: pointer;
  margin-bottom: 25px;
  /* line-height: 30px; */
  width: 200px;
  position: relative; /* Устанавливаем позицию для ссылок */
  z-index: 2;
  margin-left: 15px;
  text-align: left;
  &:hover {
    color: #e2c4b2;
  }

  @media screen and (min-width: 950px) {
    display: flex;
    align-items: center;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #ab9284;
    cursor: pointer;
    margin-bottom: 25px;
    /* line-height: 30px; */
    width: 200px;
    position: relative; /* Устанавливаем позицию для ссылок */
    z-index: 2;
    &:hover {
      color: #e2c4b2;
    }
  }
`;

export const MailLink = styled.p`
  display: flex;
  width: 300px;
  margin: 0;
`;

export const Mail = styled(FiMail)`
  margin-right: 8px;
`;

export const Tel = styled(BsTelephone)`
  margin-right: 8px;
`;

export const Geo = styled(BsGeoAlt)`
  margin-right: 8px;
`;

export const MagicPic = styled.img`
  display: none;
  @media screen and (min-width: 950px) {
    display: block;
    margin-top: -75px;
    margin-left: -100px;
  }
  @media screen and (min-width: 1365px) {
    display: block;
    margin-top: -75px;
    margin-left: -75px;
    position: relative; /* Устанавливаем позицию для картинки */
    z-index: 1;
  }
`;

export const MagicSmallPic = styled.img`
  position: absolute;
  right: 0;
  top: 150px;
  @media screen and (min-width: 670px) {
    position: absolute;
    right: 0;
    top: 210px;
  }
  @media screen and (min-width: 950px) {
    display: none;
  }
`;
