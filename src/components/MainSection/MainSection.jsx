import { MainContainer,  MainText, MainPic } from './MainSection.styled';
import man from 'images/wizard.png';


const MainSection = () => {
  return (
    <MainContainer>

      <MainText>Книга, це книга, люби кого? Книгу.</MainText>
    
    <MainPic src={man} alt="Man"/>
    </MainContainer>
  );
};

export default MainSection;
