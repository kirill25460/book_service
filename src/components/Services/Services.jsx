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
  Arrow,
  StyledLink,
} from './Services.styled';

import book1 from '../../images/book1.png';
import book2 from '../../images/book2.png';
import book3 from '../../images/book3.png';
import book5 from '../../images/book5.png';
import book6 from '../../images/book6.png';

const Services = () => {
  const services = [
    {
      icon: book1,
      mainText: 'Варіативні палітурки',
      subText:
        'Створюємо унікальні палітурки для книг, журналів і блокнотів. Від класичних до ексклюзивних дизайнерських рішень – обирайте матеріали, кольори та оздоблення, що відповідають вашому стилю.',
      link: '/service/1'
    },
    {
      icon: book2,
      mainText: 'Друк малим накладом',
      subText:
        'Якісний друк навіть для невеликих тиражів. Ідеальний вибір для авторських видань, бізнес-продукції, ексклюзивних каталогів чи подарункових книг.',
    link: '/service/2'
      },
    {
      icon: book3,
      mainText: 'Мистецькі видання',
      subText:
        'Друкуємо мистецькі книги, фотоальбоми та ілюстровані видання, зберігаючи якість кожної деталі. Високий рівень друку та палітурки підкреслить унікальність вашого твору.',
    link: '/service/3'
      },
    {
      icon: book5,
      mainText: 'Арт-записники',
      subText:
        'Стильні та функціональні записники для творчих людей. Дизайнерські обкладинки, якісні матеріали та можливість персоналізації зроблять ваш записник справжнім витвором мистецтва.',
    link: '/service/4'
      },
    {
      icon: book6,
      mainText: 'Ділові щоденники',
      subText:
        'Елегантні та практичні щоденники для планування і роботи. Обирайте індивідуальний дизайн, брендовану палітурку та якісний папір для максимального комфорту.',
    link: '/service/5'
      },
  ];

  return (
    <ServicesContainer id="products">
      <MainTitle>Види послуг та продукції</MainTitle>
      <SubText>
        <SubTitle>
          Від цифрового друку до ручної підшивки корінця, цінуємо
        </SubTitle>
        <SubTitle>актуальність та не забуваємо про хардкор вінтаж</SubTitle>
      </SubText>
      <ServicesItemContainer>
        {services.map(({ icon, mainText, subText, link }) => {
          return (
            <ServicesItem key={icon}>
              <div>
                <ServicesItemImg src={icon} alt={mainText} />
                <ServicesItemMainText>{mainText}</ServicesItemMainText>
                <ServicesItemSubText>{subText}</ServicesItemSubText>
              </div>
              <StyledLink to={link}>
                <MoreContainer>
                  <MoreText>Дізнатись більше</MoreText>
                  <Arrow />
                </MoreContainer>
              </StyledLink>
            </ServicesItem>
          );
        })}
      </ServicesItemContainer>
    </ServicesContainer>
  );
};

export default Services;
