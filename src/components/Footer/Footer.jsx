import {
  FooterContainer,
  FooterText,
  FooterUnderline,
  FooterUnderlineSmall,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Copyright © 2023 “Книжкова майстерня”</FooterText>
      <FooterText>
        <FooterUnderlineSmall>Всі права захищені</FooterUnderlineSmall> |{' '}
        <FooterUnderline>Умови та правила</FooterUnderline> |{' '}
        <FooterUnderline>Політика приватності</FooterUnderline>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
