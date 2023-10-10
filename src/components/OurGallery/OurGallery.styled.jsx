import styled from 'styled-components';

export const OurGalleryContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 1260px) {
    margin: 0 auto;
    width: 1220px;
  }
`;

export const MainText = styled.p`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 38px;
  color: #5e3f2f;
  margin: 0;
  margin-top: 55px;
  margin-bottom: 40px;
  text-align: center;
  @media screen and (min-width: 640px) {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: #5e3f2f;
    margin: 0;
    margin-top: 55px;
    margin-bottom: 40px;
    text-align: left;
  }
`;

export const MainBigContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 110px;
  gap: 28px;
  @media screen and (min-width: 1260px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 110px;
    gap: 28px;
  }
`;

export const SmallContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
  @media screen and (min-width: 1260px) {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
`;

export const BigContainer = styled.div``;

export const BigPic = styled.img`
  width: 342px;
  height: 342px;
  @media screen and (min-width: 640px) {
    width: 596px;
    height: 596px;
  }
`;

export const SmallPic = styled.img`
  height: 158px;
  width: 158px;
  @media screen and (min-width: 640px) {
    width: 284px;
    height: 284px;
  }
`;
