import {
  ContactContainer,
  Left,
  Right,
  FormContainer,
  FormSmallText,
  FormSmallInput,
  FormSmallContainer
} from './Contact.stylde';

const Contact = () => {
  return (
    <ContactContainer>
      <Left>
        <FormContainer>
          <FormSmallContainer>
            <FormSmallText>Ім’я</FormSmallText>
            <FormSmallInput></FormSmallInput>
          </FormSmallContainer>
          <FormSmallContainer>
            <FormSmallText>Email</FormSmallText>
            <FormSmallInput></FormSmallInput>
          </FormSmallContainer>
          <FormSmallContainer>
            <FormSmallText>Номер телефону</FormSmallText>
            <FormSmallInput></FormSmallInput>
          </FormSmallContainer>
          <FormSmallContainer>
            <FormSmallText>Компанія (необов’язково)</FormSmallText>
            <FormSmallInput></FormSmallInput>
          </FormSmallContainer>
        </FormContainer>
      </Left>
      <Right></Right>
    </ContactContainer>
  );
};

export default Contact;
