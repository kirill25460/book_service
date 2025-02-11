import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (min-width: 1260px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 58px;
  }
`;

export const SmallCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
  @media screen and (min-width: 1260px) {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
`;

export const BigCont = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  margin-right: 0;
  margin-left: 0;
  @media screen and (min-width: 1260px) {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 28px;
    margin-left: 28px;
  }
`;

export const SmallPict = styled.img`
  height: 158px;
  width: 158px;
  @media screen and (min-width: 640px) {
    height: 284px;
    width: 284px;
  }
`;

export const BigPict = styled.img`
  width: 342px;
  height: 342px;
  @media screen and (min-width: 640px) {
    width: 596px;
    height: 596px;
  }
`;

export const MainText = styled.p`
  margin: 0;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  color: #5e3f2f;
  margin-bottom: 15px;
  margin-top: 30px;
  @media screen and (min-width: 640px) {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    text-align: center;
    color: #5e3f2f;
    margin-top: 65px;
    margin-bottom: 15px;
  }
`;

export const SubText = styled.p`
  margin: 0 auto;
  width: 90%;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  color: #ab9284;
  margin-bottom: 60px;
  @media screen and (min-width: 760px) {
    margin: 0 auto;
    width: 760px;
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #ab9284;
    margin-bottom: 60px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 23px;
  margin-bottom: 80px;
  @media screen and (min-width: 640px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 60px;
    margin-bottom: 110px;
  }
`;

export const LeftBtn = styled.button`
  display: block;
  width: 240px;
  height: 54px;
  background-color: transparent;
  border: 2px solid #e0c097;
  border-radius: 52px;

  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  color: #5e3f2f;

  cursor: pointer;

  &:hover {
    transition: background-color 0.5s ease;
    background-color: #b85c38;
    color: #ffffff;
  }
`;

export const RightBtn = styled.button`
  display: block;
  width: 240px;
  height: 54px;
  border: 0px;
  background: #b85c38;
  border-radius: 52px;

  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;

  cursor: pointer;

  &:hover {
    transition: background-color 0.5s ease;
    background-color: transparent;
    color: #5e3f2f;
    border: 2px solid #e0c097;
  }
`;
