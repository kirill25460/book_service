import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
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
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 1000px) {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const Left = styled.div`
  margin-right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1000px) {
    display: block;
    margin-right: 30px;
  }
  @media screen and (min-width: 1200px) {
    margin-right: 220px;
  }
`;

export const Right = styled.div`
  margin: 30px auto 90px;
  background-color: #e5d2c8;
  padding: 23px 27px 40px;
  border-radius: 37px;
  text-align: center;
  height: fit-content;
  width: fit-content;
  @media screen and (min-width: 1000px) {
    margin: 0;
    background-color: #e5d2c8;
    padding: 23px 27px 40px;
    border-radius: 37px;
    text-align: center;
    height: fit-content;
    width: fit-content;
  }
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
  cursor: pointer;
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

  &:hover {
    transition: background-color 0.5s ease;
    background-color: #cc8467;
    border: 1.5px solid #cc8467;
  }
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
  position: relative;

  &:checked {
    &::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 14px;
      height: 14px;
      background: #b85c38;
      border-radius: 50%;
    }
  }
`;

export const RadioInput2 = styled.input`
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
  position: relative;

  &:checked {
    &::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 14px;
      height: 14px;
      background: #b85c38;
      border-radius: 50%;
    }
  }
`;

export const RadioButtonContainerText = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const RadioLabelText = styled.label`
  display: flex;
  flex-direction: row;
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

export const RadioSpan = styled.p`
  margin: 0;
  width: 318px;
  text-align: center;
  @media screen and (min-width: 670px) {
    margin: 0;
    width: 390px;
    text-align: left;
  }
`;

export const RangeContainer = styled.div`
  width: 300px;
  height: 5px;
  background: linear-gradient(to right, #8c5e48, #e0c097);
  position: relative;
  border-radius: 2.5px;
  margin-left: 0;
  @media screen and (min-width: 670px) {
    width: 600px;
    height: 5px;
    background: linear-gradient(to right, #8c5e48, #e0c097);
    position: relative;
    border-radius: 2.5px;
    margin-left: -15px;
  }
`;

export const RangeLabels = styled.div`
  display: flex;
  margin-left: 0;
  justify-content: space-between;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  color: #8c5e48;
  padding-top: 10px;
  @media screen and (min-width: 670px) {
    display: flex;
    margin-left: -15px;
    justify-content: space-between;
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
    color: #8c5e48;
    padding-top: 10px;
  }
`;

export const RangeInput = styled.input`
  width: 100%;
  height: 16px; /* Увеличиваем высоту инпута */
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #8c5e48;
    border: 2px solid white;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    position: relative;
    top: -5px;
  }
`;

export const FirstRangeCont = styled.div`
  margin-top: 23px;
  margin-bottom: 50px;
`;

export const RangeMainText = styled.div`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 30px;
  color: #8c5e48;
`;

export const StyldeLink = styled(NavLink)`
  text-decoration: none;
`;
