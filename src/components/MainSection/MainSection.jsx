import {
  MainContainer,
  MainText,
  MainLeft,
  MainButton,
  MainPic,
  ParallaxPic,
  ParallaxPicBig,
  MainPar,
} from './MainSection.styled';
import man from 'images/wizard.png';
import detail from "images/3d-detail-gear.png";
import detail2 from "images/low-detail-gear.png";
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
        <MouseParallax>
      <ParallaxPicBig src={detail} alt="detail"/>
    </MouseParallax>
    <MouseParallax>
      <ParallaxPic src={detail2} alt="detail"/>
    </MouseParallax>
      </MainLeft>
      <MouseParallax>
      <ParallaxPic src={detail2} alt="detail"/>
    </MouseParallax>
      <MainPic src={man} alt="Man" />
      <MouseParallax>
      <ParallaxPic src={detail} alt="detail"/>
    </MouseParallax>
    </MainContainer>
  );
};

export default MainSection;
