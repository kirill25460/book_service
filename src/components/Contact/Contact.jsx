import {
  ContactContainer,
  Left,
  Right,
  FormContainer,
  FormText,
  FormSmallInput,
  FormSmallContainer,
  FormBigContainer,
  FormBigInput,
  FormButton,
  Arrow,
  RightSmallText,
  RightMainTitle,
  RightSubTitle,
  RightContactLink,
  Mail,
  Tel,
  Geo,
  MagicPic,
  MagicSmallPic
} from './Contact.stylde';

import Magic from '../../images/ContactMagic.png'
import SmallMagic from '../../images/ContactSmallMagic.png'

const Contact = () => {
  return (
    <ContactContainer id='contacts'>
      <Left>
        <FormContainer>
          <FormSmallContainer>
            <FormText>Ім’я</FormText>
            <FormSmallInput placeholder="Василь Митенко..." />
          </FormSmallContainer>
          <FormSmallContainer>
            <FormText>Email</FormText>
            <FormSmallInput placeholder="example@email.com" />
          </FormSmallContainer>
          <FormSmallContainer>
            <FormText>Номер телефону</FormText>
            <FormSmallInput placeholder="+380 123 4 56 789" />
          </FormSmallContainer>
          <FormSmallContainer>
            <FormText>Компанія (необов’язково)</FormText>
            <FormSmallInput placeholder="Facebook" />
          </FormSmallContainer>
          <FormBigContainer>
            <FormText>Коментар</FormText>
            <FormBigInput placeholder="Просимо вас описати ваш коментар сюди..." />
          </FormBigContainer>
          <FormButton>
            Надіслати <Arrow />
          </FormButton>
        </FormContainer>
      </Left>
      <Right>
        <RightSmallText>Зв’язок з нами</RightSmallText>
        <RightMainTitle>Завжди раді вас чути!</RightMainTitle>
        <RightSubTitle>Залиште свою заявку у формі зворотнього зв’язку і ми зв’яжемось з вами з першої ж нагоди!</RightSubTitle>
        <RightContactLink><Mail/>maysternyaknyg@gmail.com</RightContactLink>
        <RightContactLink><Tel/>+380 986940143</RightContactLink>
        <RightContactLink><Geo/>м. Львів, вулиця Зелена 143 А</RightContactLink>
        <MagicPic src={Magic} alt='Magic' />
        <MagicSmallPic src={SmallMagic} alt='Magic' />
      </Right>
    </ContactContainer>
  );
};

export default Contact;
