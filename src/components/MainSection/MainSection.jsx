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
import detail from "images/3d-detail-gear.png";
import { MouseParallax } from 'react-just-parallax';

const MainSection = () => {
  return (
    <MainContainer>
       <MouseParallax>
      <ParallaxPic src={detail} alt="detail"/>
    </MouseParallax>
      <MainLeft>
        <MainText>Книга, це книга, люби кого? Книгу.</MainText>
        <MouseParallax>
      <ParallaxPic src={detail} alt="detail"/>
    </MouseParallax>
        <MainPar>Книга, книга книга книга, книжки? Книга! Книга книга, книга. Книга, книга книга книга, книжки? Книга! </MainPar>
        <MainButton>Галерея наших робіт</MainButton>
      </MainLeft>
      <MouseParallax>
      <ParallaxPic src={detail} alt="detail"/>
    </MouseParallax>
      <MainPic src={man} alt="Man" />
    </MainContainer>
  );
};

export default MainSection;
