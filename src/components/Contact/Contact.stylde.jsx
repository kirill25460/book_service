import styled from 'styled-components';
import bg from '../../images/form_bg.png';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import { BsTelephone, BsGeoAlt } from 'react-icons/bs';

export const ContactContainer = styled.div`
  background-image: url(${bg});
  background-size: cover; /* Изображение будет масштабировано так, чтобы покрыть всю область фона */
  background-repeat: no-repeat; /* Запрет повторения изображения */
  background-attachment: fixed; /*Фиксация изображения, чтобы оно не двигалось при прокрутке */
  background-position: center center;
  height: 928px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 1365px) {
    background-image: url(${bg});
    background-size: cover; /* Изображение будет масштабировано так, чтобы покрыть всю область фона */
    background-repeat: no-repeat; /* Запрет повторения изображения */
    background-attachment: fixed; /*Фиксация изображения, чтобы оно не двигалось при прокрутке */
    background-position: center center;
    height: 928px;
    display: flex;
    justify-content:space-around;
  }
`;

export const Left = styled.div`
  margin-left: 60px;
  margin-top: 50px;
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
  margin-top: 60px;
  margin-right: 40px;
  width: 479px;
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
  width: 300px;
  height: 750px;
  padding: 30px 20px 30px 20px;
  background-color: #e5d3c8;
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 1080px) {
    width: 460px;
    height: 537px;
    padding: 65px 20px 80px 20px;
    background-color: #e5d3c8;
    border-radius: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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

export const FormBigInput = styled.input`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ab9284;

  width: 300px;
  height: 142px;
  border-radius: 20px;
  border: none;
  padding-left: 10px;

  margin-bottom: 32px;

  &:focus {
    outline: none;
  }
  @media screen and (min-width: 1080px) {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #ab9284;

    width: 430px;
    height: 142px;
    border-radius: 20px;
    border: none;
    padding-left: 24px;

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
    height: 142px;
    border-radius: 20px;
    border: none;
    padding-left: 24px;

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
  /* identical to box height, or 100% */
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
  font-size: 44px;
  line-height: 50px;
  color: #ffffff;
  margin: 0 0 16px 0;
`;

export const RightSubTitle = styled.p`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #ab9284;
  margin: 0 0 35px 0;
`;

export const RightContactLink = styled.a`
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

  &:hover {
    color: #e2c4b2;
  }
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
  margin-top: -75px;
  margin-left: -75px;
`;
