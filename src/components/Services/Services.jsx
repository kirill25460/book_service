import {
  ServicesContainer,
  MainTitle,
  SubTitle,
  SubText,
  ServicesItemContainer,
  ServicesItem,
  ServicesItemImg,
  ServicesItemMainText,
  ServicesItemSubText,
  MoreContainer,
  MoreText,
  Arrow
} from './Services.styled';

import book1 from '../../images/book1.png'
import book2 from '../../images/book2.png'
import book3 from '../../images/book3.png'
import book4 from '../../images/book4.png'
import book5 from '../../images/book5.png'
import book6 from '../../images/book6.png'

const Services = () => {
  const services = [
    {
      icon: book1,
      mainText: 'Варіативні палітурки',
      subText:
        'Друк шикарний, реально хороший, я думаю ніхто з вас не бачив реально м’яких або твердих палітурок.',
    },
    {
      icon: book2,
      mainText: 'Друк малим накладом',
      subText:
        'Друк шикарний, реально хороший, я думаю ніхто з вас не бачив реально м’яких або твердих палітурок.',
    },
    {
      icon: book3,
      mainText: 'Мистецькі видання',
      subText:
        'Друк шикарний, реально хороший, я думаю ніхто з вас не бачив реально м’яких або твердих палітурок.',
    },
    {
      icon: book4,
      mainText: 'Стародруки і раритет',
      subText:
        'Друк шикарний, реально хороший, я думаю ніхто з вас не бачив реально м’яких або твердих палітурок.',
    },
    {
      icon: book5,
      mainText: 'Арт-записники',
      subText:
        'Друк шикарний, реально хороший, я думаю ніхто з вас не бачив реально м’яких або твердих палітурок.',
    },
    {
      icon: book6,
      mainText: 'Ділові щоденники',
      subText:
        'Друк шикарний, реально хороший, я думаю ніхто з вас не бачив реально м’яких або твердих палітурок.',
    },
  ];

  return (
    <ServicesContainer>
      <MainTitle>Види послуг та продукції</MainTitle>
      <SubText>
        <SubTitle>
          Від цифрового друку до ручної підшивки корінця, цінуємо
        </SubTitle>
        <SubTitle>актуальність та не забуваємо про хардкор вінтаж</SubTitle>
      </SubText>
      <ServicesItemContainer>
        {services.map(({ icon, mainText, subText }) => {
          return (
            <ServicesItem key={icon}>
              <ServicesItemImg src={icon} alt={mainText}/>
              <ServicesItemMainText>{mainText}</ServicesItemMainText>
              <ServicesItemSubText>{subText}</ServicesItemSubText>
              <MoreContainer>
                <MoreText>Дізнатись більше</MoreText>
                <Arrow />
              </MoreContainer>
            </ServicesItem>
          );
        })}
      </ServicesItemContainer>
    </ServicesContainer>
  );
};

export default Services;
