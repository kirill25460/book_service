import {
  MainContainer,
  MainText,
  MainLeft,
  MainButton,
  MainPic,
  MainMobPic,
  ParallaxPic,
  MainPar,
} from './MainSection.styled';
import man from 'images/wizard.png';
import mobman from "images/mob-wizard.png";
import trydetail from "images/group-gear.png";
import { MouseParallax } from 'react-just-parallax';
import './Parallax.css'

const MainSection = () => {
  // constructor=(props)=>{
  //   super(props);
  //   this.state = {
  //     windowWidth: window.innerWidth,
  //   };
  // }

  // componentDidMount=() =>{
  //   window.addEventListener('resize', this.handleWindowResize);
  // }

  // componentWillUnmount=()=> {
  //   window.removeEventListener('resize', this.handleWindowResize);
  // }

  // handleWindowResize = () => {
  //   this.setState({ windowWidth: window.innerWidth });
  // };

  // render(){
  //   const { windowWidth } = this.state;
  //   const isParallaxActive = windowWidth >= 960;
  return (
    <MainContainer id="main">
    <MouseParallax >
      <ParallaxPic src={trydetail} alt="detail"/>
    </MouseParallax>
      <MainLeft>
        <MainText>Книга, це книга, люби кого? Книгу.</MainText>
        <MainPar>Книга, книга книга книга, книжки? Книга! Книга книга, книга. Книга, книга книга книга, книжки? Книга! </MainPar>
        <MainButton>Галерея наших робіт</MainButton>
      </MainLeft>
      <MainPic src={man} alt="Man" />
      <MainMobPic src={mobman} alt="Man"/>
    </MainContainer>
  );
  };
// };

export default MainSection;
