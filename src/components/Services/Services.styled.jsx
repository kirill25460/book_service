import styled from 'styled-components';
import { GoArrowRight } from 'react-icons/go';

export const ServicesContainer = styled.div`
  margin: 110px 0 140px 0;
`;

export const MainTitle = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  text-align: center;
  margin: 0 0 16px 0;
  color: #5e3f2f;
`;

export const SubTitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #ab9284;
  text-align: center;
  margin: 0;
`;

export const SubText = styled.div`
  margin-bottom: 50px;
`;

export const ServicesItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 90px;
  gap: 30px;
`;

export const ServicesItem = styled.div`
  width: calc(33.33% - 90px);
  height: 301px;
  background: #ffffff;
  border: 1px solid #e0c097;
  border-radius: 24px;
  padding: 14px 32px 48px 32px;
  transition: box-shadow 0.3s ease; /* Анимация изменения тени */
  
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); /* Тень при наведении */
  }
`;

export const ServicesItemImg = styled.img`
  width: 74px;
  height: 74px;
`;

export const ServicesItemMainText = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  color: #5e3f2f;
  margin-top: 28px;
  margin-bottom: 0;
`;

export const ServicesItemSubText = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #ab9284;
  margin-top: 8px;
  margin-bottom: 0;
`;

export const MoreContainer = styled.div`
  display: flex;
  margin-top: 32px;
  cursor: pointer;
`;

export const MoreText = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: #b85c38;
  margin: 0 6px 0 0;
  
`;

export const Arrow = styled(GoArrowRight)`
  width: 20px;
  height: 20px;
  color: #b85c38;
`;
