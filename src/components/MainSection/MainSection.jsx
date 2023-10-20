import React, { useState } from 'react';
import {
  MainContainer,
  MainText,
  MainLeft,
  MainButton,
  MainPic,
  MainMobPic,
  MainShadow,
  Main,
  MainPar,
  Wrap,
  Shadow,
  StyledLink,
} from './MainSection.styled';
import man from 'images/ds-wizard.png';
import mobman from 'images/mob-wizard.png';
import trydetail from 'images/group-gear.png';
import ShadowLight from 'images/shadows.png';
import MShadow from 'images/shadowpic.png';

const MainSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = e => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <MainContainer id="main" onMouseMove={handleMouseMove}>
      <Main
        style={{
          backgroundImage: `url(${trydetail})`,
          transform: `translate(-${mousePosition.x / 50}px, -${
            mousePosition.y / 50
          }px)`,
        }}
      ></Main>
      <Wrap>
        <MainLeft>
          <MainText>Книга, це книга, люби кого? Книгу.</MainText>
          <MainPar>
            Книга, книга книга книга, книжки? Книга! Книга книга, книга. Книга,
            книга книга книга, книжки? Книга!{' '}
          </MainPar>
          <StyledLink to='/ourGallery'>
            <MainButton>Галерея наших робіт</MainButton>
          </StyledLink>
        </MainLeft>
        <Shadow src={MShadow} alt="shadow"/>
       <MainShadow src={ShadowLight} alt="shadow" />
        <MainPic src={man} alt="Man" />
        <MainMobPic src={mobman} alt="Man" />
      
      </Wrap>
    </MainContainer>
  );
};

export default MainSection;
