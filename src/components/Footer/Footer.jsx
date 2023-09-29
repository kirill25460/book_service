import { FooterContainer, FooterText, FooterUnderline } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Copyright © 2023 “Книжкова майстерня”</FooterText>
      <FooterText>
        Всі права захищені | <FooterUnderline>Умови та правила</FooterUnderline>{' '}
        | <FooterUnderline>Політика приватності</FooterUnderline>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
