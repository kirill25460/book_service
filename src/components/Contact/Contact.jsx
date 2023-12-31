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
  MainShadow,
  Mail,
  Tel,
  Geo,
  MagicPic,
  MagicSmallPic,
  MailLink,
} from './Contact.styled';

import Magic from '../../images/ContactMagic.png';
import SmallMagic from '../../images/ContactSmallMagic.png';
import ShadowLight from 'images/shadowpic.png';

const Contact = () => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const tel = form.elements.tel.value;
    const company = form.elements.company.value;
    const comments = form.elements.comments.value;
    console.log(name, email, tel, company, comments);
    form.reset();
  };
  const storedData = sessionStorage.getItem('calcData');
  const data = JSON.parse(storedData);

  return (
    <ContactContainer id="contacts">
      <Left>
        <FormContainer onSubmit={handleSubmit}>
          <FormSmallContainer>
            <FormText>Ім’я</FormText>
            <FormSmallInput
              type="text"
              name="name"
              id="name"
              placeholder="Василь Митенко..."
            />
          </FormSmallContainer>
          <FormSmallContainer>
            <FormText>Email</FormText>
            <FormSmallInput
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
            />
          </FormSmallContainer>
          <FormSmallContainer>
            <FormText>Номер телефону</FormText>
            <FormSmallInput
              type="tel"
              name="number"
              id="tel"
              pattern="380-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
              placeholder="380-67-345-67-89"
            />
          </FormSmallContainer>
          <FormSmallContainer>
            <FormText>Компанія (необов’язково)</FormText>
            <FormSmallInput
              type="text"
              name="company"
              id="company"
              placeholder="Facebook"
            />
          </FormSmallContainer>
          <FormBigContainer>
            <FormText>Коментар</FormText>
            <FormBigInput
              type="text"
              name="comments"
              id="comments"
              placeholder="Просимо вас описати ваш коментар сюди..."
            >
              {data === null
                ? ''
                : `Формат : ${data.format}\nПалітурка чи обкладинка : ${data.palit}\nПапір для внутрішнього блоку: ${data.paper}\nНаклад: ${data.naklad}\nКількість сторінок: ${data.amount}\nЦіна за штуку: ${data.pricePerOne}\nСума: ${data.allPrice}`}
            </FormBigInput>
          </FormBigContainer>
          <FormButton type="submit">
            Надіслати <Arrow />
          </FormButton>
        </FormContainer>
      </Left>
      <Right>
        <RightSmallText>Зв'язок з нами</RightSmallText>
        <RightMainTitle>Завжди раді вас чути!</RightMainTitle>
        <RightSubTitle>
          Залиште свою заявку у формі зворотнього зв&rsquo;язку і ми
          зв&rsquo;яжемось з вами з першої ж нагоди!
        </RightSubTitle>
        <RightContactLink href="mailto:maysternyaknyg@gmail.com">
          <MailLink>
            <Mail />
            maysternyaknyg@gmail.com
          </MailLink>
        </RightContactLink>
        <RightContactLink href="tel:+380986940143">
          <Tel />
          +380 986940143
        </RightContactLink>
        <RightContactLink href="https://maps.google.com/?q=м. Львів, вулиця Зелена 143 А">
          <Geo />
          м. Львів, вулиця Зелена 143 А
        </RightContactLink>
        <MainShadow src={ShadowLight} alt="shadow" />
        <MagicPic src={Magic} alt="Magic" />
        <MagicSmallPic src={SmallMagic} alt="Magic" />
      </Right>
    </ContactContainer>
  );
};

export default Contact;
