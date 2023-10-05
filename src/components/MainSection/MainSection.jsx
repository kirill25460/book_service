import {
  MainContainer,
  MainText,
  MainLeft,
  MainButton,
  MainPic,
  ParallaxPic,
  MainPar,
} from './MainSection.styled';
import man from 'images/wizard.png';
import trydetail from "images/group-gear.png";
import { MouseParallax } from 'react-just-parallax';

const MainSection = () => {
  return (
    <MainContainer id="main">
    <MouseParallax>
      <ParallaxPic src={trydetail} alt="detail"/>
    </MouseParallax>
      <MainLeft>
        <MainText>Книга, це книга, люби кого? Книгу.</MainText>
        <MainPar>Книга, книга книга книга, книжки? Книга! Книга книга, книга. Книга, книга книга книга, книжки? Книга! </MainPar>
        <MainButton>Галерея наших робіт</MainButton>
      </MainLeft>
      <MainPic src={man} alt="Man" />
    </MainContainer>
  );
};

export default MainSection;
