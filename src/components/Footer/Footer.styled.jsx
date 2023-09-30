import styled from 'styled-components';

export const FooterContainer = styled.div`
  height: 216px;
  background-color: #2c2322;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0 39px;
  @media screen and (min-width: 430px) {
    height: 162px;
    background-color: #2c2322;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
  }
  @media screen and (min-width: 1150px) {
    height: 162px;
    background-color: #2c2322;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 110px;
  }
`;

export const FooterText = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;

  color: #ab9284;
`;

export const FooterUnderline = styled.span`
  text-decoration: underline;
`;

export const FooterUnderlineSmall = styled.span`
  text-decoration: underline;
  @media screen and (min-width: 430px) {
    text-decoration: none;
  }
`;

// @media screen and (min-width: 430px) {
//   display: flex;
//   height: 110px;
//   justify-content: center;
// }
// @media screen and (min-width: 710px) {
//   display: flex;
//   height: 110px;
//   justify-content: space-between;
//   padding: 0 50px;
// }
// @media screen and (min-width: 1005px) {
//   display: flex;
//   height: 110px;
//   justify-content: space-between;
//   padding: 0 110px;
// }
