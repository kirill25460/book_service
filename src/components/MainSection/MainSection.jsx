import React, { useState } from 'react';
import {
  MainContainer,
  MainText,
  MainLeft,
  MainButton,
  MainPic,
  MainMobPic,
  Main,
  MainPar,
  Wrap,
} from './MainSection.styled';
import man from 'images/wizard.png';
import mobman from 'images/mob-wizard.png';
import trydetail from 'images/group-gear.png';

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
        <MainButton>Галерея наших робіт</MainButton>
      </MainLeft>
     
      <MainPic src={man} alt="Man" />
      <MainMobPic src={mobman} alt="Man" />
    
      </Wrap>
     
    
    </MainContainer>
  );
};

export default MainSection;
