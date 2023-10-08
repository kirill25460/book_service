import {
  MainContainer,
  MainText,
  MainLeft,
  MainButton,
  MainPic,
  MainMobPic,
  ParallaxPic,
  ParallaxContainer,
  Main,
  MainPar,
} from './MainSection.styled';
import man from 'images/wizard.png';
import mobman from "images/mob-wizard.png";
import trydetail from "images/group-gear.png";
import { MouseParallax } from 'react-just-parallax';


const MainSection = () => {
   return (
    <MainContainer id="main">
      <ParallaxContainer>
      <MouseParallax >
      <ParallaxPic src={trydetail} alt="detail"/>
    </MouseParallax>
      </ParallaxContainer>
      <Main>
      <MainLeft>
        <MainText>Книга, це книга, люби кого? Книгу.</MainText>
        <MainPar>Книга, книга книга книга, книжки? Книга! Книга книга, книга. Книга, книга книга книга, книжки? Книга! </MainPar>
        <MainButton>Галерея наших робіт</MainButton>
      </MainLeft>
      <MainPic src={man} alt="Man" />
      <MainMobPic src={mobman} alt="Man"/>
      </Main>
    </MainContainer>
  );
  };
// };

export default MainSection;
