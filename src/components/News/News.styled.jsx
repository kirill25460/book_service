import styled from 'styled-components';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';

export const NewsContainer = styled.div`
  margin: 213px 35px 100px;
  @media screen and (min-width: 980px) {
    margin: 213px 110px 100px;
  }
`;

export const Next = styled(MdArrowForwardIos)`
  color: #6e4836;
  width: 24px;
  height: 24px;
  &:hover {
    color: #ad775e;
  }
`;

export const Prev = styled(MdArrowBackIos)`
  color: #6e4836;
  width: 24px;
  height: 24px;
  &:hover {
    color: #ad775e;
  }
`;

export const SlideContainer = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  flex-direction: column-reverse;
  @media screen and (min-width: 980px) {
    display: flex !important;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 100px;
  }
`;

export const SlideConText = styled.div`
  width: 100%;
  text-align: center;
  padding-left: 0;
  padding-bottom: 100px;
  @media screen and (min-width: 980px) {
    width: 300px;
    text-align: center;
    padding-left: 50px;
    padding-bottom: 0;
  }

  @media screen and (min-width: 1150px) {
    text-align: left;
    width: 517px;
    padding-left: 115px;
    padding-bottom: 0;
  }
`;

export const SlideImg = styled.img`
  width: 240px;
  height: 240px;
  padding-right: 0;
  @media screen and (min-width: 980px) {
    width: 300px;
    height: 300px;
    padding-right: 50px;
  }
  @media screen and (min-width: 1150px) {
    width: 300px;
    height: 300px;
    padding-right: 115px;
  }
`;

export const SlideMainText = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 66px;
  color: #6e4836;
  margin: 0;
  @media screen and (min-width: 980px) {
    font-size: 56px;
  }
`;

export const SlideData = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #ff8956;
  margin: 0 0 15px 0;
`;

export const SlideSubText = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #ab9284;
  margin: 0 0 45px 0;
`;

export const SlideButton = styled.button`
  display: flex;
  justify-content: center;

  width: 220px;
  height: 54px;
  background: #6e4836;
  border-radius: 40px;
  padding: 18px 24px;

  border: 0;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  margin: 0 auto;
  &:hover {
    transition: background-color 0.3s ease;
    background: #d48f6e;
  }
  @media screen and (min-width: 980px) {
    display: flex;
    justify-content: center;
    width: 299px;
    height: 66px;
    background: #6e4836;
    border-radius: 40px;
    padding: 24px 36px;
    border: 0;
    margin: 0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #ffffff;
    transition: background-color 0.3s ease;
    &:hover {
      background: #d48f6e;
    }
  }
`;

export const Search = styled(BsSearch)`
  width: 18px;
  height: 18px;
  color: #ffffff;
  margin-right: 8px;
`;

export const Hide = styled.span`
  display: none;
  @media screen and (min-width: 980px) {
    display: block;
  }
`;
