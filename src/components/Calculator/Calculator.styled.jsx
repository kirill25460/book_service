import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';
// import {MdKeyboardArrowDown} from 'react-icons/md'

export const MainTitle = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 36px;
  text-align: center;
  color: #b85c38;
  margin: 47px 0 70px 0;
`;

export const MainContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Left = styled.div`
  width: 435px;
  margin-right: 220px;
`;

export const Right = styled.div`
  background-color: #e5d2c8;
  padding: 23px 27px 40px;
  border-radius: 37px;
  text-align: center;
`;

export const RightMainText = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #5c3d2e;
  margin: 0;
`;

export const RightInputContainer = styled.div``;

export const RightInputText = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #ab9284;
  margin: 10px 0 0 0;
`;

export const RightInput = styled.input`
  box-sizing: border-box;
  width: 280px;
  height: 64px;
  border-radius: 32px;
  border: 2px solid #e0c097;
  text-align: center;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  color: #5c3d2e;

  &:focus {
    outline: none;
  }
`;

export const RightButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 278px;
  height: 54px;
  border-radius: 30px;
  margin-top: 40px;
  background-color: #b85c38;
  border: 1.5px solid #b85c38;
  color: #fff;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
`;

export const Arrow = styled(FiArrowRight)`
  width: 24px;
  height: 24px;
  margin-left: 8px;
  color: #fff;
`;

export const LeftMainText = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #5c3d2e;
  margin: 0;
`;

export const LeftSubText = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #ab9284;
  margin: 0;
`;

export const RadioButtonContainerFormat = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #8c5e48;
  cursor: pointer;
  margin-right: 16px;
`;

export const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid #e0c097;
  border-radius: 50%;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  cursor: pointer;
  margin-right: 10px;

  &:checked {
    background: #b85c38;
  }
`;

export const RadioButtonContainerText = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const RadioLabelText = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #8c5e48;
  margin: 0;
  cursor: pointer;
  margin-bottom: 11px;
`;

export const RadioSpan = styled.span`
    
`